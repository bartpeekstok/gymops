import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Signal,
  BatteryFull,
  MapPin,
  Calendar,
  Trophy,
  Check,
  Star,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function AppBento() {
  return (
    <section className="relative bg-[#0A1A1F] text-white overflow-hidden">
      <div className="absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full bg-primary/30 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-44 right-0 w-[520px] h-[520px] rounded-full bg-accent/20 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 dotgrid opacity-[0.05] pointer-events-none" />

      <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-28 relative">
        <div className="max-w-2xl">
          <p className="text-accent font-bold text-[14px] tracking-wide">JE HELE GYM, ÉÉN SYSTEEM</p>
          <h2 className="text-[clamp(32px,4.4vw,56px)] font-extrabold tight mt-3 leading-[1.04]">
            Alles draait door,
            <br />
            ook als jij op de vloer staat
          </h2>
          <p className="text-white/60 text-[18px] mt-5 leading-relaxed">
            Van de eerste lead tot de 100e workout. Leden, coaches en jij, verbonden in één
            systeem, met alles wat telt binnen handbereik.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 mt-14">
          {/* Phone + floating cards tile */}
          <div className="lg:col-span-5 lg:row-span-2 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 relative overflow-hidden min-h-[500px] flex items-center justify-center">
            <div className="absolute top-6 left-7 text-[12px] font-bold text-white/50 tracking-wide">
              GYMOPS · LEDENAPP
            </div>
            {/* phone */}
            <div className="relative w-[224px] rounded-[2.2rem] border-[6px] border-[#1c3036] bg-[#0d2127] shadow-2xl p-3 mt-4">
              <div className="flex items-center justify-between text-[10px] text-white/50 px-1 mb-3">
                <span>9:41</span>
                <span className="flex items-center gap-1">
                  <Signal className="w-3 h-3" />
                  <BatteryFull className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4 px-1">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                  <Image
                    src="/gear.png"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4 brightness-0 invert"
                  />
                </div>
                <div className="text-[12px] font-bold leading-none">
                  CrossFit Alkmaar
                  <span className="block text-[9px] text-white/40 font-medium mt-0.5">Hi, Lisa 👋</span>
                </div>
              </div>
              {/* streak ring */}
              <div className="rounded-2xl bg-gradient-to-br from-primary to-bright p-4 flex items-center gap-3 mb-3">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 36 36" className="w-12 h-12 -rotate-90">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="94"
                      strokeDashoffset="20"
                    />
                  </svg>
                  <span className="absolute text-[13px] font-extrabold">12</span>
                </div>
                <div>
                  <div className="text-[12px] font-bold leading-none">Dagen streak</div>
                  <div className="text-[10px] text-white/70 mt-1">Nog 1 les tot je 100e 🎉</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="rounded-xl bg-white/[0.06] border border-white/10 p-2 text-center">
                  <MapPin className="w-4 h-4 text-accent mx-auto" />
                  <div className="text-[9px] text-white/60 mt-1">Inchecken</div>
                </div>
                <div className="rounded-xl bg-white/[0.06] border border-white/10 p-2 text-center">
                  <Calendar className="w-4 h-4 text-accent mx-auto" />
                  <div className="text-[9px] text-white/60 mt-1">Lessen</div>
                </div>
                <div className="rounded-xl bg-white/[0.06] border border-white/10 p-2 text-center">
                  <Trophy className="w-4 h-4 text-accent mx-auto" />
                  <div className="text-[9px] text-white/60 mt-1">Mijn PR&apos;s</div>
                </div>
              </div>
              <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3">
                <div className="text-[9px] text-white/40 uppercase tracking-wide">Volgende les</div>
                <div className="text-[12px] font-bold mt-0.5">WOD · 18:00</div>
                <div className="text-[10px] text-accent mt-0.5 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Gereserveerd
                </div>
              </div>
            </div>
            {/* floating glass cards */}
            <div className="absolute top-12 right-4 bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-2xl px-3.5 py-2.5 shadow-xl">
              <div className="flex gap-0.5 text-amber-400 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
              <div className="text-[11px] font-bold leading-none">Nieuwe review</div>
            </div>
            <div className="absolute bottom-10 left-3 bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-2xl px-3.5 py-2.5 shadow-xl flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-accent" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 leading-none">Reactietijd lead</div>
                <div className="text-[12px] font-extrabold leading-none mt-1">0:58</div>
              </div>
            </div>
          </div>

          {/* Counter: leadconversie */}
          <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-7 flex flex-col justify-between min-h-[238px]">
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-white/50 font-semibold">Gem. leadconversie</span>
              <span className="text-accent text-[12px] font-bold flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> +39pt
              </span>
            </div>
            <div>
              <div className="text-[68px] font-extrabold tight leading-none grad-text" data-count="61" data-suffix="%">
                0%
              </div>
              <p className="text-white/50 text-[14px] mt-2 leading-relaxed">
                Van 22% naar 61% in het eerste kwartaal. Elke lead automatisch opgevolgd.
              </p>
            </div>
          </div>

          {/* Counter: reviews */}
          <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-7 flex flex-col justify-between min-h-[238px]">
            <span className="text-[13px] text-white/50 font-semibold">Google reviews</span>
            <div>
              <div className="text-[56px] font-extrabold tight leading-none" data-count="250" data-suffix="+">
                0+
              </div>
              <p className="text-white/50 text-[14px] mt-2 leading-relaxed">
                Bij de gemiddelde GymOps-gym, automatisch opgevraagd.
              </p>
            </div>
          </div>

          {/* Community network tile */}
          <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-7 flex flex-col justify-between min-h-[238px]">
            <span className="text-[13px] text-white/50 font-semibold">Community vandaag actief</span>
            <div>
              <div className="flex items-center -space-x-3 mb-4">
                <span className="w-11 h-11 rounded-full bg-primary text-white text-[14px] font-bold flex items-center justify-center border-2 border-[#0A1A1F]">
                  S
                </span>
                <Image
                  src="/jeroen-van-duijn.webp"
                  alt=""
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#0A1A1F]"
                />
                <span className="w-11 h-11 rounded-full bg-accent text-navy text-[14px] font-bold flex items-center justify-center border-2 border-[#0A1A1F]">
                  L
                </span>
                <Image
                  src="/bart-peekstok.webp"
                  alt=""
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#0A1A1F]"
                />
                <span className="w-11 h-11 rounded-full bg-bright text-white text-[14px] font-bold flex items-center justify-center border-2 border-[#0A1A1F]">
                  M
                </span>
                <span className="w-11 h-11 rounded-full bg-white/10 text-white text-[12px] font-bold flex items-center justify-center border-2 border-[#0A1A1F]">
                  +
                </span>
              </div>
              <div className="text-[40px] font-extrabold tight leading-none" data-count="1200" data-suffix="">
                0
              </div>
              <p className="text-white/50 text-[14px] mt-2 leading-relaxed">
                Leden ingecheckt, elk gezien, niemand vergeten.
              </p>
            </div>
          </div>

          {/* Counter: retentie */}
          <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/25 to-accent/10 backdrop-blur p-7 flex flex-col justify-between min-h-[238px]">
            <span className="text-[13px] text-white/60 font-semibold">Retentie</span>
            <div>
              <div className="text-[56px] font-extrabold tight leading-none" data-count="96" data-suffix="%">
                0%
              </div>
              <p className="text-white/55 text-[14px] mt-2 leading-relaxed">
                Leden blijven langer als ze zich gezien voelen.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-12">
          <Link
            href="/producten"
            className="bg-white text-navy px-7 py-3.5 rounded-xl text-[16px] font-bold hover:bg-accent transition-colors flex items-center gap-2"
          >
            Ontdek het systeem <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/prijzen"
            className="border border-white/20 text-white px-7 py-3.5 rounded-xl text-[16px] font-bold hover:bg-white/10 transition-colors"
          >
            Plan een demo
          </Link>
        </div>
      </div>
    </section>
  );
}
