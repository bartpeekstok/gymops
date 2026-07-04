import type { Metadata } from "next";

/* ============================================================
   BEWERK ALLEEN DIT BLOK om de dashboard-update aan te passen.
   VIDEO_ID = het stuk achter "watch?v=" in de YouTube-URL.
   ============================================================ */
const VIDEO_ID = "asKZDjdjiG0";
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
        fontFamily: "var(--font-sans, system-ui, sans-serif)",
        background: "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "24px 16px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 860 }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: 12,
            overflow: "hidden",
            background: "#000",
          }}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0`}
            title={TITEL}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </div>
        <h1
          style={{
            margin: "20px 0 8px",
            fontSize: 22,
            fontWeight: 700,
            color: "var(--fg2, #1F2937)",
          }}
        >
          {TITEL}
        </h1>
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
    </main>
  );
}
