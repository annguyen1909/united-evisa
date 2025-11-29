import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Australia Visa Requirements & eVisa Application",
  description: "Complete Australia visa requirements guide. Apply for Australia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Australia visa application today.",
  keywords: [
    "Australia visa requirements",
    "Australia eVisa application",
    "Australia tourist visa",
    "Australia business visa",
    "Australia transit visa",
    "Australia visa online",
    "Australia visa processing time",
    "Australia visa fees",
    "Australia travel requirements",
    "Australia visa eligibility",
    "Australia visa documents",
    "Australia visa application form"
  ].join(", "),
  openGraph: {
    title: "Australia Visa Requirements & eVisa Application",
    description: "Complete Australia visa requirements guide. Apply for Australia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/australia",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/australia/australia-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Australia Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Australia Visa Requirements & eVisa Application",
    description: "Complete Australia visa requirements guide. Apply for Australia eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/australia/australia-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/australia",
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

export default function AustraliaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 