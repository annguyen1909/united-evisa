import { Country } from "./type";

const zimbabwe: Country = {
  slug: 'zimbabwe',
  name: 'Zimbabwe',
  code: 'zw',
  region: 'Africa',
  flagUrl: '/images/country/zimbabwe/zimbabwe-square.png',
  imageUrl: '/images/country/zimbabwe/zimbabwe-bg.jpg',
  roundedFlagUrl: '/images/country/zimbabwe/zimbabwe-rounded.png',
  description: `Apply for your Zimbabwe eVisa online with United eVisa Services. Fast, secure, and convenient visa application for Zimbabwe travel. Get your Zimbabwe visa quickly with our expert assistance.`,
  welcomeMessage: `Discover Zimbabwe's stunning landscapes, incredible wildlife, and rich culture. From Victoria Falls to Hwange National Park, Zimbabwe is an unforgettable destination for travelers.`,
  welcomeImgUrl: '/images/country/zimbabwe/zimbabwe-welcome.jpg',
  processingTime: {
    normal: '5 working days',
  },
  visaTypes: [
    {
      id: "zimbabwe-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '90 days',
      govFee: 60,
      allowedNationalities: ["AF", "AI", "BD", "BF", "BJ", "BO", "CD", "CG", "CI", "CM", "CO", "DJ", "ER", "GA", "GM", "GW", "IQ", "JO", "KH", "LA", "LB", "LK", "LR", "MA", "ME", "MK", "ML", "MN", "MR", "NE", "NG", "NP", "OM", "PH", "PK", "QA", "SA", "SL", "SO", "SY", "TD", "TG", "TH", "TL", "TN", "TW", "VN", "XK", "YE"]
    },
    {
      id: "zimbabwe-tourist-double-30-days",
      name: 'Tourist Evisa (Double Entries for 30 days)',
      type: 'Tourist Evisa',
      description: 'Double Entries for 30 days',
      entry: 'Double Entries',
      visaDuration: 30,
      visaValidity: '90 days',
      govFee: 75,
      allowedNationalities: ["AF", "AI", "BD", "BF", "BJ", "BO", "CD", "CG", "CI", "CM", "CO", "DJ", "ER", "GA", "GM", "GW", "IQ", "JO", "KH", "LA", "LB", "LK", "LR", "MA", "ME", "MK", "ML", "MN", "MR", "NE", "NG", "NP", "OM", "PH", "PK", "QA", "SA", "SL", "SO", "SY", "TD", "TG", "TH", "TL", "TN", "TW", "VN", "XK", "YE"]
    },

    {
      id: "zimbabwe-business-single-30-days",
      name: 'Business Evisa (Single Entry for 30 days)',
      type: 'Business Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '90 days',
      govFee: 60,
      allowedNationalities: ["AF", "AI", "BD", "BF", "BJ", "BO", "CD", "CG", "CI", "CM", "CO", "DJ", "ER", "GA", "GM", "GW", "IQ", "JO", "KH", "LA", "LB", "LK", "LR", "MA", "ME", "MK", "ML", "MN", "MR", "NE", "NG", "NP", "OM", "PH", "PK", "QA", "SA", "SL", "SO", "SY", "TD", "TG", "TH", "TL", "TN", "TW", "VN", "XK", "YE"]
    },
    {
      id: "zimbabwe-business-double-30-days",
      name: 'Business Evisa (Double Entries for 30 days)',
      type: 'Business Evisa',
      description: 'Double Entries for 30 days',
      entry: 'Double Entries',
      visaDuration: 30,
      visaValidity: '90 days',
      govFee: 75,
      allowedNationalities: ["AF", "AI", "BD", "BF", "BJ", "BO", "CD", "CG", "CI", "CM", "CO", "DJ", "ER", "GA", "GM", "GW", "IQ", "JO", "KH", "LA", "LB", "LK", "LR", "MA", "ME", "MK", "ML", "MN", "MR", "NE", "NG", "NP", "OM", "PH", "PK", "QA", "SA", "SL", "SO", "SY", "TD", "TG", "TH", "TL", "TN", "TW", "VN", "XK", "YE"]
    },
    {
      id: "zimbabwe-kaza-multiple-90-days",
      name: 'Kaza Univisa (Multiple Entries for 90 days)',
      type: 'Kaza Univisa',
      description: 'Multiple Entries for 90 days',
      entry: 'Multiple Entries',
      visaDuration: 90,
      visaValidity: '7 days',
      govFee: 80,
      allowedNationalities: ["AF", "AI", "BD", "BF", "BJ", "BO", "CD", "CG", "CI", "CM", "CO", "DJ", "ER", "GA", "GM", "GW", "IQ", "JO", "KH", "LA", "LB", "LK", "LR", "MA", "ME", "MK", "ML", "MN", "MR", "NE", "NG", "NP", "OM", "PH", "PK", "QA", "SA", "SL", "SO", "SY", "TD", "TG", "TH", "TL", "TN", "TW", "VN", "XK", "YE"]
    }
  ],
  info: {
    climate: 'Tropical, moderated by altitude',
    language: 'English, Shona, Sindebele',
    currency: 'Zimbabwean Dollar (ZWL)',
  },
};

export default zimbabwe