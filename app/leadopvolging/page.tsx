import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Zap,
  Inbox,
  Globe,
  Megaphone,
  QrCode,
  Instagram,
  LayoutDashboard,
  MessageSquare,
  Mail,
  UserCheck,
  CalendarCheck,
  Repeat,
  Check,
  Bell,
  Tag,
  TrendingUp,
  RotateCcw,
  PenLine,
} from "lucide-react";
import FlowScripts from "@/components/FlowScripts";

export default function LeadopvolgingPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 dotgrid opacity-60 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_72%)]"></div>
        <div className="absolute -top-24 -left-20 w-[440px] h-[440px] rounded-full bg-primary/15 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-10 -right-24 w-[440px] h-[440px] rounded-full bg-accent/15 blur-[130px] pointer-events-none"></div>
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 relative">
          <div className="inline-flex items-center gap-2 bg-accent-light text-primary px-3.5 py-1.5 rounded-full text-[13px] font-semibold mb-6">GymOps Flow · Leadopvolging</div>
          <h1 className="text-[clamp(40px,5.4vw,72px)] font-extrabold tight leading-[1.03] max-w-3xl">Verander je leads <span className="grad-text">in leden</span></h1>
          <p className="text-[19px] text-slate leading-relaxed max-w-2xl mt-7">Snelheid, persoonlijk contact en consistentie. Op alle kanalen waar je leads binnenkomen, en op elk moment in de reis naar abonnement.</p>
          <Link href="/prijzen" className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-[16px] font-bold hover:bg-primary-dark transition-colors shadow-sm">Plan een demo <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      {/* ============ CONVERSION GRAPHIC ============ */}
      <section className="bg-navy text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute -top-28 -left-16 w-[440px] h-[440px] rounded-full bg-primary/25 blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-32 right-0 w-[420px] h-[420px] rounded-full bg-accent/15 blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 dotgrid opacity-[0.05] pointer-events-none"></div>
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 relative grid lg:grid-cols-2 gap-16 items-center">
          <div data-reveal="">
            <p className="text-accent font-bold text-[14px] tracking-wide">LEADCONVERSIE</p>
            <h2 className="text-[clamp(28px,3.6vw,46px)] font-extrabold tight mt-3 leading-[1.06]">Van interesse naar ingeschreven</h2>
            <p className="text-white/60 text-[17px] leading-relaxed mt-5 max-w-md">Snelheid en consistentie maken het verschil. GymOps-gyms zien hun leadconversie meetbaar omhoog gaan in het eerste kwartaal.</p>
            <div className="mt-9 space-y-6">
              <div>
                <div className="flex items-center justify-between text-[14px] mb-2"><span className="text-white/60">Zonder GymOps</span><span className="font-extrabold text-white/70"><span data-count={22} data-suffix="%">0%</span></span></div>
                <div className="h-3 rounded-full bg-white/10 overflow-hidden"><div className="bar h-full rounded-full bg-white/30" style={{ ["--w" as string]: "22%" }}></div></div>
              </div>
              <div>
                <div className="flex items-center justify-between text-[14px] mb-2"><span className="text-accent font-semibold">Met GymOps</span><span className="font-extrabold text-accent"><span data-count={61} data-suffix="%">0%</span></span></div>
                <div className="h-3 rounded-full bg-white/10 overflow-hidden"><div className="bar h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ ["--w" as string]: "61%" }}></div></div>
              </div>
            </div>
          </div>

          {/* funnel */}
          <div className="flex flex-col items-center gap-2.5" data-reveal="">
            <div className="w-full max-w-md bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4 flex items-center justify-between" style={{ width: "100%" }}><span className="text-[14px] font-semibold">Leads binnen</span><span className="font-extrabold">1.000</span></div>
            <ChevronDown className="w-5 h-5 text-white/30" />
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4 flex items-center justify-between" style={{ width: "84%" }}><span className="text-[14px] font-semibold">Gereageerd</span><span className="font-extrabold">920</span></div>
            <ChevronDown className="w-5 h-5 text-white/30" />
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4 flex items-center justify-between" style={{ width: "68%" }}><span className="text-[14px] font-semibold">Proefles geboekt</span><span className="font-extrabold">740</span></div>
            <ChevronDown className="w-5 h-5 text-white/30" />
            <div className="bg-gradient-to-r from-primary to-bright rounded-2xl px-5 py-4 flex items-center justify-between shadow-xl" style={{ width: "52%" }}><span className="text-[14px] font-bold">Nieuw lid</span><span className="font-extrabold">610</span></div>
          </div>
        </div>
      </section>

      {/* ============ FEATURE ROWS ============ */}

      {/* 1 zap */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><Zap className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Binnen één minuut reactie op elke lead</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Snelheid is statistisch de grootste factor in leadconversie. Zodra iemand zijn gegevens achterlaat, krijgt hij binnen één minuut een WhatsApp én e-mail. Geen wachten tot je tussen lessen door tijd vindt.</p>
          </div>
          <div className="flex justify-center">
            <div className="wa rounded-3xl p-5 shadow-xl w-full max-w-sm">
              <div className="wa-in rounded-2xl rounded-tr-none p-3.5 ml-auto max-w-[85%] shadow"><p className="text-[13px] text-ink">Hoi! Ik wil graag een keer proefdraaien bij jullie.</p><p className="text-[10px] text-slate mt-1.5 text-right">14:32 ✓✓</p></div>
              <div className="wa-out rounded-2xl rounded-tl-none p-3.5 max-w-[88%] mt-3 shadow"><p className="text-[13px] text-ink leading-relaxed">Hoi Sander! Welkom bij CrossFit Zuidlaren. Morgen 10:00 of donderdag 18:00 vrij voor een proefles?</p><p className="text-[10px] text-slate mt-1.5 text-right">14:33 ✓✓</p></div>
              <div className="mt-3 text-center"><span className="text-[11px] text-white/90 bg-white/15 px-3 py-1 rounded-full font-bold">Reactietijd: 53 seconden</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 inbox */}
      <section className="bg-bg2 border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><Inbox className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Leads vanuit elk kanaal automatisch binnen</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Website-formulier, Meta Ads, QR codes in je gym, een DM op Instagram. Alles komt automatisch in GymOps binnen, gekoppeld aan dezelfde lead. Geen handmatig overtypen.</p>
          </div>
          <div className="lg:order-1 flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-sm">
              <div className="flex items-center justify-between mb-4"><p className="font-extrabold">Nieuwe leads vandaag</p><span className="text-[12px] bg-accent-light text-primary px-3 py-1 rounded-full font-bold">4 binnen</span></div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 bg-bg2 rounded-xl"><div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center"><Globe className="w-4 h-4" /></div><div className="flex-1"><p className="font-bold text-[13px]">Website-formulier</p><p className="text-[11px] text-slate">net nu</p></div></div>
                <div className="flex items-center gap-3 p-3 bg-bg2 rounded-xl"><div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center"><Megaphone className="w-4 h-4" /></div><div className="flex-1"><p className="font-bold text-[13px]">Meta Ads lead form</p><p className="text-[11px] text-slate">8 min</p></div></div>
                <div className="flex items-center gap-3 p-3 bg-bg2 rounded-xl"><div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center"><QrCode className="w-4 h-4" /></div><div className="flex-1"><p className="font-bold text-[13px]">QR code in de box</p><p className="text-[11px] text-slate">2 uur</p></div></div>
                <div className="flex items-center gap-3 p-3 bg-bg2 rounded-xl"><div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center"><Instagram className="w-4 h-4" /></div><div className="flex-1"><p className="font-bold text-[13px]">Instagram DM</p><p className="text-[11px] text-slate">vanmorgen</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 dashboard */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><LayoutDashboard className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Een dashboard waar je elke lead in beeld hebt</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Open GymOps en je ziet in één oogopslag: wie er nieuw binnenkwam, wie wacht op een proefles, wie nog opvolging nodig heeft. Per lead het kanaal, de status en het laatste contactmoment.</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-md">
              <div className="flex items-center justify-between mb-4"><div><p className="font-extrabold">Alle leads in beeld</p><p className="text-[11px] text-slate">Bijgewerkt zojuist</p></div><span className="text-[12px] bg-accent-light text-primary px-3 py-1 rounded-full font-bold">12 deze week</span></div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2.5 bg-bg2 rounded-xl"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-[13px] flex items-center justify-center">S</div><div className="flex-1 min-w-0"><p className="font-bold text-[13px]">Sander V.</p><p className="text-[11px] text-slate">Meta Ads</p></div><span className="text-[10px] font-bold px-2 py-1 rounded-full bg-blue-100 text-blue-700">Nieuw</span></div>
                <div className="flex items-center gap-3 p-2.5 bg-bg2 rounded-xl"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-[13px] flex items-center justify-center">L</div><div className="flex-1 min-w-0"><p className="font-bold text-[13px]">Lisa B.</p><p className="text-[11px] text-slate">Website</p></div><span className="text-[10px] font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">Proefles</span></div>
                <div className="flex items-center gap-3 p-2.5 bg-bg2 rounded-xl"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-[13px] flex items-center justify-center">M</div><div className="flex-1 min-w-0"><p className="font-bold text-[13px]">Mark P.</p><p className="text-[11px] text-slate">QR in box</p></div><span className="text-[10px] font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700">In gesprek</span></div>
                <div className="flex items-center gap-3 p-2.5 bg-bg2 rounded-xl"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-[13px] flex items-center justify-center">L</div><div className="flex-1 min-w-0"><p className="font-bold text-[13px]">Linda H.</p><p className="text-[11px] text-slate">Instagram DM</p></div><span className="text-[10px] font-bold px-2 py-1 rounded-full bg-rose-100 text-rose-700">Wacht</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 message */}
      <section className="bg-bg2 border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><MessageSquare className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Multi-channel opvolging met WhatsApp en e-mail</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Mensen reageren niet altijd op een mailtje, maar wel op WhatsApp. Of andersom. GymOps stuurt automatisch beide en past de tone-of-voice aan op je gym.</p>
          </div>
          <div className="lg:order-1 flex justify-center">
            <div className="w-full max-w-sm space-y-3">
              <div className="wa-out rounded-2xl rounded-tl-none p-4 shadow border border-line"><p className="text-[11px] uppercase tracking-wider text-[#075e54] font-bold mb-1">WhatsApp</p><p className="text-[13px] text-ink leading-relaxed">Hoi Sander, top dat je interesse hebt in CrossFit Zuidlaren! Wanneer kom je langs?</p></div>
              <div className="bg-white rounded-2xl shadow border border-line p-4"><div className="flex items-center gap-2 mb-2 pb-2 border-b border-line"><Mail className="w-4 h-4 text-primary" /><p className="text-[11px] uppercase tracking-wider text-primary font-bold">E-mail</p></div><p className="font-bold text-[13px]">Welkom bij CrossFit Zuidlaren</p><p className="text-[12px] text-slate mt-1">Hoi Sander, fijn dat je de stap zet. Hier vind je alle info over onze proefles…</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 user-check */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><UserCheck className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Persoonlijk contact blijft bij jouw coach</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Automatisering doet het werk, jouw coach maakt het persoonlijk. Bij elke nieuwe lead komt direct een taak binnen bij de juiste coach: bel of app deze persoon even op.</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-sm">
              <div className="flex items-center justify-between mb-4"><span className="text-[11px] uppercase tracking-wider text-primary font-bold">Taak voor coach Daan</span><span className="text-[11px] bg-rose-100 text-rose-700 px-2 py-1 rounded-full font-bold">Urgent</span></div>
              <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-extrabold text-[18px]">S</div><div><p className="font-extrabold">Sander V.</p><p className="text-[12px] text-slate">Nieuwe lead via Meta Ads</p></div></div>
              <p className="text-[13px] text-ink/80 bg-bg2 rounded-xl p-3 leading-relaxed">Bel of app deze persoon vandaag nog persoonlijk. WhatsApp en welkomstmail zijn al verstuurd.</p>
              <button className="mt-4 w-full bg-primary text-white font-bold py-3 rounded-xl text-[14px]">Pak deze taak op</button>
            </div>
          </div>
        </div>
      </section>

      {/* 6 calendar */}
      <section className="bg-bg2 border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><CalendarCheck className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Direct een proefles boeken zonder heen-en-weer</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Leads krijgen een persoonlijke link naar de beschikbaarheid van jou en je coaches. Ze kiezen zelf een slot. Geen dubbele afspraken, geen lege agenda&apos;s.</p>
          </div>
          <div className="lg:order-1 flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-sm">
              <p className="font-extrabold">Plan je proefles</p><p className="text-[12px] text-slate mb-4">Alleen tijden die jou en je coach uitkomen</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl text-[14px] font-bold text-center bg-bg2 border border-line">ma 9:00</div>
                <div className="p-3.5 rounded-xl text-[14px] font-bold text-center bg-bg2 border border-line">ma 18:00</div>
                <div className="p-3.5 rounded-xl text-[14px] font-bold text-center bg-primary text-white shadow-lg">di 10:30</div>
                <div className="p-3.5 rounded-xl text-[14px] font-bold text-center bg-bg2 border border-line">wo 19:00</div>
              </div>
              <div className="mt-4 pt-4 border-t border-line flex items-center gap-2 text-[12px] text-slate"><CalendarCheck className="w-4 h-4 text-primary" /> Bevestigd bij Sander én coach Daan</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 repeat */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><Repeat className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Persistente opvolging tot er reactie is</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Krijg je iemand niet meteen te pakken? Dan stopt GymOps niet bij één poging. Opvolgberichten in een natuurlijk ritme, op het juiste tijdstip. Nooit spammerig.</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-sm">
              <p className="text-[11px] uppercase tracking-wider text-primary font-bold mb-5">Opvolging Sander V. · geen reactie</p>
              <ol className="space-y-4">
                <li className="flex items-start gap-3"><div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0"><Check className="w-4 h-4" /></div><div><p className="font-bold text-[13px]">Dag 0 — Eerste WhatsApp en e-mail</p></div></li>
                <li className="flex items-start gap-3"><div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0"><Check className="w-4 h-4" /></div><div><p className="font-bold text-[13px]">Dag 1 — Herinnering WhatsApp</p></div></li>
                <li className="flex items-start gap-3"><div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0"><Check className="w-4 h-4" /></div><div><p className="font-bold text-[13px]">Dag 3 — Persoonlijk bericht coach</p></div></li>
                <li className="flex items-start gap-3"><div className="w-8 h-8 rounded-full bg-bg2 border-2 border-dashed border-line text-slate flex items-center justify-center flex-shrink-0"></div><div><p className="font-bold text-[13px] text-slate">Dag 7 — Laatste check via e-mail</p></div></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 8 bell */}
      <section className="bg-bg2 border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><Bell className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Show-rate omhoog met automatische reminders</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Een proefles geboekt is nog geen lead die opdaagt. GymOps stuurt reminders via WhatsApp en e-mail tot je lead daadwerkelijk in je gym staat. Minder no-shows.</p>
          </div>
          <div className="lg:order-1 flex justify-center">
            <div className="wa rounded-3xl p-5 shadow-xl w-full max-w-sm">
              <div className="text-center mb-3"><span className="text-[11px] text-white/90 bg-white/15 px-3 py-1 rounded-full">1 uur voor je proefles</span></div>
              <div className="wa-out rounded-2xl rounded-tl-none p-3.5 max-w-[88%] shadow"><p className="text-[13px] text-ink leading-relaxed">Hoi Sander! Over een uurtje staat je proefles. Adres: Stationsstraat 12. Tot zo!</p><p className="text-[10px] text-slate mt-1.5 text-right">9:00</p></div>
              <div className="wa-in rounded-2xl rounded-tr-none p-3.5 ml-auto max-w-[85%] mt-3 shadow"><p className="text-[13px] text-ink">Top, ben er!</p><p className="text-[10px] text-slate mt-1.5 text-right">9:02 ✓✓</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 tag */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><Tag className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Berichten met jouw branding, niet die van GymOps</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Elke mail, WhatsApp en agenda-uitnodiging komt uit jouw gym. Met jouw logo, jouw toon, jouw kleuren. Niets verraadt dat er een systeem onder zit.</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line overflow-hidden w-full max-w-sm">
              <div className="bg-navy p-4 flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-extrabold text-[18px]">Z</div><div><p className="text-white font-bold">CrossFit Zuidlaren</p><p className="text-white/60 text-[11px]">noreply@crossfitzuidlaren.nl</p></div></div>
              <div className="p-6"><p className="font-extrabold">Welkom Sander, fijn dat je er bent!</p><p className="text-slate mt-3 text-[14px] leading-relaxed">Top dat je morgen langskomt voor je proefles. Hier nog even alles op een rij…</p><div className="mt-4 pt-4 border-t border-line flex items-center gap-2 text-[11px] text-slate"><Tag className="w-3 h-3 text-primary" /> Verstuurd uit jouw gym, niet uit een GymOps-template</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 trending */}
      <section className="bg-bg2 border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><TrendingUp className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Na de intake gaat het opvolgen door</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Veel gyms stoppen na de proefles. Een grote fout. GymOps blijft de lead na de intake begeleiden richting een besluit. Zodra het abonnement in SportBit live gaat, start automatisch de welkomstflow.</p>
          </div>
          <div className="lg:order-1 flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-sm">
              <div className="flex items-center gap-2 mb-5"><TrendingUp className="w-5 h-5 text-primary" /><p className="font-extrabold">Post-intake flow</p></div>
              <ol className="space-y-3">
                <li className="flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-accent-light text-primary flex items-center justify-center flex-shrink-0 font-extrabold text-[12px]">1</div><div><p className="font-bold text-[13px]">Direct na intake</p><p className="text-[12px] text-slate">Bedankt-mail met samenvatting</p></div></li>
                <li className="flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-accent-light text-primary flex items-center justify-center flex-shrink-0 font-extrabold text-[12px]">2</div><div><p className="font-bold text-[13px]">Dag 2</p><p className="text-[12px] text-slate">Korte WhatsApp: hoe was je proefles?</p></div></li>
                <li className="flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-accent-light text-primary flex items-center justify-center flex-shrink-0 font-extrabold text-[12px]">3</div><div><p className="font-bold text-[13px]">Dag 5</p><p className="text-[12px] text-slate">Mail met info over abonnementen</p></div></li>
                <li className="flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-accent-light text-primary flex items-center justify-center flex-shrink-0 font-extrabold text-[12px]">4</div><div><p className="font-bold text-[13px]">Dag 10</p><p className="text-[12px] text-slate">Persoonlijk belmoment door coach</p></div></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 11 rotate */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><RotateCcw className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Verloren leads later opnieuw in beeld</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Niet elke lead is meteen klaar om te starten. Sommige hebben een paar maanden nodig. GymOps brengt ze automatisch later weer in beeld met een passend bericht, zonder ze te spammen.</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl card-shadow border border-line p-6 w-full max-w-sm">
              <p className="text-[11px] uppercase tracking-wider text-slate font-bold mb-4">Reactivatie · 4 maanden stil</p>
              <div className="bg-bg2 rounded-2xl rounded-tl-none p-3.5 max-w-[88%]"><p className="text-[13px] text-ink leading-relaxed">Hé Mark, eerder dit jaar had je interesse in onze box. We starten volgende week met een nieuw 6-weeks beginnersprogramma. Iets voor je?</p><p className="text-[11px] text-slate mt-2">Daan · CrossFit Zuidlaren</p></div>
              <div className="mt-3 bg-primary text-white rounded-2xl rounded-tr-none p-3.5 max-w-[85%] ml-auto"><p className="text-[13px]">Goed dat je contact zoekt. Heb je vanavond tijd?</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 pen */}
      <section className="bg-bg2 border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center"><PenLine className="w-7 h-7 text-primary" /></div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold tight mt-6 leading-tight">Handgeschreven kaarten naar ex-leden en koude leads</h2>
            <p className="text-slate text-[17px] leading-relaxed mt-4">Een handgeschreven kaart valt op tussen het werk en de pakketten. Met één klik stuur je een kaart met persoonlijke tekst naar een ex-lid of koude lead. Persoonlijk, fysiek en onverwacht.</p>
          </div>
          <div className="lg:order-1 relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent-light to-primary/10 rounded-[2rem] -z-10"></div>
            <div className="bg-white rounded-2xl card-shadow border border-line p-9 max-w-sm -rotate-1">
              <p className="text-[24px] font-bold tight">Hé Mark,</p>
              <p className="text-[17px] text-slate leading-relaxed mt-4">We missen je in de box. Loop eens binnen voor een open les, we trakteren.</p>
              <p className="text-[15px] font-semibold mt-7">— Daan &amp; team Zuidlaren</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-navy text-white">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold tight leading-tight max-w-2xl mx-auto">Klaar om geen lead meer kwijt te raken?</h2>
          <p className="text-white/70 text-[18px] mt-5 max-w-xl mx-auto">Plan een demo en zie hoe Flow van het eerste contact tot het abonnement automatisch voor je werkt.</p>
          <Link href="/prijzen" className="mt-9 inline-flex items-center gap-2 bg-accent text-navy px-9 py-4 rounded-xl text-[17px] font-bold hover:bg-white transition-colors">Plan een demo <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>

      <FlowScripts />
    </>
  );
}
