import fs from 'fs/promises';
import path from 'path';
import { pathToFileURL } from 'url';

// Directory containing country files
const countriesDir = path.join(process.cwd(), 'lib', 'countries', 'india.ts');

async function main() {
  const result: Record<string, any[]> = {};

  // Only process india.ts file
  const file = 'india.ts';
  const slug = file.replace(/\.(ts|js)$/, '');

  // Dynamic import using file URL
  const fileUrl = pathToFileURL(path.join(countriesDir, file)).href;
  const countryModule = await import(fileUrl);
  const country = countryModule.default;
  
  if (country && Array.isArray(country.visaTypes)) {
    // Only export ayush evisa and group-1 variant for testing
    result[slug] = country.visaTypes.filter((vt: any) =>
      vt.id === 'india-ayush-evisa' || vt.id === 'india-ayush-evisa-group-1'
    );
  }

  // Write to JSON file
  const outPath = path.join(process.cwd(), 'visaTypes-india.json');
  await fs.writeFile(outPath, JSON.stringify(result, null, 2), 'utf-8');
  console.log('India visa types exported to visaTypes-india.json');
}

main().catch(console.error);
