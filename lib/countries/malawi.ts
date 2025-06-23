// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const malawi: Country = {
  slug: 'malawi',
  name: 'Malawi',
  region: 'Africa',
  code: 'mw',
  flagUrl: '/images/country/malawi/malawi-square.png',
  imageUrl: '/images/country/malawi/malawi-bg.jpg',
  roundedFlagUrl: '/images/country/malawi/malawi-rounded.png',
  description: `On September 13, 2022, Malawi introduced a user-friendly e-visa system to streamline the visa application process for international travelers. This online platform allows applicants to apply without visiting an embassy, making the process more accessible and efficient. The digital system speeds up travel authorization, providing a convenient way for visitors to enter the country.`,
  welcomeMessage: `Welcome to Malawi! Swim and snorkel in Lake Malawi, hike the Mulanje Massif, and explore the wildlife of Liwonde National Park. Experience the hospitality and charm of Malawi.`,
  welcomeImgUrl: '/images/country/malawi/malawi-welcome.jpg',
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
        name: 'Tourist Evisa (Single Entry for 90 days)',
        type: 'Tourist Evisa',
        description: 'Single Entry for 90 days',
        entry: 'Single Entry',
        visaDuration: '90 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 80,
        allowedNationalities: ["AD", "AE", "AF", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FM", "FR", "GA", "GB", "GE", "GH", "GL", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IN", "IQ", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MX", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PC", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "VU", "XK", "YE"]
      },
      {
        name: 'Tourist Evisa (Multiple Entries for 6 months)',
        type: 'Tourist Evisa',
        description: 'Multiple Entries for 6 months',
        entry: 'Multiple Entries',
        visaDuration: '6 months',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 180,
        allowedNationalities: ["AD", "AE", "AF", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FM", "FR", "GA", "GB", "GE", "GH", "GL", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IN", "IQ", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MX", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PC", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "VU", "XK", "YE"]
      },
      {
        name: 'Tourist Evisa (Multiple Entries for 12 months)',
        type: 'Tourist Evisa',
        description: 'Multiple Entries for 12 months',
        entry: 'Multiple Entries',
        visaDuration: '12 months',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 270,
        allowedNationalities: ["AD", "AE", "AF", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FM", "FR", "GA", "GB", "GE", "GH", "GL", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IN", "IQ", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MX", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PC", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "VU", "XK", "YE"]
      },
      {
        name: 'Transit Evisa (Single Entry for 7 days)',
        type: 'Transit Evisa',
        description: 'Single Entry for 7 days',
        entry: 'Single Entry',
        visaDuration: '7 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 80,
        allowedNationalities: ["AD", "AE", "AF", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FM", "FR", "GA", "GB", "GE", "GH", "GL", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IN", "IQ", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MX", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PC", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "VU", "XK", "YE"]
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
    climate: 'Subtropical, with a rainy season and a dry season',
    language: 'English, Chichewa',
    currency: 'Malawian Kwacha (MWK)',
  }
};

export default malawi;
