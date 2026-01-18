import Script from 'next/script';
import { getCountryBySlug } from '@/lib/countries';
import { SERVICE_FEE } from '@/lib/constants';

interface PageSEOProps {
  pageType: 'destination' | 'requirements' | 'faq' | 'homepage' | 'pricing';
  countryName?: string;
  countrySlug?: string;
  title?: string;
  description?: string;
}

export default function PageSEO({
  pageType,
  countryName,
  countrySlug,
  title,
  description
}: PageSEOProps) {

  const generateStructuredData = () => {
    const baseData: any = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://worldmaxxing.com/#website",
          "url": "https://worldmaxxing.com",
          "name": "Worldmaxxing Global Services",
          "description": "Fast and secure eVisa applications for travelers worldwide",
          "publisher": {
            "@id": "https://worldmaxxing.com/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://worldmaxxing.com/check-requirements?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }
      ]
    };

    // Add page-specific structured data
    if (pageType === 'destination' && countryName && countrySlug) {
      // try to compute a realistic 'starts from' price using country data
      const countryObj: any = getCountryBySlug(countrySlug as string);
      const visaFees = (countryObj?.visaTypes || []).map((v: any) => Number(v?.govFee || 0)).filter(Boolean);
      const minGovFee = visaFees.length ? Math.min(...visaFees) : 0;
      const serviceFee = Number(SERVICE_FEE || 0);
      const startsFrom = ((minGovFee || 0) + serviceFee).toFixed(2);

      baseData["@graph"].push({
        "@type": "Service",
        "@id": `https://worldmaxxing.com/destinations/${countrySlug}#service`,
        "name": `${countryName} eVisa Application Service`,
        "description": `Professional ${countryName} eVisa application assistance with fast processing and expert support`,
        "provider": {
          "@id": "https://worldmaxxing.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": countryName
        },
        "serviceType": "Visa Application Service",
        "url": `https://worldmaxxing.com/destinations/${countrySlug}`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": startsFrom,
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://worldmaxxing.com/#organization"
          }
        }
      });

      baseData["@graph"].push({
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://worldmaxxing.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Destinations",
            "item": "https://worldmaxxing.com/destinations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": countryName,
            "item": `https://worldmaxxing.com/destinations/${countrySlug}`
          }
        ]
      });
    }

    if (pageType === 'homepage') {
      baseData["@graph"].push({
        "@type": "Service",
        "name": "eVisa Application Services",
        "description": "Fast, secure, and reliable eVisa application services for travelers worldwide",
        "provider": {
          "@id": "https://worldmaxxing.com/#organization"
        },
        "serviceType": "Travel Document Services",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "eVisa Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tourist eVisa"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business eVisa"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Transit eVisa"
              }
            }
          ]
        }
      });
    }

    return baseData;
  };

  return (
    <Script
      id={`structured-data-${pageType}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateStructuredData())
      }}
    />
  );
}
