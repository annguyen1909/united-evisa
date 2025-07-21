// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const Moldova: Country = {
  slug: 'moldova',
  name: 'Moldova',
  region: 'Europe',
  code: 'md',
  flagUrl: '/images/country/moldova/moldova-square.png',
  imageUrl: '/images/country/moldova/moldova-bg.jpg',
  roundedFlagUrl: '/images/country/moldova/moldova-rounded.png',
  description: `Apply for your Moldova eVisa online with Worldmaxxing Global Services. Fast, secure, and convenient visa application for Moldova travel. Get your Moldova visa quickly with our expert assistance.`,
  welcomeMessage: `Discover Moldova's charming villages, vineyards, and rich history. From Chisinau to the Orheiul Vechi Monastery, Moldova is a hidden gem for travelers.`,
  welcomeImgUrl: '/images/country/moldova/moldova-welcome.jpg',
  processingTime: {
    normal: '5 working days',
  },
  visaTypes: [
    {
      id: "moldova-tourist-multiple-90-days",
      name: 'Tourist Evisa (Multiple Entries for 90 days)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 90 days',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 73,
      allowedNationalities: ["AF", "AO", "BD", "BF", "BH", "BI", "BJ", "BO", "BT", "BW", "BZ", "CD", "CG", "CI", "CM", "CN", "CV", "DJ", "DM", "DZ", "EG", "ER", "ET", "FJ", "GA", "GH", "GM", "GN", "GQ", "GW", "GY", "HK", "HT", "HU", "ID", "IN", "IQ", "IR", "JM", "JO", "KE", "KH", "KM", "KP", "KW", "LA", "LB", "LK", "LR", "LS", "MA", "MG", "ML", "MN", "MR", "MV", "MW", "MZ", "NA", "NE", "NG", "NP", "NR", "OM", "PG", "PH", "PK", "PS", "QA", "RW", "SA", "SL", "SN", "SO", "SR", "ST", "SY", "SZ", "TD", "TG", "TH", "TM", "TN", "TZ", "UG", "VN", "YE", "ZA", "ZM", "ZW"]
    },
    {
      id: "moldova-business-multiple-90-days",
      name: 'Business Evisa (Multiple Entries for 90 days)',
      type: 'Business Evisa',
      description: 'Multiple Entries for 90 days',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 73,
      allowedNationalities: ["AF", "AO", "BD", "BF", "BH", "BI", "BJ", "BO", "BT", "BW", "BZ", "CD", "CG", "CI", "CM", "CN", "CV", "DJ", "DM", "DZ", "EG", "ER", "ET", "FJ", "GA", "GH", "GM", "GN", "GQ", "GW", "GY", "HK", "HT", "HU", "ID", "IN", "IQ", "IR", "JM", "JO", "KE", "KH", "KM", "KP", "KW", "LA", "LB", "LK", "LR", "LS", "MA", "MG", "ML", "MN", "MR", "MV", "MW", "MZ", "NA", "NE", "NG", "NP", "NR", "OM", "PG", "PH", "PK", "PS", "QA", "RW", "SA", "SL", "SN", "SO", "SR", "ST", "SY", "SZ", "TD", "TG", "TH", "TM", "TN", "TZ", "UG", "VN", "YE", "ZA", "ZM", "ZW"]
    }
  ],
  info: {
    climate: 'Temperate, continental',
    language: 'Moldovan, Russian, English',
    currency: 'Mondovan Leu (MDL)',
  },
};

export default Moldova;
