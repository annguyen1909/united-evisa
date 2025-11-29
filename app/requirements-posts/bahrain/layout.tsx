import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bahrain Visa Requirements & eVisa Application",
  description: "Complete Bahrain visa requirements guide. Apply for Bahrain eVisa online with fast processing, 24/7 support. Start your Bahrain visa application today.",
  keywords: [
    "Bahrain visa requirements",
    "Bahrain eVisa application",
    "Bahrain tourist visa",
    "Bahrain business visa",
    "Bahrain transit visa",
    "Bahrain visa online",
    "Bahrain visa processing time",
    "Bahrain visa fees",
    "Bahrain travel requirements",
    "Bahrain visa eligibility",
    "Bahrain visa documents",
    "Bahrain visa application form"
  ].join(", "),
  openGraph: {
    title: "Bahrain Visa Requirements & eVisa Application",
    description: "Complete Bahrain visa requirements guide. Apply for Bahrain eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/bahrain",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/bahrain/bahrain-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Bahrain Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahrain Visa Requirements & eVisa Application",
    description: "Complete Bahrain visa requirements guide. Apply for Bahrain eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/bahrain/bahrain-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/bahrain",
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

export default function BahrainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
