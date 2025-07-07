import fs from 'fs/promises';
import path from 'path';
import { pathToFileURL } from 'url';

// List of country slugs to exclude
const exclude = ['taiwan', 'india', 'angola'];

// Directory containing country files
const countriesDir = path.join(process.cwd(), 'lib', 'countries');

async function main() {
  const files = await fs.readdir(countriesDir);
  const result: Record<string, any[]> = {};

  for (const file of files) {
    if (!file.endsWith('.ts') && !file.endsWith('.js')) continue;
    const slug = file.replace(/\.(ts|js)$/, '');
    if (exclude.includes(slug)) continue;

    // Dynamic import using file URL
    const fileUrl = pathToFileURL(path.join(countriesDir, file)).href;
    const countryModule = await import(fileUrl);
    const country = countryModule.default;
    if (country && Array.isArray(country.visaTypes)) {
      result[slug] = country.visaTypes;
    }
  }

  // Write to JSON file
  const outPath = path.join(process.cwd(), 'visaTypes.json');
  await fs.writeFile(outPath, JSON.stringify(result, null, 2), 'utf-8');
  console.log('Visa types exported to visaTypes.json');
}

main().catch(console.error);