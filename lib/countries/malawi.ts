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
  visaTypes: [
    {
      id: "malawi-tourist-single-90-days",
      name: 'Tourist Evisa (Single Entry for 90 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 90 days',
      entry: 'Single Entry',
      visaDuration: 90,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 80,
      allowedNationalities: ["AD", "AE", "AF", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FM", "FR", "GA", "GB", "GE", "GH", "GL", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IN", "IQ", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MX", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PC", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "VU", "XK", "YE"]
    },
    {
      id: "malawi-tourist-multiple-6-months",
      name: 'Tourist Evisa (Multiple Entries for 6 months)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 6 months',
      entry: 'Multiple Entries',
      visaDuration: 180,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 180,
      allowedNationalities: ["AD", "AE", "AF", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FM", "FR", "GA", "GB", "GE", "GH", "GL", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IN", "IQ", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MX", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PC", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "VU", "XK", "YE"]
    },
    {
      id: "malawi-tourist-multiple-12-months",
      name: 'Tourist Evisa (Multiple Entries for 12 months)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 12 months',
      entry: 'Multiple Entries',
      visaDuration: 365,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 270,
      allowedNationalities: ["AD", "AE", "AF", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FM", "FR", "GA", "GB", "GE", "GH", "GL", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IN", "IQ", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MX", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PC", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "VU", "XK", "YE"]
    },
    {
      id: "malawi-transit-single-7-days",
      name: 'Transit Evisa (Single Entry for 7 days)',
      type: 'Transit Evisa',
      description: 'Single Entry for 7 days',
      entry: 'Single Entry',
      visaDuration: 7,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 80,
      allowedNationalities: ["AD", "AE", "AF", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FM", "FR", "GA", "GB", "GE", "GH", "GL", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IN", "IQ", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MX", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PC", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "VU", "XK", "YE"]
    }
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
    climate: 'Subtropical, with a rainy season and a dry season',
    language: 'English, Chichewa',
    currency: 'Malawian Kwacha (MWK)',
  }
};

export default malawi;
