import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Contact United eVisa Services for visa support, help, and customer service.',
  alternates: {
    canonical: 'https://unitedevisa.com/support',
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 