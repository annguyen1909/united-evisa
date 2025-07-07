import { prisma } from "@/lib/db"
import bcrypt from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { userId, newPassword } = await request.json()
    if (!userId || !newPassword) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10)
    await prisma.account.update({
      where: { id: userId },
      data: { password: hashedPassword, updatedAt: new Date() }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to set password" }, { status: 500 })
  }
}