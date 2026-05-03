"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { integrations } from "@/lib/data";

export default function IntegrationsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const items = [...integrations, ...integrations];

  useEffect(() => {
    if (paused) return;
    const el = containerRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const halfWidth = el.scrollWidth / 2;
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth;
      } else {
        el.scrollLeft += 1;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [paused]);

  const scroll = (dir: "prev" | "next") => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "next" ? 240 : -240, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {items.map((it, i) => (
          <div
            key={`${it.name}-${i}`}
            className="flex-shrink-0 w-44 h-32 bg-white border border-gray-100 rounded-xl flex items-center justify-center"
            title={it.name}
          >
            {it.src ? (
              <Image
                src={it.src}
                alt={it.name}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            ) : (
              <p className="font-black text-dark text-lg">{it.name}</p>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("prev")}
        aria-label="Vorige"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-10 w-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
      >
        <ChevronLeft className="h-5 w-5 text-primary" />
      </button>
      <button
        onClick={() => scroll("next")}
        aria-label="Volgende"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-10 w-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
      >
        <ChevronRight className="h-5 w-5 text-primary" />
      </button>
    </div>
  );
}
