// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const Moldova: Country = {
  slug: 'moldova',
  name: 'Moldova',
  region: 'Europe',
  code: 'md',
  flagUrl: '/images/country/moldova/moldova-square.png',
  imageUrl: '/images/country/moldova/moldova-bg.jpg',
  roundedFlagUrl: '/images/country/moldova/moldova-rounded.png',
  description: `The Moldova eVisa, introduced by the government in 2015, is a multi-entry electronic visa that permits eligible travelers to visit Moldova for tourism and business purposes.`,
  welcomeMessage: `Moldova is a captivating Eastern European destination known for its scenic rural landscapes, rich winemaking traditions, and deep-rooted cultural heritage. Visitors can tour the country’s charming vineyards and sample its famous wines, while exploring Chisinau—the capital—renowned for its historic architecture, lively markets, and cultural institutions. Moldova offers a distinctive mix of Romanian and Russian influences that contribute to its unique character.`,
  welcomeImgUrl: '/images/country/moldova/moldova-welcome.jpg',
  visaTypes: [
    {
      id: "moldova-tourist-multiple-90-days",
      name: 'Tourist Evisa (Multiple Entries for 90 days)',
      type: 'Tourist Evisa',
      description: 'Multiple Entries for 90 days',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 73,
      allowedNationalities: ["AF", "AO", "BD", "BF", "BH", "BI", "BJ", "BO", "BT", "BW", "BZ", "CD", "CG", "CI", "CM", "CN", "CV", "DJ", "DM", "DZ", "EG", "ER", "ET", "FJ", "GA", "GH", "GM", "GN", "GQ", "GW", "GY", "HK", "HT", "HU", "ID", "IN", "IQ", "IR", "JM", "JO", "KE", "KH", "KM", "KP", "KW", "LA", "LB", "LK", "LR", "LS", "MA", "MG", "ML", "MN", "MR", "MV", "MW", "MZ", "NA", "NE", "NG", "NP", "NR", "OM", "PG", "PH", "PK", "PS", "QA", "RW", "SA", "SL", "SN", "SO", "SR", "ST", "SY", "SZ", "TD", "TG", "TH", "TM", "TN", "TZ", "UG", "VN", "YE", "ZA", "ZM", "ZW"]
    },
    {
      id: "moldova-business-multiple-90-days",
      name: 'Business Evisa (Multiple Entries for 90 days)',
      type: 'Business Evisa',
      description: 'Multiple Entries for 90 days',
      entry: 'Multiple Entries',
      visaDuration: 30,
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 73,
      allowedNationalities: ["AF", "AO", "BD", "BF", "BH", "BI", "BJ", "BO", "BT", "BW", "BZ", "CD", "CG", "CI", "CM", "CN", "CV", "DJ", "DM", "DZ", "EG", "ER", "ET", "FJ", "GA", "GH", "GM", "GN", "GQ", "GW", "GY", "HK", "HT", "HU", "ID", "IN", "IQ", "IR", "JM", "JO", "KE", "KH", "KM", "KP", "KW", "LA", "LB", "LK", "LR", "LS", "MA", "MG", "ML", "MN", "MR", "MV", "MW", "MZ", "NA", "NE", "NG", "NP", "NR", "OM", "PG", "PH", "PK", "PS", "QA", "RW", "SA", "SL", "SN", "SO", "SR", "ST", "SY", "SZ", "TD", "TG", "TH", "TM", "TN", "TZ", "UG", "VN", "YE", "ZA", "ZM", "ZW"]
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
    serviceFee: 49.99, // or use a number if fixed
  },
  info: {
    climate: 'Temperate, continental',
    language: 'Moldovan, Russian, English',
    currency: 'Mondovan Leu (MDL)',
  },
};

export default Moldova;
