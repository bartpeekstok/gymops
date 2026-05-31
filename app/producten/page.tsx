import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Zap,
  PenLine,
  Star,
  Heart,
  CheckCircle2,
  Bell,
} from "lucide-react";
import FlowScripts from "@/components/FlowScripts";

export default function ProductenPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 dotgrid opacity-20"></div>
        <div className="absolute -top-28 -left-20 w-[440px] h-[440px] rounded-full bg-primary/30 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 -right-24 w-[460px] h-[460px] rounded-full bg-accent/20 blur-[130px] pointer-events-none"></div>
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 text-accent px-3.5 py-1.5 rounded-full text-[13px] font-semibold mb-6">Producten</div>
          <h1 className="text-[clamp(38px,5vw,64px)] font-extrabold tight leading-[1.04]">GymOps <span className="grad-text">Flow</span> en Pulse</h1>
          <p className="text-white/70 text-[19px] max-w-2xl mx-auto mt-6">Flow draait vandaag je hele gym. Pulse is binnenkort beschikbaar voor je team.</p>
        </div>
      </section>

      {/* ============ PILLAR 1 — FLOW ============ */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Image src="/gear.png" alt="" width={40} height={40} className="h-10 w-10" />
              <span className="text-[26px] font-extrabold tight">GymOps <span className="grad-text">Flow</span></span>
              <span className="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-accent-light text-primary">Beschikbaar</span>
            </div>
            <h2 className="text-[clamp(26px,3.4vw,40px)] font-extrabold tight mt-3 leading-tight">Het complete systeem voor je gym</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-5">Flow neemt over wat jou weghoudt van je leden. Van leadgeneratie tot persoonlijke kaartjes, van event-pagina&apos;s tot Google reviews. Flow handelt het op het juiste moment voor je af.</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-7">
              <li className="flex items-start gap-2.5 text-[15px] text-ink/85"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /> Custom website (SEO + AI search)</li>
              <li className="flex items-start gap-2.5 text-[15px] text-ink/85"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /> Leadcapture &amp; opvolging</li>
              <li className="flex items-start gap-2.5 text-[15px] text-ink/85"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /> Handgeschreven kaarten</li>
              <li className="flex items-start gap-2.5 text-[15px] text-ink/85"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /> Google reviews op het juiste moment</li>
              <li className="flex items-start gap-2.5 text-[15px] text-ink/85"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /> Mijlpaal-signalering</li>
              <li className="flex items-start gap-2.5 text-[15px] text-ink/85"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /> Onboarding-flow (eerste 90 dagen)</li>
              <li className="flex items-start gap-2.5 text-[15px] text-ink/85"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /> Event-pagina&apos;s &amp; afspraken plannen</li>
              <li className="flex items-start gap-2.5 text-[15px] text-ink/85"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /> SportBit-integratie</li>
            </ul>
            <Link href="/prijzen" className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl text-[15px] font-bold hover:bg-primary-dark transition-colors shadow-sm">Plan een demo <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -inset-6 bg-gradient-to-br from-accent-light to-primary/10 rounded-[2.5rem] -z-10"></div>
            <div className="absolute -top-4 -right-2 z-10 bg-white rounded-2xl card-shadow border border-line px-4 py-2.5 hidden sm:flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center"><Clock className="w-4 h-4 text-primary" /></div>
              <div><div className="text-[10px] text-slate leading-none">Bespaart gemiddeld</div><div className="text-[13px] font-extrabold leading-none mt-1">~12 uur / week</div></div>
            </div>
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-md">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-[14px]">Flow · automatiseringen</span>
                <span className="text-[11px] text-accent font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Actief</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 bg-bg2 rounded-xl p-3"><div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center"><Zap className="w-4 h-4 text-primary" /></div><div className="flex-1"><div className="text-[13px] font-bold">Nieuwe lead → WhatsApp + taak</div><div className="text-[11px] text-slate">binnen 1 min · 24 vandaag</div></div><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                <div className="flex items-center gap-3 bg-bg2 rounded-xl p-3"><div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center"><PenLine className="w-4 h-4 text-primary" /></div><div className="flex-1"><div className="text-[13px] font-bold">Verjaardag → handgeschreven kaart</div><div className="text-[11px] text-slate">3 deze week</div></div><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                <div className="flex items-center gap-3 bg-bg2 rounded-xl p-3"><div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center"><Star className="w-4 h-4 text-primary" /></div><div className="flex-1"><div className="text-[13px] font-bold">Na PR → Google review-verzoek</div><div className="text-[11px] text-slate">258 reviews totaal</div></div><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                <div className="flex items-center gap-3 bg-bg2 rounded-xl p-3"><div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center"><Heart className="w-4 h-4 text-primary" /></div><div className="flex-1"><div className="text-[13px] font-bold">14 dagen niet geweest → taak coach</div><div className="text-[11px] text-slate">2 leden gesignaleerd</div></div><CheckCircle2 className="w-4 h-4 text-accent" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PILLAR 2 — PULSE ============ */}
      <section className="bg-bg2 border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[26px] font-extrabold tight text-slate">GymOps Pulse</span>
              <span className="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-gray-200 text-slate">Binnenkort</span>
            </div>
            <h2 className="text-[clamp(26px,3.4vw,40px)] font-extrabold tight mt-3 leading-tight">Voor je team: Staff App + Management Dashboard</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-5">Pulse breidt Flow uit met tools voor je team. Coaches gebruiken de Staff App, eigenaren krijgen overzicht via het Management Dashboard. Bestaande Flow-klanten upgraden zonder setupkosten.</p>
            <ul className="space-y-2.5 mt-7">
              <li className="flex items-start gap-2.5 text-[15px] text-ink/85"><ArrowRight className="w-4 h-4 text-slate mt-1 flex-shrink-0" /> Pulse Staff App</li>
              <li className="flex items-start gap-2.5 text-[15px] text-ink/85"><ArrowRight className="w-4 h-4 text-slate mt-1 flex-shrink-0" /> Management Dashboard</li>
              <li className="flex items-start gap-2.5 text-[15px] text-ink/85"><ArrowRight className="w-4 h-4 text-slate mt-1 flex-shrink-0" /> Onbeperkt medewerkers</li>
              <li className="flex items-start gap-2.5 text-[15px] text-ink/85"><ArrowRight className="w-4 h-4 text-slate mt-1 flex-shrink-0" /> Incidentregistratie met audit-trail</li>
            </ul>
            <Link href="/prijzen" className="mt-8 inline-flex items-center gap-2 border border-line bg-white px-6 py-3 rounded-xl text-[15px] font-bold hover:border-primary hover:text-primary transition-colors">Houd me op de hoogte <Bell className="w-4 h-4" /></Link>
          </div>
          <div className="lg:order-1 relative flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-md opacity-95">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-[14px] text-slate">Pulse · team-overzicht</span>
                <span className="text-[11px] text-slate font-bold px-2 py-0.5 rounded-full bg-gray-100">Preview</span>
              </div>
              <div className="grid grid-cols-3 gap-2.5 mb-3">
                <div className="bg-bg2 rounded-xl p-3 text-center"><div className="text-[20px] font-extrabold tight">12</div><div className="text-[10px] text-slate mt-1">Taken open</div></div>
                <div className="bg-bg2 rounded-xl p-3 text-center"><div className="text-[20px] font-extrabold tight">5</div><div className="text-[10px] text-slate mt-1">Coaches</div></div>
                <div className="bg-bg2 rounded-xl p-3 text-center"><div className="text-[20px] font-extrabold tight">98%</div><div className="text-[10px] text-slate mt-1">Afgehandeld</div></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 p-2.5 bg-bg2 rounded-lg"><span className="w-7 h-7 rounded-full bg-primary text-white text-[11px] font-bold flex items-center justify-center">D</span><span className="text-[12px] flex-1">Daan — 3 taken</span><span className="text-[10px] text-accent font-bold">on track</span></div>
                <div className="flex items-center gap-2.5 p-2.5 bg-bg2 rounded-lg"><span className="w-7 h-7 rounded-full bg-accent text-navy text-[11px] font-bold flex items-center justify-center">E</span><span className="text-[12px] flex-1">Eva — 5 taken</span><span className="text-[10px] text-amber-600 font-bold">druk</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ODOMETER BAND ============ */}
      <section className="bg-navy text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute -top-28 left-1/4 w-[420px] h-[420px] rounded-full bg-primary/25 blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 dotgrid opacity-[0.05] pointer-events-none"></div>
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 relative">
          <p className="text-center text-accent font-bold text-[13px] tracking-[0.18em] uppercase">Wat Flow elke maand draait</p>
          <h2 className="text-center text-[clamp(24px,3vw,38px)] font-extrabold tight mt-3">Eén systeem, eindeloos veel werk uit handen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mt-16">
            <div className="text-center">
              <div className="odometer text-[clamp(38px,4.6vw,58px)] font-extrabold tight justify-center" data-value={48000} />
              <p className="text-white/55 text-[14px] mt-3 max-w-[180px] mx-auto leading-snug">berichten verstuurd via WhatsApp &amp; e-mail</p>
            </div>
            <div className="text-center">
              <div className="odometer text-[clamp(38px,4.6vw,58px)] font-extrabold tight justify-center text-accent" data-value={12500} />
              <p className="text-white/55 text-[14px] mt-3 max-w-[180px] mx-auto leading-snug">leads automatisch opgevolgd</p>
            </div>
            <div className="text-center">
              <div className="odometer text-[clamp(38px,4.6vw,58px)] font-extrabold tight justify-center" data-value={3000} />
              <p className="text-white/55 text-[14px] mt-3 max-w-[180px] mx-auto leading-snug">mijlpalen automatisch gevierd</p>
            </div>
            <div className="text-center">
              <div className="odometer text-[clamp(38px,4.6vw,58px)] font-extrabold tight justify-center text-accent" data-value={100} />
              <p className="text-white/55 text-[14px] mt-3 max-w-[180px] mx-auto leading-snug">+ gekoppelde tools, één plek</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INTEGRATIONS ============ */}
      <section className="border-b border-line py-24 overflow-hidden">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold tight leading-tight max-w-3xl mx-auto">GymOps werkt naadloos samen met de tools die je al gebruikt</h2>
          <p className="text-slate text-[17px] mt-5">Eén systeem, al je kanalen verbonden.</p>
        </div>
        <div className="relative mt-14">
          <div className="flex w-max marquee gap-5 items-stretch px-6">
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-sportbit.png" alt="" width={120} height={48} className="h-12 object-contain" /><div className="font-bold text-[14px] mt-3">SportBit</div><div className="text-[11px] text-slate">ledenbeheer &amp; rooster</div></div>
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-whatsapp.avif" alt="" width={120} height={48} className="h-12 object-contain" /><div className="font-bold text-[14px] mt-3">WhatsApp</div><div className="text-[11px] text-slate">ledencommunicatie</div></div>
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-meta.png" alt="" width={120} height={48} className="h-12 object-contain" /><div className="font-bold text-[14px] mt-3">Meta Ads</div><div className="text-[11px] text-slate">advertenties</div></div>
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-instagram.jpg" alt="" width={120} height={48} className="h-12 object-contain rounded-lg" /><div className="font-bold text-[14px] mt-3">Instagram</div><div className="text-[11px] text-slate">social media</div></div>
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-google.webp" alt="" width={120} height={48} className="h-12 object-contain" /><div className="font-bold text-[14px] mt-3">Google</div><div className="text-[11px] text-slate">reviews &amp; search</div></div>
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-writify.jpg" alt="" width={120} height={48} className="h-12 object-contain rounded-lg" /><div className="font-bold text-[14px] mt-3">Writify</div><div className="text-[11px] text-slate">handgeschreven kaarten</div></div>
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-stripe.png" alt="" width={120} height={48} className="h-12 object-contain" /><div className="font-bold text-[14px] mt-3">Stripe</div><div className="text-[11px] text-slate">betalingsverwerking</div></div>
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-ideal.svg" alt="" width={120} height={48} className="h-12 object-contain" /><div className="font-bold text-[14px] mt-3">iDEAL</div><div className="text-[11px] text-slate">betaalmethode</div></div>
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-slack.png" alt="" width={120} height={48} className="h-12 object-contain" /><div className="font-bold text-[14px] mt-3">Slack</div><div className="text-[11px] text-slate">teamcommunicatie</div></div>
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-zapier.png" alt="" width={120} height={48} className="h-12 object-contain" /><div className="font-bold text-[14px] mt-3">Zapier</div><div className="text-[11px] text-slate">workflow automatisering</div></div>
            {/* dup */}
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-sportbit.png" alt="" width={120} height={48} className="h-12 object-contain" /><div className="font-bold text-[14px] mt-3">SportBit</div><div className="text-[11px] text-slate">ledenbeheer &amp; rooster</div></div>
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-whatsapp.avif" alt="" width={120} height={48} className="h-12 object-contain" /><div className="font-bold text-[14px] mt-3">WhatsApp</div><div className="text-[11px] text-slate">ledencommunicatie</div></div>
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-meta.png" alt="" width={120} height={48} className="h-12 object-contain" /><div className="font-bold text-[14px] mt-3">Meta Ads</div><div className="text-[11px] text-slate">advertenties</div></div>
            <div className="flex-shrink-0 w-48 bg-white border border-line rounded-2xl card-shadow p-5 flex flex-col items-center text-center"><Image src="/integ-google.webp" alt="" width={120} height={48} className="h-12 object-contain" /><div className="font-bold text-[14px] mt-3">Google</div><div className="text-[11px] text-slate">reviews &amp; search</div></div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-navy text-white">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold tight leading-tight">Klaar om GymOps in actie te zien?</h2>
          <p className="text-white/70 text-[18px] mt-5 max-w-xl mx-auto">Plan een gratis demo en ontdek hoe GymOps jouw gym transformeert.</p>
          <Link href="/prijzen" className="mt-9 inline-flex items-center gap-2 bg-accent text-navy px-9 py-4 rounded-xl text-[17px] font-bold hover:bg-white transition-colors">Plan een demo <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>

      <FlowScripts />
    </>
  );
}
