import { Metadata } from 'next'
import { COUNTRIES } from '@/lib/countries'

interface SEOMetaProps {
  title: string
  description: string
  canonical?: string
  keywords?: string[]
  ogImage?: string
  noindex?: boolean
  schema?: any
}

export function generateSEOMeta({
  title,
  description,
  canonical,
  keywords = [],
  ogImage = '/images/og-image.png',
  noindex = false,
  schema
}: SEOMetaProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://unitedevisa.com'
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined

  const SITE_NAME = 'United eVisa Services'

  function buildTitle(inputTitle: string) {
    if (!inputTitle) return SITE_NAME
    let clean = inputTitle.trim()
    const hasSiteName = clean.toLowerCase().includes(SITE_NAME.toLowerCase())

    if (!hasSiteName) {
      clean = `${clean} | ${SITE_NAME}`
    } else {
      // Normalize repeated separators and whitespace
      const parts = clean.split('|').map(p => p.trim()).filter(Boolean)
      // If the site name appears multiple times, keep only one occurrence at the end
      const filteredParts = parts.filter((p, i) => {
        if (p.toLowerCase() === SITE_NAME.toLowerCase()) return i === parts.length - 1
        return true
      })
      clean = filteredParts.join(' | ')
    }

    // Truncate to reasonable length for SERP display (~60 chars) while keeping the site name
    const maxLen = 60
    if (clean.length > maxLen) {
      const separator = ' | '
      if (clean.includes(separator)) {
        const [left, ...rest] = clean.split(separator)
        const suffix = rest.join(separator)
        const available = Math.max(10, maxLen - (suffix.length + separator.length))
        const truncatedLeft = left.length > available ? left.slice(0, available - 1).trimEnd() + '…' : left
        clean = `${truncatedLeft}${separator}${suffix}`
      } else {
        clean = clean.slice(0, maxLen - 1).trimEnd() + '…'
      }
    }

    return clean
  }

  const normalizedTitle = buildTitle(title)

  return {
    title: normalizedTitle,
    description,
    keywords: keywords.join(', '),
    alternates: fullCanonical ? {
      canonical: fullCanonical,
    } : undefined,
    robots: noindex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: normalizedTitle,
      description,
      url: fullCanonical,
      siteName: 'United eVisa Services',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: normalizedTitle,
      description,
      images: [ogImage],
      creator: '@worldmaxxing',
      site: '@worldmaxxing',
    },
  }
}

// Generate country-specific SEO metadata
export function generateCountrySEO(country: any, pageType: 'destination' | 'requirements' | 'blog' | 'faq' = 'destination') {
  const baseKeywords = [
    `${country.name} visa`,
    `${country.name} eVisa`,
    'visa application',
    'online visa',
    'fast visa processing',
    '24/7 support',
    'guaranteed approval',
    'travel documents',
    'United eVisa'
  ]

  switch (pageType) {
    case 'destination':
      return generateSEOMeta({
        title: `${country.name} eVisa - Fast Online Application`,
        description: `Apply for your ${country.name} eVisa online. Fast processing in ${country.processingTime?.normal || '24-72 hours'}, expert support, and guaranteed approval. Start your ${country.name} visa application today!`,
        canonical: `/destination/${country.slug}`,
        keywords: [...baseKeywords, `${country.name} tourist visa`, `${country.name} business visa`],
        ogImage: `/images/country/${country.slug}/${country.slug}-bg.jpg`,
      })

    case 'requirements':
      return generateSEOMeta({
        title: `${country.name} Visa Requirements & Documents`,
        description: `Complete guide to ${country.name} visa requirements. Learn about required documents, eligibility criteria, processing times, and fees for ${country.name} eVisa application.`,
        canonical: `/requirements-posts/${country.slug}`,
        keywords: [...baseKeywords, `${country.name} visa requirements`, `${country.name} documents`, 'eligibility criteria'],
        ogImage: `/images/requirements/${country.slug}-requirements.jpg`,
      })

    case 'blog':
      return generateSEOMeta({
        title: `${country.name} eVisa Complete Guide 2024`,
        description: `Everything you need to know about ${country.name} eVisa in 2024. Step-by-step application guide, requirements, fees, processing times, and expert tips.`,
        canonical: `/blog/${country.slug}-evisa-complete-guide`,
        keywords: [...baseKeywords, `${country.name} travel guide`, 'step by step', '2024 guide'],
        ogImage: `/images/blog/${country.slug}-guide.jpg`,
      })

    case 'faq':
      return generateSEOMeta({
        title: `${country.name} eVisa FAQ - Common Questions Answered`,
        description: `Frequently asked questions about ${country.name} eVisa. Get answers about processing times, requirements, fees, validity, and application process.`,
        canonical: `/faq/${country.slug}-evisa-faq`,
        keywords: [...baseKeywords, `${country.name} FAQ`, 'common questions', 'visa help'],
        ogImage: `/images/faq/${country.slug}-faq.jpg`,
      })

    default:
      return generateSEOMeta({
        title: `${country.name} eVisa Information`,
        description: `Learn about ${country.name} eVisa application process, requirements, and fees.`,
        canonical: `/destination/${country.slug}`,
        keywords: baseKeywords,
      })
  }
}

// Generate nationality-specific SEO metadata
export function generateNationalitySEO(nationalityCode: string, country: any) {
  const nationalityName = nationalityCode.toUpperCase()
  
  return generateSEOMeta({
    title: `${country.name} Visa for ${nationalityName} Citizens`,
    description: `${nationalityName} citizens can apply for ${country.name} eVisa online. Fast processing, expert guidance, and guaranteed approval. Check requirements and apply now!`,
    canonical: `/visa-for-${nationalityCode.toLowerCase()}-citizens/${country.slug}`,
    keywords: [
      `${country.name} visa for ${nationalityName} citizens`,
      `${nationalityName} to ${country.name}`,
      `${country.name} eVisa ${nationalityName}`,
      'visa application',
      'online visa',
      'fast processing'
    ],
    ogImage: `/images/nationality/${nationalityCode}-to-${country.slug}.jpg`,
  })
}

// Internal linking suggestions
export function generateInternalLinks(currentCountry?: string, pageType?: string) {
  const popularDestinations = COUNTRIES.filter(c => 
    ['kenya', 'vietnam', 'india', 'egypt', 'united-kingdom', 'canada', 'australia', 'saudi-arabia']
    .includes(c.slug)
  )

  const links = [
    {
      title: 'Check Visa Requirements',
      url: '/check-requirements',
      description: 'Find out which visa you need for your destination'
    },
    {
      title: 'Compare Processing Times',
      url: '/pricing',
      description: 'See processing times and fees for all destinations'
    }
  ]

  // Add related country links
  if (currentCountry) {
    const otherCountries = popularDestinations.filter(c => c.name !== currentCountry).slice(0, 3)
    otherCountries.forEach(country => {
      links.push({
        title: `${country.name} eVisa`,
        url: `/destination/${country.slug}`,
        description: `Apply for ${country.name} eVisa online`
      })
    })
  } else {
    popularDestinations.slice(0, 4).forEach(country => {
      links.push({
        title: `${country.name} eVisa`,
        url: `/destination/${country.slug}`,
        description: `Apply for ${country.name} eVisa online`
      })
    })
  }

  return links
}

const SEOUtils = {
  generateSEOMeta,
  generateCountrySEO,
  generateNationalitySEO,
  generateInternalLinks
}

export default SEOUtils