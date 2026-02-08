// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const qatar: Country = {
  slug: 'qatar',
  name: 'Qatar',
  code: 'qa',
  region: 'Middle East',
  flagUrl: '/images/country/qatar/qatar-square.png',
  imageUrl: '/images/country/qatar/qatar-bg.jpg',
  roundedFlagUrl: '/images/country/qatar/qatar-rounded.png',
  description: `Apply for your Qatar eVisa online with United eVisa Services. Fast, secure, and convenient visa application for Qatar travel. Get your Qatar visa quickly with our expert assistance.`,
  welcomeMessage: `Experience Qatar's modern skyline, cultural heritage, and desert adventures. From Doha's museums to the Inland Sea, Qatar is a top destination for travelers.`,
  welcomeImgUrl: '/images/country/qatar/qatar-welcome.jpg',
  processingTime: {
    normal: '3 working days',
    superUrgent: '1 working day',
  },
  visaTypes: [
    {
      id: "qatar-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 90,
      allowedNationalities: ["AD", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BV", "BW", "BY", "BZ", "CA", "CC", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "PA", "PE", "PF", "PG", "PH", "PL", "PM", "PN", "PR", "PT", "PW", "PY", "RE", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]
    }
  ],
  info: {
    climate: 'Hot and arid',
    language: 'Arabic',
    currency: 'Qatari Riyal (QAR)',
  }
};

export default qatar;
