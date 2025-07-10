// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const australia: Country = {
  slug: 'australia',
  name: 'Australia',
  region: 'Asia Pacific',
  code: 'au',
  flagUrl: '/images/country/australia/australia-square.png',
  imageUrl: '/images/country/australia/australia-bg.jpg',
  roundedFlagUrl: '/images/country/australia/australia-rounded.png',
  description: `In 1996, the Electronic Travel Authority system (ETA or e-Visa) was introduced, making Australia the first nation to launch electronic visas in the world. An ETA is designed to serve short-term stays in Australia for activities related to tourism (Tourist e-Visa) or business (Business e-Visa).`,
  welcomeMessage: `Welcome to Australia! Explore the cosmopolitan cities of Sydney and Melbourne, relax on the golden beaches of the Gold Coast, or marvel at the natural wonders of Uluru and the Great Barrier Reef. Experience the rich Aboriginal heritage and enjoy world-class food and wine in this vast and friendly country.`,
  welcomeImgUrl: '/images/country/australia/australia-welcome.jpg',
  processingTime: {
    normal: '7 working days',
    superUrgent: '2 working day',
  },
  visaTypes: [
    {
      id: 'australia-tourist-evisa-multiple-1-year',
      name: 'Tourist Evisa (Multiple Entries for 1 year)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 1 year',
      entry: 'Multiple Entries',
      visaDuration: 365,
      visaValidity: '60 days',
      govFee: 150,
      allowedNationalities: ["AD", "AT", "BE", "BG", "BN", "CA", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IS", "IT", "JP", "KR", "LI", "LT", "LU", "LV", "MC", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SG", "SI", "SK", "SM", "TW", "US", "VA"]
    },
    {
      id: 'australia-business-evisa-multiple-1-year',
      name: 'Business Evisa (Multiple Entries for 1 year)',
      type: 'Business Evisa',
      description: 'Multiple Entries for 1 year',
      entry: 'Multiple Entries',
      visaDuration: 365,
      visaValidity: '60 days',
      govFee: 150,
      allowedNationalities: ["AD", "AT", "BE", "BG", "BN", "CA", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IS", "IT", "JP", "KR", "LI", "LT", "LU", "LV", "MC", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SG", "SI", "SK", "SM", "TW", "US", "VA"]
    }
  ],
  info: {
    climate: 'Varied: tropical in the north, temperate in the south',
    language: 'English',
    currency: 'Australian Dollar (AUD)',
  }
};

export default australia;
