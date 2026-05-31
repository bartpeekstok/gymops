import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const features = [
  "Custom website (SEO + AI)",
  "Leadcapture & opvolging",
  "Handgeschreven kaarten",
  "SportBit-integratie",
  "Onbeperkt flows & campagnes",
  "4 onboarding-calls + bezoek",
];

export default function PricingTeaser() {
  return (
    <section className="bg-bg2 border-b border-line">
      <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <p className="text-primary font-bold text-[14px] tracking-wide">PRIJZEN</p>
          <h2 className="text-[clamp(30px,3.8vw,48px)] font-extrabold tight mt-3 leading-[1.05]">
            Eén plan.
            <br />
            Alles inbegrepen.
          </h2>
          <p className="text-slate text-[17px] leading-relaxed mt-5 max-w-md">
            Geen modules, geen verrassingen. Custom website, leadopvolging, ledenbehoud, events en
            SportBit-koppeling, alles zit erin.
          </p>
          <Link
            href="/prijzen"
            className="mt-8 inline-flex items-center gap-2 text-primary font-bold text-[16px] hover:gap-3 transition-all"
          >
            Bekijk volledige prijzen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl glow-ring border border-line p-9">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent-light text-primary px-3 py-1 rounded-full text-[12px] font-bold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Beschikbaar
                </div>
                <div className="text-[26px] font-extrabold tight">GymOps Flow</div>
              </div>
              <div className="text-right">
                <div className="text-[44px] font-extrabold tight leading-none">
                  €450<span className="text-[18px] text-slate font-semibold">/mnd</span>
                </div>
                <div className="text-[12px] text-slate mt-1">excl. btw · 12 maanden</div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-8 pt-8 border-t border-line">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-[15px] text-slate">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" /> {f}
                </div>
              ))}
            </div>
            <Link
              href="/prijzen"
              className="mt-8 w-full bg-primary text-white py-3.5 rounded-xl text-[16px] font-bold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              Plan een demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
