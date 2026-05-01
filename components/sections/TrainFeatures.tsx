"use client";

import { useState } from "react";
import { Smartphone, Dumbbell, Star } from "lucide-react";
import Button from "../ui/Button";
import { GearIcon } from "../Logo";
import { trainTabs } from "@/lib/data";

const iconMap = {
  smartphone: Smartphone,
  dumbbell: Dumbbell,
  star: Star,
} as const;

export default function TrainFeatures() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 justify-center">
            <GearIcon className="h-6 w-6" />
            <span className="text-sm font-bold tracking-wider">
              GymOps <span className="text-primary">TRAINING</span>
            </span>
          </div>
          <h2 className="text-4xl font-black text-dark mt-3">Verbeter de Ledenervaring</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Placeholder ondertitel over trainingen en community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-12 items-start">
          <div>
            <div className="space-y-6">
              {trainTabs.map((tab, i) => {
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

          <div className="flex justify-center">
            <div className="w-64 bg-[#0f2a33] rounded-[28px] p-3 shadow-2xl border border-primary/30">
              <div className="bg-navy rounded-[20px] p-4">
                <p className="text-off-white/60 text-[10px] mb-3">GymOps Training</p>
                {[
                  { title: "Workout 1", sub: "30 min · Kracht" },
                  { title: "Workout 2", sub: "45 min · Conditie" },
                  { title: "Workout 3", sub: "20 min · Mobiliteit" },
                ].map((w) => (
                  <div key={w.title} className="bg-navy-card rounded-lg p-3 mb-2">
                    <p className="text-white text-sm font-semibold">{w.title}</p>
                    <p className="text-off-white/60 text-xs">{w.sub}</p>
                  </div>
                ))}
                <button className="w-full bg-primary text-white text-xs py-2 rounded mt-2 font-semibold">
                  Start training
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
