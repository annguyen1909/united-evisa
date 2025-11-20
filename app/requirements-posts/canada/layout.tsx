import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Canada Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Canada visa requirements guide. Apply for Canada eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Canada visa application today.",
  keywords: [
    "Canada visa requirements",
    "Canada eVisa application",
    "Canada tourist visa",
    "Canada business visa",
    "Canada transit visa",
    "Canada visa online",
    "Canada visa processing time",
    "Canada visa fees",
    "Canada travel requirements",
    "Canada visa eligibility",
    "Canada visa documents",
    "Canada visa application form"
  ].join(", "),
  openGraph: {
    title: "Canada Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Canada visa requirements guide. Apply for Canada eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/canada",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/canada/canada-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Canada Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canada Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Canada visa requirements guide. Apply for Canada eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/canada/canada-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/canada",
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

export default function CanadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 