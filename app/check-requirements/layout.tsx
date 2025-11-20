import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Check Visa Requirements | eVisa Eligibility Tool | Worldmaxxing Global Services',
  description: 'Check visa requirements instantly for 50+ countries. Verify eligibility, processing times, and fees. Free visa requirement checker with real-time results for all nationalities.',
  keywords: 'visa requirements, visa eligibility checker, travel visa, eVisa requirements, visa tool, travel requirements',
  alternates: {
    canonical: 'https://worldmaxxing.com/check-requirements',
  },
  openGraph: {
    title: 'Check Visa Requirements | eVisa Eligibility Tool | Worldmaxxing Global Services',
    description: 'Check visa requirements instantly for 50+ countries. Verify eligibility, processing times, and fees with our free tool.',
    url: 'https://worldmaxxing.com/check-requirements',
    siteName: 'Worldmaxxing Global Services',
    type: 'website',
    images: [
      {
        url: '/images/hero/check-requirements.jpg',
        width: 1200,
        height: 630,
        alt: 'Visa Requirements Checker Tool - Worldmaxxing Global Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Check Visa Requirements | eVisa Eligibility Tool',
    description: 'Check visa requirements instantly for 50+ countries. Free visa eligibility checker.',
    images: ['/images/hero/check-requirements.jpg'],
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

export default function CheckRequirementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 