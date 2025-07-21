import { Country } from "./type";

const tanzania: Country = {
  slug: 'tanzania',
  name: 'Tanzania',
  code: 'tz',
  region: 'Africa',
  flagUrl: '/images/country/tanzania/tanzania-square.png',
  imageUrl: '/images/country/tanzania/tanzania-bg.jpg',
  roundedFlagUrl: '/images/country/tanzania/tanzania-rounded.png',
  description: `Apply for your Tanzania eVisa online with Worldmaxxing Global Services. Fast, secure, and convenient visa application for Tanzania travel. Get your Tanzania visa quickly with our expert assistance.`,
  welcomeMessage: `Experience Tanzania's incredible wildlife, stunning landscapes, and vibrant culture. From the Serengeti to Zanzibar's beaches, Tanzania is an unforgettable destination for travelers.`,
  welcomeImgUrl: '/images/country/tanzania/tanzania-welcome.jpg',
  processingTime: {
    normal: '15 working days',
  },
  visaTypes: [
    {
      id: "tanzania-tourist-single-90-days",
      name: 'Tourist Evisa (Single Entry for 90 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 90 days',
      entry: 'Single Entry',
      visaDuration: 90,
      visaValidity: '60 days',
      govFee: 95,
      allowedNationalities: ["AD", "AE", "AL", "AM", "AN", "AO", "AR", "AS", "AT", "AU", "AW", "AX", "BA", "BE", "BF", "BG", "BH", "BJ", "BL", "BO", "BQ", "BR", "BT", "BV", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FO", "FR", "GA", "GB", "GE", "GF", "GL", "GN", "GP", "GR", "GS", "GT", "GU", "GW", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KR", "KW", "LA", "LI", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MH", "MK", "MN", "MP", "MQ", "MV", "MX", "NC", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PF", "PH", "PL", "PN", "PR", "PT", "PW", "PY", "QA", "RE", "RS", "RU", "SA", "SE", "SI", "SJ", "SK", "SM", "SN", "SR", "ST", "SV", "SX", "TF", "TG", "TH", "TL", "TM", "TN", "TR", "TW", "UA", "UY", "VA", "VE", "VI", "VN", "WF", "YT"]
    },
    {
      id: "tanzania-tourist-multiple-1-year",
      name: 'Tourist Evisa (Multiple Entries for 1 year)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 1 year',
      entry: 'Multiple Entries',
      visaDuration: 365,
      visaValidity: '60 days',
      govFee: 145,
      allowedNationalities: ["AD", "AE", "AL", "AM", "AN", "AO", "AR", "AS", "AT", "AU", "AW", "AX", "BA", "BE", "BF", "BG", "BH", "BJ", "BL", "BO", "BQ", "BR", "BT", "BV", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FO", "FR", "GA", "GB", "GE", "GF", "GL", "GN", "GP", "GR", "GS", "GT", "GU", "GW", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KR", "KW", "LA", "LI", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MH", "MK", "MN", "MP", "MQ", "MV", "MX", "NC", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PF", "PH", "PL", "PN", "PR", "PT", "PW", "PY", "QA", "RE", "RS", "RU", "SA", "SE", "SI", "SJ", "SK", "SM", "SN", "SR", "ST", "SV", "SX", "TF", "TG", "TH", "TL", "TM", "TN", "TR", "TW", "UA", "US", "UY", "VA", "VE", "VI", "VN", "WF", "YT"]
    },
    {
      id: "tanzania-transit-single-7-days",
      name: 'Transit Evisa (Single Entry for 7 days)',
      type: 'Transit Evisa',
      description: 'Single Entry for 7 days',
      entry: 'Single Entry',
      visaDuration: 7,
      visaValidity: '60 days',
      govFee: 75,
      allowedNationalities: ["AD", "AE", "AL", "AM", "AN", "AO", "AR", "AS", "AT", "AU", "AW", "AX", "BA", "BE", "BF", "BG", "BH", "BJ", "BL", "BO", "BQ", "BR", "BT", "BV", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FO", "FR", "GA", "GB", "GE", "GF", "GL", "GN", "GP", "GR", "GS", "GT", "GU", "GW", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KR", "KW", "LA", "LI", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MH", "MK", "MN", "MP", "MQ", "MV", "MX", "NC", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PF", "PH", "PL", "PN", "PR", "PT", "PW", "PY", "QA", "RE", "RS", "RU", "SA", "SE", "SI", "SJ", "SK", "SM", "SN", "SR", "ST", "SV", "SX", "TF", "TG", "TH", "TL", "TM", "TN", "TR", "TW", "UA", "US", "UY", "VA", "VE", "VI", "VN", "WF", "YT"]
    },
    {
      id: "tanzania-business-single-90-days",
      name: 'Business Evisa (Single Entry for 90 days)',
      type: 'Business Evisa',
      description: 'Single Entry for 90 days',
      entry: 'Single Entry',
      visaDuration: 90,
      visaValidity: '60 days',
      govFee: 295,
      allowedNationalities: ["AD", "AE", "AL", "AM", "AN", "AO", "AR", "AS", "AT", "AU", "AW", "AX", "BA", "BE", "BF", "BG", "BH", "BJ", "BL", "BO", "BQ", "BR", "BT", "BV", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FO", "FR", "GA", "GB", "GE", "GF", "GL", "GN", "GP", "GR", "GS", "GT", "GU", "US", "GW", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KR", "KW", "LA", "LI", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MH", "MK", "MN", "MP", "MQ", "MV", "MX", "NC", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PF", "PH", "PL", "PN", "PR", "PT", "PW", "PY", "QA", "RE", "RS", "RU", "SA", "SE", "SI", "SJ", "SK", "SM", "SN", "SR", "ST", "SV", "SX", "TF", "TG", "TH", "TL", "TM", "TN", "TR", "TW", "UA", "UY", "VA", "VE", "VI", "VN", "WF", "YT"]
    },
  ],
  info: {
    climate: 'Tropical, with regional variations',
    language: 'Swahili, English',
    currency: 'Tanzanian Shilling (TZS)',
  },
};

export default tanzania;