import { NextResponse } from "next/server";
import { pool } from "@/lib/db"; 
const nodemailer = require("nodemailer");

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

async function createSubscriptionTable() {
  if (tableCreated) return;
  const conn = await pool.getConnection();
  try {
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS subscriptions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(191) NOT NULL,
        phone VARCHAR(20),
        address VARCHAR(255),
        message TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    tableCreated = true;
  } finally {
    conn.release();
  }
}

export async function POST(req: Request) {
  await createSubscriptionTable();

  try {
    const body = await req.json();
    const { name, email, phone, address, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and Email are required" },
        { status: 400 }
      );
    }

    // Save to DB
    const conn = await pool.getConnection();
    try {
      await conn.execute(
        `INSERT INTO subscriptions (name, email, phone, address, message) VALUES (?, ?, ?, ?, ?)`,
        [name, email, phone || null, address || null, message || null]
      );
    } finally {
      conn.release();
    }

    // Send notification email
    try {
      await transporter.sendMail({
        from: "support@kisan.net.np",
        to: "support@kisan.net.np",
        subject: `New Subscription from ${name}`,
        html: `
          <h2>Subscription Details</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Address:</strong> ${address || "N/A"}</p>
          <p><strong>Message:</strong> ${message || "N/A"}</p>
        `,
      });
    } catch (mailErr) {
      console.error("Email sending failed:", mailErr);
    }

    return NextResponse.json({ success: true, message: "Subscription successful" }, { status: 201 });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
