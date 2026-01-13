import { COUNTRIES } from '@/lib/countries'
import { SERVICE_FEE } from '@/lib/constants'

interface StructuredDataProps {
  pageType?: 'homepage' | 'destination' | 'blog' | 'faq' | 'requirements'
  country?: string
  title?: string
  description?: string
  publishedDate?: string
  modifiedDate?: string
}

export default function EnhancedStructuredData({
  pageType = 'homepage',
  country,
  title,
  description,
  publishedDate,
  modifiedDate
}: StructuredDataProps) {
  const baseUrl = 'https://worldmaxxing.com'

  // Organization schema - appears on all pages
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Worldmaxxing Global Services",
    "alternateName": "Worldmaxxing",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.png`,
    "image": `${baseUrl}/images/hero/hero.jpg`,
    "description": "Professional eVisa application services for 50+ countries worldwide. Fast processing, 24/7 support, and guaranteed approval.",
    "telephone": "+1 323 286 4541",
    "email": "support@worldmaxxing.com",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "California"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1 323 286 4541",
        "contactType": "customer service",
        "email": "support@worldmaxxing.com",
        "availableLanguage": ["English", "Spanish", "French", "German"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ],
    "sameAs": [
      "https://twitter.com/worldmaxxing",
      "https://facebook.com/worldmaxxing",
      "https://linkedin.com/company/worldmaxxing"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "eVisa Services",
      "itemListElement": COUNTRIES.map(country => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `${country.name} eVisa`,
          "description": `Apply for ${country.name} eVisa online. Fast processing, 24/7 support.`,
          "provider": {
            "@type": "Organization",
            "name": "Worldmaxxing Global Services"
          },
          "areaServed": {
            "@type": "Country",
            "name": country.name
          }
        }
      }))
    }
  }

  // Website schema for homepage
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Worldmaxxing Global Services",
    "alternateName": "Worldmaxxing",
    "url": baseUrl,
    "description": "Apply for eVisas to 50+ countries including Kenya, Canada, Vietnam, Australia, and more. Fast processing, 24/7 support, and guaranteed approval.",
    "inLanguage": "en-US",
    "copyrightYear": "2024",
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Worldmaxxing Global Services"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/check-requirements?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "mainEntity": {
      "@type": "ItemList",
      "name": "Popular Visa Destinations",
      "itemListElement": COUNTRIES.slice(0, 10).map((country, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TravelAction",
          "name": `${country.name} eVisa`,
          "description": `Apply for ${country.name} eVisa online`,
          "url": `${baseUrl}/destinations/${country.slug}`
        }
      }))
    }
  }

  // Service schema for destination pages
  const getDestinationSchema = (countryName: string, countrySlug: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${countryName} eVisa Service`,
    "description": `Professional ${countryName} eVisa application service. Fast processing, expert support, and guaranteed approval.`,
    "provider": {
      "@type": "Organization",
      "name": "Worldmaxxing Global Services",
      "url": baseUrl
    },
    "areaServed": {
      "@type": "Country",
      "name": countryName
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${countryName} Visa Types`,
      "itemListElement": [
        // Compute simple offers: map first couple of visaTypes to offers including government fee + service fee
        ...(COUNTRIES.find(c => c.slug === countrySlug)?.visaTypes || []).slice(0, 2).map((v: any) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `${v.name}`,
            "description": v.description || `${v.type} for ${countryName}`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": ((v.govFee || 0) + SERVICE_FEE).toFixed(2)
          }
        }))
      ]
    },
    "url": `${baseUrl}/destinations/${countrySlug}`,
    "image": `${baseUrl}/images/countries/${countrySlug}.jpg`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "245",
      "bestRating": "5",
      "worstRating": "1"
    }
  })

  // Article schema for blog posts
  const getArticleSchema = (title: string, description: string, publishedDate: string, modifiedDate: string, countrySlug: string) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `${baseUrl}/images/blog/${countrySlug}-evisa-guide.jpg`,
    "author": {
      "@type": "Organization",
      "name": "Worldmaxxing Global Services",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Worldmaxxing Global Services",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo.png`,
        "width": 200,
        "height": 60
      }
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${countrySlug}-evisa-complete-guide`
    },
    "articleSection": "Travel & Visa Guides",
    "keywords": [`${country} visa`, `${country} eVisa`, "visa application", "travel requirements"],
    "about": {
      "@type": "Thing",
      "name": `${country} eVisa`,
      "description": `Complete guide for ${country} eVisa application`
    }
  })

  // FAQ schema
  const getFAQSchema = (countryName: string) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How long does it take to get a ${countryName} eVisa?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${countryName} eVisa processing typically takes 2-5 business days. Rush processing is available for urgent applications.`
        }
      },
      {
        "@type": "Question",
        "name": `What documents are required for ${countryName} eVisa?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You'll need a valid passport, passport photo, travel itinerary, and proof of accommodation for your ${countryName} eVisa application.`
        }
      },
      {
        "@type": "Question",
        "name": `How much does a ${countryName} eVisa cost?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": (() => {
            const info = COUNTRIES.find(c => c.name === countryName || c.slug === countryName)
            if (!info || !info.visaTypes || info.visaTypes.length === 0) return `${countryName} eVisa fees vary by type and nationality.`
            const minGov = Math.min(...info.visaTypes.map((vt: any) => vt.govFee || Infinity))
            const total = (isFinite(minGov) ? (minGov + SERVICE_FEE) : SERVICE_FEE).toFixed(2)
            return `${countryName} eVisa fees start from $${total} (government fee + $${SERVICE_FEE.toFixed(2)} service charge). Business visas may have different pricing.`
          })()
        }
      },
      {
        "@type": "Question",
        "name": `Can I get a ${countryName} eVisa on arrival?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `While some nationalities may be eligible for visa on arrival, we recommend applying for your ${countryName} eVisa in advance to avoid delays.`
        }
      }
    ]
  })

  const countryInfo = country ? COUNTRIES.find(c => c.slug === country || c.name === country) : null

  let schemas: any[] = [organizationSchema]

  switch (pageType) {
    case 'homepage':
      schemas.push(websiteSchema)
      break
    case 'destination':
      if (countryInfo) {
        schemas.push(getDestinationSchema(countryInfo.name, countryInfo.slug))
      }
      break
    case 'blog':
      if (title && description && publishedDate && modifiedDate && countryInfo) {
        schemas.push(getArticleSchema(title, description, publishedDate, modifiedDate, countryInfo.slug))
      }
      break
    case 'faq':
      if (countryInfo) {
        schemas.push(getFAQSchema(countryInfo.name))
      }
      break
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}