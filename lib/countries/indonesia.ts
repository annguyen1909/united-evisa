// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const indonesia: Country = {
  slug: 'indonesia',
  name: 'Indonesia',
  region: 'Asia Pacific',
  code: 'id',
  flagUrl: '/images/country/indonesia/indonesia-square.png',
  imageUrl: '/images/country/indonesia/indonesia-bg.jpg',
  roundedFlagUrl: '/images/country/indonesia/indonesia-rounded.png',
  description: `Apply for your Indonesia eVisa online with United eVisa Services. Fast, secure, and convenient visa application for Indonesia travel. Get your Indonesia visa quickly with our expert assistance.`,
  welcomeMessage: `Explore Indonesia's tropical islands, vibrant culture, and stunning natural beauty. From Bali's beaches to ancient temples, Indonesia is a dream destination for travelers.`,
  welcomeImgUrl: '/images/country/indonesia/indonesia-welcome.jpg',
  processingTime: {
    normal: '2 working days',
    superUrgent: '2 hours',
  },
  visaTypes: [
    {
      id: "indonesia-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 62,
      allowedNationalities: ["AD", "AE", "AL", "AM", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BN", "BR", "BY", "CA", "CH", "CL", "CN", "CO", "CY", "CZ", "DE", "DK", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HR", "HU", "IE", "IN", "IS", "IT", "JO", "JP", "KE", "KH", "KR", "KW", "KZ", "LA", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MV", "MX", "MY", "MZ", "NL", "NO", "NZ", "OM", "PA", "PE", "PG", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "RW", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "SR", "TH", "TL", "TN", "TR", "TW", "TZ", "UA", "US", "UZ", "VA", "VE", "VN", "ZA"]
    },
    {
      id: "indonesia-tourist-single-60-days",
      name: 'Tourist Evisa (Single Entry for 60 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 60 days',
      entry: 'Single Entry',
      visaDuration: 60,
      visaValidity: '60 days',
      govFee: 126,
      allowedNationalities: ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BN", "BR", "BY", "CA", "CH", "CL", "CN", "CO", "CY", "CZ", "DE", "DK", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HR", "HU", "IE", "IN", "IS", "IT", "JO", "JP", "KE", "KH", "KR", "KW", "KZ", "LA", "LI", "LT", "LU", "LV", "MA", "MC", "MO", "MT", "MV", "MX", "MY", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PK", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "RW", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "SR", "SY", "TH", "TL", "TN", "TR", "TW", "UA", "US", "UZ", "VA", "VE", "VN", "ZA"]
    },
  ],
  info: {
    climate: 'Tropical, hot and humid',
    language: 'Indonesian (Bahasa Indonesia)',
    currency: 'Indonesian Rupiah (IDR)',
  },
};

export default indonesia;
