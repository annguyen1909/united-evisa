import Image from "next/image";
import { Calendar, Clock, ArrowLeft, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SriLankaItinerary() {
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
            src="/images/news/sri-lanka-itinerary.jpg"
            alt="Sri Lanka 3-4 Day Itinerary"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-500">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200 text-xs font-semibold">
              Itinerary
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>April 21, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>12 min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-manrope font-bold text-slate-800 mb-6 leading-tight">
            Sri Lanka 3-4 Day Itinerary 2025: Perfect Short Trip Guide
          </h1>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Make the most of your short visit to Sri Lanka with our carefully crafted 3-4 day itinerary featuring must-see destinations, cultural experiences, and practical travel tips.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 my-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Quick Trip Overview</h3>
              <div className="grid grid-cols-2 gap-4 text-blue-700">
                <div><strong>Duration:</strong> 3-4 days</div>
                <div><strong>Best time:</strong> December-March</div>
                <div><strong>Starting point:</strong> Colombo</div>
                <div><strong>Budget:</strong> $300-500 per person</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Day 1: Colombo Exploration</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Morning (9:00 AM - 12:00 PM)</h3>
            <div className="bg-slate-50 p-6 rounded-xl mb-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Gangaramaya Temple:</strong> Start with this iconic Buddhist temple in the heart of Colombo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Beira Lake:</strong> Take a peaceful walk around the lake</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Seema Malaka:</strong> Visit this floating temple on the lake</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Afternoon (12:00 PM - 6:00 PM)</h3>
            <div className="bg-slate-50 p-6 rounded-xl mb-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Lunch at Ministry of Crab:</strong> Famous for Sri Lankan crab curry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Colombo National Museum:</strong> Learn about Sri Lankan history and culture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Viharamahadevi Park:</strong> Relax in Colombo's largest park</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Galle Face Green:</strong> Watch the sunset at this oceanfront promenade</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Day 2: Kandy - Cultural Capital</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Morning Journey (6:00 AM - 9:30 AM)</h3>
            <p className="mb-4">
              Take the early morning train from Colombo to Kandy (3.5 hours) - one of the most scenic train rides in the world.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Kandy Exploration (10:00 AM - 8:00 PM)</h3>
            <div className="bg-slate-50 p-6 rounded-xl mb-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Temple of the Sacred Tooth Relic:</strong> Sri Lanka's most important Buddhist temple</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Kandy Lake:</strong> Walk around this artificial lake in the city center</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Royal Botanical Gardens:</strong> Beautiful gardens with over 4,000 plant species</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Kandy Cultural Show:</strong> Traditional Sri Lankan dance performance</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Day 3: Sigiriya & Dambulla</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Early Morning (5:00 AM - 12:00 PM)</h3>
            <div className="bg-slate-50 p-6 rounded-xl mb-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Sigiriya Rock Fortress:</strong> Climb the ancient rock fortress (start early to avoid heat)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Sigiriya Museum:</strong> Learn about the history of the rock fortress</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Afternoon (12:00 PM - 6:00 PM)</h3>
            <div className="bg-slate-50 p-6 rounded-xl mb-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Dambulla Cave Temple:</strong> Ancient cave temples with stunning Buddha statues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Local lunch:</strong> Try authentic Sri Lankan rice and curry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Return to Colombo:</strong> Evening journey back to Colombo</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Day 4 (Optional): Galle Day Trip</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Full Day Excursion</h3>
            <div className="bg-slate-50 p-6 rounded-xl mb-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Morning train to Galle:</strong> Scenic coastal train journey (2.5 hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Galle Fort:</strong> Explore this UNESCO World Heritage Dutch colonial fort</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Galle Lighthouse:</strong> Iconic lighthouse with ocean views</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Beach time:</strong> Relax at Unawatuna or Mirissa Beach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Evening return:</strong> Train or bus back to Colombo</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 my-8">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Essential Travel Tips
              </h3>
              <ul className="text-emerald-700 space-y-1">
                <li>• Book train tickets in advance, especially for Kandy route</li>
                <li>• Carry cash (LKR) as many places don't accept cards</li>
                <li>• Dress modestly when visiting temples</li>
                <li>• Stay hydrated and use sunscreen</li>
                <li>• Learn basic Sinhala phrases for better local interaction</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-3">Accommodation (3 nights)</h4>
                <p className="text-slate-600">Budget: $90 | Mid-range: $180 | Luxury: $300+</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-3">Transportation</h4>
                <p className="text-slate-600">Trains, buses, tuk-tuks: $50-80</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-3">Meals</h4>
                <p className="text-slate-600">Local food: $40-60 | Restaurant meals: $80-120</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-3">Entrance Fees</h4>
                <p className="text-slate-600">Temples, museums, attractions: $40-60</p>
              </div>
            </div>

            <div className="text-center my-8">
              <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Plan Your Sri Lanka Trip Today
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export const metadata = {
  title: "Sri Lanka 3-4 Day Itinerary 2025: Perfect Short Trip Guide | United eVisa",
  description: "Make the most of your short visit to Sri Lanka with our carefully crafted 3-4 day itinerary featuring must-see destinations.",
};
