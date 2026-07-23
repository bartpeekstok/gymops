import type { Metadata } from "next";
import VideoEmbed from "./VideoEmbed";

/* ============================================================
   BEWERK ALLEEN DIT BLOK om de dashboard-update aan te passen.
   VIDEO_ID = het stuk achter "watch?v=" in de YouTube-URL,
   OF een volledige Loom-deellink (bijv. https://www.loom.com/share/abc123).
   FOTO_ACHTERGROND: true = gym-foto met overlay, false = egaal zwart.
   ============================================================ */
const FOTO_ACHTERGROND = false;
const TOON_KOP = false; // true = grote kop boven de update tonen
const VIDEO_ID = "https://www.loom.com/share/5ba84e3709a249ed874d59f39ba25d2c";
const KOP = "GymOps Academy";
const TITEL = "Uitleg Custom Values in WhatsApp en e-mail";
const TEKST = `Bekijk de video hiernaast voor uitleg over Custom Values: de invulvelden die je in WhatsApp-berichten en e-mails kunt gebruiken, zoals de voornaam van een lid of de naam van je gym. Zo begint elk bericht persoonlijk, terwijl de tekst zelf gewoon uit een template komt.

In de video zie je welke Custom Values er zijn, hoe je ze in een bericht zet en waar je moet opletten. Controleer altijd even of het veld gevuld is voordat je verstuurt: een bericht met een lege of verkeerde waarde oogt slordiger dan helemaal geen personalisatie. Goed gebruikt schelen Custom Values je veel typewerk en voelt elk bericht toch alsof je het speciaal voor dat lid hebt geschreven.`;
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
        .upd-left { flex: 1 1 auto; min-width: 0; max-width: 760px; display: flex; flex-direction: column; justify-content: flex-start; overflow: hidden; }
        .upd-right { flex: 0 0 auto; display: flex; align-items: center; margin-left: auto; }
        .upd-video { width: min(calc((100vh - 72px) * 1.7778), 55vw); }
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
          {TOON_KOP && (
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
          )}
          <div style={{ marginTop: 10, marginLeft: 28, paddingLeft: 14, borderLeft: "3px solid var(--mint, #10B981)" }}>
            <h2
              style={{
                margin: "0 0 8px",
                fontSize: 22,
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
                fontSize: 17,
                lineHeight: 1.55,
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
            <span style={{ whiteSpace: "nowrap" }}>
              <strong style={{ color: "var(--fg-on-dark, #FFFFFF)", fontWeight: 700 }}>
                {VOETER_ACCENT}
              </strong>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--fg-on-dark, #FFFFFF)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: 16, height: 16, marginLeft: 6, verticalAlign: "-3px", display: "inline-block" }}
              >
                <path d="M22 10v6" />
                <path d="M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              {VOETER_NA}
            </span>
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
