import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "New Zealand Visa Requirements & eVisa Application",
  description: "Complete New Zealand visa requirements guide. Apply for New Zealand eVisa online with fast processing, 24/7 support. Start your New Zealand visa application today.",
  keywords: [
    "New Zealand visa requirements",
    "New Zealand eVisa application",
    "New Zealand tourist visa",
    "New Zealand business visa",
    "New Zealand transit visa",
    "New Zealand visa online",
    "New Zealand visa processing time",
    "New Zealand visa fees",
    "New Zealand travel requirements",
    "New Zealand visa eligibility",
    "New Zealand visa documents",
    "New Zealand visa application form"
  ].join(", "),
  openGraph: {
    title: "New Zealand Visa Requirements & eVisa Application",
    description: "Complete New Zealand visa requirements guide. Apply for New Zealand eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://unitedevisa.com/requirements-posts/new-zealand",
    siteName: "United eVisa Services",
    images: [
      {
        url: "/images/country/new-zealand/new-zealand-bg.jpg",
        width: 1200,
        height: 630,
        alt: "New Zealand Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Zealand Visa Requirements & eVisa Application",
    description: "Complete New Zealand visa requirements guide. Apply for New Zealand eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/new-zealand/new-zealand-bg.jpg"],
  },
  alternates: {
    canonical: "https://unitedevisa.com/requirements-posts/new-zealand",
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

export default function NewZealandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
