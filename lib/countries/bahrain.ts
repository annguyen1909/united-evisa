// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const bahrain: Country = {
  slug: 'bahrain',
  name: 'Bahrain',
  region: 'Middle East',
  code: 'bh',
  flagUrl: '/images/flags/square/bahrain.png',
  imageUrl: '/images/country/bahrain/bahrain-bg.jpg',
  roundedFlagUrl: '/images/flags/square/bahrain.png',
  description: `Apply for your Bahrain eVisa online with United eVisa Services. Fast, secure, and convenient visa application for Bahrain travel. Get your Bahrain visa quickly with our expert assistance.`,
  welcomeMessage: `Experience Bahrain's rich history, modern skyline, and vibrant culture. From ancient forts to luxury shopping and beautiful beaches, Bahrain is a top destination for travelers.`,
  welcomeImgUrl: '/images/country/bahrain/bahrain-welcome.jpg',
  processingTime: {
    normal: '3 working days',
    superUrgent: '1 working day',
  },
  visaTypes: [
    {
      id: 'bahrain-tourist-evisa-single-14-days',
      name: 'Tourist Evisa (Single Entry for 14 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 14 days',
      entry: 'Single Entry',
      visaDuration: 14,
      visaValidity: '60 days',
      govFee: 54,
      allowedNationalities: ["AD", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
    },
    {
      id: 'bahrain-tourist-evisa-multiple-3-months',
      name: 'Tourist Evisa (Multiple Entries for 3 months)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 3 months',
      entry: 'Multiple Entries',
      visaDuration: 90,
      visaValidity: '60 days',
      govFee: 73,
      allowedNationalities: ["AD", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
    },
    {
      id: 'bahrain-tourist-evisa-multiple-1-year',
      name: 'Tourist Evisa (Multiple Entries for 1 year)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 1 year',
      entry: 'Multiple Entries',
      visaDuration: 365,
      visaValidity: '60 days',
      govFee: 147,
      allowedNationalities: ["AD", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
    },
    {
      id: 'bahrain-business-evisa-single-14-days',
      name: 'Business Evisa (Single Entry for 14 days)',
      entry: 'Single Entry',
      type: 'Business Evisa',
      description: 'Single Entry for 14 days',
      visaDuration: 14,
      visaValidity: '60 days',
      govFee: 54,
      allowedNationalities: ["AD", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
    },
    {
      id: 'bahrain-business-evisa-multiple-3-months',
      name: 'Business Evisa (Multiple Entries for 3 months)',
      entry: 'Multiple Entries',
      type: 'Business Evisa',
      description: 'Multiple Entries for 3 months',
      visaDuration: 90,
      visaValidity: '60 days',
      govFee: 73,
      allowedNationalities: ["AD", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
    },
    {
      id: 'bahrain-business-evisa-multiple-1-year',
      name: 'Business Evisa (Multiple Entries for 1 year)',
      entry: 'Multiple Entries',
      type: 'Business Evisa',
      description: 'Multiple Entries for 1 year',
      visaDuration: 365,
      visaValidity: '60 days',
      govFee: 147,
      allowedNationalities: ["AD", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN", "GP", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
    },
  ],
  info: {
    climate: 'Desert, hot summers and mild winters',
    language: 'Arabic and English',
    currency: 'Bahraini Dinar (BHD)',
  },
};

export default bahrain;
