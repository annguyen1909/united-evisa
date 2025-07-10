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
  description: `The Mongolia eVisa has been available since June 1, 2021, offering travelers from over 98 countries the convenience of applying online to visit the country.`,
  welcomeMessage: `Welcome to Mongolia! Experience the hospitality of nomadic herders, ride horses across endless grasslands, and discover the ancient capital of Karakorum. Marvel at the sand dunes of the Gobi Desert and the pristine beauty of Lake Khövsgöl.`,
  welcomeImgUrl: '/images/country/mongolia/mongolia-welcome.jpg',
  visaTypes: [
    {
      id: "mongolia-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
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
      expectedProcessingTime: '2 days',
      govFee: 56,
      allowedNationalities: ["AD", "AG", "AL", "AM", "AO", "BA", "BB", "BG", "BI", "BJ", "BN", "BO", "BS", "BT", "BW", "BZ", "CD", "CG", "CI", "CN", "CO", "CR", "CU", "CV", "DJ", "DM", "ER", "ET", "FJ", "FM", "GA", "GD", "GH", "GM", "GN", "GQ", "GT", "GW", "GY", "HN", "HT", "IN", "JM", "KE", "KH", "KI", "KM", "KN", "KW", "LC", "LS", "MD", "ME", "MG", "MH", "MK", "MR", "MU", "MW", "MX", "MZ", "NA", "NI", "NP", "NR", "PA", "PG", "PW", "PY", "RW", "SA", "SB", "SC", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TG", "TL", "TO", "TT", "TV", "TW", "TZ", "UG", "VA", "VC", "VE", "VN", "VU", "WS", "ZA", "ZM", "ZW"]
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
    climate: 'Continental, with cold winters and warm summers',
    language: 'Mongolian',
    currency: 'Tögrög (MNT)',
  }
};

export default mongolia;
