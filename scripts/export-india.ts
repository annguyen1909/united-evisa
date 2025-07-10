import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import india from "../lib/countries/india";

// ESM __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Number of groups (update if more groups are added in indiaVisaFeeTable)
const GROUP_COUNT = 9;

(async () => {
  const result: { [key: string]: any[] } = {};
  try {
    if (india && Array.isArray(india.visaTypes)) {
      const allVisaTypes: any[] = [];
      for (const vt of india.visaTypes) {
        // Add the base visa type
        allVisaTypes.push(vt);
        // Add group variants
        for (let i = 1; i <= GROUP_COUNT; i++) {
          allVisaTypes.push({
            ...vt,
            id: `${vt.id}-group-${i}`,
            group: i
          });
        }
      }
      result["india"] = allVisaTypes;
    }
  } catch (err) {
    console.error(`Error processing india visa types:`, err);
  }

  // Write result to a JSON file
  const outputPath = join(__dirname, "visaTypes-india.json");
  writeFileSync(outputPath, JSON.stringify(result, null, 2), "utf-8");
  console.log(`Result written to ${outputPath}`);
})();
