import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Providers } from "./providers";
import ContactWidget from "../components/ui/ContactWidget";
import StructuredData from "./components/StructuredData";
import EnhancedStructuredData from "./components/EnhancedStructuredData";
import GoogleAnalytics from "../components/GoogleAnalytics";
import SEOMonitor from "../components/shared/SEOMonitor";
import SEOAnalysis from "../components/ui/SEOAnalysis";
import Script from 'next/script';

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
  metadataBase: new URL('https://worldmaxxing.com'),
  title: {
    // Keep the canonical site name as the default title. Do not automatically append
    // the site name to page titles here — pages and generated layouts should supply
    // their own concise titles to avoid duplication (some pages already include
    // the site name). Template left as identity so page titles are used verbatim.
    default: "Worldmaxxing Global Services",
    template: "%s"
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
    canonical: 'https://worldmaxxing.com',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://worldmaxxing.com",
    title: "Worldmaxxing Global Services",
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
    title: "Worldmaxxing Global Services",
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
  other: {
    "application-name": "Worldmaxxing Global Services",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Worldmaxxing",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png',
    'og:image:secure_url': 'https://worldmaxxing.com/images/og-image.png',
    'twitter:image:alt': 'Worldmaxxing Global Services - Fast & Secure eVisa Applications to 50+ Countries',
    'twitter:domain': 'worldmaxxing.com',
    'twitter:url': 'https://worldmaxxing.com',
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
            "url": "https://worldmaxxing.com",
            "logo": "https://worldmaxxing.com/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/yourpage",
              "https://twitter.com/yourhandle",
              "https://www.linkedin.com/company/yourcompany"
            ]
          }) }}
        />
        {/* Google AdSense: page-level script to enable ads on all pages */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4911851888362550"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="+G7bMcbJsaqXxAxG/33dvQ"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} font-sans antialiased bg-white text-slate-900`}
        style={{ position: 'relative', zIndex: 0 }}
      >
        <GoogleAnalytics />
        <EnhancedStructuredData pageType="homepage" />
        <Providers>
          <TopBanner />
          <Navbar />
          {children}
          <Footer />
          <ContactWidget />
          <SEOMonitor />
          <SEOAnalysis />
        </Providers>
      </body>
    </html>
  );
}