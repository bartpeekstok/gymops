"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { integrations } from "@/lib/data";

export default function IntegrationsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, startScroll: 0 });

  const items = [...integrations, ...integrations];

  useEffect(() => {
    if (paused || isDragging) return;
    const el = containerRef.current;
    if (!el) return;

    let rafId: number;
    let last = performance.now();
    let acc = 0;
    const speedPxPerSec = 75;

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      acc += (speedPxPerSec * dt) / 1000;
      const halfWidth = el.scrollWidth / 2;
      if (acc >= 1) {
        const step = Math.floor(acc);
        acc -= step;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        } else {
          el.scrollLeft += step;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [paused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    setIsDragging(true);
    dragState.current = { startX: e.pageX, startScroll: el.scrollLeft };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = containerRef.current;
    if (!el) return;
    e.preventDefault();
    const dx = e.pageX - dragState.current.startX;
    el.scrollLeft = dragState.current.startScroll - dx;
  };

  const stopDrag = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        stopDrag();
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDrag}
      className={`flex gap-6 overflow-x-auto scrollbar-hide select-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
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
              className="max-h-[72px] w-auto object-contain pointer-events-none"
              draggable={false}
            />
          ) : (
            <p className="font-black text-dark text-lg pointer-events-none">{it.name}</p>
          )}
        </div>
      ))}
    </div>
  );
}
