import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Moldova Visa Requirements & eVisa Application",
  description: "Complete Moldova visa requirements guide. Apply for Moldova eVisa online with fast processing, 24/7 support. Start your Moldova visa application today.",
  keywords: [
    "Moldova visa requirements",
    "Moldova eVisa application",
    "Moldova tourist visa",
    "Moldova business visa",
    "Moldova transit visa",
    "Moldova visa online",
    "Moldova visa processing time",
    "Moldova visa fees",
    "Moldova travel requirements",
    "Moldova visa eligibility",
    "Moldova visa documents",
    "Moldova visa application form"
  ].join(", "),
  openGraph: {
    title: "Moldova Visa Requirements & eVisa Application",
    description: "Complete Moldova visa requirements guide. Apply for Moldova eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://unitedevisa.com/requirements-posts/moldova",
    siteName: "United eVisa Services",
    images: [
      {
        url: "/images/country/moldova/moldova-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Moldova Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moldova Visa Requirements & eVisa Application",
    description: "Complete Moldova visa requirements guide. Apply for Moldova eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/moldova/moldova-bg.jpg"],
  },
  alternates: {
    canonical: "https://unitedevisa.com/requirements-posts/moldova",
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

export default function MoldovaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
