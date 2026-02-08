// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const canada: Country = {
  slug: 'canada',
  name: 'Canada',
  region: 'America - Caribbean',
  code: 'ca',
  flagUrl: '/images/flags/square/canada.png',
  imageUrl: '/images/country/canada/canada-bg.jpg',
  roundedFlagUrl: '/images/flags/square/canada.png',
  description: `Apply for your Canada eVisa online with United eVisa Services. Fast, secure, and convenient visa application for Canada travel. Get your Canada visa quickly with our expert assistance.`,
  welcomeMessage: `Experience Canada's breathtaking natural wonders, vibrant cities, and multicultural charm. From Niagara Falls to the Rockies and cosmopolitan Toronto, Canada is a top destination for travelers.`,
  welcomeImgUrl: '/images/country/canada/canada-welcome.jpg',
  processingTime: {
    normal: '3 working days',
    superUrgent: '5 hours',
  },
  visaTypes: [
    {
      id: "canada-tourist-multiple-5-years",
      name: 'Tourist Evisa (Multiple Entries for 5 years)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 5 years',
      entry: 'Multiple Entries',
      visaDuration: 365 * 5,
      visaValidity: '60 days',
      govFee: 20,
      allowedNationalities: ["AD", "AE", "AI", "AT", "AU", "BB", "BE", "BG", "BM", "BN", "BS", "CH", "CL", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FK", "FR", "GI", "GR", "HK", "HR", "HU", "IE", "IL", "IO", "IS", "IT", "JP", "KR", "KY", "LI", "LT", "LU", "LV", "MC", "MS", "MT", "NL", "NO", "NZ", "PG", "PL", "PN", "PT", "RO", "SB", "SE", "SG", "SH", "SI", "SK", "SM", "TC", "TW", "VA", "VG", "WS"]
    },
  ],
  info: {
    climate: 'Varied: arctic in the north, temperate in the south',
    language: 'English, French',
    currency: 'Canadian Dollar (CAD)',
  }
};

export default canada;
