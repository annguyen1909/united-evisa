import { Country } from '@/lib/countries/type';
import { SERVICE_FEE } from '@/lib/constants';

interface CountryStructuredDataProps {
  country: Country;
}

export default function CountryStructuredData({ country }: CountryStructuredDataProps) {
  // compute min government fee across visa types
  const visaFees = (country?.visaTypes || []).map((v: any) => Number(v?.govFee || 0)).filter(Boolean);
  const minGovFee = visaFees.length ? Math.min(...visaFees) : 0;
  const serviceFee = Number(SERVICE_FEE || 0);
  const startsFrom = (minGovFee + serviceFee).toFixed(2);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `https://unitedevisa.com/destinations/${country.slug}#organization`,
        "name": "United eVisa Services",
        "url": "https://unitedevisa.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://unitedevisa.com/images/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1 323 286 4541",
          "contactType": "customer service",
          "email": "visa@unitedevisa.com",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1308 E Colorado Blvd, #2244",
          "addressLocality": "Pasadena",
          "addressRegion": "CA",
          "postalCode": "91106",
          "addressCountry": "US"
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://unitedevisa.com/destinations/${country.slug}#webpage`,
        "url": `https://unitedevisa.com/destinations/${country.slug}`,
        "name": `${country.name} eVisa Requirements & Application`,
        "description": `Apply for ${country.name} eVisa online. Fast processing, 24/7 support, expert assistance.`,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://unitedevisa.com#website"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://unitedevisa.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Destinations",
              "item": "https://unitedevisa.com/destinations"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": country.name,
              "item": `https://unitedevisa.com/destinations/${country.slug}`
            }
          ]
        }
      },
      {
        "@type": "Place",
        "@id": `https://unitedevisa.com/destinations/${country.slug}#place`,
        "name": country.name,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": country.code.toUpperCase()
        },
        "image": {
          "@type": "ImageObject",
          "url": `https://unitedevisa.com${country.imageUrl}`,
          "caption": `${country.name} destination for visa applications`
        }
      },
      // Service schema for each visa type
      ...country.visaTypes.map((visa, index) => ({
        "@type": "Service",
        "@id": `https://unitedevisa.com/destination/${country.slug}#service-${index}`,
        "name": `${country.name} ${visa.type} Visa`,
        "description": `Apply for ${country.name} ${visa.type} visa online. ${visa.entry || 'Single entry'} visa valid for ${visa.visaDuration || 30} days.`,
        "provider": {
          "@id": `https://unitedevisa.com/destination/${country.slug}#organization`
        },
        "areaServed": {
          "@type": "Place",
          "name": country.name
        },
        "serviceType": `${visa.type} Visa Application`,
        "offers": {
          "@type": "Offer",
          "price": ((Number(visa?.govFee || 0) + serviceFee).toFixed(2)).toString(),
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": ((Number(visa?.govFee || 0) + serviceFee).toFixed(2)).toString(),
            "priceCurrency": "USD"
          },
          "availability": "https://schema.org/InStock"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Processing Time",
            "value": visa.processingTimes?.normal || country.processingTime?.normal || "24-72 hours"
          },
          {
            "@type": "PropertyValue",
            "name": "Entry Type",
            "value": visa.entry || "Single Entry"
          },
          {
            "@type": "PropertyValue",
            "name": "Validity",
            "value": `${visa.visaDuration || 30} days`
          }
        ]
      })),
      // FAQ Schema for common visa questions
      {
        "@type": "FAQPage",
        "@id": `https://unitedevisa.com/destinations/${country.slug}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How long does it take to process a ${country.name} visa?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${country.name} visa processing typically takes ${country.processingTime?.normal || '24-72 hours'}. We also offer expedited processing options for urgent travel needs.`
            }
          },
          {
            "@type": "Question",
            "name": `What documents do I need for a ${country.name} visa?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `For a ${country.name} visa, you'll need a valid passport with at least 6 months validity, passport-size photos, proof of accommodation, and return flight tickets. Additional documents may be required based on your visa type.`
            }
          },
          {
            "@type": "Question",
            "name": `How much does a ${country.name} visa cost?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${country.name} visa fees vary by type and nationality. Government fees start from $${minGovFee || 0}, plus our service fee of $${serviceFee.toFixed(2)}. Check our calculator for exact pricing. Total starts from $${startsFrom}.`
            }
          }
        ]
      },
      // Review/Rating Schema
      {
        "@type": "AggregateRating",
        "@id": `https://unitedevisa.com/destinations/${country.slug}#rating`,
        "ratingValue": "4.8",
        "reviewCount": "500+",
        "bestRating": "5",
        "worstRating": "1",
        "itemReviewed": {
          "@type": "Service",
          "name": `${country.name} Visa Application Service`
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 