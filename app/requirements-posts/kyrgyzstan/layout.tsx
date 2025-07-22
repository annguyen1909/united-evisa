import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kyrgyzstan Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Kyrgyzstan visa requirements guide. Apply for Kyrgyzstan eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Kyrgyzstan visa application today.",
  keywords: [
    "Kyrgyzstan visa requirements",
    "Kyrgyzstan eVisa application",
    "Kyrgyzstan tourist visa",
    "Kyrgyzstan business visa",
    "Kyrgyzstan transit visa",
    "Kyrgyzstan visa online",
    "Kyrgyzstan visa processing time",
    "Kyrgyzstan visa fees",
    "Kyrgyzstan travel requirements",
    "Kyrgyzstan visa eligibility",
    "Kyrgyzstan visa documents",
    "Kyrgyzstan visa application form"
  ].join(", "),
  openGraph: {
    title: "Kyrgyzstan Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Kyrgyzstan visa requirements guide. Apply for Kyrgyzstan eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://visa.worldmaxxing.com/requirements-posts/kyrgyzstan",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/kyrgyzstan/kyrgyzstan-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Kyrgyzstan Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyrgyzstan Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Kyrgyzstan visa requirements guide. Apply for Kyrgyzstan eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/kyrgyzstan/kyrgyzstan-bg.jpg"],
  },
  alternates: {
    canonical: "https://visa.worldmaxxing.com/requirements-posts/kyrgyzstan",
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

export default function KyrgyzstanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
