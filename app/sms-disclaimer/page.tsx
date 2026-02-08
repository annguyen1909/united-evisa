import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Disclaimer | United eVisa Services",
  description:
    "SMS consent disclosure, opt-out instructions, and messaging frequency for United eVisa Services.",
  alternates: {
    canonical: "https://unitedevisa.com/sms-disclaimer",
  },
};

export default function SmsDisclaimerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-500 mb-3">
            SMS Disclosure
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            SMS Disclaimer
          </h1>
          <p className="text-slate-600 mb-6">
            United eVisa Services may send SMS messages related to your account,
            application updates, and support requests.
          </p>

          <div className="space-y-4 text-slate-600">
            <p>
              By providing your phone number and opting in, you consent to receive
              SMS updates. Message frequency varies based on your application
              activity. Message and data rates may apply.
            </p>
            <p>
              You can opt out at any time by replying <strong>STOP</strong>.
              For help, reply <strong>HELP</strong> or contact our support team.
            </p>
            <p>
              SMS consent is not required to purchase services. You may also apply
              directly on official government sites without service fees.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
