import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET() {
  try {
    const users = await prisma.user.findMany() // or account if no user table
    return NextResponse.json({ users })
  } catch (error) {
    console.error("Error in test:", error)
    return NextResponse.json({ error: "Test failed" }, { status: 500 })
  }
}
