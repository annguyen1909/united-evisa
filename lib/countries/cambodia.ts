// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const cambodia: Country = {
  slug: 'cambodia',
  name: 'Cambodia',
  region: 'Asia Pacific',
  code: 'kh',
  flagUrl: '/images/flags/square/cambodia.png',
  imageUrl: '/images/country/cambodia/cambodia-bg.jpg',
  roundedFlagUrl: '/images/flags/square/cambodia.png',
  description: `Apply for your Cambodia eVisa online with Worldmaxxing Global Services. Fast, secure, and convenient visa application for Cambodia travel. Get your Cambodia visa quickly with our expert assistance.`,
  welcomeMessage: `Explore Cambodia's ancient temples, lush landscapes, and vibrant cities. From the iconic Angkor Wat to the lively streets of Phnom Penh, Cambodia is a must-visit destination for travelers.`,
  welcomeImgUrl: '/images/country/kenya-welcome.jpg',
  processingTime: {
    normal: '5 working days',
    superUrgent: '2 working days',
  },
  visaTypes: [
    {
      id: "cambodia-tourist-single-1-month",
      name: 'Tourist Evisa (Single Entry for 1 month)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 1 month',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 66,
      allowedNationalities: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IE", "IL", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MV", "MW", "MX", "MZ", "NA", "NC", "NE", "NF", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]
    }
  ],
  info: {
    climate: 'Tropical climate',
    language: 'Khmer, English',
    currency: 'Cambodian Riel (KHR)',
  },
};

export default cambodia;
