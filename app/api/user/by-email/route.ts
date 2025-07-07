import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

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
        return NextResponse.json({ userId: user.id, hasPassword: !!user.password })
    } catch (error) {
        return NextResponse.json({ error: "Failed to lookup user" }, { status: 500 })
    }
}