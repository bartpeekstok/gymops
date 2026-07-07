import type { Metadata } from "next";
import VideoEmbed from "./VideoEmbed";

/* ============================================================
   BEWERK ALLEEN DIT BLOK om de dashboard-update aan te passen.
   VIDEO_ID = het stuk achter "watch?v=" in de YouTube-URL,
   OF een volledige Loom-deellink (bijv. https://www.loom.com/share/abc123).
   FOTO_ACHTERGROND: true = gym-foto met overlay, false = egaal zwart.
   ============================================================ */
const FOTO_ACHTERGROND = false;
const VIDEO_ID = "https://www.loom.com/share/38d3a1ae173c49f69bb04553dbce5680";
const KOP = "GymOps Academy";
const TITEL = "Ansichtkaarten versturen binnen één minuut";
const TEKST = `Bekijk de video hiernaast om te zien hoe je je leden een ansichtkaart stuurt vanaf je laptop of in de app!

Dit is een unieke feature van GymOps waar je je leden echt blij mee maakt. En het werkt twee kanten op: leden gaan met hun ansichtkaart op de foto en delen die op social media. Zo levert een kaartje van één minuut ook nog eens waardevolle zichtbaarheid op voor jouw gym.`;
const VOETER_VOOR = "Deze en alle andere video's over jouw GymOps-systeem vind je in de ";
const VOETER_ACCENT = "GymOps Academy";
const VOETER_NA = ".";
/* ============================================================ */

export const metadata: Metadata = {
  title: "Updates",
  robots: { index: false, follow: false, nocache: true },
};

export default function UpdatesPage() {
  return (
    <main
      className="upd-main"
      style={{
        fontFamily: "var(--font-sans)",
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "var(--ink, #0A0A0F)",
      }}
    >
      {/* Hero-foto + merkkleur-overlay, zelfde als de site-header */}
      {FOTO_ACHTERGROND && (
        <>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/assets/gym-header.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center 38%",
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
        </>
      )}

      <style>{`
        .upd-grid { position: relative; z-index: 1; height: 100%; display: flex; align-items: stretch; gap: 44px; padding: 24px 24px 24px 32px; }
        .upd-left { flex: 1 1 auto; min-width: 0; max-width: 640px; display: flex; flex-direction: column; justify-content: flex-start; overflow: hidden; }
        .upd-right { flex: 0 0 auto; display: flex; align-items: center; margin-left: auto; }
        .upd-video { width: min(calc((100vh - 72px) * 1.7778), 63vw); }
        @media (max-width: 720px) {
          .upd-main { height: auto; min-height: 100vh; overflow: auto; }
          .upd-grid { flex-direction: column; gap: 20px; padding: 24px 16px; }
          .upd-left { flex: none; width: 100%; max-width: 560px; }
          .upd-right { width: 100%; }
          .upd-video { width: 100%; }
        }
      `}</style>

      <div className="upd-grid">
        {/* Links: logo, kop, tekst */}
        <div className="upd-left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-wit.png"
            alt="GymOps"
            style={{ height: 112, width: "auto", alignSelf: "flex-start", marginBottom: 20, display: "block" }}
          />
          <h1
            style={{
              margin: "0 0 20px 28px",
              fontSize: "clamp(30px, 3.4vw, 46px)",
              lineHeight: 1.06,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--fg-on-dark, #FFFFFF)",
            }}
          >
            {KOP}
          </h1>
          <div style={{ marginTop: 10, marginLeft: 28, paddingLeft: 14, borderLeft: "3px solid var(--mint, #10B981)" }}>
            <h2
              style={{
                margin: "0 0 8px",
                fontSize: 24,
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
                fontSize: 19,
                lineHeight: 1.6,
                whiteSpace: "pre-line",
                color: "var(--fg-on-dark, #FFFFFF)",
              }}
            >
              {TEKST}
            </p>
          </div>
          <p
            style={{
              margin: "auto 0 0 28px",
              paddingTop: 20,
              fontSize: 14,
              lineHeight: 1.5,
              color: "var(--fg-on-dark-2, #9CA3AF)",
            }}
          >
            {VOETER_VOOR}
            <strong style={{ color: "var(--fg-on-dark, #FFFFFF)", fontWeight: 700 }}>
              {VOETER_ACCENT}
            </strong>
            {VOETER_NA}
          </p>
        </div>

        {/* Rechts: de video, zo groot als de widget toelaat */}
        <div className="upd-right">
          <div className="upd-video">
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
          </div>
        </div>
      </div>
    </main>
  );
}
