import { Country } from "./type";

const saudiArabia: Country = {
  slug: 'saudi-arabia',
  name: 'Saudi Arabia',
  region: 'Asia',
  code: 'sa',
  flagUrl: '/images/country/saudi-arabia/saudi-arabia-square.png',
  imageUrl: '/images/country/saudi-arabia/saudi-arabia-bg.jpg',
  roundedFlagUrl: '/images/country/saudi-arabia/saudi-arabia-rounded.png',
  description: `The Kingdom of Saudi Arabia introduced the eVisa system in September 2019, enabling eligible nationalities to enter the country for tourism purposes.`,
  welcomeMessage: `Welcome to Saudi Arabia! Visit the ancient Nabatean city of AlUla, experience the vibrant city life of Riyadh and Jeddah, and discover the Red Sea’s pristine beaches.`,
  welcomeImgUrl: '/images/country/saudi-arabia/saudi-arabia-welcome.jpg',

  visaTypes: [
    {
      id: "saudi-arabia-tourist-multiple-3-months",
      name: 'Tourist eVisa (Multiple Entries for 3 months)',
      type: 'Tourist eVisa',
      description: 'Multiple Entries for 3 months',
      entry: 'Multiple Entries',
      visaDuration: '3 months',
      visaValidity: '3 months',
      expectedProcessingTime: '1-2 days',
      govFee: 129,
      allowedNationalities: ["AD", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BV", "BW", "BY", "BZ", "CA", "CC", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "PA", "PE", "PF", "PG", "PH", "PL", "PM", "PN", "PR", "PT", "PW", "PY", "RE", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]
    },
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
    climate: 'Desert; extremely hot summers, mild winters',
    language: 'Arabic',
    currency: 'Saudi Riyal (SAR)',
  },
};

export default saudiArabia