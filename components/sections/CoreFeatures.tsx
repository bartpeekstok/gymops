"use client";

import { useState } from "react";
import { Pen, Star, Mail, Zap, PartyPopper, CalendarCheck } from "lucide-react";
import Button from "../ui/Button";
import { GearIcon } from "../Logo";
import { coreFeatureTabs } from "@/lib/data";

const iconMap = {
  pen: Pen,
  star: Star,
  mail: Mail,
  zap: Zap,
  party: PartyPopper,
  "calendar-check": CalendarCheck,
} as const;

export default function CoreFeatures() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 justify-center">
            <GearIcon className="h-6 w-6" />
            <span className="text-sm font-bold tracking-wider">
              GymOps <span className="text-primary">Flow</span>
            </span>
          </div>
          <h2 className="text-4xl font-black text-dark mt-3">De beste ledenervaring, leadopvolging en overzicht in taken</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Elk gym is anders. Andere leden, andere mijlpalen, andere stem. GymOps is van
            begin tot eind ingericht op jouw gym, en blijft meebewegen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-12 items-start">
          <div>
            <div className="space-y-6">
              {coreFeatureTabs.map((tab, i) => {
                const Icon = iconMap[tab.icon as keyof typeof iconMap];
                const isActive = active === i;
                return (
                  <button
                    key={tab.title}
                    onClick={() => setActive(i)}
                    className={`block w-full text-left pt-4 border-t-4 transition-all ${
                      isActive ? "border-primary opacity-100" : "border-gray-200 opacity-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-dark text-lg">{tab.title}</h3>
                        <p className="text-gray-600 mt-2">{tab.body}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-8">
              <Button variant="outline" href="/producten">
                Meer informatie
              </Button>
            </div>
          </div>

          <div className="relative pb-8 pr-8">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-5">
                <h4 className="font-bold text-dark">Activiteit</h4>
                <span className="text-xs text-gray-500 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Live
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  { Icon: Pen, text: "Handgeschreven kaart naar Lisa de B.", time: "2 min geleden", bg: "bg-primary" },
                  { Icon: Star, text: "Review-verzoek naar Mark P.", time: "12 min geleden", bg: "bg-accent" },
                  { Icon: Mail, text: "Welkomstmail naar lead Sander V.", time: "18 min geleden", bg: "bg-primary-dark" },
                  { Icon: CalendarCheck, text: "Afspraak met Jeroen K. — di 14:00", time: "27 min geleden", bg: "bg-primary" },
                  { Icon: PartyPopper, text: "Bring-a-Friend event aangemaakt", time: "1 uur geleden", bg: "bg-accent" },
                  { Icon: Zap, text: "Tariefswijziging live op website", time: "2 uur geleden", bg: "bg-primary-dark" },
                ].map(({ Icon, text, time, bg }) => (
                  <li key={text} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className={`h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0 ${bg}`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-dark">{text}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute -bottom-2 -right-2 w-36 bg-[#0f1f24] rounded-[20px] p-1.5 shadow-2xl border border-primary/40">
              <div className="bg-primary rounded-[16px] p-2.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-[10px] font-bold">Activiteit</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                </div>
                <div className="space-y-1.5">
                  {[
                    { Icon: Pen, text: "Kaart → Lisa" },
                    { Icon: Star, text: "Review → Mark" },
                    { Icon: Mail, text: "Mail → Sander" },
                  ].map(({ Icon, text }) => (
                    <div key={text} className="bg-white/15 backdrop-blur rounded-md p-1.5 flex items-center gap-1.5">
                      <Icon className="h-3 w-3 text-white flex-shrink-0" />
                      <p className="text-white text-[10px] flex-1">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
