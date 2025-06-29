// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const newzealand: Country = {
  slug: 'new-zealand',
  name: 'New Zealand',
  code: 'nz',
  region: 'Asia Pacific',
  flagUrl: '/images/country/new-zealand/new-zealand-square.png',
  imageUrl: '/images/country/new-zealand/new-zealand-bg.jpg',
  roundedFlagUrl: '/images/country/new-zealand/new-zealand-rounded.png',
  description: `New Zealand introduced the Electronic Travel Authority (ETA) system in July 2019, allowing eligible travelers to conveniently obtain an eVisa online without the need to visit an embassy.`,
  welcomeMessage: `Welcome to New Zealand! Explore the dramatic landscapes of the South Island, visit the vibrant city of Auckland, and experience Maori traditions. Enjoy outdoor adventures like hiking, skiing, and bungee jumping in this breathtaking country.`,
  welcomeImgUrl: '/images/country/new-zealand/new-zealand-welcome.jpg',
  visaTypes: [
    {
      id: "new-zealand-tourist-multiple-2-years",
      name: 'Tourist Evisa (Multiple Entries for 2 years)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 2 years',
      entry: 'Multiple Entries',
      visaDuration: '2 years',
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 90,
      allowedNationalities: ["AD", "AG", "AL", "AM", "AO", "BA", "BB", "BG", "BI", "BJ", "BN", "BO", "BS", "BT", "BW", "BZ", "CD", "CG", "CI", "CN", "CO", "CR", "CU", "CV", "DJ", "DM", "ER", "ET", "FJ", "FM", "GA", "GD", "GH", "GM", "GN", "GQ", "GT", "GW", "GY", "HN", "HT", "IN", "JM", "KE", "KH", "KI", "KM", "KN", "KW", "LC", "LS", "MD", "ME", "MG", "MH", "MK", "MR", "MU", "MW", "MX", "MZ", "NA", "NI", "NP", "NR", "PA", "PG", "PW", "PY", "RW", "SA", "SB", "SC", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TG", "TL", "TO", "TT", "TV", "TW", "TZ", "UG", "VA", "VC", "VE", "VN", "VU", "WS", "ZA", "ZM", "ZW"]
    },
    {
      id: "new-zealand-business-multiple-2-years",
      name: 'Business Evisa (Multiple Entries for 2 years)',
      type: 'Business Evisa',
      description: 'Multiple Entries for 2 years',
      entry: 'Multiple Entries',
      visaDuration: '2 years',
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 90,
      allowedNationalities: ["AD", "AE", "AR", "AT", "BE", "BG", "BH", "BN", "BR", "CA", "CH", "CL", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IO", "IS", "IT", "JP", "KR", "KW", "LI", "LT", "LU", "LV", "MC", "MO", "MT", "MU", "MX", "MY", "NL", "NO", "OM", "PL", "PT", "QA", "RO", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "TW", "US", "UY", "VA"]
    },
    {
      id: "new-zealand-transit-multiple-2-years",
      name: 'Transit Evisa (Multiple Entries for 2 years)',
      type: 'Transit Evisa',
      description: 'Multiple Entries for 2 years',
      entry: 'Multiple Entries',
      visaDuration: '2 years',
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 90,
      allowedNationalities: ["AD", "AE", "AR", "AT", "BE", "BG", "BH", "BN", "BR", "CA", "CH", "CL", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IO", "IS", "IT", "JP", "KR", "KW", "LI", "LT", "LU", "LV", "MC", "MO", "MT", "MU", "MX", "MY", "NL", "NO", "OM", "PL", "PT", "QA", "RO", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "TW", "US", "UY", "VA"]
    }
  ],
  etaInfo: {
    processing: {
      summary: 'Apply Online In 3 Steps',
      steps: [
        'Fill in the online form on our website.',
        'Pay the eTA fee online — via credit card, debit card, PayPal, or bank transfer.',
        'Get your eTA sent to your email.',
      ],
      urgentProcessing: 'As soon as 1 Day',
    },
    serviceFee: 49.99, // or use a number if fixed
  },
  info: {
    climate: 'Temperate, with mild winters and warm summers',
    language: 'English, Maori',
    currency: 'New Zealand Dollar (NZD)',
  },
};

export default newzealand;
