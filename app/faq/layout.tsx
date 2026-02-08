import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | United eVisa Services',
  description: 'Find answers to common questions about eVisa applications, requirements, processing times, and travel tips for destinations worldwide.',
  keywords: 'FAQ, eVisa questions, visa help, travel FAQ, visa requirements',
  alternates: {
    canonical: 'https://unitedevisa.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | United eVisa Services',
    description: 'Find answers to common questions about eVisa applications, requirements, processing times, and travel tips.',
    url: 'https://unitedevisa.com/faq',
    siteName: 'United eVisa Services',
    images: [
      {
        url: '/images/hero/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'United eVisa Services FAQ',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
