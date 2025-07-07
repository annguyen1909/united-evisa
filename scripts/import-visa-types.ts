import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  const visaTypesPath = path.join(process.cwd(), 'visaTypes.json');
  const visaTypesData = JSON.parse(await fs.readFile(visaTypesPath, 'utf-8'));

  for (const [countrySlug, visaTypes] of Object.entries(visaTypesData)) {
    // Find the destination by id (slug)
    const destination = await prisma.destination.findUnique({
      where: { id: countrySlug },
    });

    if (!destination) {
      console.warn(`Destination not found for slug: ${countrySlug}, skipping...`);
      continue;
    }

    for (const visa of visaTypes as any[]) {
      await prisma.visaType.upsert({
        where: { id: visa.id },
        update: {
          name: visa.name,
          fees: visa.govFee ?? null,
          allowedNationalities: visa.allowedNationalities ?? null,
          destinationId: destination.id,
        },
        create: {
          id: visa.id,
          name: visa.name,
          fees: visa.govFee ?? null,
          allowedNationalities: visa.allowedNationalities ?? null,
          destinationId: destination.id,
        },
      });
      console.log(`Upserted visaType: ${visa.id} for destination: ${countrySlug}`);
    }
  }
}

main()
  .then(() => {
    console.log('Visa types import complete!');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });