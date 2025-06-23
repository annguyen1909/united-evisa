// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const laos: Country = {
  slug: 'laos',
  name: 'Laos',
  region: 'Asia Pacific',
  code: 'la',
  flagUrl: '/images/country/laos/laos-square.png',
  imageUrl: '/images/country/laos/laos-bg.jpg',
  roundedFlagUrl: '/images/country/laos/laos-rounded.png',
  description: `Laos launched its eVisa system in July 2019, enabling travelers to apply for and receive a visa online prior to their visit. This electronic visa is available to citizens of eligible countries intending to travel to Laos for tourism purposes.`,
  welcomeMessage: `Welcome to Laos! Explore the ancient city of Luang Prabang, cruise the Mekong, and visit the mysterious Plain of Jars. Experience the serenity and traditions of Lao culture.`,
  welcomeImgUrl: '/images/country/laos/laos-welcome.jpg',
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
        name: 'Tourist Evisa (Single Entry for 30 days)',
        type: 'Tourist Evisa',
        description: 'Single Entry for 30 days',
        entry: 'Single Entry',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 81,
        allowedNationalities: ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BJ", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GM", "GQ", "GR", "GT", "GY", "HK", "HN", "HR", "HT", "HU", "IE", "IL", "IN", "IS", "IT", "JM", "JP", "KE", "KG", "KI", "KM", "KN", "KP", "KW", "KZ", "LC", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "NA", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SI", "SK", "SM", "SO", "ST", "SV", "TD", "TG", "TJ", "TL", "TM", "TN", "TR", "TT", "TV", "TW", "TZ", "UA", "US", "UY", "UZ", "VC", "VE", "VU", "WS", "XK", "YE", "ZA"]
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
    climate: 'Tropical monsoon, with a rainy and dry season',
    language: 'Lao',
    currency: 'Lao Kip (LAK)',
  }
};

export default laos;
