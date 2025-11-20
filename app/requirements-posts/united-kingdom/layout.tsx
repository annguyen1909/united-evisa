import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "United Kingdom Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete United Kingdom visa requirements guide. Apply for United Kingdom eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your United Kingdom visa application today.",
  keywords: [
    "United Kingdom visa requirements",
    "United Kingdom eVisa application",
    "United Kingdom tourist visa",
    "United Kingdom business visa",
    "United Kingdom transit visa",
    "United Kingdom visa online",
    "United Kingdom visa processing time",
    "United Kingdom visa fees",
    "United Kingdom travel requirements",
    "United Kingdom visa eligibility",
    "United Kingdom visa documents",
    "United Kingdom visa application form"
  ].join(", "),
  openGraph: {
    title: "United Kingdom Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete United Kingdom visa requirements guide. Apply for United Kingdom eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/united-kingdom",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/united-kingdom/united-kingdom-bg.jpg",
        width: 1200,
        height: 630,
        alt: "United Kingdom Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "United Kingdom Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete United Kingdom visa requirements guide. Apply for United Kingdom eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/united-kingdom/united-kingdom-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/united-kingdom",
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

export default function UnitedKingdomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
