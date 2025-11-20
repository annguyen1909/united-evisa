import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Georgia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Georgia visa requirements guide. Apply for Georgia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Georgia visa application today.",
  keywords: [
    "Georgia visa requirements",
    "Georgia eVisa application",
    "Georgia tourist visa",
    "Georgia business visa",
    "Georgia transit visa",
    "Georgia visa online",
    "Georgia visa processing time",
    "Georgia visa fees",
    "Georgia travel requirements",
    "Georgia visa eligibility",
    "Georgia visa documents",
    "Georgia visa application form"
  ].join(", "),
  openGraph: {
    title: "Georgia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Georgia visa requirements guide. Apply for Georgia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/georgia",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/georgia/georgia-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Georgia Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Georgia visa requirements guide. Apply for Georgia eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/georgia/georgia-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/georgia",
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

export default function GeorgiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
