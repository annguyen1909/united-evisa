// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const georgia: Country = {
  slug: 'georgia',
  name: 'Georgia',
  region: 'Asia Pacific',
  code: 'ge',
  flagUrl: '/images/country/georgia/georgia-square.png',
  imageUrl: '/images/country/georgia/georgia-bg.jpg',
  roundedFlagUrl: '/images/country/georgia/georgia-rounded.png',
  description: `Apply for your Georgia eVisa online with Worldmaxxing Global Services. Fast, secure, and convenient visa application for Georgia travel. Get your Georgia visa quickly with our expert assistance.`,
  welcomeMessage: `Explore Georgia's breathtaking mountains, ancient cities, and vibrant culture. From Tbilisi's old town to the Caucasus peaks, Georgia is a hidden gem for travelers.`,
  welcomeImgUrl: '/images/country/georgia/georgia-welcome.jpg',
  processingTime: {
    normal: '3 working days',
    superUrgent: '5 hours',
  },
  visaTypes: [
    {
      id: "georgia-tourist-multiple-30-days",
      name: 'Tourist Evisa (Multiple Entries for 30 days)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 30 days',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 50,
      allowedNationalities: ["AO", "BF", "BI", "BJ", "BO", "BT", "CD", "CN", "CU", "CV", "DJ", "DM", "EG", "ER", "ET", "FM", "GQ", "GT", "GW", "GY", "HK", "HT", "ID", "IN", "JM", "KI", "KM", "KN", "KP", "LA", "LC", "LS", "MG", "MH", "MN", "MO", "MV", "MW", "MZ", "NA", "PE", "PG", "PH", "PW", "RW", "SB", "SR", "ST", "TG", "TL", "TO", "TT", "TV", "TW", "VN", "VU", "WS", "ZM", "ZW"]
    },
    {
      id: "georgia-business-multiple-30-days",
      name: 'Business Evisa (Multiple Entries for 30 days)',
      type: 'Business Evisa',
      description: 'Multiple Entries for 30 days',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 50,
      allowedNationalities: ["AO", "BF", "BI", "BJ", "BO", "BT", "CD", "CN", "CU", "CV", "DJ", "DM", "EG", "ER", "ET", "FM", "GQ", "GT", "GW", "GY", "HK", "HT", "ID", "IN", "JM", "KI", "KM", "KN", "KP", "LA", "LC", "LS", "MG", "MH", "MN", "MO", "MV", "MW", "MZ", "NA", "PE", "PG", "PH", "PW", "RW", "SB", "SR", "ST", "TG", "TL", "TO", "TT", "TV", "TW", "VN", "VU", "WS", "ZM", "ZW"]
    }
  ],
  info: {
    climate: 'Varied: subtropical on the Black Sea coast, alpine in the mountains',
    language: 'Georgian',
    currency: 'Georgian Lari (GEL)',
  },
};

export default georgia;
