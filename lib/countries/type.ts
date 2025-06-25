export type Country = {
  visaTypes: any;
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
  etaInfo: {
    processing: {
      summary: string;
      steps: string[];
      urgentProcessing: string;
    };
    visaTypes: {
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
    serviceFee: number;
  };
  visaServicePackage: string[];
  gvcSupport: {
    description: string;
    services: string[];
    note: string;
  };
  info: {
    climate: string;
    language: string;
    currency: string;
  };
}
