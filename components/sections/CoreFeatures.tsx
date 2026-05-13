"use client";

import { useState } from "react";
import { Pen, Mail, PartyPopper } from "lucide-react";
import Button from "../ui/Button";
import { GearIcon } from "../Logo";
import { coreFeatureTabs } from "@/lib/data";

const iconMap = {
  pen: Pen,
  mail: Mail,
  party: PartyPopper,
} as const;

export default function CoreFeatures() {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? 0;

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
          <div
            className="space-y-8"
            onMouseLeave={() => setHovered(null)}
          >
            {coreFeatureTabs.slice(0, 3).map((tab, idx) => {
              const Icon = iconMap[tab.icon as keyof typeof iconMap];
              const isActive = active === idx;
              return (
                <div
                  key={tab.title}
                  onMouseEnter={() => setHovered(idx)}
                  className={`pt-5 transition-all duration-300 cursor-default ${
                    isActive
                      ? "border-t-4 border-primary"
                      : "border-t border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 transition-colors duration-300 ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-lg transition-colors duration-300 ${
                          isActive ? "text-dark" : "text-gray-400"
                        }`}
                      >
                        {tab.title}
                      </h3>
                      <p
                        className={`mt-2 whitespace-pre-line transition-colors duration-300 ${
                          isActive ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {tab.body.split("\n\n")[0]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-100/40 to-rose-100/30 rounded-3xl -z-10" />
            <div className="bg-amber-50 rounded-2xl shadow-2xl p-10 border border-amber-200/60 rotate-2 max-w-md">
              <p className="font-serif italic text-2xl text-amber-900">Lieve Lisa,</p>
              <p className="font-serif italic text-amber-900/80 mt-5 leading-relaxed text-lg">
                Gefeliciteerd met je verjaardag! Geniet van je dag, en tot dinsdag in de box.
              </p>
              <p className="font-serif italic text-amber-900 mt-8">— Daan &amp; team Zuidlaren</p>
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
