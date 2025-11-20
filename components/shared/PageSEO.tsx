import Script from 'next/script';

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
          "@type": "Organization",
          "@id": "https://worldmaxxing.com/#organization",
          "name": "Worldmaxxing Global Services",
          "url": "https://worldmaxxing.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://worldmaxxing.com/images/logo.png",
            "width": 300,
            "height": 300
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-800-VISA-HELP",
            "contactType": "customer service",
            "availableLanguage": ["English"],
            "areaServed": "Worldwide"
          },
          "sameAs": [
            "https://twitter.com/worldmaxxing",
            "https://facebook.com/worldmaxxing",
            "https://linkedin.com/company/worldmaxxing"
          ]
        },
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
              "urlTemplate": "https://worldmaxxing.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }
      ]
    };

    // Add page-specific structured data
    if (pageType === 'destination' && countryName && countrySlug) {
      baseData["@graph"].push({
        "@type": "Service",
        "@id": `https://worldmaxxing.com/destination/${countrySlug}#service`,
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
        "url": `https://worldmaxxing.com/destination/${countrySlug}`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "59.99",
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
            "item": "https://worldmaxxing.com/destination"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": countryName,
            "item": `https://worldmaxxing.com/destination/${countrySlug}`
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
