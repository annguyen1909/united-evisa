// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const angola: Country = {
  slug: 'angola',
  name: 'Angola',
  region: 'Africa',
  code: 'ao',
  flagUrl: '/images/country/angola/angola-square.png',
  imageUrl: '/images/country/angola/angola-bg.jpg',
  roundedFlagUrl: '/images/country/angola/angola-rounded.png',
  description: `Since March 2018, Angola has introduced the eVisa system to streamline the visa application process for travelers from over 60 countries. This digital solution allows eligible visitors to apply online, eliminating the need to visit an embassy. Once approved, the eVisa can be presented at any international airport in Angola, making travel more convenient and promoting tourism.`,
  welcomeMessage: `A vibrant Southern African nation known for its diverse landscapes, rich cultural heritage, and emerging travel opportunities.Discover the dynamic capital city of Luanda, where modern high-rises overlook the Atlantic coast and local markets pulse with energy. Explore the dramatic beauty of Kalandula Falls, one of Africa’s largest waterfalls, or venture through the wild expanses of Kissama National Park.Step back in time at the historic town of M'banza-Kongo, a UNESCO World Heritage Site, and unwind on the serene beaches of Benguela.`,
  welcomeImgUrl: '/images/country/angola/angola-welcome.jpg',
  processingTime: {
    normal: '5 working days',
    superUrgent: '1 working day',
  },
  visaTypes: [
    {
      id: 'angola-tourist-single-30-days',
      name: 'Tourist Evisa (Single Entry for 30 days)',
      type: 'Tourist Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 30,
      allowedNationalities: ["AE", "AR", "AT", "AU", "BE", "BG", "BR", "BW", "CA", "CH", "CL", "CN", "CU", "CV", "CY", "CZ", "DE", "DK", "DZ", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JP", "KR", "LS", "LU", "LV", "MA", "MC", "MG", "MO", "MT", "MU", "MW", "NL", "NO", "NZ", "PL", "PT", "RO", "RU", "SC", "SE", "SG", "SI", "SK", "ST", "SZ", "TL", "TW", "US", "UY", "VA", "VE", "ZM", "ZW"]
    },
    {
      id: 'angola-business-single-30-days',
      name: 'Business Evisa (Single Entry for 30 days)',
      type: 'Business Evisa',
      description: 'Single Entry for 30 days',
      entry: 'Single Entry',
      visaDuration: 30,
      visaValidity: '60 days',
      govFee: 30,
      allowedNationalities: ["AE", "AR", "AT", "AU", "BE", "BG", "BR", "BW", "CA", "CH", "CL", "CN", "CU", "CV", "CY", "CZ", "DE", "DK", "DZ", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JP", "KR", "LS", "LU", "LV", "MA", "MC", "MG", "MO", "MT", "MU", "MW", "NL", "NO", "NZ", "PL", "PT", "RO", "RU", "SC", "SE", "SG", "SI", "SK", "ST", "SZ", "TL", "TW", "US", "UY", "VA", "VE", "ZM", "ZW"]
    },
  ],
  info: {
    climate: 'Tropical, with distinct wet and dry seasons',
    language: 'Portuguese',
    currency: 'Kwanza (AOA)',
  },
};

export default angola;
