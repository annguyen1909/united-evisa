import { Country } from "./type";

const southafrica: Country = {
  slug: 'south-africa',
  name: 'South Africa',
  code: 'za',
  region: 'Africa',
  flagUrl: '/images/country/south-africa/south-africa-square.png',
  imageUrl: '/images/country/south-africa/south-africa-bg.jpg',
  roundedFlagUrl: '/images/country/south-africa/south-africa-rounded.png',
  description: `Apply for your South Africa eVisa online with United eVisa Services. Fast, secure, and convenient visa application for South Africa travel. Get your South Africa visa quickly with our expert assistance.`,
  welcomeMessage: `Explore South Africa's diverse landscapes, wildlife, and vibrant cities. From Cape Town to Kruger National Park, South Africa is a must-visit destination for travelers.`,
  welcomeImgUrl: '/images/country/south-africa/south-africa-welcome.jpg',
  processingTime: {
    normal: '3 working days',
    superUrgent: '1 working day',
  },
  visaTypes: [
    {
      id: "south-africa-tourist-single-90-days",
      name: 'Tourist Evisa (Single Entry for 90 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 90 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
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
      govFee: 66,
      allowedNationalities: ["AL", "BG", "BY", "CD", "CG", "CI", "CM", "CN", "CR", "CU", "DZ", "EG", "ET", "GH", "GN", "HR", "ID", "IN", "IR", "KE", "KM", "LR", "LT", "MA", "ML", "MX", "NE", "NG", "OM", "PH", "PK", "RO", "SA", "SK", "SN", "UG"]
    }
  ],
  info: {
    climate: 'Varied: Mediterranean in the southwest, subtropical in the northeast',
    language: 'English, Afrikaans, Pedi, Sotho, Southern Ndebele, Swazi, Tsonga, Tswana, Venda, Xhosa and Zulu',
    currency: 'South African Rand (ZAR)',
  },
};

export default southafrica