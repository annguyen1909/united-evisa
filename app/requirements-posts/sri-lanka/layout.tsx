import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sri Lanka Visa Requirements & eVisa Application",
  description: "Complete Sri Lanka visa requirements guide. Apply for Sri Lanka eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Sri Lanka visa application today.",
  keywords: [
    "Sri Lanka visa requirements",
    "Sri Lanka eVisa application",
    "Sri Lanka tourist visa",
    "Sri Lanka business visa",
    "Sri Lanka transit visa",
    "Sri Lanka visa online",
    "Sri Lanka visa processing time",
    "Sri Lanka visa fees",
    "Sri Lanka travel requirements",
    "Sri Lanka visa eligibility",
    "Sri Lanka visa documents",
    "Sri Lanka visa application form"
  ].join(", "),
  openGraph: {
    title: "Sri Lanka Visa Requirements & eVisa Application",
    description: "Complete Sri Lanka visa requirements guide. Apply for Sri Lanka eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/sri-lanka",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/sri-lanka/sri-lanka-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Lanka Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Lanka Visa Requirements & eVisa Application",
    description: "Complete Sri Lanka visa requirements guide. Apply for Sri Lanka eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/sri-lanka/sri-lanka-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/sri-lanka",
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

export default function SriLankaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
