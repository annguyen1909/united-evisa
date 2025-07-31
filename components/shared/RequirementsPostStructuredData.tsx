interface RequirementsPostStructuredDataProps {
  country: string;
  countrySlug: string;
}

export default function RequirementsPostStructuredData({ 
  country, 
  countrySlug 
}: RequirementsPostStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://visa.worldmaxxing.com/requirements-posts/${countrySlug}#article`,
        "headline": `${country} eVisa Requirements & Application Guide 2024`,
        "description": `Complete ${country} visa requirements guide with step-by-step application process, fees, processing times, and expert tips.`,
        "image": {
          "@type": "ImageObject",
          "url": `https://visa.worldmaxxing.com/images/country/${countrySlug}/${countrySlug}-bg.jpg`,
          "width": 1200,
          "height": 630,
          "caption": `${country} eVisa requirements and application guide`
        },
        "author": {
          "@type": "Organization",
          "name": "Worldmaxxing Global Services",
          "url": "https://visa.worldmaxxing.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://visa.worldmaxxing.com/images/logo.png"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "Worldmaxxing Global Services",
          "url": "https://visa.worldmaxxing.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://visa.worldmaxxing.com/images/logo.png"
          }
        },
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://visa.worldmaxxing.com/requirements-posts/${countrySlug}`
        },
        "inLanguage": "en-US",
        "articleSection": "Visa Requirements",
        "keywords": [`${country} visa`, `${country} eVisa`, "visa requirements", "visa application", `${country} travel`, "visa guide"],
        "about": {
          "@type": "Place",
          "name": country,
          "description": `Travel destination requiring visa for international visitors`
        }
      },
      {
        "@type": "WebPage", 
        "@id": `https://visa.worldmaxxing.com/requirements-posts/${countrySlug}#webpage`,
        "url": `https://visa.worldmaxxing.com/requirements-posts/${countrySlug}`,
        "name": `${country} eVisa Requirements & Application Guide`,
        "description": `Complete ${country} visa requirements guide with step-by-step application process and expert tips.`,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://visa.worldmaxxing.com#website"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://visa.worldmaxxing.com"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "Check Visa Requirements",
              "item": "https://visa.worldmaxxing.com/check-requirements"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": `${country} Requirements`,
              "item": `https://visa.worldmaxxing.com/requirements-posts/${countrySlug}`
            }
          ]
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", ".visa-requirements-summary"]
        }
      },
      {
        "@type": "HowTo",
        "@id": `https://visa.worldmaxxing.com/requirements-posts/${countrySlug}#howto`,
        "name": `How to Apply for ${country} eVisa Online`,
        "description": `Step-by-step guide to apply for ${country} eVisa online with fast processing and expert support.`,
        "image": {
          "@type": "ImageObject",
          "url": `https://visa.worldmaxxing.com/images/country/${countrySlug}/${countrySlug}-bg.jpg`
        },
        "totalTime": "PT30M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "59.99"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Complete Online Application",
            "text": `Fill out the ${country} eVisa application form with your personal and travel information`,
            "url": `https://visa.worldmaxxing.com/apply?country=${countrySlug}`
          },
          {
            "@type": "HowToStep", 
            "name": "Upload Required Documents",
            "text": "Upload passport copy, photos, and supporting documents as specified in requirements"
          },
          {
            "@type": "HowToStep",
            "name": "Pay Processing Fees", 
            "text": "Pay the visa processing fees securely online using credit card or PayPal"
          },
          {
            "@type": "HowToStep",
            "name": "Receive eVisa",
            "text": "Receive your approved eVisa via email and prepare for travel"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://visa.worldmaxxing.com/requirements-posts/${countrySlug}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Do I need a visa to visit ${country}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Most foreign nationals require a visa to enter ${country}. Check our eligibility tool to see if you need a visa based on your nationality.`
            }
          },
          {
            "@type": "Question",
            "name": `How long does ${country} visa processing take?`,
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": `${country} visa processing typically takes 24-72 hours. We offer expedited processing for urgent travel needs with 98% approval rate.`
            }
          },
          {
            "@type": "Question",
            "name": `What documents do I need for ${country} visa?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `You'll need a valid passport with 6+ months validity, passport photos, proof of accommodation, return flight tickets, and sufficient funds. Additional documents may be required based on visa type.`
            }
          }
        ]
      },
      {
        "@type": "TravelAgency",
        "@id": "https://visa.worldmaxxing.com#organization",
        "name": "Worldmaxxing Global Services",
        "url": "https://visa.worldmaxxing.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://visa.worldmaxxing.com/images/logo.png"
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