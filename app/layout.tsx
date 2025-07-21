import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Providers } from "./providers";
import ContactWidget from "../components/ui/ContactWidget";

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
  title: "Worldmaxxing Global Services | Your Trusted Global Visa Assistant",
  description: "Get your eVisa quickly and securely with Worldmaxxing Global Services. Apply for visas to Kenya, Canada, Vietnam, and more countries with our expert assistance.",
  keywords: "eVisa, visa application, Kenya visa, Canada visa, Vietnam visa, online visa, travel visa, immigration services",
  authors: [{ name: "Worldmaxxing Global Services" }],
  creator: "Worldmaxxing Global Services",
  publisher: "Worldmaxxing Global Services",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://worldmaxxing.com",
    siteName: "Worldmaxxing Global Services",
    title: "Worldmaxxing Global Services | Your Trusted Global Visa Assistant",
    description: "Get your eVisa quickly and securely with Worldmaxxing Global Services. Apply for visas to Kenya, Canada, Vietnam, and more countries with our expert assistance.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Worldmaxxing Global Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Worldmaxxing Global Services | Your Trusted Global Visa Assistant",
    description: "Fast, reliable, and trusted eVisa services worldwide",
    images: ["/images/twitter-image.jpg"]
  }
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