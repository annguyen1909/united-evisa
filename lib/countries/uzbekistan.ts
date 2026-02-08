import { Country } from "./type";

const uzbekistan: Country = {
  slug: 'uzbekistan',
  name: 'Uzbekistan',
  code: 'uz',
  region: 'Middle East',
  flagUrl: '/images/country/uzbekistan/uzbekistan-square.png',
  imageUrl: '/images/country/uzbekistan/uzbekistan-bg.jpg',
  roundedFlagUrl: '/images/country/uzbekistan/uzbekistan-rounded.png',
  description: `Apply for your Uzbekistan eVisa online with United eVisa Services. Fast, secure, and convenient visa application for Uzbekistan travel. Get your Uzbekistan visa quickly with our expert assistance.`,
  welcomeMessage: `Discover Uzbekistan's ancient Silk Road cities, stunning architecture, and rich culture. From Samarkand to Bukhara, Uzbekistan is a treasure trove for history lovers.`,
  welcomeImgUrl: '/images/country/uzbekistan/uzbekistan-welcome.jpg',
  processingTime: {
    normal: '5 working days',
    superUrgent: '2 working days',
  },
  visaTypes: [
    {
      id: "uzbekistan-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 50,
      allowedNationalities: ["AL", "AO", "BD", "BH", "BO", "BT", "CI", "CN", "CO", "DZ", "EC", "EG", "FJ", "FM", "GW", "GY", "HK", "IN", "IR", "JO", "KH", "KI", "KP", "KW", "LA", "LB", "LK", "MA", "MH", "MK", "MU", "MV", "NP", "NR", "OM", "PE", "PH", "PW", "PY", "QA", "SA", "SB", "SC", "SR", "TH", "TN", "TO", "US", "UY", "VE", "VN", "VU", "WS"]
    },
    {
      id: "uzbekistan-tourist-double-30-days",
      name: 'Tourist Evisa (Double Entries for 30 days)',
      type: 'Tourist Evisa',
      description: 'Double Entries for 30 days',
      entry: 'Double Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 65,
      allowedNationalities: ["AL", "AO", "BD", "BH", "BO", "BT", "CI", "CN", "CO", "DZ", "EC", "EG", "FJ", "FM", "GW", "GY", "HK", "IN", "IR", "JO", "KH", "KI", "KP", "KW", "LA", "LB", "LK", "MA", "MH", "MK", "MU", "MV", "NP", "NR", "OM", "PE", "PH", "PW", "PY", "QA", "SA", "SB", "SC", "SR", "TH", "TN", "TO", "US", "UY", "VE", "VN", "VU", "WS"]
    },
    {
      id: "uzbekistan-tourist-multiple-30-days",
      name: 'Tourist Evisa (Multiple Entries for 30 days)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 30 days',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 80,
      allowedNationalities: ["AL", "AO", "BD", "BH", "BO", "BT", "CI", "CN", "CO", "DZ", "EC", "EG", "FJ", "FM", "GW", "GY", "HK", "IN", "IR", "JO", "KH", "KI", "KP", "KW", "LA", "LB", "LK", "MA", "MH", "MK", "MU", "MV", "NP", "NR", "OM", "PE", "PH", "PW", "PY", "QA", "SA", "SB", "SC", "SR", "TH", "TN", "TO", "US", "UY", "VE", "VN", "VU", "WS"]
    },
    {
      id: "uzbekistan-business-single-30-days",
      name: 'Business Evisa (Single Entry for 30 days)',
      type: 'Business Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 50,
      allowedNationalities: ["AL", "AO", "BD", "BH", "BO", "BT", "CI", "CN", "CO", "DZ", "EC", "EG", "FJ", "FM", "GW", "GY", "HK", "IN", "IR", "JO", "KH", "KI", "KP", "KW", "LA", "LB", "LK", "MA", "MH", "MK", "MU", "MV", "NP", "NR", "OM", "PE", "PH", "PW", "PY", "QA", "SA", "SB", "SC", "SR", "TH", "TN", "TO", "US", "UY", "VE", "VN", "VU", "WS"]
    },
    {
      id: "uzbekistan-business-double-30-days",
      name: 'Business Evisa (Double Entries for 30 days)',
      type: 'Business Evisa',
      description: 'Double Entries for 30 days',
      entry: 'Double Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 65,
      allowedNationalities: ["AL", "AO", "BD", "BH", "BO", "BT", "CI", "CN", "CO", "DZ", "EC", "EG", "FJ", "FM", "GW", "GY", "HK", "IN", "IR", "JO", "KH", "KI", "KP", "KW", "LA", "LB", "LK", "MA", "MH", "MK", "MU", "MV", "NP", "NR", "OM", "PE", "PH", "PW", "PY", "QA", "SA", "SB", "SC", "SR", "TH", "TN", "TO", "US", "UY", "VE", "VN", "VU", "WS"]
    },
    {
      id: "uzbekistan-business-multiple-30-days",
      name: 'Business Evisa (Multiple Entries for 30 days)',
      type: 'Business Evisa',
      description: 'Multiple Entries for 30 days',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 80,
      allowedNationalities: ["AL", "AO", "BD", "BH", "BO", "BT", "CI", "CN", "CO", "DZ", "EC", "EG", "FJ", "FM", "GW", "GY", "HK", "IN", "IR", "JO", "KH", "KI", "KP", "KW", "LA", "LB", "LK", "MA", "MH", "MK", "MU", "MV", "NP", "NR", "OM", "PE", "PH", "PW", "PY", "QA", "SA", "SB", "SC", "SR", "TH", "TN", "TO", "US", "UY", "VE", "VN", "VU", "WS"]
    },
  ],
  info: {
    climate: 'Continental, with hot summers and cold winters',
    language: 'Uzbek',
    currency: 'Uzbekistani Som (UZS)',
  },
};

export default uzbekistan