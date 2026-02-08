import { Country } from "./type"; // optional type if you're using centralized types

// Define visa govFee table by nationality group
const indiaVisaFeeTable = [
  {
    // Group 1: Argentina, Cook Islands, Fiji, etc. - $30 for all visa types
    name: "Group 1",
    countries: [
      "AR",
      "CK",
      "FJ",
      "ID",
      "JM",
      "KI",
      "MH",
      "MU",
      "FM",
      "NR",
      "NU",
      "PW",
      "PG",
      "WS",
      "SC",
      "SB",
      "ZA",
      "TO",
      "TV",
      "UY",
      "VU",
    ],
    govFee: {
      "30_days_tourist": 30,
      "1_year_tourist": 30,
      "5_years_tourist": 30,
      "1_year_business": 30,
      other_visa: 30,
    },
  },
  {
    // Group 2: Japan, Singapore - $50/$55 fees
    name: "Group 2",
    countries: ["JP", "SG"],
    govFee: {
      "30_days_tourist": 50,
      "1_year_tourist": 55,
      "5_years_tourist": 55,
      "1_year_business": 55,
      other_visa: 55,
    },
  },
  {
    // Group 3: Sri Lanka - some visa types not applicable
    name: "Group 3",
    countries: ["LK"],
    govFee: {
      "30_days_tourist": 50,
      "1_year_tourist": 55,
      "5_years_tourist": null, // Not applicable
      "1_year_business": 55,
      other_visa: 55,
    },
  },
  {
    // Group 4: Benin, Mozambique
    name: "Group 4",
    countries: ["BJ", "MZ"],
    govFee: {
      "30_days_tourist": 50,
      "1_year_tourist": 70,
      "5_years_tourist": 110,
      "1_year_business": 30,
      other_visa: 130,
    },
  },
  {
    // Group 5: Angola, Burundi, Cambodia, etc.
    name: "Group 5",
    countries: [
      "AO",
      "BI",
      "KH",
      "KM",
      "DJ",
      "TL",
      "ER",
      "GM",
      "GN",
      "HT",
      "LA",
      "LS",
      "LR",
      "MG",
      "MW",
      "ML",
      "NE",
      "RW",
      "SN",
      "SL",
      "TZ",
      "TG",
      "UG",
      "ZM",
    ],
    govFee: {
      "30_days_tourist": 50,
      "1_year_tourist": 70,
      "5_years_tourist": 110,
      "1_year_business": 30,
      other_visa: 110,
    },
  },
  {
    // Group 6: Malaysia, Thailand
    name: "Group 6",
    countries: ["MY", "TH"],
    govFee: {
      "30_days_tourist": 30,
      "1_year_tourist": 70,
      "5_years_tourist": 110,
      "1_year_business": 110,
      other_visa: 110,
    },
  },
  {
    // Group 7: European countries, other countries
    name: "Group 7",
    countries: [
      "PT",
      "MK",
      "RO",
      "LC",
      "VC",
      "SM",
      "SA",
      "RS",
      "SK",
      "SI",
      "ES",
      "KN",
      "SR",
      "SZ",
      "SE",
      "CH",
      "TW",
      "TJ",
      "TT",
      "TC",
      "AE",
      "UZ",
      "VE",
      "VN",
      "ZW",
    ],
    govFee: {
      "30_days_tourist": 50,
      "1_year_tourist": 70,
      "5_years_tourist": 110,
      "1_year_business": 110,
      other_visa: 110,
    },
  },
  {
    // Group 8: Canada
    name: "Group 8",
    countries: ["CA"],
    govFee: {
      "30_days_tourist": 50,
      "1_year_tourist": 70,
      "5_years_tourist": null, // Not applicable
      "1_year_business": 110,
      other_visa: 110,
    },
  },
  {
    // Group 9: UK, Russia, Ukraine, USA
    name: "Group 9",
    countries: ["GB", "RU", "UA", "US"],
    govFee: {
      "30_days_tourist": 50,
      "1_year_tourist": 70,
      "5_years_tourist": 110,
      "1_year_business": 130,
      other_visa: 130,
    },
  },
  {
    // Group 10: UK, Russia, Ukraine, USA
    name: "Group 10",
    countries: [
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
      "GY",
      "GR",
      "GD",
      "GT",
      "HN",
      "HU",
      "IS",
      "IE",
      "IL",
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
      "BW",
      "CV",
      "GA",
      "GH",
      "JO",
      "KZ",
      "KE",
      "MC",
      "NA",
      "OM",
      "PS",
      "ME",
      "VA",
      "CI",
    ],
    govFee: {
      "30_days_tourist": 50,
      "1_year_tourist": 70,
      "5_years_tourist": 110,
      "1_year_business": 110,
      other_visa: 110,
    },
  },
];

const allIndiaVisaNationalities = indiaVisaFeeTable.flatMap(
  (group) => group.countries
);

// Helper to aggregate allowed nationalities for each visa type across all groups
function aggregateAllowedNationalities(
  feeKey: string,
  excludeGroups: string[] = []
) {
  return indiaVisaFeeTable.flatMap((group, groupIdx) => {
    const groupKey = `group-${groupIdx + 1}`;
    if (excludeGroups.includes(groupKey)) return [];
    // For 5-year tourist, also exclude if fee is null for this group
    if (feeKey === "5_years_tourist" && group.govFee["5_years_tourist"] == null)
      return [];
    return group.countries;
  });
}

// Canonical visa types definition
const canonicalVisaTypes = [
  {
    id: "india-tourist-double-30-days",
    name: "Tourist Evisa (Double Entries for 30 days)",
    type: "Tourist EVisa",
    description: "Double Entries",
    entry: "Double Entries",
    visaDuration: 30,
    visaValidity: "30 days",
    feeKey: "30_days_tourist",
  },
  {
    id: "india-tourist-multiple-1-year",
    name: "Tourist Evisa (Multiple Entries for 1 year)",
    type: "Tourist EVisa",
    description: "Multiple Entries for 1 year",
    entry: "Multiple Entries for 1 year",
    visaDuration: 365,
    visaValidity: "1 year",
    feeKey: "1_year_tourist",
  },
  {
    id: "india-tourist-multiple-5-years",
    name: "Tourist Evisa (Multiple Entries for 5 years)",
    type: "Tourist EVisa",
    description: "Multiple Entries for 5 years",
    entry: "Multiple Entries for 5 years",
    visaDuration: 1825,
    visaValidity: "5 years",
    feeKey: "5_years_tourist",
    excludeGroups: ["group-3", "group-8"],
  },
  {
    id: "india-business-multiple-1-year",
    name: "Business Evisa (Multiple Entries for 1 year)",
    type: "Business Visa",
    description: "Multiple Entries for 1 year",
    entry: "Multiple Entries for 1 year",
    visaDuration: 365,
    visaValidity: "1 year",
    feeKey: "1_year_business",
  },
  {
    id: "india-medical-triple-60-days",
    name: "Medical Evisa (Triple Entries for 60 days)",
    type: "Medical Visa",
    description: "Triple Entries for 60 days",
    entry: "Triple Entries for 60 days",
    visaDuration: 60,
    visaValidity: "60 days",
    feeKey: "other_visa",
  },
  {
    id: "india-ayush-triple-60-days",
    name: "Ayush Evisa (Triple Entries for 60 days)",
    type: "Ayush Evisa",
    description: "Triple Entries for 60 days",
    entry: "Triple Entries for 60 days",
    visaDuration: 60,
    visaValidity: "60 days",
    feeKey: "other_visa",
  },
  {
    id: "india-conference-single-30-days",
    name: "Conference EVisa (Single Entry for 30 days)",
    type: "Conference Visa",
    description: "Single Entry for 30 days",
    entry: "Single Entry for 30 days",
    visaDuration: 30,
    visaValidity: "30 days",
    feeKey: "other_visa",
  },
  {
    id: "india-student",
    name: "Student EVisa",
    type: "Student Visa",
    description: "For education purposes",
    entry: "",
    visaDuration: 30,
    visaValidity: "Duration of course",
    feeKey: "other_visa",
  },
];

// Generate all group variants for DB import
const groupVariantVisaTypes = [];
for (const canonical of canonicalVisaTypes) {
  indiaVisaFeeTable.forEach((group, groupIdx) => {
    const groupKey = `group-${groupIdx + 1}`;
    if (canonical.excludeGroups && canonical.excludeGroups.includes(groupKey))
      return;
    const groupFee =
      group.govFee[canonical.feeKey as keyof typeof group.govFee];
    if (groupFee == null) return;
    groupVariantVisaTypes.push({
      id: `${canonical.id}-group-${groupIdx + 1}`,
      name: `${canonical.name} [${group.name}]`,
      type: canonical.type,
      description: canonical.description,
      entry: canonical.entry,
      visaDuration: canonical.visaDuration,
      visaValidity: canonical.visaValidity,
      govFee: groupFee,
      allowedNationalities: group.countries,
      group: group.name,
      groupIndex: groupIdx + 1,
    });
  });
}

// For display: only canonical visa types, but govFee is the max group fee
const visaTypes = canonicalVisaTypes.map((canonical) => {
  // Find all group variants for this canonical
  const groupVariants = indiaVisaFeeTable
    .map((group, groupIdx) => {
      const groupKey = `group-${groupIdx + 1}`;
      if (canonical.excludeGroups && canonical.excludeGroups.includes(groupKey))
        return null;
      const groupFee =
        group.govFee[canonical.feeKey as keyof typeof group.govFee];
      if (groupFee == null) return null;
      return {
        id: `${canonical.id}-group-${groupIdx + 1}`,
        govFee: groupFee,
      };
    })
    .filter((v) => v != null);
  // Find the most expensive group variant
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
    allowedNationalities: aggregateAllowedNationalities(
      canonical.feeKey,
      canonical.excludeGroups || []
    ),
    mostExpensiveGroupId,
  };
});

const india: Country = {
  slug: "india",
  name: "India",
  region: "Asia Pacific",
  code: "in",
  flagUrl: "/images/country/india/india-square.png",
  imageUrl: "/images/country/india/india-bg.jpg",
  roundedFlagUrl: "/images/country/india/india-rounded.png",
  description: `Apply for your India eVisa online with United eVisa Services. Fast, secure, and convenient visa application for India travel. Get your India visa quickly with our expert assistance.`,
  welcomeMessage: `Discover India's incredible heritage, vibrant cities, and breathtaking landscapes. From the Taj Mahal to Kerala's backwaters, India offers unforgettable experiences for every traveler.`,
  welcomeImgUrl: "/images/country/india/india-welcome.jpg",
  processingTime: {
    normal: "3 working days",
    superUrgent: "1 working day",
  },
  visaTypes,
  // Port types and names for India (for extensibility to other countries)
  portType: [
    {
      type: "Air",
      port: [
        "Chennai - MAA - Chennai - Tamil Nadu",
        "Indira Gandhi - DEL - Delhi - Delhi",
        "Netaji Subhash Chandra Bose - CCU - Kolkata - West Bengal",
        "Chhatrapati Shivaji - BOM - Mumbai - Maharashtra",
        "Cochin – COK - Kochi - Kerala",
        "Rajiv Gandhi – HYD - Hyderabad - Telangana",
        "Kempegowda – BLR - Bangalore - Karnataka",
        "Goa – GOI – Dabolim – Goa",
        "Thiruvananthapuram – TRV - Thiruvananthapuram - Kerala",
        "Sardar Patel - AMD - Ahmedabad - Gujarat",
        "Sri Guru Ram Dass Jee - ATQ - Amritsar - Punjab",
        "Gaya - GAY - Gaya - Bihar",
        "Jaipur - JAI - Jaipur - Rajasthan",
        "Chaudhary Charan Singh - LKO - Lucknow - Uttar Pradesh",
        "Varanasi - VNS - Varanasi - Uttar Pradesh",
        "Tiruchirappalli - TRZ - Tiruchirappalli - Tamil Nadu",
        "Bagdogra - IXB - Bagdogra - West Bengal",
        "Calicut - CCJ - Kozhikode - Kerala",
        "Chandigarh- IXC - Chandigarh - Chandigarh",
        "Coimbatore - CJB - Coimbatore - Tamil Nadu",
        "Lokpriya Gopinath Bordoloi - GAU - Guwahati - Assam",
        "Mangalore - IXE - Mangalore - Karnataka",
        "Dr. Babasaheb Ambedkar - NAG - Nagpur - Maharashtra",
        "Pune - PNQ - Pune -Maharashtra",
        "Madurai - IXM - Madurai - Tamil Nadu",
        "Bhubaneswar - BBI - Bhubaneswar - Odisha",
        "Veer Savarkar - IXZ- Port Blair- Andaman and Nicobar Islands",
        "Visakhapatnam - VTZ – Visakhapatnam – Andhra Pradesh",
        "Manohar - GOX - Mopa - Goa",
        "Devi Ahilya Bai Holkar - IDR - Indore - Madhya Pradesh",
        "Kannur - CNN - Kannur - Kerala",
      ],
    },
    {
      type: "Seaport",
      port: [
        "Cochin Seaport",
        "Mangalore Seaport",
        "Goa Seaport",
        "Chennai Seaport",
        "Mumbai Seaport",
        "Port Blair Seaport",
      ],
    },
  ],
  info: {
    climate: "Varied: tropical in the south, temperate and alpine in the north",
    language: "Hindi, English, and 21 other official languages",
    currency: "Indian Rupee (INR)",
  },
};

// Helper function to calculate the actual fee based on nationality and visa type
function calculateIndiaVisaFee(
  visaTypeId: string,
  nationality: string
): number | null {
  // Map visaTypeId to feeKey used in the govFee table
  let feeKey: string = "other_visa";
  if (visaTypeId.includes("tourist-double-30-days")) feeKey = "30_days_tourist";
  else if (visaTypeId.includes("tourist-multiple-1-year"))
    feeKey = "1_year_tourist";
  else if (visaTypeId.includes("tourist-multiple-5-years"))
    feeKey = "5_years_tourist";
  else if (visaTypeId.includes("business-multiple-1-year"))
    feeKey = "1_year_business";
  // All others (medical, ayush, conference, student) use "other_visa"

  // Find which govFee group the nationality belongs to
  const feeGroup = indiaVisaFeeTable.find((group) =>
    group.countries.includes(nationality)
  );
  if (!feeGroup) return null;
  // Return the govFee or null if not applicable
  return feeGroup.govFee[feeKey as keyof typeof feeGroup.govFee] ?? null;
}

export default india;
export { indiaVisaFeeTable, allIndiaVisaNationalities, calculateIndiaVisaFee };
