
import { Country } from "./type"; // optional type if you're using centralized types

// Define visa fee table by nationality group
const indiaVisaFeeTable = [
  {
    // Group 1: Argentina, Cook Islands, Fiji, etc. - $30 for all visa types
    name: "Group 1: $30 fee group",
    countries: ["AR", "CK", "FJ", "ID", "JM", "KI", "MH", "MU", "FM", "NR", "NU", "PW", "PG", "WS", "SC", "SB", "ZA", "TO", "TV", "UY", "VU"],
    fees: {
      "30_days_tourist": 30,
      "1_year_tourist": 30,
      "5_years_tourist": 30,
      "1_year_business": 30,
      "other_visa": 30
    }
  },
  {
    // Group 2: Japan, Singapore - $50/$55 fees
    name: "Group 2: Japan, Singapore",
    countries: ["JP", "SG"],
    fees: {
      "30_days_tourist": 50,
      "1_year_tourist": 55,
      "5_years_tourist": 55,
      "1_year_business": 55,
      "other_visa": 55
    }
  },
  {
    // Group 3: Sri Lanka - some visa types not applicable
    name: "Group 3: Sri Lanka",
    countries: ["LK"],
    fees: {
      "30_days_tourist": 50,
      "1_year_tourist": 55,
      "5_years_tourist": null, // Not applicable
      "1_year_business": 55,
      "other_visa": 55
    }
  },
  {
    // Group 4: Benin, Mozambique
    name: "Group 4: Benin, Mozambique",
    countries: ["BJ", "MZ"],
    fees: {
      "30_days_tourist": 50,
      "1_year_tourist": 70,
      "5_years_tourist": 110,
      "1_year_business": 30,
      "other_visa": 130
    }
  },
  {
    // Group 5: Angola, Burundi, Cambodia, etc.
    name: "Group 5: Angola, African countries",
    countries: ["AO", "BI", "KH", "KM", "DJ", "TL", "ER", "GM", "GN", "HT", "LA", "LS", "LR", "MG", "MW", "ML", "NE", "RW", "SN", "SL", "TZ", "TG", "UG", "ZM"],
    fees: {
      "30_days_tourist": 50,
      "1_year_tourist": 70,
      "5_years_tourist": 110,
      "1_year_business": 30,
      "other_visa": 110
    }
  },
  {
    // Group 6: Malaysia, Thailand
    name: "Group 6: Malaysia, Thailand",
    countries: ["MY", "TH"],
    fees: {
      "30_days_tourist": 30,
      "1_year_tourist": 70,
      "5_years_tourist": 110,
      "1_year_business": 110,
      "other_visa": 110
    }
  },
  {
    // Group 7: European countries, other countries
    name: "Group 7: European countries and others",
    countries: ["PT", "MK", "RO", "LC", "VC", "SM", "SA", "RS", "SK", "SI", "ES", "KN", "SR", "SZ", "SE", "CH", "TW", "TJ", "TT", "TC", "AE", "UZ", "VE", "VN", "ZW"],
    fees: {
      "30_days_tourist": 50,
      "1_year_tourist": 70,
      "5_years_tourist": 110,
      "1_year_business": 110,
      "other_visa": 110
    }
  },
  {
    // Group 8: Canada
    name: "Group 8: Canada",
    countries: ["CA"],
    fees: {
      "30_days_tourist": 50,
      "1_year_tourist": 70,
      "5_years_tourist": null, // Not applicable
      "1_year_business": 110,
      "other_visa": 110
    }
  },
  {
    // Group 9: UK, Russia, Ukraine, USA
    name: "Group 9: UK, Russia, Ukraine, USA",
    countries: ["GB", "RU", "UA", "US"],
    fees: {
      "30_days_tourist": 50,
      "1_year_tourist": 70,
      "5_years_tourist": 110,
      "1_year_business": 130,
      "other_visa": 130
    }
  }
];

const allIndiaVisaNationalities = indiaVisaFeeTable.flatMap(group => group.countries);

// Define the 8 main visa types for India (similar to Vietnam structure)
const india: Country = {
  slug: 'india',
  name: 'India',
  region: 'Asia Pacific',
  code: 'in',
  flagUrl: '/images/country/india/india-square.png',
  imageUrl: '/images/country/india/india-bg.jpg',
  roundedFlagUrl: '/images/country/india/india-rounded.png',
  description: `India is a vast and diverse country, known for its rich history, vibrant culture, and incredible landscapes. From the Himalayas to the beaches of Goa, India offers a unique experience for every traveler.`,
  welcomeMessage: `Welcome to India! Visit the Taj Mahal, explore the palaces of Rajasthan, and experience the spiritual city of Varanasi. Enjoy the flavors of Indian cuisine and the warmth of its people.`,
  welcomeImgUrl: '/images/country/india/india-welcome.jpg',
  
  // Define only the 8 main visa types (like Vietnam)
  visaTypes: [
    {
      id: "india-tourist-double-30-days",
      name: "Tourist Evisa (Double Entries for 30 days)",
      type: "Tourist EVisa",
      description: "Double Entries",
      entry: "Double Entries",
      visaDuration: "30 days",
      visaValidity: "30 days",
      expectedProcessingTime: "3-5 business days",
      govFee: 30, // Base fee (will be calculated per nationality in the actual application)
      allowedNationalities: allIndiaVisaNationalities
    },
    {
      id: "india-tourist-multiple-1-year",
      name: "Tourist Evisa (Multiple Entries for 1 year)",
      type: "Tourist EVisa",
      description: "Multiple Entries for 1 year",
      entry: "Multiple Entries for 1 year",
      visaDuration: "1 year",
      visaValidity: "1 year",
      expectedProcessingTime: "3-5 business days",
      govFee: 30, // Base fee (will be calculated per nationality in the actual application)
      allowedNationalities: allIndiaVisaNationalities
    },
    {
      id: "india-tourist-multiple-5-years",
      name: "Tourist Evisa (Multiple Entries for 5 years)",
      type: "Tourist EVisa",
      description: "Multiple Entries for 5 years",
      entry: "Multiple Entries for 5 years",
      visaDuration: "5 years",
      visaValidity: "5 years",
      expectedProcessingTime: "3-5 business days",
      govFee: 30, // Base fee (will be calculated per nationality in the actual application)
      allowedNationalities: allIndiaVisaNationalities.filter(country => 
        !["LK", "CA"].includes(country) // Exclude countries where 5-year visa isn't applicable
      )
    },
    {
      id: "india-business-multiple-1-year",
      name: "Business Evisa (Multiple Entries for 1 year)",
      type: "Business Visa",
      description: "Multiple Entries for 1 year",
      entry: "Multiple Entries for 1 year",
      visaDuration: "1 year",
      visaValidity: "1 year",
      expectedProcessingTime: "3-5 business days",
      govFee: 30, // Base fee (will be calculated per nationality in the actual application)
      allowedNationalities: allIndiaVisaNationalities
    },
    {
      id: "india-medical-triple-60-days",
      name: "Medical Evisa (Triple Entries for 60 days)",
      type: "Medical Visa",
      description: "Triple Entries for 60 days",
      entry: "Triple Entries for 60 days",
      visaDuration: "60 days",
      visaValidity: "60 days",
      expectedProcessingTime: "3-5 business days",
      govFee: 30, // Base fee (will be calculated per nationality in the actual application)
      allowedNationalities: allIndiaVisaNationalities
    },
    {
      id: "india-ayush-triple-60-days",
      name: "Ayush Evisa (Triple Entries for 60 days)",
      type: "Ayush Evisa",
      description: "Triple Entries for 60 days",
      entry: "Triple Entries for 60 days",
      visaDuration: "60 days",
      visaValidity: "60 days",
      expectedProcessingTime: "3-5 business days",
      govFee: 30, // Base fee (will be calculated per nationality in the actual application)
      allowedNationalities: allIndiaVisaNationalities
    },
    {
      id: "india-conference-single-30-days",
      name: "Conference EVisa (Single Entry for 30 days)",
      type: "Conference Visa",
      description: "Single Entry for 30 days",
      entry: "Single Entry for 30 days",
      visaDuration: "30 days",
      visaValidity: "30 days",
      expectedProcessingTime: "3-5 business days",
      govFee: 30, // Base fee (will be calculated per nationality in the actual application)
      allowedNationalities: allIndiaVisaNationalities
    },
    {
      id: "india-student",
      name: "Student EVisa",
      type: "Student Visa",
      description: "For education purposes",
      entry: "", // Empty as per your request
      visaDuration: "Duration of course",
      visaValidity: "Duration of course",
      expectedProcessingTime: "3-5 business days",
      govFee: 30, // Base fee (will be calculated per nationality in the actual application)
      allowedNationalities: allIndiaVisaNationalities
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
    serviceFee: 59.99,
  },
  info: {
    climate: 'Varied: tropical in the south, temperate and alpine in the north',
    language: 'Hindi, English, and 21 other official languages',
    currency: 'Indian Rupee (INR)',
  },
};

// Helper function to calculate the actual fee based on nationality and visa type
// This function can be used in the payment flow later
export function calculateIndiaVisaFee(visaType: string, nationality: string): number | null {
  // Find which fee group the nationality belongs to
  const feeGroup = indiaVisaFeeTable.find(group => 
    group.countries.includes(nationality)
  );
  
  if (!feeGroup) return null;
  
  // Map medical, ayush, conference, student visas to "other_visa" fee
  const feeKey = ["medical_visa", "ayush_visa", "conference_visa", "student_visa"].includes(visaType) 
    ? "other_visa" 
    : visaType;
    
  // Return the fee or null if not applicable
  return feeGroup.fees[feeKey as keyof typeof feeGroup.fees];
}

export default india;
export { indiaVisaFeeTable }; 