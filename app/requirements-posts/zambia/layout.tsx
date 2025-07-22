import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zambia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Zambia visa requirements guide. Apply for Zambia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Zambia visa application today.",
  keywords: [
    "Zambia visa requirements",
    "Zambia eVisa application",
    "Zambia tourist visa",
    "Zambia business visa",
    "Zambia transit visa",
    "Zambia visa online",
    "Zambia visa processing time",
    "Zambia visa fees",
    "Zambia travel requirements",
    "Zambia visa eligibility",
    "Zambia visa documents",
    "Zambia visa application form"
  ].join(", "),
  openGraph: {
    title: "Zambia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Zambia visa requirements guide. Apply for Zambia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://visa.worldmaxxing.com/requirements-posts/zambia",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/zambia/zambia-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Zambia Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zambia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Zambia visa requirements guide. Apply for Zambia eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/zambia/zambia-bg.jpg"],
  },
  alternates: {
    canonical: "https://visa.worldmaxxing.com/requirements-posts/zambia",
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

export default function ZambiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
