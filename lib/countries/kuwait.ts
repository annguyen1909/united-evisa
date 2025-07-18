// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const kuwait: Country = {
  slug: 'kuwait',
  name: 'Kuwait',
  region: 'Middle East',
  code: 'kw',
  flagUrl: '/images/flags/vietnam.png',
  imageUrl: '/images/country/kuwait/kuwait-bg.jpg',
  roundedFlagUrl: '/images/flags/vietnam.png',
  description: `Apply for your Kuwait eVisa online with United eVisa. Fast, secure, and convenient visa application for Kuwait travel. Get your Kuwait visa quickly with our expert assistance.`,
  welcomeMessage: `Discover Kuwait's modern skyline, rich history, and vibrant culture. From the Grand Mosque to the Arabian Gulf, Kuwait is a unique destination for travelers.`,
  welcomeImgUrl: '/images/country/kenya-welcome.jpg',
  processingTime: {
    normal: '3 working days',
    superUrgent: '1 working day',
  },
  visaTypes: [
    {
      id: "kuwait-tourist-single-90-days",
      name: 'Tourist Evisa (Single Entry for 90 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 90 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 30,
      allowedNationalities: ["AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GL", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "SZ", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "UA", "US", "UY", "UZ", "VA", "VC", "VE", "VN", "VU", "WS", "XK", "YE", "ZA", "ZM", "ZW"]
    }
  ],
  info: {
    climate: 'Desert, extremely hot summers and mild winters',
    language: 'Arabic',
    currency: 'Kuwaiti Dinar (KWD)',
  },
};

export default kuwait;
