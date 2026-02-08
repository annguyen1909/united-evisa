import type { Metadata } from 'next';

import ApplyLayoutClient from './ApplyLayoutClient';

export const metadata: Metadata = {
  title: 'Apply for Your eVisa',
  description: 'Start your eVisa application on United eVisa.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return <ApplyLayoutClient>{children}</ApplyLayoutClient>;
}
