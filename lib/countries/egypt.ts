// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const egypt: Country = {
  slug: 'egypt',
  name: 'Egypt',
  region: 'Africa',
  code: 'eg',
  flagUrl: '/images/country/egypt/egypt-square.png',
  imageUrl: '/images/country/egypt/egypt-bg.jpg',
  roundedFlagUrl: '/images/country/egypt/egypt-rounded.png',
  description: `The Egyptian government launched an electronic visa system on December 3, 2017, to simplify the travel process for tourists.`,
  welcomeMessage: `Welcome to Egypt! Explore the treasures of Cairo, cruise the Nile to Luxor and Aswan, and marvel at the temples of Abu Simbel. Experience the hospitality and rich traditions of the Egyptian people.`,
  welcomeImgUrl: '/images/country/egypt/egypt-welcome.jpg',
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
        govFee: 75,
        allowedNationalities: ["AE", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CN", "CO", "CY", "CZ", "DE", "DK", "EC", "EE", "ES", "FI", "FR", "GB", "GE", "GR", "HK", "HR", "HU", "IE", "IN", "IS", "IT", "JP", "KR", "KW", "KZ", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NL", "NO", "NZ", "OM", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SM", "TW", "UA", "US", "UY", "VA", "VE", "XK", "ZA"]
      },
      {
        name: 'Tourist Evisa (Multiple Entries for 30 days)',
        type: 'Tourist Evisa',
        description: 'Multiple Entries for 30 days',
        entry: 'Multiple Entries',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 110,
        allowedNationalities: ["AE", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CN", "CO", "CY", "CZ", "DE", "DK", "EC", "EE", "ES", "FI", "FR", "GB", "GE", "GR", "HK", "HR", "HU", "IE", "IN", "IS", "IT", "JP", "KR", "KW", "KZ", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NL", "NO", "NZ", "OM", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SM", "TW", "UA", "US", "UY", "VA", "VE", "XK", "ZA"]
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
    climate: 'Desert, hot and dry',
    language: 'Modern Standard Arabic',
    currency: 'Egyptian Pound (EGP)',
  },
};

export default egypt;
