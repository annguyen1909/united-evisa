import { Country } from "./type";

const sriLanka: Country = {
  slug: 'sri-lanka',
  name: 'Sri Lanka',
  code: 'lk',
  region: 'Asia Pacific',
  flagUrl: '/images/country/sri-lanka/sri-lanka-square.png',
  imageUrl: '/images/country/sri-lanka/sri-lanka-bg.jpg',
  roundedFlagUrl: '/images/country/sri-lanka/sri-lanka-rounded.png',
  description: `Apply for your Sri Lanka eVisa online with United eVisa Services. Fast, secure, and convenient visa application for Sri Lanka travel. Get your Sri Lanka visa quickly with our expert assistance.`,
  welcomeMessage: `Discover Sri Lanka's ancient temples, tea plantations, and beautiful beaches. From Sigiriya to the beaches of Galle, Sri Lanka is a paradise for travelers.`,
  welcomeImgUrl: '/images/country/sri-lanka/sri-lanka-welcome.jpg',
  processingTime: {
    normal: '3 working days',
    superUrgent: '5 hours',
  },
  visaTypes: [
    {
      id: "sri-lanka-tourist-double",
      name: 'Tourist Evisa (Double Entries)',
      type: 'Tourist Evisa',
      description: 'Double Entries',
      entry: 'Double Entries',
      visaDuration: 30,
      visaValidity: '180 days',
      govFee: 80,
      allowedNationalities: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CG", "CH", "CK", "CL", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MW", "MX", "MY", "MYL", "MZ", "NA", "NC", "NE", "NF", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SE", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]
    },
    {
      id: "sri-lanka-business-multiple-30-days",
      name: 'Business Evisa (Multiple Entries for 30 days)',
      type: 'Business Evisa',
      description: 'Multiple Entries for 30 days',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '180 days',
      govFee: 85,
      allowedNationalities: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CG", "CH", "CK", "CL", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MW", "MX", "MY", "MYL", "MZ", "NA", "NC", "NE", "NF", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SE", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]
    },
    {
      id: "sri-lanka-transit-single-48-hours",
      name: 'Transit Evisa (Single Entry for 48 hours)',
      type: 'Transit Evisa',
      description: 'Single Entry for 48 hours',
      entry: 'Single Entry',
      visaDuration: 2,
      visaValidity: '180 days',
      govFee: 30,
      allowedNationalities: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CG", "CH", "CK", "CL", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MW", "MX", "MY", "MYL", "MZ", "NA", "NC", "NE", "NF", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SE", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]
    },
  ],
  info: {
    climate: 'Tropical, warm and humid',
    language: 'Sinhala, Tamil, English',
    currency: 'Sri Lankan Rupee (LKR)',
  },
};

export default sriLanka