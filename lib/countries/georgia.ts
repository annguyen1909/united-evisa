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
  description: `Introduced in 2015, Georgia’s eVisa system was created to simplify the visa application process. It allows eligible foreign nationals to apply online for short-term stays (up to 90 days) for tourism or other non-paid activities within the country.`,
  welcomeMessage: `Welcome to Georgia! Wander the cobbled streets of Tbilisi, hike the majestic Caucasus Mountains, and savor traditional Georgian cuisine and wine. Experience the warmth of Georgian hospitality and the country's rich cultural heritage.`,
  welcomeImgUrl: '/images/country/georgia/georgia-welcome.jpg',
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
    visaTypes: [
      {
        name: 'Tourist Evisa (Multiple Entries for 30 days)',
        type: 'Tourist Evisa',
        description: 'Multiple Entries for 30 days',
        entry: 'Multiple Entries',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 50,
        allowedNationalities: ["AO", "BF", "BI", "BJ", "BO", "BT", "CD", "CN", "CU", "CV", "DJ", "DM", "EG", "ER", "ET", "FM", "GQ", "GT", "GW", "GY", "HK", "HT", "ID", "IN", "JM", "KI", "KM", "KN", "KP", "LA", "LC", "LS", "MG", "MH", "MN", "MO", "MV", "MW", "MZ", "NA", "PE", "PG", "PH", "PW", "RW", "SB", "SR", "ST", "TG", "TL", "TO", "TT", "TV", "TW", "VN", "VU", "WS", "ZM", "ZW"]
      },
      {
        name: 'Business Evisa (Multiple Entries for 30 days)',
        type: 'Business Evisa',
        description: 'Multiple Entries for 30 days',
        entry: 'Multiple Entries',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 50,
        allowedNationalities: ["AO", "BF", "BI", "BJ", "BO", "BT", "CD", "CN", "CU", "CV", "DJ", "DM", "EG", "ER", "ET", "FM", "GQ", "GT", "GW", "GY", "HK", "HT", "ID", "IN", "JM", "KI", "KM", "KN", "KP", "LA", "LC", "LS", "MG", "MH", "MN", "MO", "MV", "MW", "MZ", "NA", "PE", "PG", "PH", "PW", "RW", "SB", "SR", "ST", "TG", "TL", "TO", "TT", "TV", "TW", "VN", "VU", "WS", "ZM", "ZW"]
      }
    ],
    serviceFee: 49.99, // or use a number if fixed
  },

  visaServicePackage: [
    'Entry visa for a short period',
    'Application form filling assistance',
    'Travel insurance consultant',
    'Portal for real-time visa updates',
    '24/7 online support team for any issues',
    'Urgent case support, with added fees',
  ],
  gvcSupport: {
    description: 'Apply Visa at GVC — with many years of experience, GVC simplifies the process.',
    services: [
      'Consulting about the eVisa',
      "Receiving & checking the applicant's information",
      'Informing the status and results',
      'Collecting the eVisa from the authorities',
      'Sending it to the applicant',
    ],
    note: 'You can also apply on your own through the government website to save your budget.',
  },
  info: {
    climate: 'Varied: subtropical on the Black Sea coast, alpine in the mountains',
    language: 'Georgian',
    currency: 'Georgian Lari (GEL)',
  },
};

export default georgia;
