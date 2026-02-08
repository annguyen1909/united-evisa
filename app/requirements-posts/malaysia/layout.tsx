import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Malaysia Visa Requirements & eVisa Application",
  description: "Complete Malaysia visa requirements guide. Apply for Malaysia eVisa online with fast processing, 24/7 support. Start your Malaysia visa application today.",
  keywords: [
    "Malaysia visa requirements",
    "Malaysia eVisa application",
    "Malaysia tourist visa",
    "Malaysia business visa",
    "Malaysia transit visa",
    "Malaysia visa online",
    "Malaysia visa processing time",
    "Malaysia visa fees",
    "Malaysia travel requirements",
    "Malaysia visa eligibility",
    "Malaysia visa documents",
    "Malaysia visa application form"
  ].join(", "),
  openGraph: {
    title: "Malaysia Visa Requirements & eVisa Application",
    description: "Complete Malaysia visa requirements guide. Apply for Malaysia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://unitedevisa.com/requirements-posts/malaysia",
    siteName: "United eVisa Services",
    images: [
      {
        url: "/images/country/malaysia/malaysia-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Malaysia Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malaysia Visa Requirements & eVisa Application",
    description: "Complete Malaysia visa requirements guide. Apply for Malaysia eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/malaysia/malaysia-bg.jpg"],
  },
  alternates: {
    canonical: "https://unitedevisa.com/requirements-posts/malaysia",
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

export default function MalaysiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
