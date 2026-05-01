import { Star, Check, Minus } from "lucide-react";
import Button from "@/components/ui/Button";
import PricingCard from "@/components/ui/PricingCard";
import FaqItem from "@/components/ui/FaqItem";
import { pricingPlans, featureGroups, faqs } from "@/lib/data";

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
            Schaal je bedrijf met flexibele abonnementen die bij jouw behoeften passen.
          </h1>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-page">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6 max-w-3xl mx-auto">
            *Prijzen in EUR. Neem contact op met sales voor internationale tarieven.{" "}
            **AI-ondersteuning lost 60% van de gesprekken op met een klanttevredenheidsscore
            van 95%.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <h2 className="text-3xl font-black text-dark text-center max-w-3xl mx-auto">
            Vergelijk alle functies en kies een abonnement dat bij jou past.
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-sm font-bold text-dark border-b border-gray-200">
                    Functie
                  </th>
                  {["Gratis", "Pro", "Max"].map((tier) => (
                    <th
                      key={tier}
                      className="text-center py-4 px-4 text-sm font-bold text-dark border-b border-gray-200"
                    >
                      {tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureGroups.map((group) => (
                  <>
                    <tr key={group.name} className="bg-gray-50">
                      <td
                        colSpan={4}
                        className="py-3 px-4 text-xs font-bold tracking-wider text-primary"
                      >
                        {group.name}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm text-dark">{row.label}</td>
                        {row.values.map((v, i) => (
                          <td key={i} className="py-3 px-4 text-center text-sm text-gray-700">
                            {v === "✓" ? (
                              <Check className="h-5 w-5 text-accent inline" />
                            ) : v === "—" ? (
                              <Minus className="h-4 w-4 text-gray-300 inline" />
                            ) : (
                              v
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
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
