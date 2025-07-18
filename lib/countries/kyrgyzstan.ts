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
  description: `Apply for your Kyrgyzstan eVisa online with United eVisa. Fast, secure, and convenient visa application for Kyrgyzstan travel. Get your Kyrgyzstan visa quickly with our expert assistance.`,
  welcomeMessage: `Explore Kyrgyzstan's stunning mountains, nomadic culture, and scenic lakes. From Issyk-Kul to the Tien Shan, Kyrgyzstan is an adventure traveler's paradise.`,
  welcomeImgUrl: '/images/country/kyrgyzstan/kyrgyzstan-welcome.jpg',
  processingTime: {
    normal: '5 working days',
  },
  visaTypes: [
    {
      id: "kyrgyzstan-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 82,
      allowedNationalities: ["BD", "DZ", "EG", "IN", "JO", "LB", "LK", "MA", "NP", "PK", "TN", "VE", "ZA"]
    },
    {
      id: "kyrgyzstan-tourist-single-60-days",
      name: 'Tourist Evisa (Single Entry for 60 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 60 days',
      entry: 'Single Entry',
      visaDuration: 60,
      visaValidity: '60 days',
      govFee: 92,
      allowedNationalities: ["BD", "DZ", "EG", "IN", "JO", "LB", "LK", "MA", "NP", "PK", "TN", "VE", "ZA"]
    },
    {
      id: "kyrgyzstan-transit-single-5-days",
      name: 'Transit Evisa (Single Entry for 5 days)',
      type: 'Transit Evisa',
      description: 'Single Entry for 5 days',
      entry: 'Single Entry',
      visaDuration: 5,
      visaValidity: '60 days',
      govFee: 56,
      allowedNationalities: ["BD", "DZ", "EG", "IN", "JO", "LB", "LK", "MA", "NP", "PK", "TN", "VE", "ZA"]
    }
  ],
  info: {
    climate: 'Continental, with cold winters and hot summers',
    language: 'Kyrgyz, Russian',
    currency: 'Kyrgyzstani Som (KGS)',
  }
};

export default kyrgyzstan;
