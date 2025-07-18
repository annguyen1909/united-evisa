// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const mongolia: Country = {
  slug: 'mongolia',
  name: 'Mongolia',
  region: 'Asia Pacific',
  code: 'mn',
  flagUrl: '/images/country/mongolia/mongolia-square.png',
  imageUrl: '/images/country/mongolia/mongolia-bg.jpg',
  roundedFlagUrl: '/images/country/mongolia/mongolia-rounded.png',
  description: `Apply for your Mongolia eVisa online with United eVisa. Fast, secure, and convenient visa application for Mongolia travel. Get your Mongolia visa quickly with our expert assistance.`,
  welcomeMessage: `Experience Mongolia's vast steppes, nomadic culture, and stunning landscapes. From Ulaanbaatar to the Gobi Desert, Mongolia is an adventure traveler's dream.`,
  welcomeImgUrl: '/images/country/mongolia/mongolia-welcome.jpg',
  processingTime: {
    normal: '5 working days',
  },
  visaTypes: [
    {
      id: "mongolia-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 82,
      allowedNationalities: ["AD", "AG", "AL", "AM", "AO", "BA", "BB", "BG", "BI", "BJ", "BN", "BO", "BS", "BT", "BW", "BZ", "CD", "CG", "CI", "CN", "CO", "CR", "CU", "CV", "DJ", "DM", "ER", "ET", "FJ", "FM", "GA", "GD", "GH", "GM", "GN", "GQ", "GT", "GW", "GY", "HN", "HT", "IN", "JM", "KE", "KH", "KI", "KM", "KN", "KW", "LC", "LS", "MD", "ME", "MG", "MH", "MK", "MR", "MU", "MW", "MX", "MZ", "NA", "NI", "NP", "NR", "PA", "PG", "PW", "PY", "RW", "SA", "SB", "SC", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TG", "TL", "TO", "TT", "TV", "TW", "TZ", "UG", "VA", "VC", "VE", "VN", "VU", "WS", "ZA", "ZM", "ZW"]
    },
    {
      id: "mongolia-transit-single-2-days",
      name: 'Transit Evisa (Single Entry for 2 days)',
      type: 'Transit Evisa',
      description: 'Single Entry for 2 days',
      entry: 'Single Entry',
      visaDuration: 2,
      visaValidity: '60 days',
      govFee: 56,
      allowedNationalities: ["AD", "AG", "AL", "AM", "AO", "BA", "BB", "BG", "BI", "BJ", "BN", "BO", "BS", "BT", "BW", "BZ", "CD", "CG", "CI", "CN", "CO", "CR", "CU", "CV", "DJ", "DM", "ER", "ET", "FJ", "FM", "GA", "GD", "GH", "GM", "GN", "GQ", "GT", "GW", "GY", "HN", "HT", "IN", "JM", "KE", "KH", "KI", "KM", "KN", "KW", "LC", "LS", "MD", "ME", "MG", "MH", "MK", "MR", "MU", "MW", "MX", "MZ", "NA", "NI", "NP", "NR", "PA", "PG", "PW", "PY", "RW", "SA", "SB", "SC", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TG", "TL", "TO", "TT", "TV", "TW", "TZ", "UG", "VA", "VC", "VE", "VN", "VU", "WS", "ZA", "ZM", "ZW"]
    }
  ],
  info: {
    climate: 'Continental, with cold winters and warm summers',
    language: 'Mongolian',
    currency: 'Tögrög (MNT)',
  }
};

export default mongolia;
