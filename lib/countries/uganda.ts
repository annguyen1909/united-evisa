import { Country } from "./type";

const uganda: Country = {
  slug: 'uganda',
  name: 'Uganda',
  code: 'ug',
  region: 'Africa',
  flagUrl: '/images/country/uganda/uganda-square.png',
  imageUrl: '/images/country/uganda/uganda-bg.jpg',
  roundedFlagUrl: '/images/country/uganda/uganda-rounded.png',
  description: `The Government of Uganda introduced the Uganda eVisa in 2016 to simplify the visa application process for international travelers. This system enables applicants to easily obtain a visa online through a convenient digital platform.`,
  welcomeMessage: `Welcome to Uganda! Trek mountain gorillas in Bwindi, cruise along the Nile, and explore the vibrant capital Kampala. Experience the beauty and hospitality of Uganda.`,
  welcomeImgUrl: '/images/country/uganda/uganda-welcome.jpg',
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
        name: 'Tourist Evisa (Single Entry for 90 days)',
        type: 'Tourist Evisa',
        description: 'Single Entry for 90 days',
        entry: 'Single Entry',
        visaDuration: '90 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 90,
        allowedNationalities: ["AD", "AE", "AF", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BT", "BV", "BY", "CA", "CC", "CD", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ES", "ET", "FI", "FK", "FM", "FO", "FR", "GA", "GB", "GE", "GF", "GG", "GI", "GL", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JO", "JP", "KG", "KH", "KI", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "MF", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MV", "MX", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "SA", "SE", "SH", "SI", "SJ", "SK", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "TC", "TD", "TF", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TV", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VG", "VI", "VN", "WF", "WS", "XK", "YE", "YT", "ZA"]
      },
      {
        name: 'East Africa Evisa (Multiple Entries for 90 days)',
        type: 'East Africa Evisa',
        description: 'Multiple Entries for 90 days',
        entry: 'Multiple Entries',
        visaDuration: '90 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 150,
        allowedNationalities: ["AD", "AE", "AF", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BT", "BV", "BY", "CA", "CC", "CD", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ES", "ET", "FI", "FK", "FM", "FO", "FR", "GA", "GB", "GE", "GF", "GG", "GI", "GL", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JO", "JP", "KG", "KH", "KI", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "MF", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MV", "MX", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "SA", "SE", "SH", "SI", "SJ", "SK", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "TC", "TD", "TF", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TV", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VG", "VI", "VN", "WF", "WS", "XK", "YE", "YT", "ZA"]
      },
      {
        name: 'Transit Evisa (Single Entry for 7 days)',
        type: 'Transit Evisa',
        description: 'Single Entry for 7 days',
        entry: 'Single Entry',
        visaDuration: '7 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 90,
        allowedNationalities: ["AD", "AE", "AF", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BT", "BV", "BY", "CA", "CC", "CD", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ES", "ET", "FI", "FK", "FM", "FO", "FR", "GA", "GB", "GE", "GF", "GG", "GI", "GL", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JO", "JP", "KG", "KH", "KI", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "MF", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MV", "MX", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "SA", "SE", "SH", "SI", "SJ", "SK", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "TC", "TD", "TF", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TV", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VG", "VI", "VN", "WF", "WS", "XK", "YE", "YT", "ZA"]
      },
    ],
    serviceFee: 49.99,
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
    climate: 'Tropical, generally rainy with two dry seasons',
    language: 'English, Swahili',
    currency: 'Ugandan Shilling (UGX)',
  },
};

export default uganda;