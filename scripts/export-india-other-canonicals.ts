import { indiaVisaFeeTable } from "../lib/countries/india";
import { writeFileSync } from "fs";

const visaTypes = [
  {
    idPrefix: "india-tourist-multiple-5-years",
    name: "Tourist EVisa (Multiple Entries for 5 years)",
    feeKey: "5_years_tourist",
    excludeGroups: ["group-3", "group-8"],
    file: "india-tourist-multiple-5-years.json"
  },
  {
    idPrefix: "india-business-multiple-1-year",
    name: "Business Evisa (Multiple Entries for 1 year)",
    feeKey: "1_year_business",
    file: "india-business-multiple-1-year.json"
  },
  {
    idPrefix: "india-medical-triple-60-days",
    name: "Medical Evisa (Triple Entries for 60 days)",
    feeKey: "other_visa",
    file: "india-medical-triple-60-days.json"
  },
  {
    idPrefix: "india-ayush-triple-60-days",
    name: "Ayush Evisa (Triple Entries for 60 days)",
    feeKey: "other_visa",
    file: "india-ayush-triple-60-days.json"
  },
  {
    idPrefix: "india-conference-single-30-days",
    name: "Conference EVisa (Single Entry for 30 days)",
    feeKey: "other_visa",
    file: "india-conference-single-30-days.json"
  },
  {
    idPrefix: "india-student",
    name: "Student EVisa",
    feeKey: "other_visa",
    file: "india-student.json"
  }
];

visaTypes.forEach(({ idPrefix, name, feeKey, excludeGroups = [], file }) => {
  const output = indiaVisaFeeTable.map((group, idx) => {
    const groupKey = `group-${idx + 1}`;
    if (excludeGroups && excludeGroups.includes(groupKey)) return null;
    const govFee = group.govFee[feeKey as keyof typeof group.govFee];
    if (govFee == null) return null;
    return {
      id: `${idPrefix}-group-${idx + 1}`,
      name,
      processingTime: "From 3 working days to 1 working day",
      govFee,
      allowedNationalities: group.countries,
      destinationId: "india"
    };
  }).filter(Boolean);

  writeFileSync(
    `./scripts/${file}`,
    JSON.stringify(output, null, 2)
  );
  console.log(`JSON file created: ./scripts/${file}`);
});
