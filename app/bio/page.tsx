import type { Metadata } from "next";
import { ArrowRight, CalendarCheck, Globe, Map, MessageCircle, Mic, Tag, Users } from "lucide-react";
import s from "./bio.module.css";

// Link in bio voor Instagram en LinkedIn: één scherm, de routekaart bovenaan.
// Nieuwe link erbij: een regel in LINKS. Een link die nog niet bestaat (zoals
// de webinar-registratie) blijft op null tot hij er is.

export const metadata: Metadata = {
  title: "GymOps: links",
  description: "Maak je routekaart naar een miljoen omzet, plan een demo of app met Jeroen en Bart.",
  robots: { index: false, follow: true },
};

const WHATSAPP = "https://wa.me/31722340231?text=" + encodeURIComponent("Hi, ik kom via de link in de bio. ");
const DEMO = "https://links.gymops.nl/widget/booking/9peD9aOwQ1sN9F4gOhev";
const WEBINAR: string | null = null; // registratiepagina webinar 2 december: zet de link hier zodra hij bestaat

type Link = { href: string; titel: string; sub: string; icon: React.ReactNode; extern?: boolean };

const LINKS: { kop: string; items: Link[] }[] = [
  {
    kop: "Praat met ons",
    items: [
      { href: DEMO, titel: "Plan een demo van 30 minuten", sub: "Bart of Jeroen laat zien hoe het bij jouw gym werkt.", icon: <CalendarCheck size={20} aria-hidden="true" />, extern: true },
      { href: WHATSAPP, titel: "App met Jeroen of Bart", sub: "Gewoon een vraag? Stuur een WhatsApp.", icon: <MessageCircle size={20} aria-hidden="true" />, extern: true },
      ...(WEBINAR ? [{ href: WEBINAR, titel: "Webinar 2 december, 12:30", sub: "De eerste 90 dagen van een lid. Gratis, online.", icon: <Users size={20} aria-hidden="true" />, extern: true }] : []),
    ],
  },
  {
    kop: "Kijk mee",
    items: [
      { href: "https://www.youtube.com/watch?v=ekUdKW3g28A", titel: "Podcast: Jeroen bij SportBazen", sub: "Hoe CrossFit Leiden een gezond bedrijf werd.", icon: <Mic size={20} aria-hidden="true" />, extern: true },
      { href: "https://goldpact.nl", titel: "Een klantsite: CrossFit Gold Pact", sub: "Nieuw live in Rotterdam. Zo ziet een GymOps-site eruit.", icon: <Globe size={20} aria-hidden="true" />, extern: true },
      { href: "/mentorschap", titel: "Mentorschap", sub: "Een mentor die meekijkt in jouw cijfers.", icon: <Users size={20} aria-hidden="true" /> },
      { href: "/prijzen", titel: "Prijzen", sub: "Wat GymOps kost en wat erin zit.", icon: <Tag size={20} aria-hidden="true" /> },
    ],
  },
];

export default function Page() {
  return (
    <main className={s.page}>
      <div className={s.inner}>
        <header className={s.head}>
          <img src="/assets/logo-wit.png" alt="GymOps" />
          <p>
            <b>Van lead tot ex-lid, één systeem.</b> Gerund door twee gym-eigenaren.
          </p>
        </header>

        <a className={s.primary} href="/routekaart">
          <strong>
            <Map size={18} aria-hidden="true" style={{ verticalAlign: "-3px", marginRight: 8 }} />
            Maak je routekaart naar € 1 miljoen
          </strong>
          <span>Vul je eigen cijfers in en zie waar jouw gym groeit. Gratis, 6 vragen.</span>
        </a>

        {LINKS.map((g) => (
          <div key={g.kop} style={{ display: "contents" }}>
            <div className={s.group}>{g.kop}</div>
            {g.items.map((l) => (
              <a key={l.href} className={s.link} href={l.href} {...(l.extern ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <span>
                  <strong>{l.titel}</strong>
                  <span>{l.sub}</span>
                </span>
                {l.icon ?? <ArrowRight size={20} aria-hidden="true" />}
              </a>
            ))}
          </div>
        ))}

        <p className={s.foot}>
          <a href="/">gymops.nl</a> · Instagram <a href="https://www.instagram.com/gymops.nl/" target="_blank" rel="noopener noreferrer">@gymops.nl</a>
        </p>
      </div>
    </main>
  );
}
