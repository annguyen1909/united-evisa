import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import jwt from "jsonwebtoken"
import { sendEmail } from "@/lib/email"
import bcrypt from "bcryptjs"

const JWT_SECRET = process.env.JWT_SECRET || "changeme-secret";
const OTP_EXPIRES_MINUTES = 10;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 })
    }
    const user = await prisma.account.findFirst({
      where: { email, websiteCreatedAt: "United eVisa Site" },
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
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Create JWT with OTP for security
    const jwtToken = jwt.sign(
      { email, otp, type: "reset-password", exp: Math.floor(Date.now() / 1000) + OTP_EXPIRES_MINUTES * 60 },
      JWT_SECRET
    );
    
    // Store OTP in password_reset_tokens
    const expiresAt = new Date(Date.now() + OTP_EXPIRES_MINUTES * 60 * 1000);
    await prisma.password_reset_tokens.create({
      data: {
        id: crypto.randomUUID(),
        accountId: user.id,
        token: otp,
        expiresAt,
        used: false,
      }
    });
    
    // Send OTP to email
    await sendEmail({
      to: email,
      template: 'reset-password',
      data: { token: otp }
    });
    return NextResponse.json({ success: true, jwtToken });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to process password reset" }, { status: 500 })
  }
}