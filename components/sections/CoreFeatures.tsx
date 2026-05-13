import { Pen, Star, Mail, Zap, PartyPopper, CalendarCheck, Trophy, Heart } from "lucide-react";
import Button from "../ui/Button";
import { GearIcon } from "../Logo";
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

const activityFeed = [
  { Icon: Pen, text: "Handgeschreven kaart naar Lisa de B.", time: "2 min geleden", bg: "bg-primary" },
  { Icon: Star, text: "Review-verzoek naar Mark P.", time: "12 min geleden", bg: "bg-accent" },
  { Icon: Mail, text: "Welkomstmail naar lead Sander V.", time: "18 min geleden", bg: "bg-primary-dark" },
  { Icon: CalendarCheck, text: "Afspraak met Jeroen K. – di 14:00", time: "27 min geleden", bg: "bg-primary" },
  { Icon: PartyPopper, text: "Bring-a-Friend event aangemaakt", time: "1 uur geleden", bg: "bg-accent" },
  { Icon: Zap, text: "Tariefswijziging live op website", time: "2 uur geleden", bg: "bg-primary-dark" },
];

const phoneFeed = [
  { Icon: Pen, text: "Kaart → Lisa" },
  { Icon: Star, text: "Review → Mark" },
  { Icon: Mail, text: "Mail → Sander" },
];

export default function CoreFeatures() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 justify-center">
            <GearIcon className="h-12 w-12" />
            <span className="text-3xl font-bold tracking-wider">
              GymOps <span className="text-primary">Flow</span>
            </span>
          </div>
          <h2 className="text-4xl font-black text-dark mt-3">De beste ledenervaring</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Elk gym is anders. Andere leden, andere mijlpalen, andere stem. GymOps is van
            begin tot eind ingericht op jouw gym, en blijft meebewegen.
          </p>
        </div>

        <div className="space-y-8 mt-12 max-w-3xl mx-auto">
          {coreFeatureTabs.slice(0, 3).map((tab) => {
            const Icon = iconMap[tab.icon as keyof typeof iconMap];
            return (
              <div
                key={tab.title}
                className="pt-5 border-t-4 border-primary"
              >
                <div className="flex items-start gap-3">
                  <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark text-lg">{tab.title}</h3>
                    <p className="text-gray-600 mt-2 whitespace-pre-line">{tab.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" href="/ledenervaring">
            Bekijk alles
          </Button>
        </div>
      </div>
    </section>
  );
}
