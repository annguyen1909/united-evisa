import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tanzania Visa Requirements & eVisa Application",
  description: "Complete Tanzania visa requirements guide. Apply for Tanzania eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Tanzania visa application today.",
  keywords: [
    "Tanzania visa requirements",
    "Tanzania eVisa application",
    "Tanzania tourist visa",
    "Tanzania business visa",
    "Tanzania transit visa",
    "Tanzania visa online",
    "Tanzania visa processing time",
    "Tanzania visa fees",
    "Tanzania travel requirements",
    "Tanzania visa eligibility",
    "Tanzania visa documents",
    "Tanzania visa application form"
  ].join(", "),
  openGraph: {
    title: "Tanzania Visa Requirements & eVisa Application",
    description: "Complete Tanzania visa requirements guide. Apply for Tanzania eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/tanzania",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/tanzania/tanzania-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Tanzania Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania Visa Requirements & eVisa Application",
    description: "Complete Tanzania visa requirements guide. Apply for Tanzania eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/tanzania/tanzania-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/tanzania",
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

export default function TanzaniaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
