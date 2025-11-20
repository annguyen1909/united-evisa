import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Oman Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Oman visa requirements guide. Apply for Oman eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Oman visa application today.",
  keywords: [
    "Oman visa requirements",
    "Oman eVisa application",
    "Oman tourist visa",
    "Oman business visa",
    "Oman transit visa",
    "Oman visa online",
    "Oman visa processing time",
    "Oman visa fees",
    "Oman travel requirements",
    "Oman visa eligibility",
    "Oman visa documents",
    "Oman visa application form"
  ].join(", "),
  openGraph: {
    title: "Oman Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Oman visa requirements guide. Apply for Oman eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/oman",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/oman/oman-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Oman Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oman Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Oman visa requirements guide. Apply for Oman eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/oman/oman-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/oman",
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

export default function OmanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
