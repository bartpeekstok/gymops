import { Pen, Star, Mail, Zap, PartyPopper, CalendarCheck, Trophy, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import { GearIcon } from "@/components/Logo";
import { coreFeatureTabs } from "@/lib/data";

const iconMap = {
  pen: Pen,
  star: Star,
  mail: Mail,
  party: PartyPopper,
  "calendar-check": CalendarCheck,
  trophy: Trophy,
  heart: Heart,
} as const;

export default function LedenervaringPage() {
  return (
    <main className="bg-white py-24">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 justify-center mb-6">
            <GearIcon className="h-10 w-10" />
            <span className="text-3xl font-bold tracking-wider">
              GymOps <span className="text-primary">Ledenervaring</span>
            </span>
          </div>
          <h1 className="text-4xl font-black text-dark">Alle ledenervaring functies</h1>
          <p className="text-gray-600 mt-4">
            Ontdek hoe GymOps jouw ledencontact persoonlijk, professioneel en schaalbaar maakt.
          </p>
        </div>

        <div className="grid gap-8 mt-16">
          {coreFeatureTabs.map((tab) => {
            const Icon = iconMap[tab.icon as keyof typeof iconMap];
            return (
              <article key={tab.title} className="rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark">{tab.title}</h2>
                </div>
                <p className="text-gray-600 mt-4 whitespace-pre-line">{tab.body}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button href="/producten">Bekijk onze producten</Button>
        </div>
      </div>
    </main>
  );
}
