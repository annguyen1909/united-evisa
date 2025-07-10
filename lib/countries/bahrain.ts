// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const bahrain: Country = {
  slug: 'bahrain',
  name: 'Bahrain',
  region: 'Middle East',
  code: 'bh',
  flagUrl: '/images/flags/vietnam.png',
  imageUrl: '/images/country/vietnam-bg.jpg',
  roundedFlagUrl: '/images/flags/vietnam.png',
  description: `In October 2014, Bahrain implemented an online visa system known as the Bahrain eVisa, which enables citizens of qualifying countries to apply for and receive an electronic visa for Bahrain before their trip, without the need to visit a Bahraini embassy or consulate in person. With this type of eVisa, travelers can enter Bahrain with tourist and business intentions.`,
  welcomeMessage: `Welcome to Bahrain! Visit the Bahrain Fort, explore the Manama Souq, and enjoy the lively Corniche. Experience the blend of tradition and modernity in Bahrain.`,
  welcomeImgUrl: '/images/country/kenya-welcome.jpg',
  visaTypes: [
    {
      id: 'bahrain-tourist-evisa-single-14-days',
      name: 'Tourist Evisa (Single Entry for 14 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 14 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 54,
      allowedNationalities: ["AD", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
    },
    {
      id: 'bahrain-tourist-evisa-multiple-3-months',
      name: 'Tourist Evisa (Multiple Entries for 3 months)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 3 months',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 73,
      allowedNationalities: ["AD", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
    },
    {
      id: 'bahrain-tourist-evisa-multiple-1-year',
      name: 'Tourist Evisa (Multiple Entries for 1 year)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 1 year',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 147,
      allowedNationalities: ["AD", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
    },
    {
      id: 'bahrain-business-evisa-single-14-days',
      name: 'Business Evisa (Single Entry for 14 days)',
      entry: 'Single Entry',
      type: 'Business Evisa',
      description: 'Single Entry for 14 days',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 54,
      allowedNationalities: ["AD", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
    },
    {
      id: 'bahrain-business-evisa-multiple-3-months',
      name: 'Business Evisa (Multiple Entries for 3 months)',
      entry: 'Multiple Entries',
      type: 'Business Evisa',
      description: 'Multiple Entries for 3 months',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 73,
      allowedNationalities: ["AD", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
    },
    {
      id: 'bahrain-business-evisa-multiple-1-year',
      name: 'Business Evisa (Multiple Entries for 1 year)',
      entry: 'Multiple Entries',
      type: 'Business Evisa',
      description: 'Multiple Entries for 1 year',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 147,
      allowedNationalities: ["AD", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
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
    climate: 'Desert, hot summers and mild winters',
    language: 'Arabic and English',
    currency: 'Bahraini Dinar (BHD)',
  },
};

export default bahrain;
