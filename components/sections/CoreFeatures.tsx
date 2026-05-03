"use client";

import { useState } from "react";
import { Pen, Users, Calendar, Plus } from "lucide-react";
import Button from "../ui/Button";
import { GearIcon } from "../Logo";
import { coreFeatureTabs } from "@/lib/data";

const iconMap = {
  pen: Pen,
  users: Users,
  calendar: Calendar,
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

          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-dark">Werkrooster</h4>
              <button className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded inline-flex items-center gap-1">
                <Plus className="h-3 w-3" /> Uren toevoegen
              </button>
            </div>
            <div className="border border-gray-100 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr className="text-left text-xs uppercase text-gray-500">
                    <th className="px-4 py-2.5">Dag</th>
                    <th className="px-4 py-2.5">Start</th>
                    <th className="px-4 py-2.5">Einde</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Wo", "9:00", "16:00"],
                    ["Do", "9:00", "16:00"],
                    ["Vr", "9:00", "16:00"],
                  ].map(([d, s, e]) => (
                    <tr key={d} className="border-t border-gray-100">
                      <td className="px-4 py-3 font-semibold text-dark">{d}</td>
                      <td className="px-4 py-3 text-gray-600">{s}</td>
                      <td className="px-4 py-3 text-gray-600">{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
