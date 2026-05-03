import { Users, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { GearIcon } from "@/components/Logo";
import IntegrationsSlider from "@/components/IntegrationsSlider";
import { productPillars } from "@/lib/data";

const iconMap = {
  gear: GearIcon,
  users: Users,
} as const;

export default function ProductsPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 text-center">
        <div className="container-page">
          <Badge className="bg-accent/20 text-accent">Producten</Badge>
          <h1 className="text-4xl lg:text-5xl font-black mt-3 max-w-3xl mx-auto leading-tight">
            Twee producten. Eén platform.
          </h1>
          <p className="text-off-white/80 mt-5 max-w-2xl mx-auto">
            GymOps Flow voor je complete gym-automatisering. Pulse komt binnenkort erbij voor
            je team.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page space-y-20">
          {productPillars.map((p, i) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap];
            const reverse = i % 2 === 1;
            const isComingSoon = p.comingSoon;
            return (
              <div
                key={p.productName}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="lg:[direction:ltr]">
                  <div className="inline-flex items-center gap-3 mb-3">
                    <GearIcon className="h-12 w-12" />
                    <span className="text-3xl font-bold tracking-wider">
                      GymOps{" "}
                      <span className={isComingSoon ? "text-gray-400" : "text-primary"}>
                        {p.productName.replace("GymOps ", "")}
                      </span>
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${
                        isComingSoon
                          ? "bg-gray-100 text-gray-500"
                          : "bg-accent-light text-primary"
                      }`}
                    >
                      {p.tag}
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
                    <Button variant={isComingSoon ? "outline" : "primary"} href="/demo">
                      {p.cta}
                    </Button>
                  </div>
                </div>
                <div
                  className={`lg:[direction:ltr] rounded-2xl h-80 flex items-center justify-center ${
                    isComingSoon
                      ? "bg-gradient-to-br from-gray-100 to-gray-200"
                      : "bg-gradient-to-br from-primary/10 to-accent/20"
                  }`}
                >
                  <Icon
                    className={`h-32 w-32 ${isComingSoon ? "text-gray-400" : "text-primary/40"}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container-page">
          <h2 className="text-3xl font-black text-dark text-center max-w-3xl mx-auto">
            GymOps werkt naadloos samen met meer dan honderd andere tools
          </h2>
          <div className="mt-12">
            <IntegrationsSlider />
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16 text-center">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-black leading-snug">
            Klaar om GymOps in actie te zien?
          </h2>
          <p className="text-off-white/80 mt-4">
            Plan een gratis demo en ontdek hoe GymOps jouw gym transformeert.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              href="/demo"
              className="bg-accent hover:bg-accent/90 text-dark"
            >
              Plan een demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
