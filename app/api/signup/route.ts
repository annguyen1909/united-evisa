import { NextRequest, NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { prisma } from "@/lib/db"

export async function POST(req: NextRequest) {
  try {
    const { email, password, fullName, areaCode, phoneNumber, gender } = await req.json()

    // Basic check
    if (!email || !password || !fullName || !phoneNumber || !gender) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const existingAccount = await prisma.account.findFirst({
      where: { email, websiteCreatedAt: "Worldmaxxing Site" },
    })

    if (existingAccount) {
      return NextResponse.json({ error: "Account already exists." }, { status: 400 })
    }

    const hashedPassword = await hash(password, 10)

    const account = await prisma.account.create({
      data: {
        id: crypto.randomUUID(),
        email,
        password: hashedPassword,
        fullName,
        areaCode,
        phoneNumber,
        gender,
        websiteCreatedAt: "Worldmaxxing Site",
      },
    })

    return NextResponse.json({ message: "Account created", account })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
