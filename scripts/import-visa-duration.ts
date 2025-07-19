import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const prisma = new PrismaClient();
const countriesDir = path.join(__dirname, '../lib/countries');
const exclude = ['taiwand.ts', 'india.ts'];

async function main() {
  const files = fs.readdirSync(countriesDir).filter(
    f => f.endsWith('.ts') && !exclude.includes(f)
  );

  for (const file of files) {
    const countryModule = await import(path.join(countriesDir, file));
    const visaTypes = countryModule.default?.visaTypes || countryModule.visaTypes || [];

    for (const visa of visaTypes) {
      if (visa.id && visa.visaDuration !== undefined) {
        const existing = await prisma.visaType.findUnique({ where: { id: visa.id } });
        if (existing) {
          await prisma.visaType.update({
            where: { id: visa.id },
            data: { visaDuration: visa.visaDuration }
          });
          console.log(`Updated ${visa.id} with visaDuration ${visa.visaDuration}`);
        } else {
          console.log(`VisaType with id ${visa.id} not found, skipping.`);
        }
      }
    }
  }
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());