// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const egypt: Country = {
  slug: 'egypt',
  name: 'Egypt',
  region: 'Africa',
  code: 'eg',
  flagUrl: '/images/country/egypt/egypt-square.png',
  imageUrl: '/images/country/egypt/egypt-bg.jpg',
  roundedFlagUrl: '/images/country/egypt/egypt-rounded.png',
  description: `Apply for your Egypt eVisa online with United eVisa Services. Fast, secure, and convenient visa application for Egypt travel. Get your Egypt visa quickly with our expert assistance.`,
  welcomeMessage: `Explore Egypt's ancient wonders, from the Pyramids of Giza to the Nile River. Discover vibrant cities, rich history, and unforgettable adventures in Egypt.`,
  welcomeImgUrl: '/images/country/egypt/egypt-welcome.jpg',
  processingTime: {
    normal: '5 working days',
    superUrgent: '2 working days',
  },
  visaTypes: [
    {
      id: "egypt-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 75,
      allowedNationalities: ["AE", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CN", "CO", "CY", "CZ", "DE", "DK", "EC", "EE", "ES", "FI", "FR", "GB", "GE", "GR", "HK", "HR", "HU", "IE", "IN", "IS", "IT", "JP", "KR", "KW", "KZ", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NL", "NO", "NZ", "OM", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SM", "TW", "UA", "US", "UY", "VA", "VE", "XK", "ZA"]
    },
    {
      id: "egypt-tourist-multiple-30-days",
      name: 'Tourist Evisa (Multiple Entries for 30 days)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 30 days',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 110,
      allowedNationalities: ["AE", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CN", "CO", "CY", "CZ", "DE", "DK", "EC", "EE", "ES", "FI", "FR", "GB", "GE", "GR", "HK", "HR", "HU", "IE", "IN", "IS", "IT", "JP", "KR", "KW", "KZ", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NL", "NO", "NZ", "OM", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SM", "TW", "UA", "US", "UY", "VA", "VE", "XK", "ZA"]
    }
  ],
  info: {
    climate: 'Desert, hot and dry',
    language: 'Modern Standard Arabic',
    currency: 'Egyptian Pound (EGP)',
  },
};

export default egypt;
