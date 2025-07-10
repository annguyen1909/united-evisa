import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function generateAppId(destinationCode: string) {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `${destinationCode.toUpperCase()}${random}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      destinationId,
      destinationCode,
      visaTypeId,
      passengerCount,
      stayingStart,
      stayingEnd,
      total,
      email, // get email from body
      fullName, // new
      areaCode, // new
      phoneNumber, // new
      gender, // new
    } = body;

    // You may need to provide the correct compound unique key fields here.
    // For example, if your unique key is email + websiteCreatedAt:
    // const account = await prisma.account.findUnique({
    //   where: { email_websiteCreatedAt: { email, websiteCreatedAt: someValue } },
    //   select: { id: true },
    // });

    // If you only have the email, consider using findFirst instead:
    let account = await prisma.account.findFirst({
      where: { email },
      select: { id: true },
    });

    if (!account) {
      account = await prisma.account.create({
        data: {
          id: crypto.randomUUID(), // generate a unique id
          email,
          fullName: fullName || "Unknown",
          areaCode: areaCode || "+1",
          phoneNumber: phoneNumber || "Unknown",
          gender: gender || "Unknown",
          websiteCreatedAt: "United Evisa", // or your default value
        },
        select: { id: true },
      });
    }

    if (
      !destinationId ||
      !destinationCode ||
      !visaTypeId ||
      !passengerCount ||
      !stayingStart ||
      !stayingEnd ||
      !total ||
      !account // must be found!
    ) {
      console.log("Missing required fields", {
        destinationId,
        destinationCode,
        visaTypeId,
        passengerCount,
        stayingStart,
        stayingEnd,
        total,
        email,
        account,
        body,
      });
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const applicationId = generateAppId(destinationCode);

    const app = await prisma.application.create({
      data: {
        status: "Not Finished",
        accountId: account.id, // use the id from DB
        createdAt: new Date(),
        updatedAt: new Date(),
        applicationId,
        passengerCount: Number(passengerCount),
        stayingStart: new Date(stayingStart),
        stayingEnd: new Date(stayingEnd),
        total: Number(Number(total).toFixed(2)),
        destinationId: destinationId,
        visaTypeId: visaTypeId,
      },
    });
    console.log("Creating application with visaTypeId:", visaTypeId);
    return NextResponse.json({ id: app.id, applicationId: app.applicationId }, { status: 201 });
  } catch (error) {
    console.error("API /api/apply error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}