import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

// ESM __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const countriesDir = path.join(__dirname, "../lib/countries");

const countryFiles = fs
  .readdirSync(countriesDir)
  .filter(
    (file: string) =>
      file.endsWith(".ts") &&
      file !== "index.ts" &&
      file !== "type.ts"
  );

(async () => {
  const result: { country: string; visaTypeIds: string[]; code:string }[]  = [];

  for (const file of countryFiles) {
    try {
      const modulePath = path.join(countriesDir, file);
      const countryModule = await import(pathToFileURL(modulePath).href);
      const country = countryModule.default || countryModule;
      if (country && Array.isArray(country.visaTypes)) {
        const visaTypeIds = country.visaTypes
          .map((v: any) => v.id)
          .filter(Boolean);
        result.push({
          country: country.name || file.replace(".ts", ""),
          code: country.code || file.replace(".ts", ""),
          visaTypeIds,
        });
      }
    } catch (err) {
      console.error(`Error importing ${file}:`, err);
    }
  }

  // Write result to a JSON file
  const outputPath = path.join(__dirname, "visaTypeIdsByCountry.json");
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), "utf-8");
  console.log(`Result written to ${outputPath}`);
})();