import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Preferences | United eVisa Services",
  description:
    "Manage SMS updates and opt-out instructions for United eVisa Services.",
  alternates: {
    canonical: "https://unitedevisa.com/sms-preferences",
  },
};

export default function SmsPreferencesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-500 mb-3">
            SMS Preferences
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Manage SMS Updates
          </h1>
          <p className="text-slate-600 mb-6">
            We send SMS updates for application status, document requests, and
            support follow-ups. You control your preferences.
          </p>

          <div className="space-y-4 text-slate-600">
            <p>
              To stop SMS messages, reply <strong>STOP</strong> to any message.
              You may re-subscribe at any time by replying <strong>START</strong>.
            </p>
            <p>
              For help, reply <strong>HELP</strong> or contact our support team.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/support"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-amber-500 text-white px-5 py-3 font-semibold hover:from-blue-700 hover:to-amber-600"
            >
              Contact Support
            </Link>
            <Link
              href="/sms-disclaimer"
              className="inline-flex items-center justify-center rounded-full border border-blue-200 text-blue-700 px-5 py-3 font-semibold hover:bg-blue-50"
            >
              View SMS Disclaimer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
