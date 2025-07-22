import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 Not Found | Worldmaxxing Global Services',
  description: 'Sorry, the page you are looking for does not exist. Return to the homepage or explore visa requirements.',
  alternates: {
    canonical: 'https://visa.worldmaxxing.com/404',
  },
  openGraph: {
    title: '404 Not Found | Worldmaxxing Global Services',
    description: 'Sorry, the page you are looking for does not exist. Return to the homepage or explore visa requirements.',
    url: 'https://visa.worldmaxxing.com/404',
    siteName: 'Worldmaxxing Global Services',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Worldmaxxing Global Services',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '404 Not Found | Worldmaxxing Global Services',
    description: 'Sorry, the page you are looking for does not exist. Return to the homepage or explore visa requirements.',
    images: ['/images/logo.png'],
  },
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-red-50 to-rose-100 px-4">
      <div className="max-w-xl w-full text-center py-16">
        <h1 className="text-6xl font-black text-rose-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8">
          Sorry, the page you are looking for does not exist or has been moved.<br />
          Please check the URL or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-200">
            Go to Homepage
          </Link>
          <Link href="/check-requirements" className="inline-block bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-200">
            Explore Visa Requirements
          </Link>
        </div>
      </div>
    </div>
  );
} 