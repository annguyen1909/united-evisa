import Image from "next/image";
import { Calendar, Clock, ArrowLeft, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VesakFestivalGuide() {
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
            src="/images/news/vesak-festival.jpg"
            alt="Vesak Festival Sri Lanka"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-500">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full border border-purple-200 text-xs font-semibold">
              Festival Guide
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>January 22, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>6 min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-manrope font-bold text-slate-800 mb-6 leading-tight">
            Vesak Festival Sri Lanka 2025: Visa Requirements & Festival Guide
          </h1>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Plan your Vesak Festival visit to Sri Lanka 2025! Get visa requirements, festival dates, and travel guide. Fast visa processing available.
            </p>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <Star className="h-5 w-5" />
                Vesak Festival 2025 Dates
              </h3>
              <p className="text-amber-700">
                <strong>Vesak Full Moon Poya Day:</strong> May 12, 2025<br/>
                <strong>Festival Duration:</strong> May 10-13, 2025<br/>
                <strong>Best viewing locations:</strong> Colombo, Kandy, and Galle
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Visa Requirements for Vesak Festival</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Tourist eVisa</h3>
            <p className="mb-4">
              Most visitors can apply for a Sri Lanka Tourist eVisa online, which is perfect for attending Vesak celebrations.
            </p>
            <ul className="mb-6">
              <li><strong>Validity:</strong> 30 days (double entry) or 1 year (multiple entry)</li>
              <li><strong>Processing time:</strong> 3-5 business days</li>
              <li><strong>Cost:</strong> Varies by nationality ($50-$130 USD)</li>
              <li><strong>Requirements:</strong> Valid passport, recent photo, return ticket</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Festival Visa Tips</h3>
            <ul className="mb-6">
              <li>Apply for your visa at least 2 weeks before travel</li>
              <li>Book accommodations early as hotels fill up during Vesak</li>
              <li>Consider extending your stay to explore other attractions</li>
              <li>Check for any special festival visa promotions</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">What to Expect During Vesak</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Lantern Displays (Vesak Thorana)</h3>
            <p className="mb-4">
              Magnificent lantern displays illuminate the streets, depicting scenes from Buddha's life and Buddhist teachings.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Free Food Stalls (Dansala)</h3>
            <p className="mb-4">
              Experience the generosity of Sri Lankan people through free food and drinks offered at temporary stalls throughout the cities.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Temple Visits</h3>
            <p className="mb-4">
              Visit iconic temples like Temple of the Tooth in Kandy or Gangaramaya Temple in Colombo for special Vesak ceremonies.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Best Places to Experience Vesak</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Colombo</h4>
                <p className="text-slate-600">Grand lantern displays along Galle Road and around major temples.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Kandy</h4>
                <p className="text-slate-600">Sacred city with special ceremonies at the Temple of the Tooth.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Galle</h4>
                <p className="text-slate-600">Historic fort city with beautiful coastal Vesak celebrations.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Anuradhapura</h4>
                <p className="text-slate-600">Ancient Buddhist capital with traditional Vesak observances.</p>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 my-8">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Travel Tip
              </h3>
              <p className="text-emerald-700">
                Vesak is a time of peace and reflection. Dress modestly when visiting temples, remove shoes before entering, and respect the religious significance of the celebrations.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Apply for Your Visa Now</h2>
            <p className="mb-4">
              Don't miss this incredible cultural experience! Apply for your Sri Lanka eVisa today to ensure you can participate in the 2025 Vesak Festival celebrations.
            </p>

            <div className="text-center my-8">
              <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Apply for Sri Lanka eVisa
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export const metadata = {
  title: "Vesak Festival Sri Lanka 2025: Visa Requirements & Festival Guide | United eVisa",
  description: "Plan your Vesak Festival visit to Sri Lanka 2025! Get visa requirements, festival dates, and travel guide. Fast visa processing available.",
};
