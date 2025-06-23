import { Country } from "./type";

const tajikistan: Country = {
  slug: 'tajikistan',
  name: 'Tajikistan',
  code: 'tj',
  region: 'Asia Pacific',
  flagUrl: '/images/country/tajikistan/tajikistan-square.png',
  imageUrl: '/images/country/tajikistan/tajikistan-bg.jpg',
  roundedFlagUrl: '/images/country/tajikistan/tajikistan-rounded.png',
  description: `The Tajikistan eVisa, introduced in 2016, is an official travel authorization that allows visitors to enter and travel within the country for tourism purposes.`,
  welcomeMessage: `Welcome to Tajikistan! Trek the Pamir Mountains, explore the ancient city of Khujand, and experience the vibrant culture of Dushanbe.`,
  welcomeImgUrl: '/images/country/tajikistan/tajikistan-welcome.jpg',
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
    visaTypes: [
      {
        name: 'Tourist Evisa Gbao Permit (Single Entry for 60 days)',
        type: 'Tourist Evisa Gbao Permit',
        description: 'Single Entry for 60 days',
        entry: 'Single Entry',
        visaDuration: '60 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 80,
        allowedNationalities: ["AD", "AE", "AG", "AL", "AM", "AO", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CL", "CM", "CN", "CO", "CR", "CU", "CY", "CZ", "DE", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FR", "GB", "GD", "GH", "GR", "GT", "GY", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KH", "KN", "KR", "LA", "LB", "LC", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MN", "MO", "MT", "MU", "MV", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PY", "QA", "RO", "RS", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "SN", "SR", "SV", "TH", "TM", "TN", "TR", "TT", "TW", "US", "UY", "UZ", "VC", "VE", "VN", "ZA"]
      },
      {
        name: 'Tourist Evisa Gbao Permit (Multiple Entries for 60 days)',
        type: 'Tourist Evisa Gbao Permit',
        description: 'Multiple Entries for 60 days',
        entry: 'Multiple Entries',
        visaDuration: '60 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 100,
        allowedNationalities: ["AD", "AE", "AG", "AL", "AM", "AO", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CL", "CM", "CN", "CO", "CR", "CU", "CY", "CZ", "DE", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FR", "GB", "GD", "GH", "GR", "GT", "GY", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KH", "KN", "KR", "LA", "LB", "LC", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MN", "MO", "MT", "MU", "MV", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PY", "QA", "RO", "RS", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "SN", "SR", "SV", "TH", "TM", "TN", "TR", "TT", "TW", "US", "UY", "UZ", "VC", "VE", "VN", "ZA"]
      },
      {
        name: 'Tourist Evisa (Single Entry for 60 days)',
        type: 'Tourist Evisa',
        description: 'Single Entry for 60 days',
        entry: 'Single Entry',
        visaDuration: '60 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 60,
        allowedNationalities: ["AD", "AE", "AG", "AL", "AM", "AO", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CL", "CM", "CN", "CO", "CR", "CU", "CY", "CZ", "DE", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FR", "GB", "GD", "GH", "GR", "GT", "GY", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KH", "KN", "KR", "LA", "LB", "LC", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MN", "MO", "MT", "MU", "MV", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PY", "QA", "RO", "RS", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "SN", "SR", "SV", "TH", "TM", "TN", "TR", "TT", "TW", "US", "UY", "UZ", "VC", "VE", "VN", "ZA"]
      },
      {
        name: 'Tourist Evisa (Multiple Entries for 30 days)',
        type: 'Tourist Evisa',
        description: 'Multiple Entries for 30 days',
        entry: 'Multiple Entries',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 60,
        allowedNationalities: ["AD", "AE", "AG", "AL", "AM", "AO", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CL", "CM", "CN", "CO", "CR", "CU", "CY", "CZ", "DE", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FR", "GB", "GD", "GH", "GR", "GT", "GY", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KH", "KN", "KR", "LA", "LB", "LC", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MN", "MO", "MT", "MU", "MV", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PY", "QA", "RO", "RS", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "SN", "SR", "SV", "TH", "TM", "TN", "TR", "TT", "TW", "US", "UY", "UZ", "VC", "VE", "VN", "ZA"]
      },
    ],
    serviceFee: 49.99,
  },
  visaServicePackage: [
    'Entry visa for a short period',
    'Application form filling assistance',
    'Travel insurance consultant',
    'Portal for real-time visa updates',
    '24/7 online support team for any issues',
    'Urgent case support, with added fees',
  ],
  gvcSupport: {
    description: 'Apply Visa at GVC — with many years of experience, GVC simplifies the process.',
    services: [
      'Consulting about the eVisa',
      "Receiving & checking the applicant's information",
      'Informing the status and results',
      'Collecting the eVisa from the authorities',
      'Sending it to the applicant',
    ],
    note: 'You can also apply on your own through the government website to save your budget.',
  },
  info: {
    climate: 'Continental, with hot summers and cold winters',
    language: 'Tajik',
    currency: 'Somoni (TJS)',
  },
};

export default tajikistan;