import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Applications',
  description: 'View your visa applications.',
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

export default function ListLayout({ children }: { children: React.ReactNode }) {
  return children;
}
