import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cambodia Visa Requirements & eVisa Application",
  description: "Complete Cambodia visa requirements guide. Apply for Cambodia eVisa online with fast processing, 24/7 support. Start your Cambodia visa application today.",
  keywords: [
    "Cambodia visa requirements",
    "Cambodia eVisa application",
    "Cambodia tourist visa",
    "Cambodia business visa",
    "Cambodia transit visa",
    "Cambodia visa online",
    "Cambodia visa processing time",
    "Cambodia visa fees",
    "Cambodia travel requirements",
    "Cambodia visa eligibility",
    "Cambodia visa documents",
    "Cambodia visa application form"
  ].join(", "),
  openGraph: {
    title: "Cambodia Visa Requirements & eVisa Application",
    description: "Complete Cambodia visa requirements guide. Apply for Cambodia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/cambodia",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/cambodia/cambodia-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Cambodia Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambodia Visa Requirements & eVisa Application",
    description: "Complete Cambodia visa requirements guide. Apply for Cambodia eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/cambodia/cambodia-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/cambodia",
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

export default function CambodiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
