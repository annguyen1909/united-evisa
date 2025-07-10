import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "changeme-secret";

export async function POST(request: NextRequest) {
  try {
    const { email, newPassword, jwtToken } = await request.json();
    if (!email || !newPassword || !jwtToken) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    // Verify JWT
    let decoded: any;
    try {
      decoded = jwt.verify(jwtToken, JWT_SECRET);
      if (decoded.email !== email || decoded.type !== "reset-password") {
        return NextResponse.json({ error: "Invalid token" }, { status: 400 });
      }
    } catch (err) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
    }
    // Find the account by email
    const account = await prisma.account.findFirst({ where: { email } });
    if (!account) {
      return NextResponse.json({ error: "Account not found" }, { status: 404 });
    }
    // Find the latest reset token for this account (regardless of used/unused)
    const latestToken = await prisma.password_reset_tokens.findFirst({
      where: { accountId: account.id },
      orderBy: { createdAt: 'desc' },
    });
    if (!latestToken) {
      return NextResponse.json({ error: "No OTP found for this account. Please request a new one." }, { status: 400 });
    }
    // Only allow if the provided token matches the latest, is unused, and unexpired
    if (
      latestToken.token !== jwtToken ||
      latestToken.used ||
      latestToken.expiresAt <= new Date()
    ) {
      return NextResponse.json({ error: "Only the newest OTP is valid and can only be used once. Please use the latest code sent to your email." }, { status: 400 });
    }
    // Update password
    const passwordHash = await bcrypt.hash(newPassword, 10);
    await prisma.account.update({
      where: { id: latestToken.accountId },
      data: { password: passwordHash },
    });
    // Mark only the latest token as used
    await prisma.password_reset_tokens.update({
      where: { id: latestToken.id },
      data: { used: true },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to reset password" }, { status: 500 });
  }
}
