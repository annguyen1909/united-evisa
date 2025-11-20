import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Laos Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Laos visa requirements guide. Apply for Laos eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Laos visa application today.",
  keywords: [
    "Laos visa requirements",
    "Laos eVisa application",
    "Laos tourist visa",
    "Laos business visa",
    "Laos transit visa",
    "Laos visa online",
    "Laos visa processing time",
    "Laos visa fees",
    "Laos travel requirements",
    "Laos visa eligibility",
    "Laos visa documents",
    "Laos visa application form"
  ].join(", "),
  openGraph: {
    title: "Laos Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Laos visa requirements guide. Apply for Laos eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/laos",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/laos/laos-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Laos Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laos Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Laos visa requirements guide. Apply for Laos eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/laos/laos-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/laos",
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

export default function LaosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
