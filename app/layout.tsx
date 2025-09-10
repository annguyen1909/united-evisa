import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Providers } from "./providers";
import ContactWidget from "../components/ui/ContactWidget";
import StructuredData from "./components/StructuredData";
import GoogleAnalytics from "../components/GoogleAnalytics";
import SEOMonitor from "../components/shared/SEOMonitor";

// Primary fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://visa.worldmaxxing.com'),
  title: {
    default: "Worldmaxxing Global Services | Fast & Secure eVisa Applications",
    template: "%s | Worldmaxxing Global Services"
  },
  description: "Apply for eVisas to 50+ countries including Kenya, Canada, Vietnam, Australia, and more. Fast processing, 24/7 support, and guaranteed approval. Start your visa application today!",
  keywords: [
    "eVisa", "visa application", "online visa", "travel visa", "immigration services",
    "Kenya visa", "Canada visa", "Vietnam visa", "Australia visa", "UK visa",
    "Saudi Arabia visa", "fast visa processing", "24/7 visa support",
    "Worldmaxxing Global Services", "visa requirements", "visa fees",
    "tourist visa", "business visa", "visa on arrival", "electronic visa"
  ].join(", "),
  authors: [{ name: "Worldmaxxing Global Services" }],
  creator: "Worldmaxxing Global Services",
  publisher: "Worldmaxxing Global Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://visa.worldmaxxing.com',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visa.worldmaxxing.com",
    title: "Worldmaxxing Global Services | Fast & Secure eVisa Applications",
    description: "Apply for eVisas to 50+ countries including Kenya, Canada, Vietnam, Australia, and more. Fast processing, 24/7 support, and guaranteed approval.",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Worldmaxxing Global Services - Fast & Secure eVisa Applications to 50+ Countries",
        type: "image/png",
      },
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Worldmaxxing Global Services - eVisa Processing Center",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Worldmaxxing Global Services | Fast & Secure eVisa Applications",
    description: "Apply for eVisas to 50+ countries. Fast processing, 24/7 support, guaranteed approval.",
    images: ["/images/og-image.png"],
    creator: "@worldmaxxing",
    site: "@worldmaxxing",
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  // Icons will be automatically detected from /app/favicon.ico
  other: {
    "application-name": "Worldmaxxing Global Services",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Worldmaxxing",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    // Social media and Open Graph enhancements
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png',
    'og:image:secure_url': 'https://visa.worldmaxxing.com/images/og-image.png',
    'twitter:image:alt': 'Worldmaxxing Global Services - Fast & Secure eVisa Applications to 50+ Countries',
    'twitter:domain': 'visa.worldmaxxing.com',
    'twitter:url': 'https://visa.worldmaxxing.com',
    // Additional branding
    'theme-color': '#10b981',
    'msapplication-TileColor': '#10b981',
    'msapplication-TileImage': '/favicon-192x192.png',
    "msapplication-config": "/browserconfig.xml",
    "msapplication-tap-highlight": "no",
  },
};

// Move viewport to its own export
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        {/* Preload the primary hero image to improve LCP */}
        <link rel="preload" as="image" href="/images/hero/hero.webp" />
        {/* Organization JSON-LD for SEO (renders on every page) */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Worldmaxxing Global Services",
            "url": "https://visa.worldmaxxing.com",
            "logo": "https://visa.worldmaxxing.com/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/yourpage",
              "https://twitter.com/yourhandle",
              "https://www.linkedin.com/company/yourcompany"
            ]
          }) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} font-sans antialiased bg-white text-slate-900`}
        style={{ position: 'relative', zIndex: 0 }}
      >
        <GoogleAnalytics />
        <StructuredData />
        <Providers>
          <TopBanner />
          <Navbar />
          {children}
          <Footer />
          <ContactWidget />
          <SEOMonitor />
        </Providers>
      </body>
    </html>
  );
}