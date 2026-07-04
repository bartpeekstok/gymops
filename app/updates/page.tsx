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

/* Ruimte (px) die logo + kop + tekst + padding samen innemen; de video
   krijgt de rest van de viewport-hoogte zodat er nooit een scrollbar komt. */
const CHROME_H = 248;

export default function UpdatesPage() {
  return (
    <main
      style={{
        fontFamily: "var(--font-sans)",
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "var(--ink, #0A0A0F)",
      }}
    >
      {/* Hero-foto + merkkleur-overlay, zelfde als de site-header */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/assets/gym-header.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(152deg, rgba(10,10,15,.93) 0%, rgba(10,10,15,.82) 46%, rgba(11,16,15,.66) 72%, rgba(16,185,129,.40) 100%)",
        }}
      />

      {/* Inhoud */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 16px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo-wit.png"
          alt="GymOps"
          style={{ height: 34, width: "auto", marginBottom: 12 }}
        />
        <h1
          style={{
            margin: "0 0 18px",
            fontSize: "clamp(24px, 3.6vw, 34px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            textAlign: "center",
            color: "var(--fg-on-dark, #FFFFFF)",
          }}
        >
          {KOP}
        </h1>

        {/* Video + tekst, breedte begrensd door zowel viewportbreedte als -hoogte */}
        <div
          style={{
            width: `min(100%, 860px, calc((100vh - ${CHROME_H}px) * 1.7778))`,
          }}
        >
          <div
            style={{
              borderRadius: "var(--r-lg, 20px)",
              border: "1px solid var(--border-on-dark, rgba(255,255,255,0.10))",
              boxShadow: "var(--shadow-lg, 0 24px 60px -24px rgba(10,10,15,0.28))",
              overflow: "hidden",
              background: "#000",
            }}
          >
            <VideoEmbed videoId={VIDEO_ID} title={TITEL} />
          </div>

          <div
            style={{
              marginTop: 16,
              paddingLeft: 14,
              borderLeft: "3px solid var(--mint, #10B981)",
            }}
          >
            <h2
              style={{
                margin: "0 0 4px",
                fontSize: 19,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--fg-on-dark, #FFFFFF)",
              }}
            >
              {TITEL}
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.55,
                color: "var(--fg-on-dark-2, #9CA3AF)",
              }}
            >
              {TEKST}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
