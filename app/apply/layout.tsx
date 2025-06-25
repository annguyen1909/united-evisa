import StepNavigation from "@/components/shared/StepNavigation";

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <StepNavigation />
      {children}
    </div>
  );
}
