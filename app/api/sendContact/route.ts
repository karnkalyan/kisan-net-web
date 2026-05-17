import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";
const nodemailer = require("nodemailer");

// Nodemailer 
const transporter = nodemailer.createTransport({
  host: "mail.kisan.net.np",
  port: 465,
  secure: true,
  auth: {
    user: "support@kisan.net.np",
    pass: "@@support@@",
  },
});

let tableCreated = false;

// Create table 
async function createContactTable() {
  if (tableCreated) return;
  const conn = await pool.getConnection();
  try {
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(191) NOT NULL,
        phone VARCHAR(50),
        district VARCHAR(100),
        inquiryType VARCHAR(50),
        message TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    tableCreated = true;
  } finally {
    conn.release();
  }
}

export async function POST(req: NextRequest) {
  await createContactTable();

  try {
    const data = await req.json();
    const { name, email, phone, district, inquiryType, message } = data;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, Email, and Message are required" },
        { status: 400 }
      );
    }

    // Save to database
    const conn = await pool.getConnection();
    try {
      await conn.execute(
        `INSERT INTO contacts (name, email, phone, district, inquiryType, message)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [name, email, phone || null, district || null, inquiryType || "general", message]
      );
    } finally {
      conn.release();
    }

    // Send notification email
    try {
      await transporter.sendMail({
        from: "support@kisan.net.np",
        to: "support@kisan.net.np",
        subject: `Contact Form Submission from ${name}`,
        html: `
          <h2>Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>District:</strong> ${district || "Not provided"}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryType || "general"}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
    } catch (mailErr) {
      console.error("Email sending failed:", mailErr);
    }

    return NextResponse.json({ success: true, message: "Contact form submitted successfully" }, { status: 201 });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
