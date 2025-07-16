// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const armenia: Country = {
  slug: 'armenia',
  name: 'Armenia',
  region: 'Asia Pacific',
  code: 'am',
  flagUrl: '/images/country/armenia/armenia-square.png',
  imageUrl: '/images/country/armenia/armenia-bg.jpg',
  roundedFlagUrl: '/images/country/armenia/armenia-rounded.png',
  description: `Armenia eVisa is a single-entry electronic travel document for visitors to enter Armenia freely in an amount of time. This kind of eVisa was introduced and applied on January 1st, 2019 for a number of nationalities to obtain one in a few days. Travelers can use Armenia eVisa for different purposes including business and tourism.`,
  welcomeMessage: `Welcome to Armenia! Visit the ancient churches of Echmiadzin, hike the scenic trails of Dilijan, and explore the vibrant capital Yerevan. Experience Armenian hospitality and culture.`,
  welcomeImgUrl: '/images/country/armenia/armenia-welcome.jpg',
  processingTime: {
    normal: '5 working days',
  },
  visaTypes: [
    {
      id: "armenia-tourist-single-21-days",
      name: 'Tourist Evisa (Single Entry for 21 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 21 days',
      entry: 'Single Entry',
      visaDuration: 21,
      visaValidity: '60 days',
      govFee: 36,
      allowedNationalities: ["AG", "BA", "BB", "BH", "BN", "BO", "BS", "BT", "BZ", "CA", "CL", "CO", "CR", "CU", "DM", "DOM", "DZ", "EG", "FJ", "FM", "GD", "GT", "GY", "HN", "HT", "ID", "IL", "IN", "IQ", "JM", "JO", "KH", "KI", "KN", "KP", "LA", "LB", "LC", "MA", "MH", "MK", "MN", "MV", "MX", "MY", "NI", "NR", "OM", "PA", "PE", "PG", "PH", "PW", "PY", "SA", "SB", "SR", "SV", "TH", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "VC", "VE", "VN", "VU", "WS", "ZA"]
    },
    {
      id: "armenia-tourist-single-120-days",
      name: 'Tourist Evisa (Single Entry for 120 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 120 days',
      entry: 'Single Entry',
      visaDuration: 120,
      visaValidity: '60 days',
      govFee: 60,
      allowedNationalities: ["AG", "BA", "BB", "BH", "BN", "BO", "BS", "BT", "BZ", "CA", "CL", "CO", "CR", "CU", "DM", "DOM", "DZ", "EG", "FJ", "FM", "GD", "GT", "GY", "HN", "HT", "ID", "IL", "IN", "IQ", "JM", "JO", "KH", "KI", "KN", "KP", "LA", "LB", "LC", "MA", "MH", "MK", "MN", "MV", "MX", "MY", "NI", "NR", "OM", "PA", "PE", "PG", "PH", "PW", "PY", "SA", "SB", "SR", "SV", "TH", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "VC", "VE", "VN", "VU", "WS", "ZA"]
    },
    {
      id: "armenia-business-single-21-days",
      name: 'Business Evisa (Single Entry for 21 days)',
      entry: 'Single Entry',
      type: 'Business Evisa',
      description: 'Single Entry for 21 days',
      visaDuration: 21,
      visaValidity: '60 days',
      govFee: 30,
      allowedNationalities: ["AG", "BA", "BB", "BH", "BN", "BO", "BS", "BT", "BZ", "CA", "CL", "CO", "CR", "CU", "DM", "DOM", "DZ", "EG", "FJ", "FM", "GD", "GT", "GY", "HN", "HT", "ID", "IL", "IN", "IQ", "JM", "JO", "KH", "KI", "KN", "KP", "LA", "LB", "LC", "MA", "MH", "MK", "MN", "MV", "MX", "MY", "NI", "NR", "OM", "PA", "PE", "PG", "PH", "PW", "PY", "SA", "SB", "SR", "SV", "TH", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "VC", "VE", "VN", "VU", "WS", "ZA"]
    },
    {
      id: "armenia-business-single-120-days",
      name: 'Business Evisa (Single Entry for 120 days)',
      entry: 'Single Entry',
      type: 'Business Evisa',
      description: 'Single Entry for 120 days',
      visaDuration: 120,
      visaValidity: '60 days',
      govFee: 30,
      allowedNationalities: ["AG", "BA", "BB", "BH", "BN", "BO", "BS", "BT", "BZ", "CA", "CL", "CO", "CR", "CU", "DM", "DOM", "DZ", "EG", "FJ", "FM", "GD", "GT", "GY", "HN", "HT", "ID", "IL", "IN", "IQ", "JM", "JO", "KH", "KI", "KN", "KP", "LA", "LB", "LC", "MA", "MH", "MK", "MN", "MV", "MX", "MY", "NI", "NR", "OM", "PA", "PE", "PG", "PH", "PW", "PY", "SA", "SB", "SR", "SV", "TH", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "VC", "VE", "VN", "VU", "WS", "ZA"]
    },
  ],
  info: {
    climate: 'Continental, with hot summers and cold winters',
    language: 'Armenian',
    currency: 'Armenian Dram (AMD)',
  },
};

export default armenia;
