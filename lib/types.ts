export interface ApplicationData {
    submittedAt?: string;
    applicationId?: string;
    fullName?: string;
    email?: string;
    areaCode?: string;
    phoneNumber?: string;
    gender?: string;
    stayingStart?: string;
    stayingEnd?: string;
    passengers?: any[];
    status?: string;
    createdAt?: string;
    deferredAt?: string;
    deferralReason?: string;
    requiredActions?: string[];
    visaType?: string | { id: string; name: string; waitTime?: string; fees?: any; requiredDocuments?: any; allowedNationalities?: any; destinationId?: string };
    destination?: string | { id: string; name: string; [key: string]: any };
    estimatedResolutionTime?: string;
    estimatedProcessingTime?: string;
    completedAt?: string;
    visaNumber?: string;
    visaExpiryDate?: string;
    visaValidFrom?: string;
    visaValidUntil?: string;
}
