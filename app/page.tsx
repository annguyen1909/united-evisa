import Hero from "./components/Hero";
import TopDestinations from "./components/TopDestinations";
import AllVisaTypes from "./components/AllVisaTypes";
import VisaSteps from "./components/VisaSteps";
import CustomerSupport from "./components/CustomerSupport";
import FeeGuarantee from "./components/FeeGuarantee";
import News from "./components/News";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center bg-white">
      {/* Hero section with full width */}
      <Hero />
      {/* Main content sections with consistent spacing */}
      <div className="w-full pb-8 bg-white">
        <TopDestinations />
      </div>
      <div className="w-full bg-white">
        <AllVisaTypes />
      </div>
      <div className="w-full pb-8 bg-white">
        <VisaSteps />
      </div>
      <div className="w-full pb-8 bg-white">
        <CustomerSupport />
      </div>
      <div className="w-full pb-8 bg-white">
        <News />
      </div>
      <div className="w-full pb-8 bg-white">
        <FeeGuarantee />
      </div>
    </main>
  );
}
