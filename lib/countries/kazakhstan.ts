// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const kazakhstan: Country = {
  slug: 'kazakhstan',
  name: 'Kazakhstan',
  region: 'Asia Pacific',
  code: 'kz',
  flagUrl: '/images/country/kazakhstan/kazakhstan-square.png',
  imageUrl: '/images/country/kazakhstan/kazakhstan-bg.jpg',
  roundedFlagUrl: '/images/country/kazakhstan/kazakhstan-rounded.png',
  description: `In 2019, the Government of Kazakhstan launched a streamlined and user-friendly electronic visa system for business, tourism, and medical travel. Citizens from 103 countries can obtain these e-visas via the migration service units under the Ministry of Internal Affairs. Entry and exit using an electronic visa are permitted only through designated checkpoints at Kazakhstan’s international airports.`,
  welcomeMessage: `Welcome to Kazakhstan! Discover the cosmopolitan city of Almaty, the futuristic capital of Astana (Nur-Sultan), and the breathtaking landscapes of the Altai Mountains and Charyn Canyon. Experience Kazakh hospitality and rich cultural traditions.`,
  welcomeImgUrl: '/images/country/kazakhstan/kazakhstan-welcome.jpg',
  visaTypes: [
    {
      id: "kazakhstan-business-single-30-days",
      name: 'Business Evisa (Single Entry for 30 days)',
      type: 'Business Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 90,
      allowedNationalities: ["AD", "AG", "AO", "BA", "BB", "BD", "BF", "BI", "BJ", "BN", "BO", "BT", "BW", "BZ", "CG", "CI", "CM", "CN", "CR", "CU", "DJ", "DM", "DO", "DZ", "EG", "ER", "ET", "FJ", "FM", "GA", "GD", "GH", "GM", "GN", "GW", "GY", "HK", "HN", "HT", "IN", "JM", "KE", "KH", "KI", "KM", "KN", "KP", "LA", "LB", "LC", "LK", "LR", "LS", "MA", "ME", "MG", "MH", "MK", "ML", "MO", "MR", "MU", "MV", "MW", "MZ", "NA", "NE", "NG", "NI", "NP", "NR", "PA", "PE", "PG", "PW", "PY", "RW", "SC", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TM", "TN", "TO", "TT", "TV", "TZ", "UG", "UY", "VE", "VU", "WS", "ZA", "ZM", "ZW"]
    },
    {
      id: "kazakhstan-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 110,
      allowedNationalities: ["AD", "AG", "AO", "BA", "BB", "BD", "BF", "BI", "BJ", "BN", "BO", "BT", "BW", "BZ", "CG", "CI", "CM", "CN", "CR", "CU", "DJ", "DM", "DO", "DZ", "EG", "ER", "ET", "FJ", "FM", "GA", "GD", "GH", "GM", "GN", "GW", "GY", "HK", "HN", "HT", "IN", "JM", "KE", "KH", "KI", "KM", "KN", "KP", "LA", "LB", "LC", "LK", "LR", "LS", "MA", "ME", "MG", "MH", "MK", "ML", "MO", "MR", "MU", "MV", "MW", "MZ", "NA", "NE", "NG", "NI", "NP", "NR", "PA", "PE", "PG", "PW", "PY", "RW", "SC", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TM", "TN", "TO", "TT", "TV", "TZ", "UG", "UY", "VE", "VU", "WS", "ZA", "ZM", "ZW"]
    },
    {
      id: "kazakhstan-treatment-single-30-days",
      name: 'Treatment Evisa (Single Entry for 30 days)',
      type: 'Treatment Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 110,
      allowedNationalities: ["AD", "AG", "AO", "BA", "BB", "BD", "BF", "BI", "BJ", "BN", "BO", "BT", "BW", "BZ", "CG", "CI", "CM", "CN", "CR", "CU", "DJ", "DM", "DO", "DZ", "EG", "ER", "ET", "FJ", "FM", "GA", "GD", "GH", "GM", "GN", "GW", "GY", "HK", "HN", "HT", "IN", "JM", "KE", "KH", "KI", "KM", "KN", "KP", "LA", "LB", "LC", "LK", "LR", "LS", "MA", "ME", "MG", "MH", "MK", "ML", "MO", "MR", "MU", "MV", "MW", "MZ", "NA", "NE", "NG", "NI", "NP", "NR", "PA", "PE", "PG", "PW", "PY", "RW", "SC", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TM", "TN", "TO", "TT", "TV", "TZ", "UG", "UY", "VE", "VU", "WS", "ZA", "ZM", "ZW"]
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
    climate: 'Continental, with hot summers and cold winters',
    language: 'Kazakh, Russian',
    currency: 'Tenge (KZT)',
  },
};

export default kazakhstan;
