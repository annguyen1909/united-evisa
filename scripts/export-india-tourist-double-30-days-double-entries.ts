import { indiaVisaFeeTable } from "../lib/countries/india";
import { writeFileSync } from "fs";

const output = indiaVisaFeeTable.map((group, idx) => ({
  id: `india-tourist-double-30-days-group-${idx + 1}`,
  name: "Tourist EVisa (Double Entries for 30 days)",
  processingTime: "From 3 working days to 1 working day",
  govFee: group.govFee["30_days_tourist"],
  allowedNationalities: group.countries,
  destinationId: "india"
}));

writeFileSync(
  "./scripts/india-tourist-double-30-days-double-entries.json",
  JSON.stringify(output, null, 2)
);

console.log("JSON file created: ./scripts/india-tourist-double-30-days-double-entries.json");
