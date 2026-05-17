// app/api/sendReferrals/route.ts
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

// Function to create referrals table if not exists
async function createReferralsTable() {
  if (tableCreated) return;

  const conn = await pool.getConnection();
  try {
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS referrals(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(191) NOT NULL,
        phone VARCHAR(20),
        friendName VARCHAR(255) NOT NULL,
        friendEmail VARCHAR(191) NOT NULL,
        friendPhone VARCHAR(20),
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
  await createReferralsTable();

  try {
    const body = await req.json();
    const { name, email, phone, friendName, friendEmail, friendPhone, message } = body;

    // Basic validation
    if (!name || !email || !friendName || !friendEmail) {
      return NextResponse.json(
        { success: false, error: "Your Name, Email and Friend's Name & Email are required" },
        { status: 400 }
      );
    }

    // Save referral to database
    const conn = await pool.getConnection();
    try {
      await conn.execute(
        `INSERT INTO referrals (name, email, phone, friendName, friendEmail, friendPhone, message)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [name, email, phone || null, friendName, friendEmail, friendPhone || null, message || null]
      );
    } finally {
      conn.release();
    }

    // Send notification email
    try {
      await transporter.sendMail({
        from: "support@kisan.net.np",
        to: "support@kisan.net.np",
        subject: `Referral from ${name}`,
        html: `
          <h2>Referral Details</h2>
          <p><strong>Your Name:</strong> ${name}</p>
          <p><strong>Your Email:</strong> ${email}</p>
          <p><strong>Your Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Friend's Name:</strong> ${friendName}</p>
          <p><strong>Friend's Email:</strong> ${friendEmail}</p>
          <p><strong>Friend's Phone:</strong> ${friendPhone || "Not provided"}</p>
          <p><strong>Message:</strong> ${message || "No message"}</p>
        `,
      });
    } catch (mailErr) {
      console.error("Email sending failed:", mailErr);
    }

    return NextResponse.json({ success: true, message: "Referral submitted successfully" }, { status: 201 });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
