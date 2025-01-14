import { PricingCards } from "@/components/pricing/PricingCards";

export const metadata = {
  title: "HyggeClean - Priser | Pricing",
  description:
    "Professional cleaning services in Copenhagen with transparent pricing",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <PricingCards />
      </div>
    </div>
  );
}
