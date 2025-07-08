import Hero from "./components/Hero";
import TopDestinations from "./components/TopDestinations";
import AllVisaTypes from "./components/AllVisaTypes";
import VisaSteps from "./components/VisaSteps";
import CustomerSupport from "./components/CustomerSupport";
import FeeGuarantee from "./components/FeeGuarantee";


export default function LandingPage() {
  return (
    <main className="flex flex-col items-center bg-white">
      {/* Hero section with full width */}
      <Hero />
      {/* Main content sections with consistent spacing */}
      <div className="w-full pb-8 bg-slate-50">
        <TopDestinations />
      </div>
      <div className="w-full bg-slate-50">
        <AllVisaTypes />
      </div>
      <div className="w-full pb-8 bg-white">
          <VisaSteps />
      </div>
      <div className="w-full pb-8 bg-white">
          <CustomerSupport />
      </div>
      <div className="w-full pb-8 bg-slate-50">
          <FeeGuarantee />
      </div>
    </main>
  );
}