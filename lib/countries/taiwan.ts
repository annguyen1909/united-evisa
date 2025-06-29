import { Country } from "./type";

const taiwan: Country = {
  slug: 'taiwan',
  name: 'Taiwan',
  code: 'tw',
  region: 'Asia Pacific',
  flagUrl: '/images/country/taiwan/taiwan-square.png',
  imageUrl: '/images/country/taiwan/taiwan-bg.jpg',
  roundedFlagUrl: '/images/country/taiwan/taiwan-rounded.png',
  description: `In 2016, the Ministry of Foreign Affairs (MOFA) of the Republic of China (Taiwan) launched the Taiwan eVisa program. This visa allows travelers to visit Taiwan for both tourism and business purposes.`,
  welcomeMessage: `Welcome to Taiwan! Enjoy the bustling streets of Taipei, the beauty of Sun Moon Lake, and the delicious local cuisine.`,
  welcomeImgUrl: '/images/country/taiwan/taiwan-welcome.jpg',
  visaTypes: [
    {
      id: "taiwan-tourist-single-30-days",
      name: 'Tourist Evisa(Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: '30 days',
      visaValidity: '180 days',
      expectedProcessingTime: '2 days',
      govFee: 50,
      allowedNationalities: [
        // Add allowed country codes here if needed
      ],
    },
    {
      id: "taiwan-business-single-30-days",
      name: 'Business Evisa(Single Entry for 30 days)',
      type: 'Business Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: '30 days',
      visaValidity: '180 days',
      expectedProcessingTime: '2 days',
      govFee: 50,
      allowedNationalities: [
        // Add allowed country codes here if needed
      ],
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
    climate: 'Subtropical, humid',
    language: 'Mandarin Chinese',
    currency: 'New Taiwan Dollar (TWD)',
  },
};
export default taiwan;