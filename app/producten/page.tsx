import { Settings, TrendingUp, Dumbbell, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { productPillars, integrations } from "@/lib/data";

const iconMap = {
  settings: Settings,
  "trending-up": TrendingUp,
  dumbbell: Dumbbell,
} as const;

export default function ProductsPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 text-center">
        <div className="container-page">
          <Badge className="bg-accent/20 text-accent">Producten</Badge>
          <h1 className="text-4xl lg:text-5xl font-black mt-3 max-w-3xl mx-auto leading-tight">
            Eén platform. Alles wat je nodig hebt.
          </h1>
          <p className="text-off-white/80 mt-5 max-w-2xl mx-auto">
            GymOps biedt een compleet ecosysteem van producten die naadloos samenwerken —
            zodat jij je kunt focussen op je leden, niet op je software.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page space-y-20">
          {productPillars.map((p, i) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap];
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
                    <span className="text-primary tracking-wider font-bold text-sm">
                      GymOps {p.tag}
                    </span>
                  </div>
                  <h2 className="text-3xl font-black text-dark mt-3">{p.tagline}</h2>
                  <p className="text-gray-600 mt-4 leading-relaxed">{p.body}</p>
                  <ul className="mt-6 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-dark">
                        <ArrowRight className="h-4 w-4 text-primary mt-1.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button variant="outline" href="/demo">
                      {p.cta}
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

      <section className="bg-gray-50 py-20">
        <div className="container-page">
          <h2 className="text-3xl font-black text-dark text-center max-w-3xl mx-auto">
            Werkt naadloos samen met jouw favoriete tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {integrations.map((it) => (
              <div
                key={it.name}
                className="bg-white border border-gray-100 rounded-xl p-6 text-center"
              >
                <p className="font-black text-dark text-lg">{it.name}</p>
                {it.desc && (
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                    {it.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16 text-center">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-black leading-snug">
            Klaar om GymOps in actie te zien?
          </h2>
          <p className="text-off-white/80 mt-4">
            Plan een gratis demo en ontdek hoe GymOps jouw gym transformeert — van
            administratiedruk naar groeimotor.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              href="/demo"
              className="bg-accent hover:bg-accent/90 text-dark"
            >
              Plan een demo →
            </Button>
            <Button
              variant="outline"
              href="/prijzen"
              className="border-white text-white hover:bg-white/10"
            >
              Gratis starten
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
