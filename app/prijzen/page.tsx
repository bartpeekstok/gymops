import Link from "next/link";
import { ArrowRight, Check, Bell, Star, ChevronDown } from "lucide-react";
import FlowScripts from "@/components/FlowScripts";

export default function PrijzenPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 dotgrid opacity-20"></div>
        <div className="absolute -top-28 -left-20 w-[440px] h-[440px] rounded-full bg-primary/30 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 -right-24 w-[460px] h-[460px] rounded-full bg-accent/20 blur-[130px] pointer-events-none"></div>
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 text-center relative">
          <p className="text-accent font-bold text-[14px] tracking-wide">ALLES-IN-ÉÉN GYM AUTOMATION PLATFORM</p>
          <h1 className="text-[clamp(34px,4.6vw,58px)] font-extrabold tight mt-3 max-w-3xl mx-auto leading-[1.06]">Geen verborgen kosten. Binnen vier weken live met een systeem dat voor jou werkt.</h1>
        </div>
      </section>

      {/* ============ PLANS ============ */}
      <section id="plan" className="bg-bg2 border-b border-line">
        <div className="max-w-[1040px] mx-auto px-6 lg:px-10 py-20">
          <div className="grid md:grid-cols-2 gap-7 items-stretch">

            {/* Flow */}
            <div className="relative bg-white rounded-3xl glow-ring border-2 border-primary p-8 flex flex-col">
              <div className="absolute -top-3 left-8 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Meest gekozen</div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-[14px] font-bold text-primary">GymOps Flow</span>
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-accent-light text-primary">Beschikbaar</span>
              </div>
              <h3 className="font-extrabold text-[30px] tight">Flow</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-[48px] font-extrabold tight leading-none">€450</span>
                <span className="text-slate text-[18px]">/ maand</span>
              </div>
              <p className="text-[14px] text-slate mt-4 leading-relaxed">Excl. btw · 12 maanden commitment, daarna maandelijks opzegbaar.</p>
              <p className="text-[14px] text-slate mt-2 leading-relaxed">Of jaarbetaling: 11 × €450 = €4.950 (1 maand gratis).</p>
              <Link href="#" className="mt-6 w-full bg-primary text-white py-3.5 rounded-xl text-[16px] font-bold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-sm">Plan een demo <ArrowRight className="w-4 h-4" /></Link>
              <ul className="mt-8 space-y-3 border-t border-line pt-6 text-[14px] text-ink/80">
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Volledig ingericht platform</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Custom website (SEO + AI search)</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Leadcapture & opvolging via WhatsApp en e-mail</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Handgeschreven kaarten via app of laptop</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Google reviews op het juiste moment</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Mijlpaal-signalering (verjaardagen, 100ste les, PR&apos;s)</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Onboarding-flow voor nieuwe leden (eerste 90 dagen)</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Event-pagina&apos;s (Bring-a-Friend, Hyrox, open dag)</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Slim afspraken plannen</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Branded e-mails, kaarten en agenda-uitnodigingen</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> SportBit-integratie</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Onbeperkt flows & campagnes</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> 4 onboarding-calls + bezoek</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Toegang tot GymOps Academy</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /> Snelle support van gym owners</li>
              </ul>
            </div>

            {/* Pulse */}
            <div className="relative bg-white rounded-3xl border-2 border-dashed border-line p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-[14px] font-bold text-slate">GymOps Pro</span>
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-gray-100 text-slate">Binnenkort</span>
              </div>
              <h3 className="font-extrabold text-[30px] tight text-slate">Flow + Pulse</h3>
              <div className="mt-4">
                <span className="text-[30px] font-extrabold text-slate/70 uppercase tracking-wide">Prijs volgt</span>
              </div>
              <p className="text-[14px] text-slate mt-4 leading-relaxed">Pulse komt later dit jaar. Upgrade dan zonder setupkosten, vanuit je bestaande Flow-account.</p>
              <Link href="#" className="mt-6 w-full border-2 border-primary text-primary py-3.5 rounded-xl text-[16px] font-bold hover:bg-accent-light transition-colors flex items-center justify-center gap-2">Houd me op de hoogte <Bell className="w-4 h-4" /></Link>
              <ul className="mt-8 space-y-3 border-t border-line pt-6 text-[14px] text-slate">
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-gray-400 flex-shrink-0" /> Alles van GymOps Flow</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-gray-400 flex-shrink-0" /> Pulse Staff App</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-gray-400 flex-shrink-0" /> Management Dashboard</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-gray-400 flex-shrink-0" /> Onbeperkt medewerkers</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-gray-400 flex-shrink-0" /> Incidentregistratie + audit</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-1.5 text-amber-400">
              <Star className="w-5 h-5 fill-amber-400" /><Star className="w-5 h-5 fill-amber-400" /><Star className="w-5 h-5 fill-amber-400" /><Star className="w-5 h-5 fill-amber-400" /><Star className="w-5 h-5 fill-amber-400" />
            </div>
            <p className="text-ink font-semibold mt-3 text-[15px]">Beoordeeld met 4.9 van 5 op basis van 169 reviews op <span className="text-primary font-bold">G2</span>.</p>
          </div>
        </div>
      </section>

      {/* ============ ONBOARDING TIMELINE ============ */}
      <section className="border-b border-line bg-white overflow-hidden">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-bold text-[14px] tracking-wide">VAN NUL NAAR LIVE</p>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold tight mt-3 leading-tight">Binnen vier weken volledig live</h2>
            <p className="text-slate text-[17px] mt-5">4 begeleide calls, een bezoek op locatie en wij richten alles in. Jij hoeft alleen je gym te runnen.</p>
          </div>
          <div className="relative mt-16">
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center relative" data-reveal="">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white font-extrabold text-[18px] flex items-center justify-center mx-auto relative z-10 shadow-lg">1</div>
                <h3 className="font-extrabold text-[17px] mt-5">Week 1 · Kick-off</h3>
                <p className="text-slate text-[14px] mt-2 leading-relaxed">Intake-call, we importeren je ledendata uit SportBit en zetten je account klaar.</p>
              </div>
              <div className="text-center relative" data-reveal="">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white font-extrabold text-[18px] flex items-center justify-center mx-auto relative z-10 shadow-lg">2</div>
                <h3 className="font-extrabold text-[17px] mt-5">Week 2 · Inrichten</h3>
                <p className="text-slate text-[14px] mt-2 leading-relaxed">Customer journeys, flows en je custom website worden gebouwd op jouw gym.</p>
              </div>
              <div className="text-center relative" data-reveal="">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white font-extrabold text-[18px] flex items-center justify-center mx-auto relative z-10 shadow-lg">3</div>
                <h3 className="font-extrabold text-[17px] mt-5">Week 3 · Bezoek</h3>
                <p className="text-slate text-[14px] mt-2 leading-relaxed">We komen langs in je gym, trainen je team en finetunen alles samen.</p>
              </div>
              <div className="text-center relative" data-reveal="">
                <div className="w-14 h-14 rounded-2xl bg-accent text-navy font-extrabold text-[18px] flex items-center justify-center mx-auto relative z-10 shadow-lg"><Check className="w-7 h-7" /></div>
                <h3 className="font-extrabold text-[17px] mt-5">Week 4 · Live</h3>
                <p className="text-slate text-[14px] mt-2 leading-relaxed">Alles draait. Elke lead opgevolgd, elk lid gezien, elke taak toegewezen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="border-b border-line">
        <div className="max-w-[760px] mx-auto px-6 lg:px-10 py-24">
          <h2 className="text-[clamp(28px,3.6vw,42px)] font-extrabold tight text-center">Veelgestelde vragen</h2>
          <div className="mt-12 divide-y divide-line" id="faq">
            <details className="group py-1">
              <summary className="flex items-center justify-between py-5 cursor-pointer list-none"><span className="font-bold text-[18px]">Wat kost GymOps en wat is er inbegrepen?</span><ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180" /></summary>
              <p className="text-slate leading-relaxed pb-5 text-[15.5px]">GymOps Flow kost €450 per maand (excl. btw). Bij jaarbetaling betaal je 11 maanden (€4.950) en is de 12e gratis.</p>
            </details>
            <details className="group py-1">
              <summary className="flex items-center justify-between py-5 cursor-pointer list-none"><span className="font-bold text-[18px]">Voor welke gyms is GymOps gemaakt?</span><ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180" /></summary>
              <p className="text-slate leading-relaxed pb-5 text-[15.5px]">GymOps is gebouwd door gym owners, voor coaching gyms. CrossFit-boxen, hyrox-studio&apos;s, kracht- en conditioneringsgyms en vechtsportacademies hebben we de meeste ervaring mee. Werkt jouw gym anders? Plan een demo, dan kijken we samen of GymOps past.</p>
            </details>
            <details className="group py-1">
              <summary className="flex items-center justify-between py-5 cursor-pointer list-none"><span className="font-bold text-[18px]">Wie bouwt mijn website en wat als ik iets wil aanpassen?</span><ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180" /></summary>
              <p className="text-slate leading-relaxed pb-5 text-[15.5px]">Wij bouwen je website op maat in dezelfde technologie als bedrijven als Netflix en Spotify. Geen WordPress-thema of page builder. Nieuwe abonnementsvorm? Tariefswijziging? Een nieuwe coach in het team? Wij passen je website binnen één werkweek aan. Inbegrepen, geen offertes.</p>
            </details>
            <details className="group py-1">
              <summary className="flex items-center justify-between py-5 cursor-pointer list-none"><span className="font-bold text-[18px]">Hoe lang duurt de onboarding?</span><ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180" /></summary>
              <p className="text-slate leading-relaxed pb-5 text-[15.5px]">De meeste gyms zijn binnen vier weken live. De onboarding bestaat uit 4 begeleide calls plus een bezoek bij je gym op locatie. We importeren je bestaande ledendata, richten je customer journeys in en koppelen SportBit zodat alles vanaf dag één werkt.</p>
            </details>
            <details className="group py-1">
              <summary className="flex items-center justify-between py-5 cursor-pointer list-none"><span className="font-bold text-[18px]">Zit ik vast aan een lang contract?</span><ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180" /></summary>
              <p className="text-slate leading-relaxed pb-5 text-[15.5px]">Je gaat een commitment van 12 maanden aan. Daarna loopt het maandelijks door en kun je op elk moment opzeggen. Geen verborgen kosten, geen uitstapboetes.</p>
            </details>
            <details className="group py-1">
              <summary className="flex items-center justify-between py-5 cursor-pointer list-none"><span className="font-bold text-[18px]">Wat is Pulse en wanneer komt het beschikbaar?</span><ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180" /></summary>
              <p className="text-slate leading-relaxed pb-5 text-[15.5px]">Pulse is onze uitbreiding voor je team: een Staff App, Management Dashboard, onbeperkt medewerkers en incidentregistratie met audit-trail. Komt later dit jaar als &apos;Flow + Pulse&apos;. Bestaande Flow-klanten upgraden zonder setupkosten vanuit hun bestaande account. Prijs volgt.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-navy text-white">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold tight leading-tight max-w-3xl mx-auto">Jouw gym verdient een systeem dat voor je werkt</h2>
          <Link href="#" className="mt-9 inline-flex items-center gap-2 bg-accent text-navy px-9 py-4 rounded-xl text-[17px] font-bold hover:bg-white transition-colors">Plan een demo <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>

      <FlowScripts />
    </>
  );
}
