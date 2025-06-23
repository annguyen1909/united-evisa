// app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 })
    }

    const user = await prisma.account.findFirst({
      where: {
        email,
        websiteCreatedAt: "United Evisa", // or your site name
      },
    })

    if (!user || !user.password) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 })
    }

    return NextResponse.json({ message: "Login successful", user: { id: user.id, fullName: user.fullName } })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
