import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mongolia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Mongolia visa requirements guide. Apply for Mongolia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Mongolia visa application today.",
  keywords: [
    "Mongolia visa requirements",
    "Mongolia eVisa application",
    "Mongolia tourist visa",
    "Mongolia business visa",
    "Mongolia transit visa",
    "Mongolia visa online",
    "Mongolia visa processing time",
    "Mongolia visa fees",
    "Mongolia travel requirements",
    "Mongolia visa eligibility",
    "Mongolia visa documents",
    "Mongolia visa application form"
  ].join(", "),
  openGraph: {
    title: "Mongolia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Mongolia visa requirements guide. Apply for Mongolia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://visa.worldmaxxing.com/requirements-posts/mongolia",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/mongolia/mongolia-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Mongolia Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mongolia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Mongolia visa requirements guide. Apply for Mongolia eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/mongolia/mongolia-bg.jpg"],
  },
  alternates: {
    canonical: "https://visa.worldmaxxing.com/requirements-posts/mongolia",
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

export default function MongoliaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
