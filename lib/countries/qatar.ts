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
  description: `The Government of Qatar introduced the Qatar eVisa on June 23, 2017, allowing citizens of various countries to apply for a visa online for tourism purposes. The entire application process is digital, and the eVisa is typically issued within a few days.`,
  welcomeMessage: `Qatar is a captivating Middle Eastern country known for its striking modern skyline, deep-rooted cultural heritage, and exceptional hospitality. Discover the dynamic city of Doha, where futuristic skyscrapers stand alongside lively souks and upscale shopping malls. Experience the country's rich culture through landmarks like the Museum of Islamic Art and the historic pearl diving traditions at the Pearl-Qatar. Savor the bold flavors of Qatari cuisine—from grilled meats to aromatic spices—while taking in scenic views along the picturesque Corniche.`,
  welcomeImgUrl: '/images/country/qatar/qatar-welcome.jpg',
    visaTypes: [
      {
        id: "qatar-tourist-single-30-days",
        name: 'Tourist Evisa (Single Entry for 30 days)',
        type: 'Tourist Evisa',
        description: 'Single Entry for 30 days',
        entry: 'Single Entry',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 90,
        allowedNationalities: ["AD", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BV", "BW", "BY", "BZ", "CA", "CC", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "PA", "PE", "PF", "PG", "PH", "PL", "PM", "PN", "PR", "PT", "PW", "PY", "RE", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]
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
    climate: 'Hot and arid',
    language: 'Arabic',
    currency: 'Qatari Riyal (QAR)',
  }
};

export default qatar;
