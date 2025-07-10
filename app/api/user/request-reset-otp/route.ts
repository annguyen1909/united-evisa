import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import bcrypt from "bcryptjs"

const JWT_SECRET = process.env.JWT_SECRET || "changeme-secret";
const OTP_EXPIRES_MINUTES = 10;

async function sendOtpEmail(email: string, otp: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'no-reply@evisa.com',
    to: email,
    subject: "United eVisa - Your Password Reset OTP",
    text: `Your OTP code is: ${otp}. It will expire in ${OTP_EXPIRES_MINUTES} minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #222; max-width: 480px; margin: 0 auto;">
        <div style="text-align:center; margin-bottom: 24px;">
          <img src="http://localhost:3000/images/logo.png" alt="United eVisa Logo" width="64" height="64" style="margin-bottom: 8px;" />
          <h2 style="color: #059669; margin: 0;">United eVisa</h2>
        </div>
        <p>Hello,</p>
        <p>Your OTP code for password reset is:</p>
        <div style="font-size: 2rem; font-weight: bold; color: #059669; margin: 16px 0; letter-spacing: 2px;">${otp}</div>
        <p>This code will expire in <b>${OTP_EXPIRES_MINUTES} minutes</b>.</p>
        <p>If you did not request this, please ignore this email.</p>
        <br>
        <p style="font-size: 0.9em; color: #888;">United eVisa Support</p>
      </div>
    `
  });
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 })
    }
    const user = await prisma.account.findFirst({
      where: { email, websiteCreatedAt: "United Evisa" },
      select: { id: true, password: true }
    })
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }
    // Invalidate all previous unused tokens for this account
    await prisma.password_reset_tokens.updateMany({
      where: {
        accountId: user.id,
        used: false,
        expiresAt: { gt: new Date() },
      },
      data: { used: true },
    });
    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpHash = await bcrypt.hash(otp, 10);
    // Generate JWT
    const jwtToken = jwt.sign(
      { email, type: "reset-password", exp: Math.floor(Date.now() / 1000) + OTP_EXPIRES_MINUTES * 60 },
      JWT_SECRET
    );
    // Store in password_reset_tokens
    const expiresAt = new Date(Date.now() + OTP_EXPIRES_MINUTES * 60 * 1000);
    await prisma.password_reset_tokens.create({
      data: {
        id: crypto.randomUUID(),
        accountId: user.id,
        token: jwtToken,
        expiresAt,
        used: false,
        // Store OTP hash in a custom field if you add it, or in the token field (not recommended for prod)
      }
    });
    // Send OTP to email
    await sendOtpEmail(email, otp);
    return NextResponse.json({ jwtToken });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to process password reset" }, { status: 500 })
  }
}