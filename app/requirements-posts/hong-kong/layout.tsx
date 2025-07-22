import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hong Kong Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Hong Kong visa requirements guide. Apply for Hong Kong eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Hong Kong visa application today.",
  keywords: [
    "Hong Kong visa requirements",
    "Hong Kong eVisa application",
    "Hong Kong tourist visa",
    "Hong Kong business visa",
    "Hong Kong transit visa",
    "Hong Kong visa online",
    "Hong Kong visa processing time",
    "Hong Kong visa fees",
    "Hong Kong travel requirements",
    "Hong Kong visa eligibility",
    "Hong Kong visa documents",
    "Hong Kong visa application form"
  ].join(", "),
  openGraph: {
    title: "Hong Kong Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Hong Kong visa requirements guide. Apply for Hong Kong eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://visa.worldmaxxing.com/requirements-posts/hong-kong",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/hong-kong/hong-kong-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Hong Kong Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hong Kong Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Hong Kong visa requirements guide. Apply for Hong Kong eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/hong-kong/hong-kong-bg.jpg"],
  },
  alternates: {
    canonical: "https://visa.worldmaxxing.com/requirements-posts/hong-kong",
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

export default function HongKongLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
