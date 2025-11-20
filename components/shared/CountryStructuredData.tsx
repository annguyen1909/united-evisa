import { Country } from '@/lib/countries/type';

interface CountryStructuredDataProps {
  country: Country;
}

export default function CountryStructuredData({ country }: CountryStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `https://worldmaxxing.com/destination/${country.slug}#organization`,
        "name": "Worldmaxxing Global Services",
        "url": "https://worldmaxxing.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://worldmaxxing.com/images/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1 323 286 4541",
          "contactType": "customer service",
          "email": "visa@worldmaxxing.com",
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
        "@id": `https://worldmaxxing.com/destination/${country.slug}#webpage`,
        "url": `https://worldmaxxing.com/destination/${country.slug}`,
        "name": `${country.name} eVisa Requirements & Application`,
        "description": `Apply for ${country.name} eVisa online. Fast processing, 24/7 support, expert assistance.`,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://worldmaxxing.com#website"
        },
        "breadcrumb": {
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
              "item": "https://worldmaxxing.com/destination"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": country.name,
              "item": `https://worldmaxxing.com/destination/${country.slug}`
            }
          ]
        }
      },
      {
        "@type": "Place",
        "@id": `https://worldmaxxing.com/destination/${country.slug}#place`,
        "name": country.name,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": country.code.toUpperCase()
        },
        "image": {
          "@type": "ImageObject",
          "url": `https://worldmaxxing.com${country.imageUrl}`,
          "caption": `${country.name} destination for visa applications`
        }
      },
      // Service schema for each visa type
      ...country.visaTypes.map((visa, index) => ({
        "@type": "Service",
        "@id": `https://worldmaxxing.com/destination/${country.slug}#service-${index}`,
        "name": `${country.name} ${visa.type} Visa`,
        "description": `Apply for ${country.name} ${visa.type} visa online. ${visa.entry || 'Single entry'} visa valid for ${visa.visaDuration || 30} days.`,
        "provider": {
          "@id": `https://worldmaxxing.com/destination/${country.slug}#organization`
        },
        "areaServed": {
          "@type": "Place",
          "name": country.name
        },
        "serviceType": `${visa.type} Visa Application`,
        "offers": {
          "@type": "Offer",
          "price": visa.govFee?.toString() || "59.99",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": visa.govFee?.toString() || "59.99",
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
        "@id": `https://worldmaxxing.com/destination/${country.slug}#faq`,
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
              "text": `${country.name} visa fees vary by type and nationality. Government fees start from $${country.visaTypes[0]?.govFee || 25}, plus our service fee of $59.99. Check our calculator for exact pricing.`
            }
          }
        ]
      },
      // Review/Rating Schema
      {
        "@type": "AggregateRating",
        "@id": `https://worldmaxxing.com/destination/${country.slug}#rating`,
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