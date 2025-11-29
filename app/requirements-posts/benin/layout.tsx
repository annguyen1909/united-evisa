import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Benin Visa Requirements & eVisa Application",
  description: "Complete Benin visa requirements guide. Apply for Benin eVisa online with fast processing, 24/7 support. Start your Benin visa application today.",
  keywords: [
    "Benin visa requirements",
    "Benin eVisa application",
    "Benin tourist visa",
    "Benin business visa",
    "Benin transit visa",
    "Benin visa online",
    "Benin visa processing time",
    "Benin visa fees",
    "Benin travel requirements",
    "Benin visa eligibility",
    "Benin visa documents",
    "Benin visa application form"
  ].join(", "),
  openGraph: {
    title: "Benin Visa Requirements & eVisa Application",
    description: "Complete Benin visa requirements guide. Apply for Benin eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/benin",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/benin/benin-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Benin Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benin Visa Requirements & eVisa Application",
    description: "Complete Benin visa requirements guide. Apply for Benin eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/benin/benin-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/benin",
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

export default function BeninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
