import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Azerbaijan Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Azerbaijan visa requirements guide. Apply for Azerbaijan eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Azerbaijan visa application today.",
  keywords: [
    "Azerbaijan visa requirements",
    "Azerbaijan eVisa application",
    "Azerbaijan tourist visa",
    "Azerbaijan business visa",
    "Azerbaijan transit visa",
    "Azerbaijan visa online",
    "Azerbaijan visa processing time",
    "Azerbaijan visa fees",
    "Azerbaijan travel requirements",
    "Azerbaijan visa eligibility",
    "Azerbaijan visa documents",
    "Azerbaijan visa application form"
  ].join(", "),
  openGraph: {
    title: "Azerbaijan Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Azerbaijan visa requirements guide. Apply for Azerbaijan eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://visa.worldmaxxing.com/requirements-posts/azerbaijan",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/azerbaijan/azerbaijan-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Azerbaijan Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azerbaijan Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Azerbaijan visa requirements guide. Apply for Azerbaijan eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/azerbaijan/azerbaijan-bg.jpg"],
  },
  alternates: {
    canonical: "https://visa.worldmaxxing.com/requirements-posts/azerbaijan",
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

export default function AzerbaijanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
