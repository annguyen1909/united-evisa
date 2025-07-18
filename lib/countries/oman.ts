// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const oman: Country = {
  slug: 'oman',
  name: 'Oman',
  code: 'om',
  region: 'Middle East',
  flagUrl: '/images/country/oman/oman-square.png',
  imageUrl: '/images/country/oman/oman-bg.jpg',
  roundedFlagUrl: '/images/country/oman/oman-rounded.png',
  description: `Apply for your Oman eVisa online with United eVisa. Fast, secure, and convenient visa application for Oman travel. Get your Oman visa quickly with our expert assistance.`,
  welcomeMessage: `Discover Oman's stunning deserts, historic forts, and beautiful coastline. From Muscat to the Wahiba Sands, Oman is a unique destination for travelers.`,
  welcomeImgUrl: '/images/country/oman/oman-welcome.jpg',
  processingTime: {
    normal: '3 working days',
    superUrgent: '1 working day',
  },
    visaTypes: [
      {
        id: "oman-tourist",
        name: 'Tourist Evisa',
        type: 'Tourist Evisa',
        description: '',
        entry: '',
        visaDuration: 30,
        visaValidity: '60 days',
        govFee: 82,
        allowedNationalities: ["AD", "AF", "AG", "AL", "AM", "AO", "AR", "AS", "AT", "AU", "AZ", "BA", "BE", "BF", "BG", "BN", "BO", "BR", "BT", "BY", "CA", "CH", "CL", "CN", "CO", "CR", "CU", "CZ", "DE", "DK", "DM", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GE", "GN", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IR", "IS", "IT", "JP", "KZ", "LA", "LB", "LI", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MK", "ML", "MT", "MV", "MX", "MY", "NA", "NE", "NI", "NL", "NO", "NR", "NZ", "PA", "PE", "PL", "PT", "PY", "RO", "SC", "SE", "SG", "SI", "SK", "SM", "SN", "SR", "SV", "TH", "TJ", "TM", "TR", "TW", "US", "UY", "UZ", "VA", "VE", "VN", "ZA"]
      }
    ],
  info: {
    climate: 'Arid, hot summers and mild winters',
    language: 'Arabic',
    currency: 'Omani Rial (OMR)',
  }
};

export default oman;
