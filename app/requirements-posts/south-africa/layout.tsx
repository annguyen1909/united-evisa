import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "South Africa Visa Requirements & eVisa Application",
  description: "Complete South Africa visa requirements guide. Apply for South Africa eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your South Africa visa application today.",
  keywords: [
    "South Africa visa requirements",
    "South Africa eVisa application",
    "South Africa tourist visa",
    "South Africa business visa",
    "South Africa transit visa",
    "South Africa visa online",
    "South Africa visa processing time",
    "South Africa visa fees",
    "South Africa travel requirements",
    "South Africa visa eligibility",
    "South Africa visa documents",
    "South Africa visa application form"
  ].join(", "),
  openGraph: {
    title: "South Africa Visa Requirements & eVisa Application",
    description: "Complete South Africa visa requirements guide. Apply for South Africa eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/south-africa",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/south-africa/south-africa-bg.jpg",
        width: 1200,
        height: 630,
        alt: "South Africa Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "South Africa Visa Requirements & eVisa Application",
    description: "Complete South Africa visa requirements guide. Apply for South Africa eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/south-africa/south-africa-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/south-africa",
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

export default function SouthAfricaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
