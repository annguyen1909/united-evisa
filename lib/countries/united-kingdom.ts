import { Country } from "./type";

const unitedKingdom: Country = {
  slug: 'united-kingdom',
  name: 'United Kingdom',
  code: 'gb',
  region: 'Europe',
  flagUrl: '/images/country/united-kingdom/united-kingdom-square.png',
  imageUrl: '/images/country/united-kingdom/united-kingdom-bg.jpg',
  roundedFlagUrl: '/images/country/united-kingdom/united-kingdom-rounded.png',
  description: `In 2021, the United Kingdom introduced an eVisa system for travelers who require a visa to enter the country. The Electronic Travel Authorization (ETA) acts as a travel permit and is digitally linked to the traveler’s passport information.`,
  welcomeMessage: `Welcome to the United Kingdom! Explore historic castles, world-class museums, and beautiful countryside.`,
  welcomeImgUrl: '/images/country/united-kingdom/united-kingdom-welcome.jpg',
  processingTime: {
    normal: '3 working days',
    superUrgent: '2 working days',
  },
  visaTypes: [
    {
      id: "united-kingdom-tourist-single-6-months",
      name: 'Tourist Evisa (Single Entry for 6 months)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 6 months',
      entry: 'Single Entry',
      visaDuration: 6 * 30,
      visaValidity: '180 days',
      govFee: 67,
      allowedNationalities: ["AE", "BH", "KW", "OM", "QA", "SA"]
    },
    {
      id: "united-kingdom-business-single-6-months",
      name: 'Business Evisa (Single Entry for 6 months)',
      type: 'Business Evisa',
      description: 'Single Entry for 6 months',
      entry: 'Single Entry',
      visaDuration: 6 * 30,
      visaValidity: '180 days',
      govFee: 67,
      allowedNationalities: ["AE", "BH", "KW", "OM", "QA", "SA"]
    },
    {
      id: "united-kingdom-study-single-6-months",
      name: 'Study Evisa (Single Entry for 6 months)',
      type: 'Study Evisa',
      description: 'Single Entry for 6 months',
      entry: 'Single Entry',
      visaDuration: 6 * 30,
      visaValidity: '180 days',
      govFee: 67,
      allowedNationalities: ["AE", "BH", "KW", "OM", "QA", "SA"]
    },
    {
      id: "united-kingdom-medical-single-6-months",
      name: 'Medical Evisa Treatment (Single Entry for 6 months)',
      type: 'Medical Evisa Treatment',
      description: 'Single Entry for 6 months',
      entry: 'Single Entry',
      visaDuration: 6 * 30,
      visaValidity: '180 days',
      govFee: 67,
      allowedNationalities: ["AE", "BH", "KW", "OM", "QA", "SA"]
    },
  ],
  info: {
    climate: 'Temperate, with mild summers and cool winters',
    language: 'English',
    currency: 'Pound Sterling (GBP)',
  },
};

export default unitedKingdom