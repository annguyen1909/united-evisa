import { Country } from "./type";

const uzbekistan: Country = {
  slug: 'uzbekistan',
  name: 'Uzbekistan',
  code: 'uz',
  region: 'Middle East',
  flagUrl: '/images/country/uzbekistan/uzbekistan-square.png',
  imageUrl: '/images/country/uzbekistan/uzbekistan-bg.jpg',
  roundedFlagUrl: '/images/country/uzbekistan/uzbekistan-rounded.png',
  description: `The Uzbekistan eVisa system was introduced in July 2018 by the Uzbekistani government, allowing citizens of 101 countries to apply online. This digital visa is issued for purposes of tourism or business activities.`,
  welcomeMessage: `Welcome to Uzbekistan! Wander the blue-tiled streets of Samarkand, explore the old city of Bukhara, and experience the hospitality of the Uzbek people. Discover the legacy of the Silk Road.`,
  welcomeImgUrl: '/images/country/uzbekistan/uzbekistan-welcome.jpg',
  etaInfo: {
    processing: {
      summary: 'Apply Online In 3 Steps',
      steps: [
        'Fill in the online form on our website.',
        'Pay the eVisa fee online — via credit card, debit card, PayPal, or bank transfer.',
        'Get your eVisa sent to your email.',
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
        govFee: 50,
        allowedNationalities: ["AL", "AO", "BD", "BH", "BO", "BT", "CI", "CN", "CO", "DZ", "EC", "EG", "FJ", "FM", "GW", "GY", "HK", "IN", "IR", "JO", "KH", "KI", "KP", "KW", "LA", "LB", "LK", "MA", "MH", "MK", "MU", "MV", "NP", "NR", "OM", "PE", "PH", "PW", "PY", "QA", "SA", "SB", "SC", "SR", "TH", "TN", "TO", "US", "UY", "VE", "VN", "VU", "WS"]
      },
      {
        name: 'Tourist Evisa (Double Entries for 30 days)',
        type: 'Tourist Evisa',
        description: 'Double Entries for 30 days',
        entry: 'Double Entries',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 65,
        allowedNationalities: ["AL", "AO", "BD", "BH", "BO", "BT", "CI", "CN", "CO", "DZ", "EC", "EG", "FJ", "FM", "GW", "GY", "HK", "IN", "IR", "JO", "KH", "KI", "KP", "KW", "LA", "LB", "LK", "MA", "MH", "MK", "MU", "MV", "NP", "NR", "OM", "PE", "PH", "PW", "PY", "QA", "SA", "SB", "SC", "SR", "TH", "TN", "TO", "US", "UY", "VE", "VN", "VU", "WS"]
      },
      {
        name: 'Tourist Evisa (Multiple Entries for 30 days)',
        type: 'Tourist Evisa',
        description: 'Multiple Entries for 30 days',
        entry: 'Multiple Entries',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 80,
        allowedNationalities: ["AL", "AO", "BD", "BH", "BO", "BT", "CI", "CN", "CO", "DZ", "EC", "EG", "FJ", "FM", "GW", "GY", "HK", "IN", "IR", "JO", "KH", "KI", "KP", "KW", "LA", "LB", "LK", "MA", "MH", "MK", "MU", "MV", "NP", "NR", "OM", "PE", "PH", "PW", "PY", "QA", "SA", "SB", "SC", "SR", "TH", "TN", "TO", "US", "UY", "VE", "VN", "VU", "WS"]
      },
      {
        name: 'Business Evisa (Single Entry for 30 days)',
        type: 'Business Evisa',
        description: 'Single Entry for 30 days',
        entry: 'Single Entry',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 50,
        allowedNationalities: ["AL", "AO", "BD", "BH", "BO", "BT", "CI", "CN", "CO", "DZ", "EC", "EG", "FJ", "FM", "GW", "GY", "HK", "IN", "IR", "JO", "KH", "KI", "KP", "KW", "LA", "LB", "LK", "MA", "MH", "MK", "MU", "MV", "NP", "NR", "OM", "PE", "PH", "PW", "PY", "QA", "SA", "SB", "SC", "SR", "TH", "TN", "TO", "US", "UY", "VE", "VN", "VU", "WS"]
      },
      {
        name: 'Business Evisa (Double Entries for 30 days)',
        type: 'Business Evisa',
        description: 'Double Entries for 30 days',
        entry: 'Double Entries',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 65,
        allowedNationalities: ["AL", "AO", "BD", "BH", "BO", "BT", "CI", "CN", "CO", "DZ", "EC", "EG", "FJ", "FM", "GW", "GY", "HK", "IN", "IR", "JO", "KH", "KI", "KP", "KW", "LA", "LB", "LK", "MA", "MH", "MK", "MU", "MV", "NP", "NR", "OM", "PE", "PH", "PW", "PY", "QA", "SA", "SB", "SC", "SR", "TH", "TN", "TO", "US", "UY", "VE", "VN", "VU", "WS"]
      },
      {
        name: 'Business Evisa (Multiple Entries for 30 days)',
        type: 'Business Evisa',
        description: 'Multiple Entries for 30 days',
        entry: 'Multiple Entries',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 80,
        allowedNationalities: ["AL", "AO", "BD", "BH", "BO", "BT", "CI", "CN", "CO", "DZ", "EC", "EG", "FJ", "FM", "GW", "GY", "HK", "IN", "IR", "JO", "KH", "KI", "KP", "KW", "LA", "LB", "LK", "MA", "MH", "MK", "MU", "MV", "NP", "NR", "OM", "PE", "PH", "PW", "PY", "QA", "SA", "SB", "SC", "SR", "TH", "TN", "TO", "US", "UY", "VE", "VN", "VU", "WS"]
      },
    ],
    serviceFee: 49.99,
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
    climate: 'Continental, with hot summers and cold winters',
    language: 'Uzbek',
    currency: 'Uzbekistani Som (UZS)',
  },
};

export default uzbekistan