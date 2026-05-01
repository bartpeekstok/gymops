import { Settings, TrendingUp, Dumbbell, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const pillars = [
  {
    icon: Settings,
    tag: "Beheer",
    title: "Het hart van jouw gymbeheer",
    body: "Placeholder beschrijving voor de Beheer-pijler. Vervang met je eigen tekst over administratie, betalingen, ledenbeheer en planning.",
    bullets: ["Placeholder feature 1", "Placeholder feature 2", "Placeholder feature 3", "Placeholder feature 4"],
  },
  {
    icon: TrendingUp,
    tag: "Groei",
    title: "Verander prospects in leden",
    body: "Placeholder beschrijving voor de Groei-pijler. Vervang met je eigen tekst over leadgeneratie, conversie en marketing.",
    bullets: ["Placeholder feature 1", "Placeholder feature 2", "Placeholder feature 3", "Placeholder feature 4"],
  },
  {
    icon: Dumbbell,
    tag: "Training",
    title: "Verbeter de ledenervaring",
    body: "Placeholder beschrijving voor de Training-pijler. Vervang met je eigen tekst over de app, programmering en community.",
    bullets: ["Placeholder feature 1", "Placeholder feature 2", "Placeholder feature 3", "Placeholder feature 4"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 text-center">
        <div className="container-page">
          <Badge className="bg-accent/20 text-accent">Producten</Badge>
          <h1 className="text-4xl lg:text-5xl font-black mt-3 max-w-3xl mx-auto leading-tight">
            Eén platform, drie pijlers, alles wat je gym nodig heeft.
          </h1>
          <p className="text-off-white/80 mt-5 max-w-2xl mx-auto">
            Placeholder ondertitel. Vervang met je eigen positionering over GymOps Beheer, Groei
            en Training.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page space-y-20">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const reverse = i % 2 === 1;
            return (
              <div
                key={p.tag}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="lg:[direction:ltr]">
                  <div className="inline-flex items-center gap-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <span className="text-primary uppercase tracking-wider font-bold text-sm">
                      GymOps {p.tag}
                    </span>
                  </div>
                  <h2 className="text-3xl font-black text-dark mt-3">{p.title}</h2>
                  <p className="text-gray-600 mt-4 leading-relaxed">{p.body}</p>
                  <ul className="mt-6 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-dark">
                        <ArrowRight className="h-4 w-4 text-primary mt-1.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button variant="outline" href="/demo">
                      Plan een demo
                    </Button>
                  </div>
                </div>
                <div className="lg:[direction:ltr] bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl h-80 flex items-center justify-center">
                  <Icon className="h-32 w-32 text-primary/40" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-50 py-16 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-black text-dark">Klaar om te starten?</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Placeholder slotzin. Vervang met een korte CTA-tekst.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button variant="primary" href="/demo">
              Plan een Demo →
            </Button>
            <Button variant="outline" href="/prijzen">
              Bekijk prijzen
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
