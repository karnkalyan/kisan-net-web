// app/api/businessForm/route.ts
import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";
const nodemailer = require("nodemailer");

// Nodemailer transporter 
const transporter = nodemailer.createTransport({
  host: 'mail.kisan.net.np',
  port: 465,
  secure: true,
  auth: {
    user: "support@kisan.net.np",
    pass: "@@support@@",
  },
});


let tableCreated = false;
async function ensureBusinessTable() {
  if (tableCreated) return;

  const conn = await pool.getConnection();
  try {
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS business_inquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        businessName VARCHAR(255) NOT NULL,
        contactName VARCHAR(255) NOT NULL,
        email VARCHAR(191) NOT NULL,
        phone VARCHAR(20),
        businessType VARCHAR(100),
        employees VARCHAR(50),
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
  await ensureBusinessTable();

  try {
    const data = await req.json();
    const { businessName, contactName, email, phone, businessType, employees, message } = data;

    // Validate required fields
    if (!businessName || !contactName || !email) {
      return NextResponse.json(
        { message: 'Business Name, Contact Name, and Email are required' },
        { status: 400 }
      );
    }

    // Store inquiry in DB
    const conn = await pool.getConnection();
    try {
      await conn.execute(
        `INSERT INTO business_inquiries (businessName, contactName, email, phone, businessType, employees, message)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [businessName, contactName, email, phone, businessType, employees, message]
      );
    } finally {
      conn.release();
    }

    // Send email 
    try {
      await transporter.sendMail({
        from: "support@kisan.net.np",
        to: "support@kisan.net.np",
        subject: `New Business Inquiry from ${contactName}`,
        html: `
          <h2>New Business Inquiry Details</h2>
          <p><strong>Business Name:</strong> ${businessName}</p>
          <p><strong>Contact Name:</strong> ${contactName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Business Type:</strong> ${businessType || "Not provided"}</p>
          <p><strong>Employees:</strong> ${employees || "Not provided"}</p>
          <p><strong>Message:</strong> ${message || "No message"}</p>
        `,
      });
    } catch (mailErr) {
      console.error("Email sending failed:", mailErr);
      
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully' },
      { status: 201 }
    );
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
