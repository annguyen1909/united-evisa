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
  description: `Apply for your Kazakhstan eVisa online with United eVisa Services. Fast, secure, and convenient visa application for Kazakhstan travel. Get your Kazakhstan visa quickly with our expert assistance.`,
  welcomeMessage: `Discover Kazakhstan's vast steppes, modern cities, and unique culture. From Almaty to the Charyn Canyon, Kazakhstan offers adventure and beauty for every traveler.`,
  welcomeImgUrl: '/images/country/kazakhstan/kazakhstan-welcome.jpg',
  processingTime: {
    normal: '3 working days',
    superUrgent: '5 hours',
  },
  visaTypes: [
    {
      id: "kazakhstan-business-single-30-days",
      name: 'Business Evisa (Single Entry for 30 days)',
      type: 'Business Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
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
      govFee: 110,
      allowedNationalities: ["AD", "AG", "AO", "BA", "BB", "BD", "BF", "BI", "BJ", "BN", "BO", "BT", "BW", "BZ", "CG", "CI", "CM", "CN", "CR", "CU", "DJ", "DM", "DO", "DZ", "EG", "ER", "ET", "FJ", "FM", "GA", "GD", "GH", "GM", "GN", "GW", "GY", "HK", "HN", "HT", "IN", "JM", "KE", "KH", "KI", "KM", "KN", "KP", "LA", "LB", "LC", "LK", "LR", "LS", "MA", "ME", "MG", "MH", "MK", "ML", "MO", "MR", "MU", "MV", "MW", "MZ", "NA", "NE", "NG", "NI", "NP", "NR", "PA", "PE", "PG", "PW", "PY", "RW", "SC", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TM", "TN", "TO", "TT", "TV", "TZ", "UG", "UY", "VE", "VU", "WS", "ZA", "ZM", "ZW"]
    },
  ],
  info: {
    climate: 'Continental, with hot summers and cold winters',
    language: 'Kazakh, Russian',
    currency: 'Tenge (KZT)',
  },
};

export default kazakhstan;
