// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const angola: Country = {
  slug: 'angola',
  name: 'Angola',
  region: 'Africa',
  code: 'ao',
  flagUrl: '/images/country/angola/angola-square.png',
  imageUrl: '/images/country/angola/angola-bg.jpg',
  roundedFlagUrl: '/images/country/angola/angola-rounded.png',
  description: `Apply for your Angola eVisa online with United eVisa Services. Fast, secure, and convenient visa application for Angola travel. Get your Angola visa in 5 working days with our expert assistance.`,
  welcomeMessage: `Discover Angola's stunning landscapes, rich culture, and vibrant cities. From the modern capital Luanda to the majestic Kalandula Falls and historic M'banza-Kongo UNESCO site, Angola offers unforgettable travel experiences.`,
  welcomeImgUrl: '/images/country/angola/angola-welcome.jpg',
  processingTime: {
    normal: '5 working days',
    superUrgent: '1 working day',
  },
  visaTypes: [
    {
      id: 'angola-tourist-single-30-days',
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 30,
      allowedNationalities: ["AE", "AR", "AT", "AU", "BE", "BG", "BR", "BW", "CA", "CH", "CL", "CN", "CU", "CV", "CY", "CZ", "DE", "DK", "DZ", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JP", "KR", "LS", "LU", "LV", "MA", "MC", "MG", "MO", "MT", "MU", "MW", "NL", "NO", "NZ", "PL", "PT", "RO", "RU", "SC", "SE", "SG", "SI", "SK", "ST", "SZ", "TL", "TW", "US", "UY", "VA", "VE", "ZM", "ZW"]
    },
    {
      id: 'angola-business-single-30-days',
      name: 'Business Evisa (Single Entry for 30 days)',
      type: 'Business Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 30,
      allowedNationalities: ["AE", "AR", "AT", "AU", "BE", "BG", "BR", "BW", "CA", "CH", "CL", "CN", "CU", "CV", "CY", "CZ", "DE", "DK", "DZ", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JP", "KR", "LS", "LU", "LV", "MA", "MC", "MG", "MO", "MT", "MU", "MW", "NL", "NO", "NZ", "PL", "PT", "RO", "RU", "SC", "SE", "SG", "SI", "SK", "ST", "SZ", "TL", "TW", "US", "UY", "VA", "VE", "ZM", "ZW"]
    },
  ],
  info: {
    climate: 'Tropical, with distinct wet and dry seasons',
    language: 'Portuguese',
    currency: 'Kwanza (AOA)',
  },
};

export default angola;
