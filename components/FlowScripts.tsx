"use client";

import { useEffect } from "react";

/**
 * Port of the design bundle's flow.js — drives the scroll-triggered
 * animations used across the Flow homepage:
 *  - count-up numbers on elements with [data-count]
 *  - rolling odometer digits on .odometer[data-value]
 *  - reveal-on-scroll for [data-reveal]
 */
export default function FlowScripts() {
  useEffect(() => {
    // Count-up numbers with [data-count]
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    let cio: IntersectionObserver | null = null;
    if (counters.length) {
      cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            const target = parseInt(el.dataset.count || "0", 10);
            const suf = el.dataset.suffix || "";
            const dur = 1500;
            const start = performance.now();
            const step = (now: number) => {
              const p = Math.min((now - start) / dur, 1);
              const val = Math.round(target * (1 - Math.pow(1 - p, 3)));
              el.textContent = val.toLocaleString("nl-NL") + suf;
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            cio!.unobserve(el);
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach((c) => cio!.observe(c));
    }

    // Odometer rolling digits with .odometer[data-value]
    const odos = document.querySelectorAll<HTMLElement & { _reels?: { r: HTMLElement; offset: number }[] }>(
      ".odometer"
    );
    let oio: IntersectionObserver | null = null;
    if (odos.length) {
      const build = (el: HTMLElement & { _reels?: { r: HTMLElement; offset: number }[] }) => {
        const str = parseInt(el.dataset.value || "0", 10).toLocaleString("nl-NL");
        el.innerHTML = "";
        el._reels = [];
        for (let k = 0; k < str.length; k++) {
          const ch = str[k];
          if (ch < "0" || ch > "9") {
            const sep = document.createElement("span");
            sep.className = "odo-sep";
            sep.textContent = ch;
            el.appendChild(sep);
            continue;
          }
          const d = document.createElement("span");
          d.className = "odo-d";
          const r = document.createElement("span");
          r.className = "odo-r";
          let html = "";
          for (let c = 0; c < 4; c++) for (let i = 0; i < 10; i++) html += "<span>" + i + "</span>";
          html += "<span>" + ch + "</span>";
          r.innerHTML = html;
          d.appendChild(r);
          el.appendChild(d);
          el._reels.push({ r, offset: 40 + parseInt(ch, 10) });
        }
      };
      const run = (el: HTMLElement & { _reels?: { r: HTMLElement; offset: number }[] }) => {
        (el._reels || []).forEach((o, idx) => {
          setTimeout(() => {
            o.r.style.transform = "translateY(-" + o.offset + "em)";
          }, 90 * idx);
        });
      };
      odos.forEach(build);
      oio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              run(e.target as HTMLElement & { _reels?: { r: HTMLElement; offset: number }[] });
              oio!.unobserve(e.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      odos.forEach((o) => oio!.observe(o));
    }

    // Sticky scroll showcase: swap phone screen as feature steps enter view
    const showcase = document.querySelector(".showcase");
    let sio: IntersectionObserver | null = null;
    if (showcase) {
      const steps = showcase.querySelectorAll<HTMLElement>(".sc-step");
      const screens = showcase.querySelectorAll<HTMLElement>(".sc-screen");
      const activate = (idx: number) => {
        steps.forEach((s, i) => {
          s.classList.toggle("ring-2", i === idx);
          s.classList.toggle("ring-primary", i === idx);
          s.classList.toggle("bg-bg2", i === idx);
          s.classList.toggle("shadow-lg", i === idx);
        });
        screens.forEach((sc, i) => sc.classList.toggle("hidden", i !== idx));
      };
      activate(0);
      sio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) activate(parseInt((e.target as HTMLElement).dataset.step || "0", 10));
          });
        },
        { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
      );
      steps.forEach((s) => sio!.observe(s));
    }

    // Reveal-on-scroll for [data-reveal]
    const reveals = document.querySelectorAll("[data-reveal]");
    let rio: IntersectionObserver | null = null;
    if (reveals.length) {
      rio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              rio!.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      reveals.forEach((r) => rio!.observe(r));
    }

    return () => {
      cio?.disconnect();
      oio?.disconnect();
      sio?.disconnect();
      rio?.disconnect();
    };
  }, []);

  return null;
}
