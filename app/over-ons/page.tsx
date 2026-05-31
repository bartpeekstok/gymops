import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FlowScripts from "@/components/FlowScripts";

export default function OverOnsPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 dotgrid opacity-60 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]"></div>
        <div className="absolute -top-24 -left-20 w-[440px] h-[440px] rounded-full bg-primary/15 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-10 -right-24 w-[440px] h-[440px] rounded-full bg-accent/15 blur-[130px] pointer-events-none"></div>
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 relative">
          <div className="inline-flex items-center gap-2 bg-accent-light text-primary px-3.5 py-1.5 rounded-full text-[13px] font-semibold mb-6">Gebouwd door gym-eigenaren, voor gym-eigenaren</div>
          <h1 className="text-[clamp(40px,5.4vw,72px)] font-extrabold tight leading-[1.04] max-w-3xl">Hallo! Wij zijn <span className="grad-text">GymOps</span>.</h1>
          <p className="text-[19px] text-slate leading-relaxed max-w-3xl mt-7">GymOps is opgericht door Jeroen van Duijn (CrossFit Leiden) en Bart Peekstok (CrossFit Alkmaar). Onze eigen gyms draaien op het systeem en we ontwikkelen het dagelijks door op basis van wat in de praktijk werkt.</p>
          <p className="text-[19px] text-slate leading-relaxed max-w-3xl mt-4">We bouwen GymOps voor coaching gyms zoals die van ons: in het Nederlands, afgestemd op hoe een gym écht werkt, en met support van mensen die hetzelfde pad hebben gelopen.</p>
          <Link href="/prijzen" className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-[16px] font-bold hover:bg-primary-dark transition-colors shadow-sm">Plan een demo <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      {/* ============ FOUNDERS ============ */}
      <section className="bg-bg2 border-b border-line">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 py-24">
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold tight text-center">Ontmoet de oprichters</h2>
          <div className="grid md:grid-cols-2 gap-7 mt-14">
            {/* Jeroen */}
            <article className="bg-white rounded-3xl card-shadow border border-line p-8">
              <div className="flex items-center gap-4">
                <Image src="/jeroen-van-duijn.webp" alt="Jeroen van Duijn" width={80} height={80} className="w-20 h-20 rounded-2xl object-cover" />
                <div>
                  <h3 className="font-extrabold text-[22px] tight">Jeroen van Duijn</h3>
                  <p className="text-primary font-semibold text-[13.5px] mt-1">Mede-oprichter · Eigenaar CrossFit Leiden</p>
                </div>
              </div>
              <div className="text-slate text-[15px] leading-relaxed mt-6 space-y-4">
                <p>Als eigenaar van CrossFit Leiden weet ik als geen ander hoe het is om alles zelf te doen. Coaches aansturen via WhatsApp, leads opvolgen tussen de trainingen door, en hopen dat niemand stilletjes opzegt zonder dat je het merkt.</p>
                <p>Ik was het al vrij snel zat om reactief te ondernemen. Ik wilde een systeem dat voor mij werkt, ook als ik zelf op de vloer sta. Twee jaar geleden raakte ik in contact met Bart van CrossFit Alkmaar. Uit die samenwerking is GymOps ontstaan.</p>
                <p>Vandaag draait mijn gym volledig op GymOps Flow. Meer leden, betere retentie, en ik kan weer doen waar ik goed in ben: coachen. Ik kan me eerlijk gezegd niet meer voorstellen hoe het zonder was.</p>
              </div>
            </article>
            {/* Bart */}
            <article className="bg-white rounded-3xl card-shadow border border-line p-8">
              <div className="flex items-center gap-4">
                <Image src="/bart-peekstok.webp" alt="Bart Peekstok" width={80} height={80} className="w-20 h-20 rounded-2xl object-cover" />
                <div>
                  <h3 className="font-extrabold text-[22px] tight">Bart Peekstok</h3>
                  <p className="text-primary font-semibold text-[13.5px] mt-1">Mede-oprichter · Eigenaar CrossFit Alkmaar</p>
                </div>
              </div>
              <div className="text-slate text-[15px] leading-relaxed mt-6 space-y-4">
                <p>Ik weet hoe een gym werkt, want ik sta er zelf al meer dan 12 jaar middenin. Leads die er tussenuit glippen, opvolging die blijft liggen, taken die niet worden opgepakt. Ik heb het allemaal jarenlang werkbaar geprobeerd te maken. Precies daarom hebben we GymOps gebouwd.</p>
                <p>Bij CrossFit Alkmaar zijn we altijd goed geweest in persoonlijk contact. Al ons contact is nog steeds persoonlijk en oprecht, het systeem zorgt ervoor dat we niemand vergeten.</p>
                <p>GymOps regelt je hele leadflow en klantreis automatisch, van het eerste contactmoment tot de viering van de 100e workout. Dit is wat ik zelf tien jaar geleden al had willen hebben.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ STORY TIMELINE ============ */}
      <section className="border-b border-line bg-white overflow-hidden">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-bold text-[14px] tracking-wide">ONS VERHAAL</p>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold tight mt-3 leading-tight">Ontstaan op de gymvloer, niet achter een bureau</h2>
          </div>
          <div className="relative mt-16">
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center relative" data-reveal="">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white font-extrabold text-[15px] flex items-center justify-center mx-auto relative z-10 shadow-lg">&apos;12</div>
                <h3 className="font-extrabold text-[17px] mt-5">CrossFit Alkmaar</h3>
                <p className="text-slate text-[14px] mt-2 leading-relaxed">Bart staat al ruim 12 jaar dagelijks in zijn eigen box.</p>
              </div>
              <div className="text-center relative" data-reveal="">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white font-extrabold text-[15px] flex items-center justify-center mx-auto relative z-10 shadow-lg">&apos;21</div>
                <h3 className="font-extrabold text-[17px] mt-5">Bart &amp; Jeroen</h3>
                <p className="text-slate text-[14px] mt-2 leading-relaxed">Twee gym owners gaan sparren over systemen, data en opvolging.</p>
              </div>
              <div className="text-center relative" data-reveal="">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white font-extrabold text-[15px] flex items-center justify-center mx-auto relative z-10 shadow-lg">&apos;23</div>
                <h3 className="font-extrabold text-[17px] mt-5">GymOps ontstaat</h3>
                <p className="text-slate text-[14px] mt-2 leading-relaxed">Uit de samenwerking groeit één systeem dat hun eigen gyms draait.</p>
              </div>
              <div className="text-center relative" data-reveal="">
                <div className="w-14 h-14 rounded-2xl bg-accent text-navy font-extrabold text-[15px] flex items-center justify-center mx-auto relative z-10 shadow-lg">nu</div>
                <h3 className="font-extrabold text-[17px] mt-5">40+ gyms</h3>
                <p className="text-slate text-[14px] mt-2 leading-relaxed">Coaching gyms door heel Nederland draaien vandaag op GymOps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="border-b border-line">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24">
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold tight text-center">Waarden die we leven (en werken)</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            <div className="bg-white rounded-3xl border border-line card-shadow p-8">
              <p className="text-[52px] font-extrabold grad-text leading-none">01</p>
              <h3 className="font-extrabold text-[20px] tight mt-4">Branche-ervaring die ertoe doet</h3>
              <p className="text-slate text-[15px] leading-relaxed mt-3">We hebben de uitdagingen van gymeigenaarschap zelf meegemaakt. Die praktijkkennis vormt elke productbeslissing, zodat jij tools krijgt gebouwd door mensen die jouw wereld écht begrijpen.</p>
            </div>
            <div className="bg-white rounded-3xl border border-line card-shadow p-8">
              <p className="text-[52px] font-extrabold grad-text leading-none">02</p>
              <h3 className="font-extrabold text-[20px] tight mt-4">Gyms helpen levens te veranderen</h3>
              <p className="text-slate text-[15px] leading-relaxed mt-3">Onze missie is gymeigenaren succesvol te maken. Als zij slagen, vinden meer mensen gezondheid, community en zelfvertrouwen. Dat is impact die verder reikt dan zakelijk succes alleen.</p>
            </div>
            <div className="bg-white rounded-3xl border border-line card-shadow p-8">
              <p className="text-[52px] font-extrabold grad-text leading-none">03</p>
              <h3 className="font-extrabold text-[20px] tight mt-4">Snel, gefocust en efficiënt</h3>
              <p className="text-slate text-[15px] leading-relaxed mt-3">We geloven dat kleine, gespecialiseerde teams de beste resultaten leveren. Met minder bureaucratie en meer verantwoordelijkheid bewegen we snel. We houden elke klant persoonlijk dichtbij.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-navy text-white">
        <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold tight leading-tight max-w-3xl mx-auto">Wil je weten of GymOps voor jouw gym werkt?</h2>
          <p className="text-white/70 text-[18px] mt-5 max-w-xl mx-auto">Plan een demo, dan laten we het je zien door iemand die zelf een gym runt.</p>
          <Link href="/prijzen" className="mt-9 inline-flex items-center gap-2 bg-accent text-navy px-9 py-4 rounded-xl text-[17px] font-bold hover:bg-white transition-colors">Plan een demo <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>

      <FlowScripts />
    </>
  );
}
