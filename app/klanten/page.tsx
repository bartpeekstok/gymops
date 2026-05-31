import Link from "next/link";
import Image from "next/image";
import { Quote, Star, ArrowRight } from "lucide-react";
import FlowScripts from "@/components/FlowScripts";

export default function KlantenPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 dotgrid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"></div>
        <div className="absolute -top-24 -left-20 w-[440px] h-[440px] rounded-full bg-primary/15 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-10 -right-24 w-[440px] h-[440px] rounded-full bg-accent/15 blur-[130px] pointer-events-none"></div>
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 text-center relative">
          <div className="inline-flex items-center gap-2 bg-accent-light text-primary px-3.5 py-1.5 rounded-full text-[13px] font-semibold mb-6">Klanten</div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold tight leading-[1.04] max-w-3xl mx-auto">Gyms die niemand meer laten glippen</h1>
          <p className="text-slate text-[19px] max-w-2xl mx-auto mt-6">Coaching gyms door heel Nederland draaien op GymOps. Dit zeggen ze erover.</p>
        </div>
      </section>

      {/* ============ LOGOS ============ */}
      <section className="border-b border-line py-14 overflow-hidden bg-bg2">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10">
          <p className="text-center text-slate text-[14px] font-semibold mb-9">Vertrouwd door coaching gyms in heel Nederland</p>
        </div>
        <div className="relative">
          <div className="flex w-max marquee gap-20 items-center">
            <Image src="/logo-cfa.png" alt="" width={48} height={44} className="h-11 logo-tint w-auto" />
            <Image src="/logo-cfn.png" alt="" width={56} height={56} className="h-14 logo-tint w-auto" />
            <Image src="/logo-cfc.png" alt="" width={56} height={56} className="h-14 logo-tint w-auto" />
            <Image src="/logo-cfl.png" alt="" width={48} height={44} className="h-11 logo-tint w-auto" />
            <Image src="/logo-gymbox.png" alt="" width={40} height={40} className="h-10 logo-tint w-auto" />
            <Image src="/logo-unscared.jpg" alt="" width={56} height={56} className="h-14 logo-tint w-auto" />
            <Image src="/logo-cfa.png" alt="" width={48} height={44} className="h-11 logo-tint w-auto" />
            <Image src="/logo-cfn.png" alt="" width={56} height={56} className="h-14 logo-tint w-auto" />
            <Image src="/logo-cfc.png" alt="" width={56} height={56} className="h-14 logo-tint w-auto" />
            <Image src="/logo-cfl.png" alt="" width={48} height={44} className="h-11 logo-tint w-auto" />
            <Image src="/logo-gymbox.png" alt="" width={40} height={40} className="h-10 logo-tint w-auto" />
            <Image src="/logo-unscared.jpg" alt="" width={56} height={56} className="h-14 logo-tint w-auto" />
          </div>
        </div>
      </section>

      {/* ============ ODOMETER BAND ============ */}
      <section className="bg-navy text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute -top-28 left-1/4 w-[420px] h-[420px] rounded-full bg-primary/25 blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 dotgrid opacity-[0.05] pointer-events-none"></div>
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            <div className="text-center">
              <div className="odometer text-[clamp(38px,4.6vw,58px)] font-extrabold tight justify-center" data-value={40} />
              <p className="text-white/55 text-[14px] mt-3 max-w-[180px] mx-auto leading-snug">coaching gyms op GymOps</p>
            </div>
            <div className="text-center">
              <div className="odometer text-[clamp(38px,4.6vw,58px)] font-extrabold tight justify-center text-accent" data-value={11000} />
              <p className="text-white/55 text-[14px] mt-3 max-w-[180px] mx-auto leading-snug">actieve leden geholpen</p>
            </div>
            <div className="text-center">
              <div className="odometer text-[clamp(38px,4.6vw,58px)] font-extrabold tight justify-center" data-value={9000} />
              <p className="text-white/55 text-[14px] mt-3 max-w-[180px] mx-auto leading-snug">Google reviews binnengehaald</p>
            </div>
            <div className="text-center">
              <div className="text-[clamp(38px,4.6vw,58px)] font-extrabold tight text-accent">4.9<span className="text-white/40 text-[0.5em]">/5</span></div>
              <p className="text-white/55 text-[14px] mt-3 max-w-[180px] mx-auto leading-snug">gemiddelde beoordeling</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED QUOTES ============ */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-navy text-white rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 dotgrid opacity-15"></div>
              <Quote className="w-10 h-10 text-accent relative" />
              <blockquote className="text-[clamp(22px,2.6vw,32px)] font-bold tight leading-[1.25] mt-6 relative">In drie maanden zijn we van 22% naar 61% leadconversie gegaan. Elke lead wordt nu automatisch opgevolgd. Ik hoef er niet meer aan te denken.</blockquote>
              <div className="flex items-center gap-3 mt-8 relative">
                <Image src="/jeroen-van-duijn.webp" alt="" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                <div><div className="font-bold">Jeroen van Duijn</div><div className="text-white/60 text-[13px]">CrossFit Leiden</div></div>
              </div>
            </div>
            <div className="bg-accent-light rounded-3xl p-8 flex flex-col justify-center">
              <div className="text-[44px] font-extrabold grad-text tight leading-none">250+</div>
              <p className="text-ink/80 text-[15px] leading-relaxed mt-3">Google reviews bij de gemiddelde GymOps-gym, automatisch opgevraagd op het juiste moment.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-3xl border border-line card-shadow p-8">
              <div className="flex gap-1 text-amber-400 mb-4"><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /></div>
              <p className="text-[18px] leading-relaxed">&quot;Twee maanden na de start al 8 nieuwe leden direct uit de automatisering. Het systeem doet het werk terwijl wij bezig zijn met de community.&quot;</p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-line">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[14px]">KH</div>
                <div><div className="font-bold text-[15px]">Kees Houwaart</div><div className="text-slate text-[13px]">Gymbox Noordwijk</div></div>
              </div>
            </div>
            <div className="bg-white rounded-3xl border border-line card-shadow p-8">
              <div className="flex gap-1 text-amber-400 mb-4"><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /></div>
              <p className="text-[18px] leading-relaxed">&quot;Mijn coaches werken eindelijk consistent. Iedereen weet wat er moet gebeuren en ik hoef er niet meer achteraan te zitten.&quot;</p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-line">
                <Image src="/bart-peekstok.webp" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                <div><div className="font-bold text-[15px]">Bart Peekstok</div><div className="text-slate text-[13px]">CrossFit Alkmaar</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SHORT QUOTES MARQUEE ============ */}
      <section className="bg-bg2 border-b border-line py-20 overflow-hidden">
        <h2 className="text-center text-[clamp(24px,3vw,36px)] font-extrabold tight px-6">Wat gym-eigenaren zeggen</h2>
        <div className="relative mt-12">
          <div className="flex w-max marquee gap-5 px-6">
            <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-line card-shadow p-6"><p className="text-[16px] font-semibold">&quot;Heeft ons leven zoveel makkelijker gemaakt&quot;</p><p className="text-slate text-[13px] mt-3">&mdash; Ben J.</p></div>
            <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-line card-shadow p-6"><p className="text-[16px] font-semibold">&quot;Zo eenvoudig te gebruiken!&quot;</p><p className="text-slate text-[13px] mt-3">&mdash; Matthijs H.</p></div>
            <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-line card-shadow p-6"><p className="text-[16px] font-semibold">&quot;Bespaart mij tijd &eacute;n geld&quot;</p><p className="text-slate text-[13px] mt-3">&mdash; Trina K.</p></div>
            <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-line card-shadow p-6"><p className="text-[16px] font-semibold">&quot;Intu&iuml;tief, ze denken aan alles&quot;</p><p className="text-slate text-[13px] mt-3">&mdash; Theresa S.</p></div>
            <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-line card-shadow p-6"><p className="text-[16px] font-semibold">&quot;Ze geven echt om kleine gym-eigenaren&quot;</p><p className="text-slate text-[13px] mt-3">&mdash; Shad W.</p></div>
            <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-line card-shadow p-6"><p className="text-[16px] font-semibold">&quot;De ledenervaring is uitstekend&quot;</p><p className="text-slate text-[13px] mt-3">&mdash; Hannah C.</p></div>
            {/* dup */}
            <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-line card-shadow p-6"><p className="text-[16px] font-semibold">&quot;Heeft ons leven zoveel makkelijker gemaakt&quot;</p><p className="text-slate text-[13px] mt-3">&mdash; Ben J.</p></div>
            <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-line card-shadow p-6"><p className="text-[16px] font-semibold">&quot;Zo eenvoudig te gebruiken!&quot;</p><p className="text-slate text-[13px] mt-3">&mdash; Matthijs H.</p></div>
            <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-line card-shadow p-6"><p className="text-[16px] font-semibold">&quot;Bespaart mij tijd &eacute;n geld&quot;</p><p className="text-slate text-[13px] mt-3">&mdash; Trina K.</p></div>
            <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-line card-shadow p-6"><p className="text-[16px] font-semibold">&quot;Intu&iuml;tief, ze denken aan alles&quot;</p><p className="text-slate text-[13px] mt-3">&mdash; Theresa S.</p></div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-navy text-white">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold tight leading-tight max-w-3xl mx-auto">Word de volgende gym die niemand meer laat glippen</h2>
          <Link href="/prijzen" className="mt-9 inline-flex items-center gap-2 bg-accent text-navy px-9 py-4 rounded-xl text-[17px] font-bold hover:bg-white transition-colors">Plan een demo <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>

      <FlowScripts />
    </>
  );
}
