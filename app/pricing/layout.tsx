import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visa Pricing & Fees',
  description: 'View visa pricing and government fees for all countries. Transparent pricing with no hidden costs. Start your visa application today.',
  alternates: {
    canonical: 'https://unitedevisa.com/pricing',
  },
  openGraph: {
    title: 'Visa Pricing & Fees',
    description: 'View visa pricing and government fees for all countries. Transparent pricing with no hidden costs.',
    url: 'https://unitedevisa.com/pricing',
    siteName: 'United eVisa Services',
    images: [
      {
        url: '/images/hero/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Visa Pricing',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visa Pricing & Fees',
    description: 'View visa pricing and government fees for all countries. Transparent pricing with no hidden costs.',
    images: ['/images/hero/hero.webp'],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 