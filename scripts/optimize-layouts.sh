#!/bin/bash

# All countries that need SEO-optimized layouts
ALL_COUNTRIES=(
  "angola" "armenia" "australia" "azerbaijan" "bahrain" "benin" "cambodia" "canada" "djibouti" "egypt"
  "ethiopia" "gabon" "georgia" "hong-kong" "india" "indonesia" "kazakhstan" "kenya" "kuwait" "kyrgyzstan" "laos"
  "malawi" "malaysia" "moldova" "mongolia" "new-zealand" "oman" "pakistan" "qatar" "rwanda" "saint-helena"
  "saudi-arabia" "south-africa" "sri-lanka" "taiwan" "tajikistan" "tanzania" "uganda" "united-kingdom" "uzbekistan" "vietnam" "zambia" "zimbabwe"
)

echo "Optimizing layout.tsx files for ${#ALL_COUNTRIES[@]} countries..."

for country in "${ALL_COUNTRIES[@]}"; do
  echo "Optimizing layout for $country..."
  
  # Convert country name for display
  display_name=$(echo "$country" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
  # Generate a safe lowercase slug for filesystem/URLs (ensures e.g. Vietnam -> vietnam)
  slug=$(echo "$country" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/_/-/g')
  
  # Create optimized layout.tsx
  cat > "app/requirements-posts/$slug/layout.tsx" << EOF
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${display_name} eVisa Requirements & Application Guide',
  description: 'Complete ${display_name} visa requirements guide. Step-by-step application process, fees, processing times, document checklist, and expert tips for ${display_name} eVisa applications.',
  alternates: {
    canonical: 'https://worldmaxxing.com/requirements-posts/${slug}',
  },
  openGraph: {
    title: '${display_name} eVisa Requirements & Application Guide',
    description: 'Complete ${display_name} visa requirements guide with step-by-step application process and expert tips.',
    url: 'https://worldmaxxing.com/requirements-posts/${slug}',
    siteName: 'United Evisa Global Services',
    type: 'article',
    images: [
      {
        url: '/images/country/${slug}/${slug}-bg.jpg',
        width: 1200,
        height: 630,
        alt: '${display_name} visa requirements and application guide',
      }
    ],
    locale: 'en_US',
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    authors: ['United Evisa Global Services'],
    section: 'Visa Requirements',
    tags: ['${display_name} visa', 'visa requirements', 'eVisa', 'travel documents', '${display_name} travel'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${display_name} eVisa Requirements & Application Guide',
    description: 'Complete ${display_name} visa requirements guide with step-by-step application process.',
    images: ['/images/country/${slug}/${slug}-bg.jpg'],
  },
  robots: {
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
};

export default function ${display_name//[^a-zA-Z]/}RequirementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
EOF
  
  echo "✅ Optimized layout for $country"
done

echo "🎉 All country layouts optimized with comprehensive SEO!" 