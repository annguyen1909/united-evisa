import { indiaVisaFeeTable } from "../lib/countries/india";
import { writeFileSync } from "fs";

const output = indiaVisaFeeTable.map((group, idx) => ({
  id: `india-tourist-multiple-1-year-group-${idx + 1}`,
  name: "Tourist EVisa (Multiple Entries for 1 year)",
  processingTime: "From 3 working days to 1 working day",
  govFee: group.govFee["1_year_tourist"],
  allowedNationalities: group.countries,
  destinationId: "india"
}));

writeFileSync(
  "./scripts/india-tourist-multiple-1-year.json",
  JSON.stringify(output, null, 2)
);

console.log("JSON file created: ./scripts/india-tourist-multiple-1-year.json");
