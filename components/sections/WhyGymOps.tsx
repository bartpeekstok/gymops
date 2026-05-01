"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { whyCards } from "@/lib/data";

export default function WhyGymOps() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir === "next" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container-page">
        <p className="text-primary uppercase tracking-wider font-bold text-sm">
          Waarom GymOps?
        </p>
        <h2 className="text-4xl font-black text-dark mt-2 max-w-2xl">
          De Tools die je Nodig Hebt. Het Team dat je Vertrouwt.
        </h2>

        <div
          ref={scroller}
          className="flex gap-6 mt-10 overflow-x-auto pb-4 scroll-smooth snap-x"
        >
          {whyCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-8 shadow-sm min-w-[280px] flex-shrink-0 max-w-sm snap-start"
            >
              <h3 className="font-black text-dark text-lg">{card.title}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => scroll("prev")}
            className="h-10 w-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-accent-light transition-colors"
            aria-label="Vorige"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("next")}
            className="h-10 w-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-accent-light transition-colors"
            aria-label="Volgende"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
