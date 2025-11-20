import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visa Pricing & Fees | Worldmaxxing Global Services',
  description: 'View visa pricing and government fees for all countries. Transparent pricing with no hidden costs. Start your visa application today.',
  alternates: {
    canonical: 'https://worldmaxxing.com/pricing',
  },
  openGraph: {
    title: 'Visa Pricing & Fees | Worldmaxxing Global Services',
    description: 'View visa pricing and government fees for all countries. Transparent pricing with no hidden costs.',
    url: 'https://worldmaxxing.com/pricing',
    siteName: 'Worldmaxxing Global Services',
    images: [
      {
        url: '/images/hero/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Visa Pricing - Worldmaxxing Global Services',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visa Pricing & Fees | Worldmaxxing Global Services',
    description: 'View visa pricing and government fees for all countries. Transparent pricing with no hidden costs.',
    images: ['/images/hero/hero.jpg'],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 