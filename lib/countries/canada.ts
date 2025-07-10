// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const canada: Country = {
  slug: 'canada',
  name: 'Canada',
  region: 'America - Caribbean',
  code: 'ca',
  flagUrl: '/images/country/canada/canada-square.png',
  imageUrl: '/images/country/canada/canada-bg.jpg',
  roundedFlagUrl: '/images/country/canada/canada-rounded.png',
  description: `On August 1, 2015, Canada eVisa was introduced by the government which allows travelers to travel to Canada with an online travel permit document. Only for tourism purposes, travelers no longer arrange a visit to the Embassy, it is now taking a few days to obtain an e-visa and start your journey in Canada.`,
  welcomeMessage: `Welcome to Canada! Explore the vibrant cities of Toronto and Vancouver, marvel at the beauty of Banff National Park, and experience French culture in Montreal and Quebec City. Enjoy outdoor adventures and Canadian hospitality.`,
  welcomeImgUrl: '/images/country/canada/canada-welcome.jpg',
  visaTypes: [
    {
      id: "canada-tourist-multiple-5-years",
      name: 'Tourist Evisa (Multiple Entries for 5 years)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 5 years',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 20,
      allowedNationalities: ["AD", "AE", "AI", "AT", "AU", "BB", "BE", "BG", "BM", "BN", "BS", "CH", "CL", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FK", "FR", "GI", "GR", "HK", "HR", "HU", "IE", "IL", "IO", "IS", "IT", "JP", "KR", "KY", "LI", "LT", "LU", "LV", "MC", "MS", "MT", "NL", "NO", "NZ", "PG", "PL", "PN", "PT", "RO", "SB", "SE", "SG", "SH", "SI", "SK", "SM", "TC", "TW", "VA", "VG", "WS"]
    },
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
    climate: 'Varied: arctic in the north, temperate in the south',
    language: 'English, French',
    currency: 'Canadian Dollar (CAD)',
  }
};

export default canada;
