import { Country } from "./type";

const zimbabwe: Country = {
  slug: 'zimbabwe',
  name: 'Zimbabwe',
  code: 'zw',
  region: 'Africa',
  flagUrl: '/images/country/zimbabwe/zimbabwe-square.png',
  imageUrl: '/images/country/zimbabwe/zimbabwe-bg.jpg',
  roundedFlagUrl: '/images/country/zimbabwe/zimbabwe-rounded.png',
  description: `Zimbabwe is known for its dramatic landscapes, diverse wildlife, and the iconic Victoria Falls. It offers rich history, adventure, and vibrant culture.`,
  welcomeMessage: `Welcome to Zimbabwe! Marvel at the thundering Victoria Falls, go on safari in Hwange National Park, and explore the ancient ruins of Great Zimbabwe. Experience the friendliness and resilience of the Zimbabwean people.`,
  welcomeImgUrl: '/images/country/zimbabwe/zimbabwe-welcome.jpg',

  visaTypes: [
    {
      id: "zimbabwe-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: '30 days',
      visaValidity: '90 days',
      expectedProcessingTime: '2 days',
      govFee: 60,
      allowedNationalities: ["AF", "AI", "BD", "BF", "BJ", "BO", "CD", "CG", "CI", "CM", "CO", "DJ", "ER", "GA", "GM", "GW", "IQ", "JO", "KH", "LA", "LB", "LK", "LR", "MA", "ME", "MK", "ML", "MN", "MR", "NE", "NG", "NP", "OM", "PH", "PK", "QA", "SA", "SL", "SO", "SY", "TD", "TG", "TH", "TL", "TN", "TW", "VN", "XK", "YE"]
    },
    {
      id: "zimbabwe-tourist-double-30-days",
      name: 'Tourist Evisa (Double Entries for 30 days)',
      type: 'Tourist Evisa',
      description: 'Double Entries for 30 days',
      entry: 'Double Entries',
      visaDuration: '30 days',
      visaValidity: '90 days',
      expectedProcessingTime: '2 days',
      govFee: 75,
      allowedNationalities: ["AF", "AI", "BD", "BF", "BJ", "BO", "CD", "CG", "CI", "CM", "CO", "DJ", "ER", "GA", "GM", "GW", "IQ", "JO", "KH", "LA", "LB", "LK", "LR", "MA", "ME", "MK", "ML", "MN", "MR", "NE", "NG", "NP", "OM", "PH", "PK", "QA", "SA", "SL", "SO", "SY", "TD", "TG", "TH", "TL", "TN", "TW", "VN", "XK", "YE"]
    },

    {
      id: "zimbabwe-business-single-30-days",
      name: 'Business Evisa (Single Entry for 30 days)',
      type: 'Business Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: '30 days',
      visaValidity: '90 days',
      expectedProcessingTime: '2 days',
      govFee: 60,
      allowedNationalities: ["AF", "AI", "BD", "BF", "BJ", "BO", "CD", "CG", "CI", "CM", "CO", "DJ", "ER", "GA", "GM", "GW", "IQ", "JO", "KH", "LA", "LB", "LK", "LR", "MA", "ME", "MK", "ML", "MN", "MR", "NE", "NG", "NP", "OM", "PH", "PK", "QA", "SA", "SL", "SO", "SY", "TD", "TG", "TH", "TL", "TN", "TW", "VN", "XK", "YE"]
    },
    {
      id: "zimbabwe-business-double-30-days",
      name: 'Business Evisa (Double Entries for 30 days)',
      type: 'Business Evisa',
      description: 'Double Entries for 30 days',
      entry: 'Double Entries',
      visaDuration: '30 days',
      visaValidity: '90 days',
      expectedProcessingTime: '2 days',
      govFee: 75,
      allowedNationalities: ["AF", "AI", "BD", "BF", "BJ", "BO", "CD", "CG", "CI", "CM", "CO", "DJ", "ER", "GA", "GM", "GW", "IQ", "JO", "KH", "LA", "LB", "LK", "LR", "MA", "ME", "MK", "ML", "MN", "MR", "NE", "NG", "NP", "OM", "PH", "PK", "QA", "SA", "SL", "SO", "SY", "TD", "TG", "TH", "TL", "TN", "TW", "VN", "XK", "YE"]
    },
    {
      id: "zimbabwe-kaza-multiple-90-days",
      name: 'Kaza Univisa (Multiple Entries for 90 days)',
      type: 'Kaza Univisa',
      description: 'Multiple Entries for 90 days',
      entry: 'Multiple Entries',
      visaDuration: '90 days',
      visaValidity: '7 days',
      expectedProcessingTime: '2 days',
      govFee: 80,
      allowedNationalities: ["AF", "AI", "BD", "BF", "BJ", "BO", "CD", "CG", "CI", "CM", "CO", "DJ", "ER", "GA", "GM", "GW", "IQ", "JO", "KH", "LA", "LB", "LK", "LR", "MA", "ME", "MK", "ML", "MN", "MR", "NE", "NG", "NP", "OM", "PH", "PK", "QA", "SA", "SL", "SO", "SY", "TD", "TG", "TH", "TL", "TN", "TW", "VN", "XK", "YE"]
    }
  ],
  etaInfo: {
    processing: {
      summary: 'Apply Online In 3 Steps',
      steps: [
        'Fill in the online form on our website.',
        'Pay the eVisa fee online — via credit card, debit card, PayPal, or bank transfer.',
        'Get your eVisa sent to your email.',
      ],
      urgentProcessing: 'As soon as 1 Day',
    },
    serviceFee: 49.99,
  },
  info: {
    climate: 'Tropical, moderated by altitude',
    language: 'English, Shona, Sindebele',
    currency: 'Zimbabwean Dollar (ZWL)',
  },
};

export default zimbabwe