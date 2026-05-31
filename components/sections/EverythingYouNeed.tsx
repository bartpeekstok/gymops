import Link from "next/link";
import { Zap, Heart, CheckCheck, ArrowRight } from "lucide-react";

const cards = [
  {
    Icon: Zap,
    title: "Geen lead meer kwijt",
    body: "Iedere lead via je website, social of een QR-code krijgt binnen één minuut een WhatsApp én e-mail. Je coach krijgt direct een taak om persoonlijk contact op te nemen.",
    href: "/leadopvolging",
    label: "Leadopvolging",
  },
  {
    Icon: Heart,
    title: "Geen lid meer vergeten",
    body: "GymOps signaleert wie even niet geweest is, jarig is of een mijlpaal nadert. Een persoonlijk bericht of handgeschreven kaart vertrekt op het juiste moment.",
    href: "/ledenervaring",
    label: "Ledenervaring",
  },
  {
    Icon: CheckCheck,
    title: "Geen taak vergeten",
    body: "Elke taak gaat automatisch naar de juiste coach. Niet opgepakt? Dan staat-ie er morgen weer. Valt iemand uit, dan neemt een collega in één klik over.",
    href: "/producten",
    label: "Team-aansturing",
  },
];

export default function EverythingYouNeed() {
  return (
    <section className="bg-bg2 border-b border-line">
      <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 text-center">
        <p className="text-primary font-bold text-[14px] tracking-wide">ALLES OP ÉÉN PLEK</p>
        <h2 className="text-[clamp(32px,4.2vw,52px)] font-extrabold tight mt-3 leading-[1.05]">
          Niks valt nog tussen wal en schip
        </h2>
        <p className="text-slate text-[18px] max-w-2xl mx-auto mt-5">
          GymOps koppelt naadloos met SportBit en alle tools die je al gebruikt. Drie beloftes,
          volledig geautomatiseerd.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">
          {cards.map(({ Icon, title, body, href, label }) => (
            <article
              key={title}
              className="bg-white rounded-3xl p-8 card-shadow border border-line/60 hover:-translate-y-1 transition-transform"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-extrabold text-[22px] tight mt-6">{title}</h3>
              <p className="text-slate text-[15px] leading-relaxed mt-3">{body}</p>
              <Link
                href={href}
                className="text-primary font-bold text-[14px] mt-6 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                {label} <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
