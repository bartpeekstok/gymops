"use client";

import { useEffect, useState } from "react";

/* Zwevende WhatsApp-knop rechtsonder, op elke pagina.
   Nummer en voorgevuld bericht staan hieronder; verder niets aanpassen. */
const NUMMER = "31722340231"; // 072 234 0231 in internationaal formaat
const BERICHT = "Hoi GymOps, ik heb een vraag over ";
const WA_LINK = `https://wa.me/${NUMMER}?text=${encodeURIComponent(BERICHT)}`;

export default function WhatsAppWidget() {
  const [zichtbaar, setZichtbaar] = useState(false);
  const [hover, setHover] = useState(false);

  // Even wachten zodat de knop niet meteen door de hero-animatie heen knalt.
  useEffect(() => {
    const t = setTimeout(() => setZichtbaar(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stel je vraag via WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{
        position: "fixed",
        right: "max(18px, env(safe-area-inset-right))",
        bottom: "max(18px, env(safe-area-inset-bottom))",
        zIndex: 90,
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: 56,
        padding: hover ? "0 20px 0 14px" : "0 14px",
        borderRadius: 999,
        background: "#25D366",
        color: "#fff",
        textDecoration: "none",
        boxShadow: "0 10px 28px -8px rgba(37,211,102,.55), 0 2px 6px rgba(10,10,15,.12)",
        opacity: zichtbaar ? 1 : 0,
        transform: zichtbaar ? "translateY(0) scale(1)" : "translateY(14px) scale(.9)",
        transition: "opacity .4s ease, transform .4s cubic-bezier(.16,1,.3,1), padding .25s ease, background .2s",
        pointerEvents: zichtbaar ? "auto" : "none",
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
      <span
        style={{
          fontSize: 15,
          fontWeight: 700,
          whiteSpace: "nowrap",
          maxWidth: hover ? 240 : 0,
          opacity: hover ? 1 : 0,
          overflow: "hidden",
          transition: "max-width .3s ease, opacity .2s ease",
        }}
      >
        Stel je vraag via WhatsApp
      </span>
    </a>
  );
}
