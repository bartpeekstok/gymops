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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
          <div className="space-y-8">
            {coreFeatureTabs.slice(0, 3).map((tab, idx) => {
              const Icon = iconMap[tab.icon as keyof typeof iconMap];
              const isActive = idx === 0;
              return (
                <div
                  key={tab.title}
                  className={`pt-5 ${isActive ? "border-t-4 border-primary" : "border-t border-gray-200"}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-lg">{tab.title}</h3>
                      <p className="text-gray-600 mt-2 whitespace-pre-line">{tab.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl -z-10" />
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GearIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-dark">CrossFit Alkmaar</p>
                  <p className="text-xs text-gray-500">Recente activiteit</p>
                </div>
                <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
              </div>

              <ul className="mt-4 space-y-3">
                {activityFeed.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-3 rounded-2xl bg-gray-50 px-3 py-3"
                  >
                    <div className={`h-9 w-9 rounded-full ${item.bg} text-white flex items-center justify-center flex-shrink-0`}>
                      <item.Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-dark truncate">{item.text}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
