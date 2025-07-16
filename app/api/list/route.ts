import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/db";

export async function GET() {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  const account = await prisma.account.findUnique({
    where: { email_websiteCreatedAt: { email: session.user.email, websiteCreatedAt: "United eVisa Site" } },
    select: { id: true },
  });
  
  if (!account) {
    return NextResponse.json({ applications: [] });
  }
  
  const applications = await prisma.application.findMany({
    where: { accountId: account.id },
    include: {
      visaType: true,  // Add this to include the VisaType relation  // Also include Passengers as defined in your interface
    },
    orderBy: { createdAt: "desc" },
  });
  
  return NextResponse.json({ applications });
}