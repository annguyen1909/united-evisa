import StepNavigation from "@/components/shared/StepNavigation";
import Image from "next/image";

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full mx-auto">
      {/* Hero Section */}
      <div className="relative w-full h-48 md:h-64 flex items-center justify-center max-md:mb-0 overflow-hidden mb-6 shadow-sm">
        <Image
          src="/images/apply/apply-bg.jpg"
          alt="Apply background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            Apply for Your eVisa
          </h1>
          <p className="mt-2 text-lg text-white/90 font-medium drop-shadow-sm hidden sm:block mx-auto max-w-2xl">
            Fast, secure, and easy visa application for over 40 countries.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      </div>
      <StepNavigation />
      {children}
    </div>
  );
}
