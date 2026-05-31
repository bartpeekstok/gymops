import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  LayoutDashboard,
  Users,
  MessageCircle,
  Calendar,
  UserPlus,
  Euro,
  Timer,
  TrendingUp,
  Zap,
  Star,
  PenLine,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 dotgrid opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob blob-a w-[420px] h-[420px] bg-primary/20 -top-20 -left-10" />
        <div className="blob blob-b w-[460px] h-[460px] bg-accent/20 top-0 right-0" />
        <div className="blob blob-c w-[360px] h-[360px] bg-bright/15 top-40 left-1/3" />
      </div>
      <div className="max-w-[1220px] mx-auto px-6 lg:px-10 pt-20 pb-24 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent-light text-primary px-3.5 py-1.5 rounded-full text-[13px] font-semibold mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Voor Nederlandse micro-gyms
          </div>
          <h1 className="text-[clamp(40px,5.4vw,72px)] font-extrabold leading-[1.04] tight">
            Elke lead opgevolgd.
            <br />
            Elk lid gezien.
            <br />
            <span className="grad-text">Elke taak gedaan.</span>
          </h1>
          <p className="text-[19px] text-slate leading-relaxed max-w-2xl mx-auto mt-7">
            Het CRM voor leadopvolging, ledenbehoud en team-aansturing, naadloos gekoppeld aan
            SportBit. Gebouwd voor en door gym-owners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
            <Link
              href="/prijzen"
              className="bg-primary text-white px-7 py-3.5 rounded-xl text-[16px] font-bold hover:bg-primary-dark transition-colors shadow-sm flex items-center gap-2"
            >
              Plan een demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/producten"
              className="bg-white border border-line text-ink px-7 py-3.5 rounded-xl text-[16px] font-bold hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              <Play className="w-4 h-4" /> Bekijk het systeem
            </Link>
          </div>
        </div>

        {/* Dashboard */}
        <div className="relative max-w-[1000px] mx-auto mt-16">
          <div className="bg-white rounded-3xl glow-ring border border-line overflow-hidden">
            <div className="flex">
              <aside className="bg-primary text-white w-[150px] flex-shrink-0 p-4 hidden sm:flex flex-col">
                <div className="flex items-center gap-1.5 mb-7">
                  <Image
                    src="/gear.png"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 brightness-0 invert"
                  />
                  <span className="font-extrabold text-[13px] leading-none">GymOps</span>
                </div>
                <nav className="space-y-4 flex-1 text-[13px]">
                  <div className="flex items-center gap-2 font-bold">
                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                  </div>
                  <div className="flex items-center gap-2 opacity-70">
                    <Users className="w-4 h-4" /> Mensen
                  </div>
                  <div className="flex items-center gap-2 opacity-70">
                    <MessageCircle className="w-4 h-4" /> Communicatie
                  </div>
                  <div className="flex items-center gap-2 opacity-70">
                    <Calendar className="w-4 h-4" /> Agenda
                  </div>
                </nav>
                <div className="flex items-center gap-2 pt-4 border-t border-white/15">
                  <div className="w-7 h-7 rounded-full bg-accent text-navy flex items-center justify-center text-[12px] font-bold">
                    E
                  </div>
                  <div>
                    <div className="text-[11px] font-bold leading-none">Eva D.</div>
                    <div className="text-[10px] opacity-70 mt-0.5">Demo Gym</div>
                  </div>
                </div>
              </aside>
              <div className="flex-1 bg-bg2 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-[15px]">Mijn dag</h4>
                  <span className="text-[12px] text-slate flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Live
                  </span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="bg-white rounded-2xl p-4 card-shadow">
                    <UserPlus className="w-4 h-4 text-primary" />
                    <div className="text-[24px] font-extrabold mt-2 leading-none tight">24</div>
                    <div className="text-[11px] text-slate mt-1.5">Nieuwe leads</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary to-bright text-white rounded-2xl p-4 card-shadow">
                    <Euro className="w-4 h-4" />
                    <div className="text-[24px] font-extrabold mt-2 leading-none tight">€37.228</div>
                    <div className="text-[11px] opacity-85 mt-1.5">Jaaromzet</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 card-shadow">
                    <Timer className="w-4 h-4 text-primary" />
                    <div className="text-[24px] font-extrabold mt-2 leading-none tight">8 mnd</div>
                    <div className="text-[11px] text-slate mt-1.5">Gem. looptijd</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 card-shadow">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <div className="text-[24px] font-extrabold mt-2 leading-none tight">96%</div>
                    <div className="text-[11px] text-slate mt-1.5">Retentie</div>
                  </div>
                </div>
                <div className="grid lg:grid-cols-5 gap-3 mt-3">
                  <div className="lg:col-span-3 bg-white rounded-2xl p-4 card-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[12px] font-semibold text-slate">Levenslange waarde</span>
                      <span className="text-[11px] font-bold text-accent">+18%</span>
                    </div>
                    <div className="flex items-end gap-2 h-20">
                      <div className="flex-1 bg-accent-light rounded-t-lg" style={{ height: "42%" }} />
                      <div className="flex-1 bg-primary/30 rounded-t-lg" style={{ height: "58%" }} />
                      <div className="flex-1 bg-primary/50 rounded-t-lg" style={{ height: "50%" }} />
                      <div className="flex-1 bg-primary/70 rounded-t-lg" style={{ height: "74%" }} />
                      <div className="flex-1 bg-primary rounded-t-lg" style={{ height: "66%" }} />
                      <div
                        className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t-lg"
                        style={{ height: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-2 bg-white rounded-2xl p-4 card-shadow">
                    <div className="text-[12px] font-semibold text-slate mb-3">Leden met risico</div>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary text-white text-[11px] font-bold flex items-center justify-center">
                          S
                        </span>
                        <span className="text-[12px] flex-1">Sander V.</span>
                        <span className="text-[11px] text-rose-500 font-semibold">10 dgn</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-accent text-navy text-[11px] font-bold flex items-center justify-center">
                          L
                        </span>
                        <span className="text-[12px] flex-1">Lisa de B.</span>
                        <span className="text-[11px] text-rose-500 font-semibold">20 dgn</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 left-4 sm:left-8 bg-white rounded-2xl card-shadow border border-line px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent-light flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-[11px] text-slate">Taak → coach</div>
              <div className="text-[13px] font-bold">Bel nieuwe lead · 0:58</div>
            </div>
          </div>
          <div className="absolute -top-5 right-4 sm:right-8 bg-white rounded-2xl card-shadow border border-line px-4 py-3 hidden sm:flex items-center gap-3">
            <div className="flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <div>
              <div className="text-[11px] text-slate leading-none">Nieuwe review</div>
              <div className="text-[13px] font-bold leading-none mt-1">+1 · 258 totaal</div>
            </div>
          </div>
          <div className="absolute top-1/2 -right-3 lg:-right-6 -translate-y-1/2 bg-white rounded-2xl card-shadow border border-line px-4 py-3 hidden lg:flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent-light flex items-center justify-center">
              <PenLine className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-[11px] text-slate leading-none">Kaart verstuurd</div>
              <div className="text-[13px] font-bold leading-none mt-1">Lisa · verjaardag</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
