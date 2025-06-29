// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const azerbaijan: Country = {
  slug: 'azerbaijan',
  name: 'Azerbaijan',
  region: 'Asia Pacific',
  code: 'az',
  flagUrl: '/images/country/azerbaijan/azerbaijan-square.png',
  imageUrl: '/images/country/azerbaijan/azerbaijan-bg.jpg',
  roundedFlagUrl: '/images/country/azerbaijan/azerbaijan-rounded.png',
  description: `The Azerbaijan eVisa system was introduced on January 10, 2017. This online visa system allows citizens of certain countries to apply for and obtain an electronic visa to Azerbaijan before their travel, without having to visit an Embassy in person. It has simplified the visa application process for eligible travelers, making it more convenient and efficient.`,
  welcomeMessage: `Welcome to Azerbaijan! Wander the old city of Baku, visit the mud volcanoes, and explore the Caspian Sea coastline. Experience Azerbaijani hospitality and unique cuisine.`,
  welcomeImgUrl: '/images/country/azerbaijan/azerbaijan-welcome.jpg',
  visaTypes: [
    {
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: '30 days',
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 50,
      allowedNationalities: ["AD", "AL", "AR", "AT", "AU", "BA", "BB", "BE", "BG", "BH", "BN", "BO", "BR", "BS", "CA", "CH", "CL", "CN", "CO", "CR", "CU", "CY", "CZ", "DE", "DJ", "DK", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IR", "IS", "IT", "JM", "JO", "JP", "KR", "KW", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MN", "MT", "MU", "MV", "MX", "MY", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PK", "PL", "PT", "PY", "RO", "RS", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "TH", "TM", "TT", "US", "VA", "VN", "ZA"]
    },
    {
      name: 'Business Evisa (Single Entry for 30 days)',
      entry: 'Single Entry',
      type: 'Business Evisa',
      description: 'Single Entry for 30 days',
      visaDuration: '30 days',
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 50,
      allowedNationalities: ["AD", "AL", "AR", "AT", "AU", "BA", "BB", "BE", "BG", "BH", "BN", "BO", "BR", "BS", "CA", "CH", "CL", "CN", "CO", "CR", "CU", "CY", "CZ", "DE", "DJ", "DK", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IR", "IS", "IT", "JM", "JO", "JP", "KR", "KW", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MN", "MT", "MU", "MV", "MX", "MY", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PK", "PL", "PT", "PY", "RO", "RS", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "TH", "TM", "TT", "US", "VA", "VN", "ZA"]
    },
    {
      name: 'Treatment Evisa (Single Entry for 30 days)',
      entry: 'Single Entry',
      type: 'Treatment Evisa',
      description: 'Single Entry for 30 days',
      visaDuration: '30 days',
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 50,
      allowedNationalities: ["AD", "AL", "AR", "AT", "AU", "BA", "BB", "BE", "BG", "BH", "BN", "BO", "BR", "BS", "CA", "CH", "CL", "CN", "CO", "CR", "CU", "CY", "CZ", "DE", "DJ", "DK", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IR", "IS", "IT", "JM", "JO", "JP", "KR", "KW", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MN", "MT", "MU", "MV", "MX", "MY", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PK", "PL", "PT", "PY", "RO", "RS", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "TH", "TM", "TT", "US", "VA", "VN", "ZA"]
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
    climate: 'Varied: subtropical, continental, and mountainous',
    language: 'Azerbaijani',
    currency: 'Azerbaijani Manat (AZN)',
  },
};

export default azerbaijan;
