export type Country = {
  slug: string;
  name: string;
  code: string;
  description: string;
  welcomeMessage: string;
  flagUrl?: string;
  roundedFlagUrl?: string;
  imageUrl?: string;
  welcomeImgUrl?: string;
  region?: string;
  visaTypes: {
    id: string;
    name: string;
    type: string;
    entry: string;
    description: string;
    visaValidity: string;
    visaDuration: string;
    expectedProcessingTime: string;
    govFee: number;
    allowedNationalities: string[];
  }[];
  etaInfo: {
    processing: {
      summary: string;
      steps: string[];
      urgentProcessing: string;
    };
    serviceFee: number;
  };
  info: {
    climate: string;
    language: string;
    currency: string;
  };
}
