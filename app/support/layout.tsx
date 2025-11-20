import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | Worldmaxxing Global Services',
  description: 'Contact Worldmaxxing Global Services for visa support, help, and customer service.',
  alternates: {
    canonical: 'https://worldmaxxing.com/support',
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 