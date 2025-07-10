import { Country } from "./type";

const southafrica: Country = {
  slug: 'south-africa',
  name: 'South Africa',
  code: 'za',
  region: 'Africa',
  flagUrl: '/images/country/south-africa/south-africa-square.png',
  imageUrl: '/images/country/south-africa/south-africa-bg.jpg',
  roundedFlagUrl: '/images/country/south-africa/south-africa-rounded.png',
  description: `The South African eVisa service offers a convenient and secure way to apply through the Department of Home Affairs. This visa is issued for tourism or business visits and is valid for up to 90 days.`,
  welcomeMessage: `Welcome to South Africa! Explore Cape Town and Johannesburg, go on safari, and visit the historic Robben Island. Experience the Rainbow Nation's culture, cuisine, and breathtaking landscapes.`,
  welcomeImgUrl: '/images/country/south-africa/south-africa-welcome.jpg',

  visaTypes: [
    {
      id: "south-africa-tourist-single-90-days",
      name: 'Tourist Evisa (Single Entry for 90 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 90 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 66,
      allowedNationalities: ["AL", "BG", "BY", "CD", "CG", "CI", "CM", "CN", "CR", "CU", "DZ", "EG", "ET", "GH", "GN", "HR", "ID", "IN", "IR", "KE", "KM", "LR", "LT", "MA", "ML", "MX", "NE", "NG", "OM", "PH", "PK", "RO", "SA", "SK", "SN", "UG"]
    },
    {
      id: "south-africa-business-single-90-days",
      name: 'Business Evisa (Single Entry for 90 days)',
      type: 'Business Evisa',
      description: 'Single Entry for 90 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 66,
      allowedNationalities: ["AL", "BG", "BY", "CD", "CG", "CI", "CM", "CN", "CR", "CU", "DZ", "EG", "ET", "GH", "GN", "HR", "ID", "IN", "IR", "KE", "KM", "LR", "LT", "MA", "ML", "MX", "NE", "NG", "OM", "PH", "PK", "RO", "SA", "SK", "SN", "UG"]
    }
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
    serviceFee: 49.99,
  },
  info: {
    climate: 'Varied: Mediterranean in the southwest, subtropical in the northeast',
    language: 'English, Afrikaans, Pedi, Sotho, Southern Ndebele, Swazi, Tsonga, Tswana, Venda, Xhosa and Zulu',
    currency: 'South African Rand (ZAR)',
  },
};

export default southafrica