import type { Metadata } from "next";
import VideoEmbed from "./VideoEmbed";

/* ============================================================
   BEWERK ALLEEN DIT BLOK om de dashboard-update aan te passen.
   VIDEO_ID = het stuk achter "watch?v=" in de YouTube-URL.
   ============================================================ */
const VIDEO_ID = "asKZDjdjiG0";
const KOP = "GymOps nieuws";
const TITEL = "Ex leden campagne";
const TEKST = "Let op! Check de leden die de ex-leden campagne in gaan!";
/* ============================================================ */

export const metadata: Metadata = {
  title: "Updates",
  robots: { index: false, follow: false, nocache: true },
};

export default function UpdatesPage() {
  return (
    <main
      style={{
        fontFamily: "var(--font-sans)",
        background: "var(--bg, #FFFFFF)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "28px 16px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 860 }}>
        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="GymOps" style={{ height: 42, width: "auto" }} />
        </div>

        {/* Kop */}
        <h1
          style={{
            margin: "0 0 24px",
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            textAlign: "center",
            color: "var(--ink, #0A0A0F)",
          }}
        >
          {KOP}
        </h1>

        {/* Video in kaart */}
        <div
          style={{
            borderRadius: "var(--r-lg, 20px)",
            border: "1px solid var(--border, #E5E7EB)",
            boxShadow: "var(--shadow-card, 0 12px 32px -12px rgba(10,10,15,0.12))",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <VideoEmbed videoId={VIDEO_ID} title={TITEL} />
        </div>

        {/* Fullscreen CTA in mint */}
        <div style={{ textAlign: "right", marginTop: 14 }}>
          <a
            href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontSize: 14,
              fontWeight: 700,
              color: "#FFFFFF",
              background: "var(--mint, #10B981)",
              textDecoration: "none",
              borderRadius: "var(--r-pill, 999px)",
              padding: "9px 18px",
              boxShadow: "var(--shadow-mint, 0 12px 30px -12px rgba(16,185,129,0.45))",
            }}
          >
            Bekijk fullscreen op YouTube ↗
          </a>
        </div>

        {/* Titel + tekst */}
        <div
          style={{
            marginTop: 18,
            paddingLeft: 14,
            borderLeft: "3px solid var(--mint, #10B981)",
          }}
        >
          <h2
            style={{
              margin: "0 0 6px",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--ink, #0A0A0F)",
            }}
          >
            {TITEL}
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.65,
              color: "var(--fg3, #6B7280)",
            }}
          >
            {TEKST}
          </p>
        </div>
      </div>
    </main>
  );
}
