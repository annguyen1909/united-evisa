// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const malaysia: Country = {
  slug: 'malaysia',
  name: 'Malaysia',
  region: 'Asia Pacific',
  code: 'my',
  flagUrl: '/images/country/malaysia/malaysia-square.png',
  imageUrl: '/images/country/malaysia/malaysia-bg.jpg',
  roundedFlagUrl: '/images/country/malaysia/malaysia-rounded.png',
  description: `Apply for your Malaysia eVisa online with United eVisa. Fast, secure, and convenient visa application for Malaysia travel. Get your Malaysia visa quickly with our expert assistance.`,
  welcomeMessage: `Explore Malaysia's diverse culture, modern cities, and natural beauty. From Kuala Lumpur's skyline to Borneo's rainforests, Malaysia is a top destination for travelers.`,
  welcomeImgUrl: '/images/country/malaysia/malaysia-welcome.jpg',
  processingTime: {
    normal: '5 working days',
    superUrgent: '2 working days',
  },
  visaTypes: [
    {
      id: "malaysia-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 55,
      allowedNationalities: ["AE", "AF", "AL", "AM", "AO", "AR", "AT", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CI", "CL", "CM", "CO", "CR", "CU", "CV", "CZ", "DE", "DJ", "DK", "EE", "EG", "ER", "ES", "ET", "FI", "FR", "GA", "GE", "GH", "GN", "GQ", "GR", "GT", "HK", "HN", "HR", "HT", "HU", "ID", "IQ", "IR", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KR", "KW", "KZ", "LA", "LB", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "MZ", "NE", "NG", "NI", "NO", "NP", "OM", "PA", "PE", "PH", "PK", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SE", "SI", "SK", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TM", "TN", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "XK", "YE"]
    },
    {
      id: "malaysia-student-single-3-months",
      name: 'Student Evisa (Single Entry for 3 months)',
      type: 'Student Evisa',
      description: 'Single Entry for 3 months',
      entry: 'Single Entry',
      visaDuration: 90,
      visaValidity: '60 days',
      govFee: 55,
      allowedNationalities: ["AE", "AF", "AL", "AM", "AO", "AR", "AT", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CZ", "DE", "DJ", "DK", "EE", "EG", "ER", "ES", "ET", "FI", "FR", "GA", "GE", "GH", "GN", "GQ", "GR", "GT", "HK", "HN", "HR", "HT", "HU", "ID", "IN", "IQ", "IR", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KR", "KW", "KZ", "LA", "LB", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "MZ", "NE", "NG", "NI", "NO", "NP", "OM", "PA", "PE", "PH", "PK", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SE", "SI", "SK", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TM", "TN", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "YE"]
    },
    {
      id: "malaysia-expatriate-single-3-months",
      name: 'Expatriate Evisa (Single Entry for 3 months)',
      type: 'Expatriate Evisa',
      description: 'Single Entry for 3 months',
      entry: 'Single Entry',
      visaDuration: 90,
      visaValidity: '60 days',
      govFee: 55,
      allowedNationalities: ["AE", "AF", "AL", "AM", "AO", "AR", "AT", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CZ", "DE", "DJ", "DK", "EE", "EG", "ER", "ES", "ET", "FI", "FR", "GA", "GE", "GH", "GN", "GQ", "GR", "GT", "HK", "HN", "HR", "HT", "HU", "ID", "IN", "IQ", "IR", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KR", "KW", "KZ", "LA", "LB", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "MZ", "NE", "NG", "NI", "NO", "NP", "OM", "PA", "PE", "PH", "PK", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SE", "SI", "SK", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TM", "TN", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "YE"]
    },
    {
      id: "malaysia-medical-single-3-months",
      name: 'Medical Evisa (Single Entry for 3 months)',
      type: 'Medical Evisa',
      description: 'Single Entry for 3 months',
      entry: 'Single Entry',
      visaDuration: 90,
      visaValidity: '60 days',
      govFee: 55,
      allowedNationalities: ["AE", "AF", "AL", "AM", "AO", "AR", "AT", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CZ", "DE", "DJ", "DK", "EE", "EG", "ER", "ES", "ET", "FI", "FR", "GA", "GE", "GH", "GN", "GQ", "GR", "GT", "HK", "HN", "HR", "HT", "HU", "ID", "IN", "IQ", "IR", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KR", "KW", "KZ", "LA", "LB", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "MZ", "NE", "NG", "NI", "NO", "NP", "OM", "PA", "PE", "PH", "PK", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SE", "SI", "SK", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TM", "TN", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "YE"]
    },
  ],
  info: {
    climate: 'Tropical, hot and humid',
    language: 'Malay (Bahasa Malaysia)',
    currency: 'Malaysian Ringgit (MYR)',
  }
};

export default malaysia;
