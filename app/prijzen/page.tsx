import { Star } from "lucide-react";
import Button from "@/components/ui/Button";
import PricingCard from "@/components/ui/PricingCard";
import FaqItem from "@/components/ui/FaqItem";
import { pricingPlans, faqs } from "@/lib/data";

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 text-center relative overflow-hidden">
        <svg
          className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40 text-primary/30"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <path d="M0 50 Q 25 0, 50 50 T 100 50" strokeWidth="0.5" />
          <path d="M0 60 Q 25 10, 50 60 T 100 60" strokeWidth="0.5" />
          <path d="M0 70 Q 25 20, 50 70 T 100 70" strokeWidth="0.5" />
        </svg>
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 text-primary/30"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <path d="M0 50 Q 25 0, 50 50 T 100 50" strokeWidth="0.5" />
          <path d="M0 60 Q 25 10, 50 60 T 100 60" strokeWidth="0.5" />
          <path d="M0 70 Q 25 20, 50 70 T 100 70" strokeWidth="0.5" />
        </svg>
        <div className="container-page relative z-10">
          <p className="text-accent tracking-wider font-bold text-sm">
            Alles-in-één gym automation platform
          </p>
          <h1 className="text-4xl lg:text-5xl font-black mt-3 max-w-3xl mx-auto leading-tight">
            Geen verborgen kosten, binnen vier weken live met een systeem dat voor jou werkt
          </h1>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-page max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container-page text-center">
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-dark font-semibold mt-3">
            Beoordeeld met 4.9 van 5 op basis van 169 reviews op{" "}
            <span className="text-primary font-bold">G2</span>.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-black text-dark text-center">Veelgestelde vragen</h2>
          <div className="mt-10">
            {faqs.map((f) => (
              <FaqItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-black max-w-3xl mx-auto leading-snug">
            Ons team, bestaande uit huidige en voormalige gymeigenaren, staat klaar om je
            rond te leiden.
          </h2>
          <div className="mt-8">
            <Button variant="primary" href="/demo" className="bg-accent hover:bg-accent/90 text-dark">
              Plan een demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
