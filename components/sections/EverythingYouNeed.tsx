import { Users, Settings, BarChart3 } from "lucide-react";
import Button from "../ui/Button";
import { everythingCards } from "@/lib/data";

const iconMap = {
  users: Users,
  gear: Settings,
  chart: BarChart3,
} as const;

export default function EverythingYouNeed() {
  return (
    <section className="bg-accent-light py-20">
      <div className="container-page text-center">
        <p className="text-primary uppercase tracking-wider font-bold text-sm">
          Alles wat je Nodig Hebt
        </p>
        <h2 className="text-4xl font-black text-dark mt-2">Alles op Één Plek</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Placeholder ondertitel voor deze sectie. Vervang met je eigen tekst over
          de waarde van een geïntegreerd platform.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          {everythingCards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <div key={card.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="h-14 w-14 rounded-full bg-accent-light flex items-center justify-center">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-black text-xl text-dark mt-5">{card.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>

        <p className="text-dark font-semibold mt-14">
          Klaar om te zien hoe GymOps voor jouw gym kan werken?
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-5">
          <Button variant="primary" href="/demo">
            Plan een Demo →
          </Button>
          <Button variant="outline" href="/prijzen">
            Gratis aanmelden
          </Button>
        </div>
      </div>
    </section>
  );
}
