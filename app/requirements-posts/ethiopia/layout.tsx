import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ethiopia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Ethiopia visa requirements guide. Apply for Ethiopia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Ethiopia visa application today.",
  keywords: [
    "Ethiopia visa requirements",
    "Ethiopia eVisa application",
    "Ethiopia tourist visa",
    "Ethiopia business visa",
    "Ethiopia transit visa",
    "Ethiopia visa online",
    "Ethiopia visa processing time",
    "Ethiopia visa fees",
    "Ethiopia travel requirements",
    "Ethiopia visa eligibility",
    "Ethiopia visa documents",
    "Ethiopia visa application form"
  ].join(", "),
  openGraph: {
    title: "Ethiopia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Ethiopia visa requirements guide. Apply for Ethiopia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/ethiopia",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/ethiopia/ethiopia-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Ethiopia Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethiopia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Ethiopia visa requirements guide. Apply for Ethiopia eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/ethiopia/ethiopia-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/ethiopia",
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

export default function EthiopiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
