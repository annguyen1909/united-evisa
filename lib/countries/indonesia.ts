// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const indonesia: Country = {
  slug: 'indonesia',
  name: 'Indonesia',
  region: 'Asia Pacific',
  code: 'id',
  flagUrl: '/images/country/indonesia/indonesia-square.png',
  imageUrl: '/images/country/indonesia/indonesia-bg.jpg',
  roundedFlagUrl: '/images/country/indonesia/indonesia-rounded.png',
  description: `In 2020, Indonesia’s Ministry of Law and Human Rights launched the electronic visa (eVisa) system, allowing eligible travelers to apply online for short-term tourism, visiting family or friends, or attending meetings as participants.`,
  welcomeMessage: `Welcome to Indonesia! Dive into the turquoise waters of Bali, trek through the jungles of Sumatra, or explore the ancient temples of Yogyakarta. Enjoy delicious cuisine, traditional dances, and the warmth of Indonesian hospitality.`,
  welcomeImgUrl: '/images/country/indonesia/indonesia-welcome.jpg',
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
        govFee: 62,
        allowedNationalities: ["AD", "AE", "AL", "AM", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BN", "BR", "BY", "CA", "CH", "CL", "CN", "CO", "CY", "CZ", "DE", "DK", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HR", "HU", "IE", "IN", "IS", "IT", "JO", "JP", "KE", "KH", "KR", "KW", "KZ", "LA", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MV", "MX", "MY", "MZ", "NL", "NO", "NZ", "OM", "PA", "PE", "PG", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "RW", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "SR", "TH", "TL", "TN", "TR", "TW", "TZ", "UA", "US", "UZ", "VA", "VE", "VN", "ZA"]
      },
      {
        name: 'Tourist Evisa (Single Entry for 60 days)',
        type: 'Tourist Evisa',
        description: 'Single Entry for 60 days',
        entry: 'Single Entry',
        visaDuration: '60 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 126,
        allowedNationalities: ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BN", "BR", "BY", "CA", "CH", "CL", "CN", "CO", "CY", "CZ", "DE", "DK", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HR", "HU", "IE", "IN", "IS", "IT", "JO", "JP", "KE", "KH", "KR", "KW", "KZ", "LA", "LI", "LT", "LU", "LV", "MA", "MC", "MO", "MT", "MV", "MX", "MY", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PK", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "RW", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "SR", "SY", "TH", "TL", "TN", "TR", "TW", "UA", "US", "UZ", "VA", "VE", "VN", "ZA"]
      },
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
    climate: 'Tropical, hot and humid',
    language: 'Indonesian (Bahasa Indonesia)',
    currency: 'Indonesian Rupiah (IDR)',
  },
};

export default indonesia;
