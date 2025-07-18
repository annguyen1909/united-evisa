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
  description: `Apply for your Australia eVisa online with United eVisa. Fast, secure, and convenient visa application for Australia travel. Get your Australia visa quickly with our expert assistance.`,
  welcomeMessage: `Explore Australia's iconic cities, stunning beaches, and unique wildlife. From the Great Barrier Reef to Sydney Opera House, Australia offers unforgettable adventures for every traveler.`,
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
