import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destinations | Worldmaxxing Global Services',
  description: 'Browse all visa-eligible destinations with Worldmaxxing Global Services.',
  alternates: {
    canonical: 'https://visa.worldmaxxing.com/destination',
  },
};

export default function DestinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 