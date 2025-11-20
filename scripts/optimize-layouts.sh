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
  
  # Create optimized layout.tsx
  cat > "app/requirements-posts/$country/layout.tsx" << EOF
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${display_name} eVisa Requirements & Application Guide | Worldmaxxing Global Services',
  description: 'Complete ${display_name} visa requirements guide. Step-by-step application process, fees, processing times, document checklist, and expert tips for ${display_name} eVisa applications.',
  alternates: {
    canonical: 'https://worldmaxxing.com/requirements-posts/${country}',
  },
  openGraph: {
    title: '${display_name} eVisa Requirements & Application Guide | Worldmaxxing Global Services',
    description: 'Complete ${display_name} visa requirements guide with step-by-step application process and expert tips.',
    url: 'https://worldmaxxing.com/requirements-posts/${country}',
    siteName: 'Worldmaxxing Global Services',
    type: 'article',
    images: [
      {
        url: '/images/country/${country}/${country}-bg.jpg',
        width: 1200,
        height: 630,
        alt: '${display_name} visa requirements and application guide',
      }
    ],
    locale: 'en_US',
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    authors: ['Worldmaxxing Global Services'],
    section: 'Visa Requirements',
    tags: ['${display_name} visa', 'visa requirements', 'eVisa', 'travel documents', '${display_name} travel'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${display_name} eVisa Requirements & Application Guide',
    description: 'Complete ${display_name} visa requirements guide with step-by-step application process.',
    images: ['/images/country/${country}/${country}-bg.jpg'],
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