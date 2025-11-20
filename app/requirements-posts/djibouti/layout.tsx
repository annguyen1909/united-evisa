import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Djibouti Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Djibouti visa requirements guide. Apply for Djibouti eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Djibouti visa application today.",
  keywords: [
    "Djibouti visa requirements",
    "Djibouti eVisa application",
    "Djibouti tourist visa",
    "Djibouti business visa",
    "Djibouti transit visa",
    "Djibouti visa online",
    "Djibouti visa processing time",
    "Djibouti visa fees",
    "Djibouti travel requirements",
    "Djibouti visa eligibility",
    "Djibouti visa documents",
    "Djibouti visa application form"
  ].join(", "),
  openGraph: {
    title: "Djibouti Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Djibouti visa requirements guide. Apply for Djibouti eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/djibouti",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/djibouti/djibouti-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Djibouti Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Djibouti Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Djibouti visa requirements guide. Apply for Djibouti eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/djibouti/djibouti-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/djibouti",
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

export default function DjiboutiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
