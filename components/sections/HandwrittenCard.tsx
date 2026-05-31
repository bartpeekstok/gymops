import Link from "next/link";
import { PenLine, Star, Trophy, ArrowRight, CheckCircle2 } from "lucide-react";

const items = [
  {
    Icon: PenLine,
    title: "Handgeschreven kaarten in 15 seconden",
    body: "Een echte kaart in de bus valt op tussen het werk en de pakketten. Via de app of je laptop.",
  },
  {
    Icon: Star,
    title: "Google reviews op het juiste moment",
    body: "Na een PR of mijlpaal vraagt GymOps automatisch om een review. De meeste gyms staan op 250+.",
  },
  {
    Icon: Trophy,
    title: "Vergeet geen mijlpaal meer",
    body: "100ste les, verjaardag, PR, gesignaleerd via de SportBit-koppeling, nooit meer gemist.",
  },
];

export default function HandwrittenCard() {
  return (
    <section className="border-b border-line">
      <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary font-bold text-[14px] tracking-wide">GYMOPS FLOW · LEDENERVARING</p>
          <h2 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tight mt-3 leading-[1.08]">
            Automatisering doet het werk. Jij maakt het persoonlijk.
          </h2>
          <div className="mt-9 space-y-6">
            {items.map(({ Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-[18px]">{title}</h4>
                  <p className="text-slate text-[15px] leading-relaxed mt-1">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/ledenervaring"
            className="mt-8 inline-flex items-center gap-2 text-primary font-bold text-[16px] hover:gap-3 transition-all"
          >
            Bekijk ledenervaring <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -inset-6 bg-gradient-to-br from-accent-light to-primary/5 rounded-[2.5rem] -z-10" />
          <div className="bg-white rounded-3xl card-shadow border border-line p-9 max-w-md rotate-1">
            <div className="flex items-center gap-2 text-[12px] text-slate font-semibold mb-5">
              <PenLine className="w-4 h-4 text-primary" /> Handgeschreven · 09:14 verstuurd
            </div>
            <p className="text-[26px] font-bold tight">Lieve Lisa,</p>
            <p className="text-[19px] text-slate leading-relaxed mt-4">
              Gefeliciteerd met je verjaardag! Geniet van je dag, en tot dinsdag in de box.
            </p>
            <p className="text-[16px] font-semibold mt-7">— Daan &amp; team Zuidlaren</p>
            <div className="mt-7 pt-5 border-t border-line flex items-center gap-2 text-[13px] text-accent font-bold">
              <CheckCircle2 className="w-4 h-4" /> Automatisch verstuurd bij verjaardag
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
