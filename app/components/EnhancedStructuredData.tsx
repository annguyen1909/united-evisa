import { COUNTRIES } from '@/lib/countries'
import { SERVICE_FEE } from '@/lib/constants'

interface StructuredDataProps {
  pageType?: 'homepage' | 'destination' | 'blog' | 'faq' | 'requirements' | 'guide' | 'comparison'
  country?: string
  title?: string
  description?: string
  publishedDate?: string
  modifiedDate?: string
  comparisonCountries?: string[]
}

export default function EnhancedStructuredData({
  pageType = 'homepage',
  country,
  title,
  description,
  publishedDate,
  modifiedDate,
  comparisonCountries
}: StructuredDataProps) {
  const baseUrl = 'https://worldmaxxing.com'

  const normalize = (value: string) =>
    value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')

  const normalizedCountry = country ? normalize(country) : null
  const countryInfo = normalizedCountry
    ? COUNTRIES.find((c) => normalize(c.slug) === normalizedCountry || normalize(c.name) === normalizedCountry)
    : null

  // Organization schema
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
    "email": "support@worldmaxxing.com"
  }

  // Breadcrumb schema
  const getBreadcrumbSchema = () => {
    const items = [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl }
    ]

    if ((pageType === 'destination' || pageType === 'requirements' || pageType === 'guide') && (countryInfo || country)) {
      const countryName = countryInfo?.name || country || ''
      const countrySlug = countryInfo?.slug || (normalizedCountry || '')

      items.push({ "@type": "ListItem", "position": 2, "name": countryName, "item": `${baseUrl}/destinations/${countrySlug}` })

      if (pageType === 'requirements') {
        // Requirements pages are keyed by post slug, so link to the section hub.
        items.push({ "@type": "ListItem", "position": 3, "name": "Requirements", "item": `${baseUrl}/requirements-posts` })
      }

      if (pageType === 'guide') {
        items.push({ "@type": "ListItem", "position": 3, "name": "How to Apply", "item": `${baseUrl}/how-to-apply/${countrySlug}-evisa-step-by-step` })
      }
    } else if (pageType === 'comparison') {
      items.push({ "@type": "ListItem", "position": 2, "name": "Compare", "item": `${baseUrl}/compare` })
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items
    }
  }

  // Service/Destination Schema
  const getDestinationSchema = (countryName: string, countrySlug: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${countryName} eVisa Service`,
    "description": description || `Professional ${countryName} eVisa application service. Fast processing, expert support, and guaranteed approval.`,
    "provider": organizationSchema,
    "areaServed": { "@type": "Country", "name": countryName },
    "url": `${baseUrl}/destinations/${countrySlug}`
  })

  // FAQ schema
  const getFAQSchema = (countryName: string) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How long does it take to get a ${countryName} eVisa?`,
        "acceptedAnswer": { "@type": "Answer", "text": `${countryName} eVisa processing typically takes 2-5 business days.` }
      }
    ]
  })

  const getWebPageSchema = (url: string) => {
    if (!modifiedDate) return null
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title || `${country || 'Visa'} Requirements`,
      "url": url,
      "dateModified": modifiedDate,
      ...(publishedDate ? { "datePublished": publishedDate } : {})
    }
  }

  // Comparison Schema (Dataset + Article)
  const getComparisonSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": organizationSchema,
    "about": (comparisonCountries || []).map(c => ({ "@type": "Country", "name": c }))
  })

  // Website schema for homepage
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Worldmaxxing Global Services",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/check-requirements?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  // Article schema for blog posts
  const getArticleSchema = (title: string, description: string, publishedDate: string, modifiedDate: string, countrySlug: string) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `${baseUrl}/images/blog/${countrySlug}-evisa-guide.jpg`,
    "author": organizationSchema,
    "publisher": organizationSchema,
    "datePublished": publishedDate,
    "dateModified": modifiedDate
  })

  // Emit breadcrumbs + page-type schemas. Organization details are embedded as provider/author
  // to avoid duplicating standalone Organization JSON-LD across the site.
  let schemas: any[] = [getBreadcrumbSchema()]

  switch (pageType) {
    case 'homepage':
      schemas.push(websiteSchema)
      break
    case 'destination':
      if (countryInfo) schemas.push(getDestinationSchema(countryInfo.name, countryInfo.slug))
      break
    case 'blog':
      if (title && description && publishedDate && modifiedDate && countryInfo) {
        schemas.push(getArticleSchema(title, description, publishedDate, modifiedDate, countryInfo.slug))
      }
      break
    case 'requirements':
    case 'guide':
      if (countryInfo) {
        schemas.push(getDestinationSchema(countryInfo.name, countryInfo.slug))
        schemas.push(getFAQSchema(countryInfo.name))
        const url =
          pageType === 'requirements'
            ? `${baseUrl}/requirements-posts/${countryInfo.slug}`
            : `${baseUrl}/how-to-apply/${countryInfo.slug}-evisa-step-by-step`
        const webPage = getWebPageSchema(url)
        if (webPage) schemas.push(webPage)
      }
      break
    case 'comparison':
      schemas.push(getComparisonSchema())
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