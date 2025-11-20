interface CheckRequirementsStructuredDataProps {
  nationality?: string;
  destination?: string;
}

export default function CheckRequirementsStructuredData({
  nationality,
  destination
}: CheckRequirementsStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Visa Requirements Checker",
    "description": "Check visa requirements and eligibility for international travel to 50+ countries",
    "url": "https://worldmaxxing.com/check-requirements",
    "applicationCategory": "TravelApplication",
    "operatingSystem": "Web Browser",
    "author": {
      "@type": "Organization",
      "name": "Worldmaxxing Global Services",
      "url": "https://worldmaxxing.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free visa requirements checker"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 