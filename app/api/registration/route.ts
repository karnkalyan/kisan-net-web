import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";
import * as bcrypt from "bcrypt";
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

async function registerTable() {
  if (tableCreated) return;

  const conn = await pool.getConnection();
  try {
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS registrations(
        id INT AUTO_INCREMENT PRIMARY KEY,
        fullName VARCHAR(255) NOT NULL,
        email VARCHAR(191) NOT NULL,
        phone VARCHAR(20),
        gender VARCHAR(20),
        address VARCHAR(255),
        district VARCHAR(100),
        ward VARCHAR(20),
        tole VARCHAR(100),
        houseNumber VARCHAR(50),
        language VARCHAR(20),
        password VARCHAR(255) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    tableCreated = true;
  } finally {
    conn.release();
  }
}

export async function POST(req: NextRequest) {
  await registerTable();

  try {
    const data = await req.json();
    const {
      fullName,
      email,
      phone,
      gender,
      address,
      district,
      ward,
      tole,
      houseNumber,
      language,
      password,
    } = data;

    // Basic validation
    if (!fullName || !email || !password) {
      return NextResponse.json(
        { message: "Full Name, Email, and Password are required" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save to database
    const conn = await pool.getConnection();
    try {
      await conn.execute(
        `INSERT INTO registrations 
        (fullName, email, phone, gender, address, district, ward, tole, houseNumber, language, password)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          fullName,
          email,
          phone,
          gender || null,
          address || null,
          district || null,
          ward || null,
          tole || null,
          houseNumber || null,
          language || "nepali",
          hashedPassword,
        ]
      );
    } finally {
      conn.release();
    }

    // Send notification email
    try {
      await transporter.sendMail({
        from: "support@kisan.net.np",
        to: "support@kisan.net.np",
        subject: `New User Registration - ${fullName}`,
        html: `
          <h2>New Registration</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Gender:</strong> ${gender || "Not provided"}</p>
          <p><strong>Address:</strong> ${address || "Not provided"}</p>
          <p><strong>District:</strong> ${district || "Not provided"}</p>
          <p><strong>Ward:</strong> ${ward || "Not provided"}</p>
          <p><strong>Tole:</strong> ${tole || "Not provided"}</p>
          <p><strong>House Number:</strong> ${houseNumber || "Not provided"}</p>
          <p><strong>Language:</strong> ${language || "nepali"}</p>
        `,
      });
    } catch (mailErr) {
      console.error("Email sending failed:", mailErr);
    }

    return NextResponse.json(
      { success: true, message: "Registration successful" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
