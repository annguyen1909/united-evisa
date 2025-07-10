import { Country } from "./type";

const zambia: Country = {
  slug: 'zambia',
  name: 'Zambia',
  code: 'zm',
  region: 'Africa',
  flagUrl: '/images/country/zambia/zambia-square.png',
  imageUrl: '/images/country/zambia/zambia-bg.jpg',
  roundedFlagUrl: '/images/country/zambia/zambia-rounded.png',
  description: `In 2014, the Government of Zambia introduced the eVisa system as a convenient way for travelers to obtain the necessary visa for entry, whether for tourism, business, or other permitted purposes.`,
  welcomeMessage: `Welcome to Zambia! Experience the awe of Victoria Falls, explore the wilds of South Luangwa National Park, and enjoy the warmth of Zambian hospitality.`,
  welcomeImgUrl: '/images/country/zambia/zambia-welcome.jpg',

  visaTypes: [
    {
      id: "zambia-tourist-single-30-days",
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '90 days',
      expectedProcessingTime: '2 days',
      govFee: 45,
      allowedNationalities: ["AD", "AF", "AL", "AM", "AR", "AS", "AW", "AZ", "BA", "BD", "BF", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CU", "CV", "DJ", "DOM", "DZ", "EC", "EG", "ER", "ET", "FM", "GA", "GE", "GH", "GL", "GM", "GN", "GQ", "GT", "GW", "GY", "HK", "HN", "HT", "ID", "IL", "IN", "IR", "IS", "JO", "KG", "KH", "KM", "KP", "KZ", "LA", "LB", "LI", "LK", "LR", "MA", "MC", "MD", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "NE", "NG", "NI", "NP", "PA", "PE", "PG", "PH", "PK", "PR", "PS", "PW", "PY", "RS", "RU", "RW", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TW", "UA", "UY", "UZ", "VA", "VE", "VN", "YE"]
    },
    {
      id: "zambia-tourist-double-30-days",
      name: 'Tourist Evisa (Double Entries for 30 days)',
      type: 'Tourist Evisa',
      description: 'Double Entries for 30 days',
      entry: 'Double Entries',
      visaDuration: 30,
      visaValidity: '90 days',
      expectedProcessingTime: '2 days',
      govFee: 50,
      allowedNationalities: ["AD", "AF", "AL", "AM", "AR", "AS", "AW", "AZ", "BA", "BD", "BF", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CU", "CV", "DJ", "DOM", "DZ", "EC", "EG", "ER", "ET", "FM", "GA", "GE", "GH", "GL", "GM", "GN", "GQ", "GT", "GW", "GY", "HK", "HN", "HT", "ID", "IL", "IN", "IR", "IS", "JO", "KG", "KH", "KM", "KP", "KZ", "LA", "LB", "LI", "LK", "LR", "MA", "MC", "MD", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "NE", "NG", "NI", "NP", "PA", "PE", "PG", "PH", "PK", "PR", "PS", "PW", "PY", "RS", "RU", "RW", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TW", "UA", "UY", "UZ", "VA", "VE", "VN", "YE"]
    },
    {
      id: "zambia-tourist-multiple-90-days",
      name: 'Tourist Evisa (Multiple Entries for 90 days)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 90 days',
      entry: 'Multiple Entries',
      visaDuration: 90,
      visaValidity: '90 days',
      expectedProcessingTime: '2 days',
      govFee: 95,
      allowedNationalities: ["AD", "AF", "AL", "AM", "AR", "AS", "AW", "AZ", "BA", "BD", "BF", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CU", "CV", "DJ", "DOM", "DZ", "EC", "EG", "ER", "ET", "FM", "GA", "GE", "GH", "GL", "GM", "GN", "GQ", "GT", "GW", "GY", "HK", "HN", "HT", "ID", "IL", "IN", "IR", "IS", "JO", "KG", "KH", "KM", "KP", "KZ", "LA", "LB", "LI", "LK", "LR", "MA", "MC", "MD", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "NE", "NG", "NI", "NP", "PA", "PE", "PG", "PH", "PK", "PR", "PS", "PW", "PY", "RS", "RU", "RW", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TW", "UA", "UY", "UZ", "VA", "VE", "VN", "YE"]
    },
    {
      id: "zambia-business-single-30-days",
      name: 'Business Evisa (Single Entry for 30 days)',
      type: 'Business Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '90 days',
      expectedProcessingTime: '2 days',
      govFee: 45,
      allowedNationalities: ["AD", "AF", "AL", "AM", "AR", "AS", "AW", "AZ", "BA", "BD", "BF", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CU", "CV", "DJ", "DOM", "DZ", "EC", "EG", "ER", "ET", "FM", "GA", "GE", "GH", "GL", "GM", "GN", "GQ", "GT", "GW", "GY", "HK", "HN", "HT", "ID", "IL", "IN", "IR", "IS", "JO", "KG", "KH", "KM", "KP", "KZ", "LA", "LB", "LI", "LK", "LR", "MA", "MC", "MD", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "NE", "NG", "NI", "NP", "PA", "PE", "PG", "PH", "PK", "PR", "PS", "PW", "PY", "RS", "RU", "RW", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TW", "UA", "UY", "UZ", "VA", "VE", "VN", "YE"]
    },
    {
      id: "zambia-business-double-30-days",
      name: 'Business Evisa (Double Entries for 30 days)',
      type: 'Business Evisa',
      description: 'Double Entries for 30 days',
      entry: 'Double Entries',
      visaDuration: 30,
      visaValidity: '90 days',
      expectedProcessingTime: '2 days',
      govFee: 50,
      allowedNationalities: ["AD", "AF", "AL", "AM", "AR", "AS", "AW", "AZ", "BA", "BD", "BF", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CU", "CV", "DJ", "DOM", "DZ", "EC", "EG", "ER", "ET", "FM", "GA", "GE", "GH", "GL", "GM", "GN", "GQ", "GT", "GW", "GY", "HK", "HN", "HT", "ID", "IL", "IN", "IR", "IS", "JO", "KG", "KH", "KM", "KP", "KZ", "LA", "LB", "LI", "LK", "LR", "MA", "MC", "MD", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "NE", "NG", "NI", "NP", "PA", "PE", "PG", "PH", "PK", "PR", "PS", "PW", "PY", "RS", "RU", "RW", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TW", "UA", "UY", "UZ", "VA", "VE", "VN", "YE"]
    },
    {
      id: "zambia-business-multiple-90-days",
      name: 'Business Evisa (Multiple Entries for 90 days)',
      type: 'Business Evisa',
      description: 'Multiple Entries for 90 days',
      entry: 'Multiple Entries',
      visaDuration: 90,
      visaValidity: '90 days',
      expectedProcessingTime: '2 days',
      govFee: 95,
      allowedNationalities: ["AD", "AF", "AL", "AM", "AR", "AS", "AW", "AZ", "BA", "BD", "BF", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CU", "CV", "DJ", "DOM", "DZ", "EC", "EG", "ER", "ET", "FM", "GA", "GE", "GH", "GL", "GM", "GN", "GQ", "GT", "GW", "GY", "HK", "HN", "HT", "ID", "IL", "IN", "IR", "IS", "JO", "KG", "KH", "KM", "KP", "KZ", "LA", "LB", "LI", "LK", "LR", "MA", "MC", "MD", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "NE", "NG", "NI", "NP", "PA", "PE", "PG", "PH", "PK", "PR", "PS", "PW", "PY", "RS", "RU", "RW", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TW", "UA", "UY", "UZ", "VA", "VE", "VN", "YE"]
    },
    {
      id: "zambia-kaza-multiple-90-days",
      name: 'Kaza Univisa (Multiple Entries for 90 days)',
      type: 'Kaza Univisa',
      description: 'Multiple Entries for 90 days',
      entry: 'Multiple Entries',
      visaDuration: 90,
      visaValidity: '7 days',
      expectedProcessingTime: '2 days',
      govFee: 70,
      allowedNationalities: ["AD", "AF", "AL", "AM", "AR", "AS", "AW", "AZ", "BA", "BD", "BF", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CU", "CV", "DJ", "DOM", "DZ", "EC", "EG", "ER", "ET", "FM", "GA", "GE", "GH", "GL", "GM", "GN", "GQ", "GT", "GW", "GY", "HK", "HN", "HT", "ID", "IL", "IN", "IR", "IS", "JO", "KG", "KH", "KM", "KP", "KZ", "LA", "LB", "LI", "LK", "LR", "MA", "MC", "MD", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "NE", "NG", "NI", "NP", "PA", "PE", "PG", "PH", "PK", "PR", "PS", "PW", "PY", "RS", "RU", "RW", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TW", "UA", "UY", "UZ", "VA", "VE", "VN", "YE"]
    },
    {
      id: "zambia-transit-single-7-days",
      name: 'Transit Evisa (Single Entry for 7 days)',
      type: 'Transit Evisa',
      description: 'Single Entry for 7 days',
      entry: 'Single Entry',
      visaDuration: 7,
      visaValidity: '7 days',
      expectedProcessingTime: '2 days',
      govFee: 45,
      allowedNationalities: ["AD", "AF", "AL", "AM", "AR", "AS", "AW", "AZ", "BA", "BD", "BF", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CU", "CV", "DJ", "DOM", "DZ", "EC", "EG", "ER", "ET", "FM", "GA", "GE", "GH", "GL", "GM", "GN", "GQ", "GT", "GW", "GY", "HK", "HN", "HT", "ID", "IL", "IN", "IR", "IS", "JO", "KG", "KH", "KM", "KP", "KZ", "LA", "LB", "LI", "LK", "LR", "MA", "MC", "MD", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "NE", "NG", "NI", "NP", "PA", "PE", "PG", "PH", "PK", "PR", "PS", "PW", "PY", "RS", "RU", "RW", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TW", "UA", "UY", "UZ", "VA", "VE", "VN", "YE"]
    },
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
    climate: 'Tropical, with a rainy season and a dry season',
    language: 'English',
    currency: 'Zambian Kwacha (ZMW)',
  },
};

export default zambia;