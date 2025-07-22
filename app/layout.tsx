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
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Worldmaxxing Global Services - Fast eVisa Applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Worldmaxxing Global Services | Fast & Secure eVisa Applications",
    description: "Apply for eVisas to 50+ countries. Fast processing, 24/7 support, guaranteed approval.",
    images: ["/images/hero/hero.jpg"],
    creator: "@worldmaxxing",
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png' }],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/web-app-manifest-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/web-app-manifest-512x512.png',
      },
    ],
  },
  other: {
    "application-name": "Worldmaxxing Global Services",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Worldmaxxing",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#ffffff",
    "msapplication-tap-highlight": "no",
    "theme-color": "#059669",
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
        </Providers>
      </body>
    </html>
  );
}