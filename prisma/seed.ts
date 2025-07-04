import { PrismaClient } from '../lib/generated/prisma/client.js';
import { COUNTRIES } from '../lib/countries';

const prisma = new PrismaClient();

async function main() {
  const destinationsToAdd = COUNTRIES.filter(
    (c: { name: string; }) => c.name.toLowerCase() !== "angola"
  );
  for (const country of destinationsToAdd) {
    const exists = await prisma.destination.findUnique({ where: { name: country.name } });
    if (exists) continue;
    await prisma.destination.create({
      data: {
        id: country.slug,
        name: country.name,
        code: country.code ?? null,
      },
    });
  }
  console.log("Done!");
}
main().finally(() => prisma.$disconnect());