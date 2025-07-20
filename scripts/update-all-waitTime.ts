// scripts/update-all-waitTime.ts
import { prisma } from '../lib/db';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const countriesDir = path.join(__dirname, '../lib/countries');

async function main() {
  const files = fs.readdirSync(countriesDir)
    .filter(f => f.endsWith('.ts') && f !== 'vietnam.ts' && f !== 'taiwan.ts' && f !== 'type.ts' && f !== 'index.ts');

  for (const file of files) {
    const countryModule = await import(path.join(countriesDir, file));
    const country = countryModule.default;
    if (!country || !country.visaTypes || !country.processingTime) continue;
    const { normal, superUrgent } = country.processingTime;
    if (!normal || !superUrgent) continue;
    const waitTime = `From ${normal} to ${superUrgent}`;
    for (const visaType of country.visaTypes) {
      await prisma.visaType.updateMany({
        where: { id: visaType.id },
        data: { waitTime }
      });
      console.log(`Updated waitTime for ${visaType.id} (${country.name}): ${waitTime}`);
    }
  }
  console.log('All countries (except Vietnam and Taiwan) updated.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
