import { Country } from "./type";

const taiwan: Country = {
  slug: 'taiwan',
  name: 'Taiwan',
  code: 'tw',
  region: 'Asia Pacific',
  flagUrl: '/images/country/taiwan/taiwan-square.png',
  imageUrl: '/images/country/taiwan/taiwan-bg.jpg',
  roundedFlagUrl: '/images/country/taiwan/taiwan-rounded.png',
  description: `Apply for your Taiwan eVisa online with United eVisa Services. Fast, secure, and convenient visa application for Taiwan travel. Get your Taiwan visa quickly with our expert assistance.`,
  welcomeMessage: `Experience Taiwan's vibrant culture, modern cities, and stunning landscapes. From Taipei's night markets to Taroko Gorge, Taiwan is a must-visit destination for travelers.`,
  welcomeImgUrl: '/images/country/taiwan/taiwan-welcome.jpg',
  processingTime: {
    normal: '5 working days',
  },
  visaTypes: [
    {
      id: "taiwan-tourist-single-30-days",
      name: 'Tourist Evisa(Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '180 days',
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
      visaDuration: 30,
      visaValidity: '180 days',
      govFee: 50,
      allowedNationalities: [
        // Add allowed country codes here if needed
      ],
    }
  ],
  info: {
    climate: 'Subtropical, humid',
    language: 'Mandarin Chinese',
    currency: 'New Taiwan Dollar (TWD)',
  },
};
export default taiwan;