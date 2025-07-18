import { Country } from "./type";

const uganda: Country = {
  slug: 'uganda',
  name: 'Uganda',
  code: 'ug',
  region: 'Africa',
  flagUrl: '/images/country/uganda/uganda-square.png',
  imageUrl: '/images/country/uganda/uganda-bg.jpg',
  roundedFlagUrl: '/images/country/uganda/uganda-rounded.png',
  description: `Apply for your Uganda eVisa online with United eVisa. Fast, secure, and convenient visa application for Uganda travel. Get your Uganda visa quickly with our expert assistance.`,
  welcomeMessage: `Discover Uganda's diverse wildlife, stunning landscapes, and rich culture. From gorilla trekking to the source of the Nile, Uganda is a nature lover's paradise.`,
  welcomeImgUrl: '/images/country/uganda/uganda-welcome.jpg',
  processingTime: {
    normal: '5 working days',
    superUrgent: '2 working days',
  },
  visaTypes: [
    {
      id: "uganda-tourist-single-90-days",
      name: 'Tourist Evisa (Single Entry for 90 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 90 days',
      entry: 'Single Entry',
      visaDuration: 90,
      visaValidity: '60 days',
      govFee: 90,
      allowedNationalities: ["AD", "AE", "AF", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BT", "BV", "BY", "CA", "CC", "CD", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ES", "ET", "FI", "FK", "FM", "FO", "FR", "GA", "GB", "GE", "GF", "GG", "GI", "GL", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JO", "JP", "KG", "KH", "KI", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "MF", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MV", "MX", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "SA", "SE", "SH", "SI", "SJ", "SK", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "TC", "TD", "TF", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TV", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VG", "VI", "VN", "WF", "WS", "XK", "YE", "YT", "ZA"]
    },
    {
      id: "uganda-east-africa-multiple-90-days",
      name: 'East Africa Evisa (Multiple Entries for 90 days)',
      type: 'East Africa Evisa',
      description: 'Multiple Entries for 90 days',
      entry: 'Multiple Entries',
      visaDuration: 90,
      visaValidity: '60 days',
      govFee: 150,
      allowedNationalities: ["AD", "AE", "AF", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BT", "BV", "BY", "CA", "CC", "CD", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ES", "ET", "FI", "FK", "FM", "FO", "FR", "GA", "GB", "GE", "GF", "GG", "GI", "GL", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JO", "JP", "KG", "KH", "KI", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "MF", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MV", "MX", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "SA", "SE", "SH", "SI", "SJ", "SK", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "TC", "TD", "TF", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TV", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VG", "VI", "VN", "WF", "WS", "XK", "YE", "YT", "ZA"]
    },
    {
      id: "uganda-transit-single-7-days",
      name: 'Transit Evisa (Single Entry for 7 days)',
      type: 'Transit Evisa',
      description: 'Single Entry for 7 days',
      entry: 'Single Entry',
      visaDuration: 7,
      visaValidity: '60 days',
      govFee: 90,
      allowedNationalities: ["AD", "AE", "AF", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BT", "BV", "BY", "CA", "CC", "CD", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ES", "ET", "FI", "FK", "FM", "FO", "FR", "GA", "GB", "GE", "GF", "GG", "GI", "GL", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JO", "JP", "KG", "KH", "KI", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "MF", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MV", "MX", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "SA", "SE", "SH", "SI", "SJ", "SK", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "TC", "TD", "TF", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TV", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VG", "VI", "VN", "WF", "WS", "XK", "YE", "YT", "ZA"]
    },
  ],
  info: {
    climate: 'Tropical, generally rainy with two dry seasons',
    language: 'English, Swahili',
    currency: 'Ugandan Shilling (UGX)',
  },
};

export default uganda;