// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const cambodia: Country = {
  slug: 'cambodia',
  name: 'Cambodia',
  region: 'Asia Pacific',
  code: 'kh',
  flagUrl: '/images/flags/vietnam.png',
  imageUrl: '/images/country/vietnam-bg.jpg',
  roundedFlagUrl: '/images/flags/vietnam.png',
  description: `The Cambodia eVisa, often known as an electronic visa, was established in April 2006 by the Ministry of Foreign Affairs and International Cooperation. Eligible countries can apply for this type of visa for tourist purposes only. Within a few days, travelers can have a travel permit without visiting the Embassy or Consulates.`,
  welcomeMessage: `Vietnam - A captivating Southeast Asian country renowned for its breathtaking landscapes, rich history, and vibrant culture. Explore the bustling streets of Hanoi, the capital city, where traditional architecture blends with modern influences, and indulge in the flavors of Vietnamese street food. Immerse yourself in the natural beauty of Halong Bay, with its towering limestone islands and emerald waters, or venture into the lush rice terraces of Sapa. Discover the ancient wonders of Hue's Imperial City or the charming lantern-lit streets of Hoi An.`,
  welcomeImgUrl: '/images/country/kenya-welcome.jpg',
  visaTypes: [
    {
      id: "cambodia-tourist-single-1-month",
      name: 'Tourist Evisa (Single Entry for 1 month)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 1 month',
      entry: 'Single Entry',
      visaDuration: '1 month',
      visaValidity: '60 days',
      expectedProcessingTime: '2 days',
      govFee: 66,
      allowedNationalities: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IE", "IL", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MV", "MW", "MX", "MZ", "NA", "NC", "NE", "NF", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]
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
    climate: 'Tropical climate',
    language: 'Khmer, English',
    currency: 'Cambodian Riel (KHR)',
  },
};

export default cambodia;
