import { PrismaClient } from "@prisma/client";
import data from "./india-student.json";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const groupName = `${item.name} - Group ${i + 1}`;
    const existing = await prisma.visaType.findFirst({
      where: {
        name: groupName,
        destinationId: item.destinationId,
      },
    });
    if (existing) {
      await prisma.visaType.update({
        where: { id: existing.id },
        data: {
          id: item.id,
          name: groupName,
          waitTime: item.processingTime,
          fees: item.govFee,
          allowedNationalities: item.allowedNationalities,
          destinationId: item.destinationId,
        },
      });
      console.log(`Updated VisaType: ${existing.id}`);
    } else {
      await prisma.visaType.create({
        data: {
          id: item.id,
          name: groupName,
          waitTime: item.processingTime,
          fees: item.govFee,
          allowedNationalities: item.allowedNationalities,
          destinationId: item.destinationId,
        },
      });
      console.log(`Created VisaType: ${item.id}`);
    }
  }
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
