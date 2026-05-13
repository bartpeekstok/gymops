"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { successQuotes } from "@/lib/data";

export default function SuccessStories() {
  const [idx, setIdx] = useState(0);
  const total = successQuotes.length;
  const current = successQuotes[idx];

  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <p className="text-primary tracking-wider font-bold text-sm">
          Lees onze succesverhalen
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
          <div className="bg-navy text-white rounded-2xl p-10 relative">
            <p className="text-primary font-bold">
              {idx + 1}/{total}
            </p>
            <span className="text-accent text-8xl leading-none font-serif block">&ldquo;</span>
            <p className="text-xl font-medium leading-relaxed -mt-6">{current.quote}</p>
            <p className="mt-6 font-bold">
              {current.name} <span className="text-off-white/70 font-normal">– {current.company}</span>
            </p>
            <div className="flex items-center justify-end mt-8">
              <div className="flex gap-2">
                <button
                  onClick={() => setIdx((i) => (i - 1 + total) % total)}
                  className="h-10 w-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Vorige"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIdx((i) => (i + 1) % total)}
                  className="h-10 w-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Volgende"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {successQuotes.map((q, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-full text-left bg-navy-card text-white rounded-xl overflow-hidden transition-all ${
                  i === idx ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                }`}
              >
                <div className="h-24 bg-gradient-to-br from-primary to-accent" />
                <div className="p-4">
                  <p className="font-bold text-sm">{q.company}</p>
                  <p className="text-off-white/70 text-xs mt-1 line-clamp-1">{q.quote}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
