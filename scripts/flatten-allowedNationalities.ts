import fs from 'fs/promises';
import path from 'path';

async function main() {
  const filePath = path.join(process.cwd(), 'visaTypes.json');
  const data = await fs.readFile(filePath, 'utf-8');
  const visaTypes = JSON.parse(data);

  for (const country of Object.values(visaTypes)) {
    for (const visa of country as any[]) {
      if (Array.isArray(visa.allowedNationalities)) {
        visa.allowedNationalities = [ ...visa.allowedNationalities ];
      }
    }
  }

  // Write with no extra line breaks in allowedNationalities
  await fs.writeFile(
    filePath,
    JSON.stringify(visaTypes, null, 2)
      .replace(/\[\s+([A-Z0-9",\s]+?)\s+\]/g, (match) => match.replace(/\s+/g, ' ')),
    'utf-8'
  );
  console.log('allowedNationalities arrays flattened to one line.');
}

main().catch(console.error);