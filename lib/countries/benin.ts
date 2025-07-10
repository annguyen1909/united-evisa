// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const benin: Country = {
  slug: 'benin',
  name: 'Benin',
  region: 'Africa',
  code: 'bj',
  flagUrl: '/images/country/benin/benin-square.png',
  imageUrl: '/images/country/benin/benin-bg.jpg',
  roundedFlagUrl: '/images/country/benin/benin-rounded.png',
  description: `The Benin e-visa system aims to simplify the visa application process for international travelers in 2018. The Benin e-visa allows individuals to apply for a visa online with simple documents, reducing the need for in-person visits to embassies. This digital platform is convenient for visitors to obtain the necessary travel authorization for exploring the diverse attractions and experiences in Benin.`,
  welcomeMessage: `Welcome to Benin! Explore the Royal Palaces of Abomey, relax on the beaches of Grand-Popo, and experience the unique traditions of Vodun. Discover the warmth and hospitality of the Beninese people.`,
  welcomeImgUrl: '/images/country/benin/benin-welcome.jpg',
  processingTime: {
    normal: '3 working days',
    superUrgent: '5 hours',
  },
  visaTypes: [
    {
      id: "benin-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 85,
      allowedNationalities: ["AD", "AE", "AF", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BN", "BO", "BR", "BS", "BT", "BY", "BZ", "CA", "CH", "CL", "CN", "CO", "CR", "CU", "CZ", "DE", "DK", "DM", "DOM", "EC", "EE", "ES", "FI", "FJ", "FR", "GA", "GB", "GD", "GE", "GL", "GM", "GR", "GT", "GY", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KG", "KH", "KI", "KN", "KP", "KR", "KZ", "LA", "LB", "LC", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "MN", "MO", "MT", "MV", "MX", "MY", "MZ", "NA", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "RW", "SA", "SB", "SE", "SG", "SI", "SK", "SM", "SR", "SV", "SY", "SZ", "TH", "TJ", "TM", "TO", "TR", "TT", "TV", "TW", "TZ", "US", "UY", "UZ", "VA", "VC", "VE", "VN", "VU", "WS", "YE"]
    },
    {
      id: "benin-tourist-multiple-30-days",
      name: 'Tourist Evisa (Multiple Entries for 30 days)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 30 days',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 112,
      allowedNationalities: ["AD", "AE", "AF", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BN", "BO", "BR", "BS", "BT", "BY", "BZ", "CA", "CH", "CL", "CN", "CO", "CR", "CU", "CZ", "DE", "DK", "DM", "DOM", "EC", "EE", "ES", "FI", "FJ", "FR", "GA", "GB", "GD", "GE", "GL", "GM", "GR", "GT", "GY", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KG", "KH", "KI", "KN", "KP", "KR", "KZ", "LA", "LB", "LC", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "MN", "MO", "MT", "MV", "MX", "MY", "MZ", "NA", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "RW", "SA", "SB", "SE", "SG", "SI", "SK", "SM", "SR", "SV", "SY", "SZ", "TH", "TJ", "TM", "TO", "TR", "TT", "TV", "TW", "TZ", "US", "UY", "UZ", "VA", "VC", "VE", "VN", "VU", "WS", "YE"]
    },
    {
      id: "benin-tourist-multiple-90-days",
      name: 'Tourist Evisa (Multiple Entries for 90 days)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 90 days',
      entry: 'Multiple Entries',
      visaDuration: 90,
      visaValidity: '60 days',
      govFee: 140,
      allowedNationalities: ["AD", "AE", "AF", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BN", "BO", "BR", "BS", "BT", "BY", "BZ", "CA", "CH", "CL", "CN", "CO", "CR", "CU", "CZ", "DE", "DK", "DM", "DOM", "EC", "EE", "ES", "FI", "FJ", "FR", "GA", "GB", "GD", "GE", "GL", "GM", "GR", "GT", "GY", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KG", "KH", "KI", "KN", "KP", "KR", "KZ", "LA", "LB", "LC", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "MN", "MO", "MT", "MV", "MX", "MY", "MZ", "NA", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "RW", "SA", "SB", "SE", "SG", "SI", "SK", "SM", "SR", "SV", "SY", "SZ", "TH", "TJ", "TM", "TO", "TR", "TT", "TV", "TW", "TZ", "US", "UY", "UZ", "VA", "VC", "VE", "VN", "VU", "WS", "YE"]
    },
  ],
  info: {
    climate: 'Tropical, hot and humid',
    language: 'French',
    currency: 'West African CFA Franc (XOF)',
  },
};

export default benin;
