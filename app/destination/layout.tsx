import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'eVisa Destinations & Requirements | Worldmaxxing Global Services',
  description: 'Explore visa requirements for 50+ countries. Apply for eVisas online with fast processing, expert support, and guaranteed approval. Check eligibility and requirements.',
  alternates: {
    canonical: 'https://visa.worldmaxxing.com/destination',
  },
  openGraph: {
    title: 'eVisa Destinations & Requirements | Worldmaxxing Global Services',
    description: 'Explore visa requirements for 50+ countries. Apply for eVisas online with fast processing and expert support.',
    url: 'https://visa.worldmaxxing.com/destination',
    siteName: 'Worldmaxxing Global Services',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DestinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 