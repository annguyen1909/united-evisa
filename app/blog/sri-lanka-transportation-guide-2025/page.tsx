import Image from "next/image";
import { Calendar, Clock, ArrowLeft, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SriLankaTransportationGuide() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
        Back to News
      </Link>

      {/* Article Header */}
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Hero Image */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src="/images/news/sri-lanka-transport.jpg"
            alt="Sri Lanka Transportation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-500">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full border border-blue-200 text-xs font-semibold">
              Travel Guide
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>January 22, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-manrope font-bold text-slate-800 mb-6 leading-tight">
            Sri Lanka Transportation & Logistics 2025: Complete Travel Guide
          </h1>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Essential guide to getting around Sri Lanka efficiently. From buses to trains, discover the best transportation options for your journey through this beautiful island nation.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Transportation Options in Sri Lanka</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">1. Public Buses</h3>
            <p className="mb-4">
              Sri Lanka's extensive bus network connects virtually every corner of the island. Public buses are the most economical way to travel, with routes covering both urban and rural areas.
            </p>
            <ul className="mb-6">
              <li><strong>Cost:</strong> Very affordable (10-100 LKR depending on distance)</li>
              <li><strong>Frequency:</strong> Regular departures throughout the day</li>
              <li><strong>Best for:</strong> Budget travelers and short distances</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">2. Train Services</h3>
            <p className="mb-4">
              Sri Lanka Railways offers some of the most scenic train journeys in the world, particularly the route from Kandy to Ella through the hill country.
            </p>
            <ul className="mb-6">
              <li><strong>Popular routes:</strong> Colombo-Kandy, Kandy-Ella, Colombo-Galle</li>
              <li><strong>Classes:</strong> First, Second, and Third class available</li>
              <li><strong>Best for:</strong> Scenic journeys and comfortable travel</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">3. Taxis and Ride-Sharing</h3>
            <p className="mb-4">
              Modern taxi services and ride-sharing apps like Uber and PickMe are widely available in major cities.
            </p>
            <ul className="mb-6">
              <li><strong>Availability:</strong> 24/7 in Colombo, Kandy, and major tourist areas</li>
              <li><strong>Payment:</strong> Cash or card accepted</li>
              <li><strong>Best for:</strong> Convenience and door-to-door service</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">4. Tuk-Tuks (Three-Wheelers)</h3>
            <p className="mb-4">
              The iconic three-wheeler tuk-tuks are perfect for short distances and navigating through busy streets.
            </p>
            <ul className="mb-6">
              <li><strong>Negotiate fares:</strong> Always agree on the price before starting</li>
              <li><strong>Best for:</strong> Short trips and exploring local areas</li>
              <li><strong>Experience:</strong> Authentic Sri Lankan transport experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Travel Tips</h2>
            <ul className="mb-6">
              <li>Book train tickets in advance for popular routes</li>
              <li>Always carry small change for bus fares</li>
              <li>Use ride-sharing apps for transparent pricing</li>
              <li>Consider hiring a private driver for multi-day trips</li>
            </ul>

            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 my-8">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Pro Tip
              </h3>
              <p className="text-emerald-700">
                For the most comfortable and flexible travel experience, consider combining different transportation methods. Use trains for scenic routes, buses for budget travel, and taxis for convenience in cities.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export const metadata = {
  title: "Sri Lanka Transportation & Logistics 2025: Complete Travel Guide | United eVisa",
  description: "Essential guide to getting around Sri Lanka efficiently. From buses to trains, discover the best transportation options for your journey.",
};
