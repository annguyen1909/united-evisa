// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const kyrgyzstan: Country = {
  slug: 'kyrgyzstan',
  name: 'Kyrgyzstan',
  region: 'Middle East',
  code: 'kg',
  flagUrl: '/images/country/kyrgyzstan/kyrgyzstan-square.png',
  imageUrl: '/images/country/kyrgyzstan/kyrgyzstan-bg.jpg',
  roundedFlagUrl: '/images/country/kyrgyzstan/kyrgyzstan-rounded.png',
  description: `The Kyrgyzstan visa is a single-entry permit intended solely for tourism, available to citizens of eligible countries. Applicants can receive their travel authorization within a few days, without the need to visit an embassy or consulate in person.`,
  welcomeMessage: `Welcome to Kyrgyzstan! Trek through the Tien Shan mountains, experience traditional yurt stays, and explore the vibrant city of Bishkek. Discover the warmth of Kyrgyz hospitality and the country's rich traditions.`,
  welcomeImgUrl: '/images/country/kyrgyzstan/kyrgyzstan-welcome.jpg',
  visaTypes: [
    {
      id: "kyrgyzstan-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: '30 days',
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 82,
      allowedNationalities: ["BD", "DZ", "EG", "IN", "JO", "LB", "LK", "MA", "NP", "PK", "TN", "VE", "ZA"]
    },
    {
      id: "kyrgyzstan-tourist-single-60-days",
      name: 'Tourist Evisa (Single Entry for 60 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 60 days',
      entry: 'Single Entry',
      visaDuration: '60 days',
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 92,
      allowedNationalities: ["BD", "DZ", "EG", "IN", "JO", "LB", "LK", "MA", "NP", "PK", "TN", "VE", "ZA"]
    },
    {
      id: "kyrgyzstan-transit-single-5-days",
      name: 'Transit Evisa (Single Entry for 5 days)',
      type: 'Transit Evisa',
      description: 'Single Entry for 5 days',
      entry: 'Single Entry',
      visaDuration: '5 days',
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 56,
      allowedNationalities: ["BD", "DZ", "EG", "IN", "JO", "LB", "LK", "MA", "NP", "PK", "TN", "VE", "ZA"]
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
    climate: 'Continental, with cold winters and hot summers',
    language: 'Kyrgyz, Russian',
    currency: 'Kyrgyzstani Som (KGS)',
  }
};

export default kyrgyzstan;
