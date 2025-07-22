import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tajikistan Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Tajikistan visa requirements guide. Apply for Tajikistan eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Tajikistan visa application today.",
  keywords: [
    "Tajikistan visa requirements",
    "Tajikistan eVisa application",
    "Tajikistan tourist visa",
    "Tajikistan business visa",
    "Tajikistan transit visa",
    "Tajikistan visa online",
    "Tajikistan visa processing time",
    "Tajikistan visa fees",
    "Tajikistan travel requirements",
    "Tajikistan visa eligibility",
    "Tajikistan visa documents",
    "Tajikistan visa application form"
  ].join(", "),
  openGraph: {
    title: "Tajikistan Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Tajikistan visa requirements guide. Apply for Tajikistan eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://visa.worldmaxxing.com/requirements-posts/tajikistan",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/tajikistan/tajikistan-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Tajikistan Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tajikistan Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Tajikistan visa requirements guide. Apply for Tajikistan eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/tajikistan/tajikistan-bg.jpg"],
  },
  alternates: {
    canonical: "https://visa.worldmaxxing.com/requirements-posts/tajikistan",
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

export default function TajikistanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
