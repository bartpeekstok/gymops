import Image from "next/image";
import Link from "next/link";
import {
  PenLine,
  Star,
  Mail,
  Sparkles,
  PartyPopper,
  CalendarCheck,
  Trophy,
  Heart,
  RotateCcw,
  Check,
  ArrowRight,
  Signal,
  BatteryFull,
  Gift,
  Cake,
  Dumbbell,
} from "lucide-react";
import FlowScripts from "@/components/FlowScripts";

export default function LedenervaringPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 dotgrid opacity-60 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_72%)]"></div>
        <div className="absolute -top-24 -left-20 w-[440px] h-[440px] rounded-full bg-primary/15 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-10 -right-24 w-[440px] h-[440px] rounded-full bg-accent/15 blur-[130px] pointer-events-none"></div>
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 relative">
          <div className="inline-flex items-center gap-2 bg-accent-light text-primary px-3.5 py-1.5 rounded-full text-[13px] font-semibold mb-6">GymOps Flow · Ledenervaring</div>
          <h1 className="text-[clamp(40px,5.4vw,72px)] font-extrabold tight leading-[1.03] max-w-3xl">De beste <span className="grad-text">ledenervaring</span></h1>
          <p className="text-[19px] text-slate leading-relaxed max-w-2xl mt-7">Elk gym is anders. Andere leden, andere mijlpalen, andere stem. GymOps is van begin tot eind ingericht op jouw gym, en blijft meebewegen.</p>
          <Link href="/prijzen" className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-[16px] font-bold hover:bg-primary-dark transition-colors shadow-sm">Plan een demo <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      {/* ============ RETENTION GRAPHIC (dark) ============ */}
      <section className="bg-[#0A1A1F] text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full bg-primary/30 blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-44 right-0 w-[520px] h-[520px] rounded-full bg-accent/20 blur-[130px] pointer-events-none"></div>
        <div className="absolute inset-0 dotgrid opacity-[0.05] pointer-events-none"></div>
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 relative grid lg:grid-cols-2 gap-16 items-center">
          {/* phone + chips */}
          <div className="relative flex justify-center" data-reveal="">
            <div className="relative w-[230px] rounded-[2.2rem] border-[6px] border-[#1c3036] bg-[#0d2127] shadow-2xl p-3">
              <div className="flex items-center justify-between text-[10px] text-white/50 px-1 mb-3"><span>9:41</span><span className="flex items-center gap-1"><Signal className="w-3 h-3" /><BatteryFull className="w-3.5 h-3.5" /></span></div>
              <div className="flex items-center gap-2 mb-4 px-1">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center"><Image src="/gear.png" className="w-4 h-4 brightness-0 invert" alt="" width={16} height={16} /></div>
                <div className="text-[12px] font-bold leading-none">CrossFit Alkmaar<span className="block text-[9px] text-white/40 font-medium mt-0.5">Hi, Lisa 👋</span></div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-primary to-bright p-4 flex items-center gap-3 mb-3">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 36 36" className="w-12 h-12 -rotate-90"><circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3" /><circle cx="18" cy="18" r="15" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeDasharray="94" strokeDashoffset="6" /></svg>
                  <span className="absolute text-[13px] font-extrabold">99</span>
                </div>
                <div><div className="text-[12px] font-bold leading-none">Lessen dit jaar</div><div className="text-[10px] text-white/70 mt-1">Nog 1 tot je 100e 🎉</div></div>
              </div>
              <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3 mb-2"><div className="text-[9px] text-white/40 uppercase tracking-wide">Mijlpaal in zicht</div><div className="text-[12px] font-bold mt-0.5">100ste WOD · vrijdag</div></div>
              <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3 flex items-center gap-2"><Gift className="w-4 h-4 text-accent" /><span className="text-[11px]">Verrassing van je coach klaargezet</span></div>
            </div>
            <div className="absolute top-8 -right-2 sm:right-2 bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-2xl px-3.5 py-2.5 shadow-xl flex items-center gap-2.5">
              <PenLine className="w-4 h-4 text-accent" /><div><div className="text-[10px] text-white/50 leading-none">Kaart verstuurd</div><div className="text-[12px] font-bold leading-none mt-1">Verjaardag</div></div>
            </div>
            <div className="absolute bottom-10 -left-2 sm:left-0 bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-2xl px-3.5 py-2.5 shadow-xl flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" /><Star className="w-3.5 h-3.5 fill-amber-400" /><Star className="w-3.5 h-3.5 fill-amber-400" /><Star className="w-3.5 h-3.5 fill-amber-400" /><Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
          </div>

          {/* copy + counters */}
          <div data-reveal="">
            <p className="text-accent font-bold text-[14px] tracking-wide">LEDENBEHOUD</p>
            <h2 className="text-[clamp(28px,3.6vw,46px)] font-extrabold tight mt-3 leading-[1.06]">Leden die zich gezien voelen, blijven</h2>
            <p className="text-white/60 text-[17px] leading-relaxed mt-5 max-w-md">Via de SportBit-koppeling weet GymOps wie er wanneer staat, wie een mijlpaal nadert en wie even wegblijft. Op het juiste moment, met een persoonlijke touch.</p>
            <div className="grid grid-cols-3 gap-4 mt-9">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center"><div className="text-[34px] font-extrabold tight grad-text" data-count={96} data-suffix="%">0%</div><p className="text-white/55 text-[12px] mt-1.5 leading-snug">retentie</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center"><div className="text-[34px] font-extrabold tight" data-count={8} data-suffix=" mnd">0</div><p className="text-white/55 text-[12px] mt-1.5 leading-snug">gem. looptijd</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center"><div className="text-[34px] font-extrabold tight" data-count={258} data-suffix="">0</div><p className="text-white/55 text-[12px] mt-1.5 leading-snug">reviews</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 1 pen */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><PenLine className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Handgeschreven kaarten</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Via ons systeem stuur je een handgeschreven kaart met persoonlijke tekst binnen 15 seconden. Via de mobiele app of vanachter je laptop. Lang geen kaartje gehad? GymOps herinnert je eraan.</p>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent-light to-primary/10 rounded-[2rem] -z-10"></div>
            <div className="bg-white rounded-2xl card-shadow border border-line p-9 max-w-sm rotate-1">
              <div className="flex items-center gap-2 text-[12px] text-slate font-semibold mb-5"><PenLine className="w-4 h-4 text-primary" /> Handgeschreven · 09:14</div>
              <p className="text-[24px] font-bold tight">Lieve Lisa,</p>
              <p className="text-[17px] text-slate leading-relaxed mt-4">Gefeliciteerd met je verjaardag! Geniet van je dag, en tot dinsdag in de box.</p>
              <p className="text-[15px] font-semibold mt-7">— Daan &amp; team Zuidlaren</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 mail */}
      <section className="bg-bg2 border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><Mail className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Geen onpersoonlijke mailtjes uit het systeem van je leverancier</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Elke omgeving krijgt jouw branding. Mails, kaarten, agenda-uitnodigingen — alles komt uit jouw gym, niet uit een GymOps-template.</p>
          </div>
          <div className="lg:order-1 flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line overflow-hidden w-full max-w-sm">
              <div className="bg-navy p-4 flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-extrabold text-[18px]">Z</div><div><p className="text-white font-bold">CrossFit Zuidlaren</p><p className="text-white/60 text-[11px]">team@crossfitzuidlaren.nl</p></div></div>
              <div className="p-6"><p className="font-extrabold">Je 100ste les — wat een mijlpaal! 🎉</p><p className="text-slate mt-3 text-[14px] leading-relaxed">Lisa, vandaag stond je voor de 100ste keer op de mat. Trots op je. Tot in de box!</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 party */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><PartyPopper className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Bring a Friend, Hyrox-simulatie of open dag — in 5 minuten live</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Eventpagina, inschrijfformulier met directe betaling, bevestigingsmail, taak voor je team én een after-event flow naar abonnement. Alles klaar.</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line overflow-hidden w-full max-w-sm">
              <div className="h-28 bg-gradient-to-br from-primary to-bright flex items-center justify-center"><PartyPopper className="w-12 h-12 text-white/90" /></div>
              <div className="p-5">
                <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Zaterdag 14 juni</span>
                <p className="font-extrabold text-[18px] mt-1">Bring a Friend WOD</p>
                <p className="text-[13px] text-slate mt-1">10:00 · CrossFit Zuidlaren · €0</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-line"><span className="text-[12px] text-slate">28 / 40 aanmeldingen</span><button className="bg-primary text-white text-[13px] font-bold px-4 py-2 rounded-lg">Inschrijven</button></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 sparkles */}
      <section className="bg-bg2 border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><Sparkles className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Welkomstflow voor nieuwe leden</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">De eerste weken zijn cruciaal voor of een lid blijft. GymOps stuurt automatisch berichten op de juiste momenten en zet taken klaar voor je coach. Geen lid valt nog van de radar.</p>
          </div>
          <div className="lg:order-1 flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-sm">
              <p className="text-[11px] uppercase tracking-wider text-primary font-bold mb-5">Onboarding · eerste 90 dagen</p>
              <ol className="space-y-3.5">
                <li className="flex items-center gap-3"><div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0"><Check className="w-4 h-4" /></div><p className="font-bold text-[13px]">Dag 1 — Welkomstbericht + app-toegang</p></li>
                <li className="flex items-center gap-3"><div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0"><Check className="w-4 h-4" /></div><p className="font-bold text-[13px]">Dag 7 — Check-in van je coach</p></li>
                <li className="flex items-center gap-3"><div className="w-7 h-7 rounded-full bg-accent-light text-primary flex items-center justify-center flex-shrink-0 font-extrabold text-[12px]">30</div><p className="font-bold text-[13px] text-slate">Dag 30 — Eerste mijlpaal vieren</p></li>
                <li className="flex items-center gap-3"><div className="w-7 h-7 rounded-full bg-bg2 border-2 border-dashed border-line flex-shrink-0"></div><p className="font-bold text-[13px] text-slate">Dag 90 — Vast ritme, vast lid</p></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 5 calendar */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><CalendarCheck className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Slim afspraken plannen, zonder heen-en-weer</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">We koppelen jouw beschikbaarheid en die van je team aan het systeem. Leden zien alleen tijden die jullie het best uitkomen. Scheelt uren per week aan mailtjes.</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-sm">
              <p className="font-extrabold">Plan een intake-gesprek</p><p className="text-[12px] text-slate mb-4">Met coach Eva</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl text-[14px] font-bold text-center bg-bg2 border border-line">do 17:00</div>
                <div className="p-3.5 rounded-xl text-[14px] font-bold text-center bg-primary text-white shadow-lg">vr 09:30</div>
                <div className="p-3.5 rounded-xl text-[14px] font-bold text-center bg-bg2 border border-line">vr 16:00</div>
                <div className="p-3.5 rounded-xl text-[14px] font-bold text-center bg-bg2 border border-line">za 10:00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 trophy */}
      <section className="bg-bg2 border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><Trophy className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Vergeet geen mijlpaal meer</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Iemands 100ste les, verjaardagen, persoonlijke records en andere speciale momenten worden nooit meer overgeslagen. GymOps signaleert ze automatisch.</p>
          </div>
          <div className="lg:order-1 flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-sm space-y-3">
              <div className="flex items-center gap-3 bg-bg2 rounded-xl p-3"><div className="w-9 h-9 rounded-full bg-accent-light text-primary flex items-center justify-center"><Trophy className="w-4 h-4" /></div><div className="flex-1"><p className="font-bold text-[13px]">Lisa — 100ste les</p><p className="text-[11px] text-slate">vandaag</p></div><span className="text-[10px] text-accent font-bold">Kaart klaar</span></div>
              <div className="flex items-center gap-3 bg-bg2 rounded-xl p-3"><div className="w-9 h-9 rounded-full bg-accent-light text-primary flex items-center justify-center"><Cake className="w-4 h-4" /></div><div className="flex-1"><p className="font-bold text-[13px]">Mark — verjaardag</p><p className="text-[11px] text-slate">morgen</p></div><span className="text-[10px] text-accent font-bold">Gepland</span></div>
              <div className="flex items-center gap-3 bg-bg2 rounded-xl p-3"><div className="w-9 h-9 rounded-full bg-accent-light text-primary flex items-center justify-center"><Dumbbell className="w-4 h-4" /></div><div className="flex-1"><p className="font-bold text-[13px]">Sander — nieuwe deadlift PR</p><p className="text-[11px] text-slate">2 uur geleden</p></div><span className="text-[10px] text-accent font-bold">Review-vraag</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 heart */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><Heart className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Houd je trouwe leden in beeld</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Via de SportBit-koppeling weet GymOps wie wanneer in de gym staat. Het systeem signaleert wanneer een lid even niet geweest is en zet een taak klaar bij de juiste coach. Geen massamail, maar een berichtje van iemand die ze kennen.</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-sm">
              <p className="text-[11px] uppercase tracking-wider text-primary font-bold mb-4">Leden met risico</p>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 bg-bg2 rounded-xl p-3"><div className="w-8 h-8 rounded-full bg-primary text-white text-[12px] font-bold flex items-center justify-center">S</div><span className="text-[13px] flex-1">Sander V.</span><span className="text-[11px] text-rose-500 font-bold">10 dagen</span></div>
                <div className="flex items-center gap-3 bg-bg2 rounded-xl p-3"><div className="w-8 h-8 rounded-full bg-accent text-navy text-[12px] font-bold flex items-center justify-center">L</div><span className="text-[13px] flex-1">Lisa de B.</span><span className="text-[11px] text-rose-500 font-bold">20 dagen</span></div>
                <div className="flex items-center gap-3 bg-bg2 rounded-xl p-3"><div className="w-8 h-8 rounded-full bg-primary-dark text-white text-[12px] font-bold flex items-center justify-center">M</div><span className="text-[13px] flex-1">Mark P.</span><span className="text-[11px] text-rose-500 font-bold">28 dagen</span></div>
              </div>
              <button className="mt-4 w-full bg-primary text-white font-bold py-2.5 rounded-xl text-[13px]">Taken toewijzen aan coaches</button>
            </div>
          </div>
        </div>
      </section>

      {/* 8 star */}
      <section className="bg-bg2 border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><Star className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Google reviews op het juiste moment</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Tevreden leden willen vaak best een review achterlaten, maar denken er zelf niet aan. GymOps vraagt het automatisch op piekmomenten: na een mijlpaal, na een PR, na een goede les. De meeste gyms staan al op 250+.</p>
          </div>
          <div className="lg:order-1 flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-7 w-full max-w-sm text-center">
              <div className="flex justify-center gap-1 text-amber-400 mb-3"><Star className="w-7 h-7 fill-amber-400" /><Star className="w-7 h-7 fill-amber-400" /><Star className="w-7 h-7 fill-amber-400" /><Star className="w-7 h-7 fill-amber-400" /><Star className="w-7 h-7 fill-amber-400" /></div>
              <p className="text-[15px] text-ink leading-relaxed">&quot;Beste box van de regio. Coaches die je écht kennen.&quot;</p>
              <div className="text-[12px] text-slate mt-3">— via Google, automatisch opgevraagd</div>
              <div className="mt-5 pt-5 border-t border-line text-[40px] font-extrabold grad-text tight">258</div>
              <p className="text-[12px] text-slate">reviews en tellend</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 rotate */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><RotateCcw className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Ex-leden terughalen zonder ze te spammen</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Soms heeft een ex-lid alleen een klein duwtje nodig. GymOps heeft kant-en-klare reactivatie-flows met WhatsApp en mail, op een toon die past bij jouw gym. Een persoonlijke uitnodiging op het juiste moment.</p>
          </div>
          <div className="flex justify-center">
            <div className="wa rounded-3xl p-5 shadow-xl w-full max-w-sm">
              <div className="text-center mb-3"><span className="text-[11px] text-white/90 bg-white/15 px-3 py-1 rounded-full">Reactivatie ex-lid</span></div>
              <div className="wa-out rounded-2xl rounded-tl-none p-3.5 max-w-[88%] shadow"><p className="text-[13px] text-ink leading-relaxed">Hé Tom! We zagen je een tijdje niet. Volgende maand start een nieuw 6-weeks blok — kom je weer aanhaken? Eerste week op ons. 💪</p><p className="text-[10px] text-slate mt-1.5 text-right">11:20</p></div>
              <div className="wa-in rounded-2xl rounded-tr-none p-3.5 ml-auto max-w-[80%] mt-3 shadow"><p className="text-[13px] text-ink">Ja leuk! Schrijf me maar in.</p><p className="text-[10px] text-slate mt-1.5 text-right">11:34 ✓✓</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-navy text-white">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold tight leading-tight max-w-2xl mx-auto">Laat geen lid zich meer onzichtbaar voelen</h2>
          <p className="text-white/70 text-[18px] mt-5 max-w-xl mx-auto">Plan een demo en zie hoe GymOps elk lid op het juiste moment ziet — automatisch, maar nooit onpersoonlijk.</p>
          <Link href="/prijzen" className="mt-9 inline-flex items-center gap-2 bg-accent text-navy px-9 py-4 rounded-xl text-[17px] font-bold hover:bg-white transition-colors">Plan een demo <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>

      <FlowScripts />
    </>
  );
}
