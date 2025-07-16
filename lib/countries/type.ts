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
  processingTime?: {
    normal?: string; // e.g. '3 days'
    superUrgent?: string; // e.g. '24 hours'
  };
  visaTypes: {
    id: string;
    name: string;
    type: string;
    entry: string;
    description: string;
    visaValidity: string;
    visaDuration: number;
    processingTimes?: {
      normal?: string; // e.g. '3 days'
      superUrgent?: string; // e.g. '24 hours'
    };
    govFee: number;
    allowedNationalities: string[];
  }[];
  portType: {
    type: string;
    port: string[];
  }[];
  info: {
    climate: string;
    language: string;
    currency: string;
  };
}
