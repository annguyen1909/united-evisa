// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const oman: Country = {
  slug: 'oman',
  name: 'Oman',
  code: 'om',
  region: 'Middle East',
  flagUrl: '/images/country/oman/oman-square.png',
  imageUrl: '/images/country/oman/oman-bg.jpg',
  roundedFlagUrl: '/images/country/oman/oman-rounded.png',
  description: `The Oman eVisa program, introduced in 2018 by the Royal Oman Police, was designed to simplify the online visa application process. It allows international travelers to enter Oman for tourism purposes.`,
  welcomeMessage: `Welcome to Oman! Wander the souks of Muscat, explore the dunes of the Wahiba Sands, and relax on the beaches of Salalah. Discover the beauty and traditions of this peaceful Gulf nation.`,
  welcomeImgUrl: '/images/country/oman/oman-welcome.jpg',
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
        name: 'Tourist Evisa',
        type: 'Tourist Evisa',
        description: '',
        entry: '',
        visaDuration: '',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 82,
        allowedNationalities: ["AD", "AF", "AG", "AL", "AM", "AO", "AR", "AS", "AT", "AU", "AZ", "BA", "BE", "BF", "BG", "BN", "BO", "BR", "BT", "BY", "CA", "CH", "CL", "CN", "CO", "CR", "CU", "CZ", "DE", "DK", "DM", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GE", "GN", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IR", "IS", "IT", "JP", "KZ", "LA", "LB", "LI", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MK", "ML", "MT", "MV", "MX", "MY", "NA", "NE", "NI", "NL", "NO", "NR", "NZ", "PA", "PE", "PL", "PT", "PY", "RO", "SC", "SE", "SG", "SI", "SK", "SM", "SN", "SR", "SV", "TH", "TJ", "TM", "TR", "TW", "US", "UY", "UZ", "VA", "VE", "VN", "ZA"]
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
    climate: 'Arid, hot summers and mild winters',
    language: 'Arabic',
    currency: 'Omani Rial (OMR)',
  }
};

export default oman;
