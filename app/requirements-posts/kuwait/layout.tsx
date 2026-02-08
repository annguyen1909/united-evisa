import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kuwait Visa Requirements & eVisa Application",
  description: "Complete Kuwait visa requirements guide. Apply for Kuwait eVisa online with fast processing, 24/7 support. Start your Kuwait visa application today.",
  keywords: [
    "Kuwait visa requirements",
    "Kuwait eVisa application",
    "Kuwait tourist visa",
    "Kuwait business visa",
    "Kuwait transit visa",
    "Kuwait visa online",
    "Kuwait visa processing time",
    "Kuwait visa fees",
    "Kuwait travel requirements",
    "Kuwait visa eligibility",
    "Kuwait visa documents",
    "Kuwait visa application form"
  ].join(", "),
  openGraph: {
    title: "Kuwait Visa Requirements & eVisa Application",
    description: "Complete Kuwait visa requirements guide. Apply for Kuwait eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://unitedevisa.com/requirements-posts/kuwait",
    siteName: "United eVisa Services",
    images: [
      {
        url: "/images/country/kuwait/kuwait-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Kuwait Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuwait Visa Requirements & eVisa Application",
    description: "Complete Kuwait visa requirements guide. Apply for Kuwait eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/kuwait/kuwait-bg.jpg"],
  },
  alternates: {
    canonical: "https://unitedevisa.com/requirements-posts/kuwait",
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

export default function KuwaitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
