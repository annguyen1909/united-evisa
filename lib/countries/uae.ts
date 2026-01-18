import { Country } from "./type";

// UAE visa fee table by nationality group (dummy pricing placeholders)
const uaeVisaFeeTable = [
  {
    name: "Group 1 - North Africa & Middle East",
    countries: ["DZ", "CV", "EG", "IR", "IQ", "IL", "MR", "ST", "ZA", "TN", "SY"],
    govFee: {
      "30_days_single": 100,
      "30_days_multiple": 120,
      "60_days_single": 140,
      "60_days_multiple": 160,
    },
  },
  {
    name: "Group 2 - Sub-Saharan Africa",
    countries: [
      "MA",
      "ZW",
      "CI",
      "MZ",
      "NA",
      "RW",
      "UG",
      "TZ",
      "MU",
      "ZM",
      "SZ",
      "LS",
      "CM",
      "TG",
      "ET",
      "GM",
      "MG",
      "SC",
      "BJ",
      "AO",
      "NE",
      "BF",
      "TD",
      "SL",
      "GW",
      "KM",
      "BI",
      "BW",
      "CD",
      "CG",
      "DJ",
      "ER",
      "GA",
      "GH",
      "GQ",
      "LR",
      "MW",
      "SN",
      "ML",
      "GN",
    ],
    govFee: {
      "30_days_single": 110,
      "30_days_multiple": 130,
      "60_days_single": 150,
      "60_days_multiple": 170,
    },
  },
  {
    name: "Group 3 - South Asia (Special)",
    countries: ["BD"],
    govFee: {
      "30_days_single": 120,
      "30_days_multiple": 140,
      "60_days_single": 160,
      "60_days_multiple": 180,
    },
  },
  {
    name: "Group 4 - Caribbean & Pacific",
    countries: ["GY", "JM", "PG"],
    govFee: {
      "30_days_single": 120,
      "30_days_multiple": 140,
      "60_days_single": 160,
      "60_days_multiple": 180,
    },
  },
  {
    name: "Group 5 - South Asia (Sri Lanka)",
    countries: ["NP", "LK"],
    govFee: {
      "30_days_single": 130,
      "30_days_multiple": 150,
      "60_days_single": 170,
      "60_days_multiple": 190,
    },
  },
  {
    name: "Group 6 - All Other Countries",
    countries: [
      "AR",
      "CK",
      "FJ",
      "KI",
      "MH",
      "FM",
      "NR",
      "NU",
      "PW",
      "WS",
      "SB",
      "TO",
      "TV",
      "UY",
      "VU",
      "JP",
      "SG",
      "KH",
      "TL",
      "HT",
      "LA",
      "MY",
      "PT",
      "MK",
      "RO",
      "LC",
      "VC",
      "SM",
      "RS",
      "SK",
      "SI",
      "ES",
      "KN",
      "SR",
      "SE",
      "CH",
      "TW",
      "TJ",
      "TT",
      "TC",
      "AE",
      "UZ",
      "VE",
      "CA",
      "GB",
      "RU",
      "UA",
      "US",
      "AI",
      "BS",
      "BZ",
      "BN",
      "DM",
      "BB",
      "KY",
      "CY",
      "MT",
      "NL",
      "PA",
      "AL",
      "AM",
      "AW",
      "AU",
      "AT",
      "AZ",
      "BY",
      "BE",
      "BO",
      "BA",
      "BR",
      "BG",
      "CL",
      "CO",
      "CR",
      "HR",
      "CU",
      "CZ",
      "DK",
      "DOM",
      "EC",
      "SV",
      "EE",
      "FI",
      "FR",
      "GE",
      "DE",
      "GR",
      "GD",
      "GT",
      "HN",
      "HU",
      "IS",
      "IE",
      "IT",
      "KR",
      "KG",
      "LV",
      "LI",
      "LT",
      "LU",
      "MD",
      "MN",
      "MS",
      "NI",
      "NO",
      "PE",
      "PH",
      "PL",
      "AD",
      "JO",
      "KZ",
      "KE",
      "MC",
      "PS",
      "ME",
      "VA",
    ],
    govFee: {
      "30_days_single": 140,
      "30_days_multiple": 160,
      "60_days_single": 180,
      "60_days_multiple": 200,
    },
  },
  {
    name: "Group 7 - Restricted Nationalities Surcharge (AED 35)",
    countries: ["IN", "TH", "MM", "ID", "VN"],
    govFee: {
      "30_days_single": 150,
      "30_days_multiple": 170,
      "60_days_single": 190,
      "60_days_multiple": 210,
    },
  },
];

const allUaeVisaNationalities = uaeVisaFeeTable.flatMap(
  (group) => group.countries
);

function aggregateAllowedNationalities(_: string) {
  return uaeVisaFeeTable.flatMap((group) => group.countries);
}

const canonicalVisaTypes = [
  {
    id: "uae-tourist-single-30-days",
    name: "Tourist Visa (Single Entry for 30 days)",
    type: "Tourist Visa",
    description: "Single Entry for 30 days",
    entry: "Single Entry",
    visaDuration: 30,
    visaValidity: "30 days",
    feeKey: "30_days_single",
  },
  {
    id: "uae-tourist-multiple-30-days",
    name: "Tourist Visa (Multiple Entries for 30 days)",
    type: "Tourist Visa",
    description: "Multiple Entries for 30 days",
    entry: "Multiple Entries",
    visaDuration: 30,
    visaValidity: "30 days",
    feeKey: "30_days_multiple",
  },
  {
    id: "uae-tourist-single-60-days",
    name: "Tourist Visa (Single Entry for 60 days)",
    type: "Tourist Visa",
    description: "Single Entry for 60 days",
    entry: "Single Entry",
    visaDuration: 60,
    visaValidity: "60 days",
    feeKey: "60_days_single",
  },
  {
    id: "uae-tourist-multiple-60-days",
    name: "Tourist Visa (Multiple Entries for 60 days)",
    type: "Tourist Visa",
    description: "Multiple Entries for 60 days",
    entry: "Multiple Entries",
    visaDuration: 60,
    visaValidity: "60 days",
    feeKey: "60_days_multiple",
  },
];

const visaTypes = canonicalVisaTypes.map((canonical) => {
  const groupVariants = uaeVisaFeeTable
    .map((group, groupIdx) => {
      const groupFee =
        group.govFee[canonical.feeKey as keyof typeof group.govFee];
      if (groupFee == null) return null;
      return {
        id: `${canonical.id}-group-${groupIdx + 1}`,
        govFee: groupFee,
      };
    })
    .filter((v) => v != null);

  let mostExpensiveGroup = null;
  if (groupVariants.length > 0) {
    mostExpensiveGroup = groupVariants.reduce((prev, curr) =>
      curr!.govFee > prev!.govFee ? curr : prev
    );
  }

  const maxFee = mostExpensiveGroup ? mostExpensiveGroup.govFee : 0;
  const mostExpensiveGroupId = mostExpensiveGroup
    ? mostExpensiveGroup.id
    : canonical.id;

  return {
    id: canonical.id,
    name: canonical.name,
    type: canonical.type,
    description: canonical.description,
    entry: canonical.entry,
    visaDuration: canonical.visaDuration,
    visaValidity: canonical.visaValidity,
    govFee: maxFee,
    allowedNationalities: aggregateAllowedNationalities(canonical.feeKey),
    mostExpensiveGroupId,
  };
});

const uae: Country = {
  slug: "uae",
  name: "United Arab Emirates",
  region: "Middle East",
  code: "ae",
  description:
    "Apply for your UAE visa online with Worldmaxxing Global Services. Fast, secure, and convenient visa application for UAE travel.",
  welcomeMessage:
    "Experience the UAE's world-class cities, desert adventures, and cultural landmarks. From Dubai to Abu Dhabi, travel made seamless.",
  processingTime: {
    normal: "3 working days",
    superUrgent: "1 working day",
  },
  visaTypes,
  info: {
    climate: "Arid desert climate with hot summers and mild winters",
    language: "Arabic (English widely used)",
    currency: "UAE Dirham (AED)",
  },
};

function calculateUaeVisaFee(
  visaTypeId: string,
  nationality: string
): number | null {
  let feeKey: string | null = null;
  if (visaTypeId.includes("tourist-single-30-days")) feeKey = "30_days_single";
  else if (visaTypeId.includes("tourist-multiple-30-days"))
    feeKey = "30_days_multiple";
  else if (visaTypeId.includes("tourist-single-60-days"))
    feeKey = "60_days_single";
  else if (visaTypeId.includes("tourist-multiple-60-days"))
    feeKey = "60_days_multiple";
  if (!feeKey) return null;

  const feeGroup = uaeVisaFeeTable.find((group) =>
    group.countries.includes(nationality)
  );
  if (!feeGroup) return null;
  return feeGroup.govFee[feeKey as keyof typeof feeGroup.govFee] ?? null;
}

export default uae;
export { uaeVisaFeeTable, allUaeVisaNationalities, calculateUaeVisaFee };
