import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zimbabwe Visa Requirements & eVisa Application",
  description: "Complete Zimbabwe visa requirements guide. Apply for Zimbabwe eVisa online with fast processing, 24/7 support. Start your Zimbabwe visa application today.",
  keywords: [
    "Zimbabwe visa requirements",
    "Zimbabwe eVisa application",
    "Zimbabwe tourist visa",
    "Zimbabwe business visa",
    "Zimbabwe transit visa",
    "Zimbabwe visa online",
    "Zimbabwe visa processing time",
    "Zimbabwe visa fees",
    "Zimbabwe travel requirements",
    "Zimbabwe visa eligibility",
    "Zimbabwe visa documents",
    "Zimbabwe visa application form"
  ].join(", "),
  openGraph: {
    title: "Zimbabwe Visa Requirements & eVisa Application",
    description: "Complete Zimbabwe visa requirements guide. Apply for Zimbabwe eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/zimbabwe",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/zimbabwe/zimbabwe-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Zimbabwe Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zimbabwe Visa Requirements & eVisa Application",
    description: "Complete Zimbabwe visa requirements guide. Apply for Zimbabwe eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/zimbabwe/zimbabwe-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/zimbabwe",
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

export default function ZimbabweLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
