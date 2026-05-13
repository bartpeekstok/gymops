import Image from "next/image";
import {
  Pen,
  Star,
  Mail,
  Sparkles,
  Bell,
  PartyPopper,
  CalendarCheck,
  Trophy,
  Heart,
  RotateCcw,
  Check,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { GearIcon } from "@/components/Logo";
import { coreFeatureTabs, atRiskMembers } from "@/lib/data";

const iconMap = {
  pen: Pen,
  mail: Mail,
  party: PartyPopper,
  sparkles: Sparkles,
  "calendar-check": CalendarCheck,
  bell: Bell,
  trophy: Trophy,
  heart: Heart,
  star: Star,
  rotate: RotateCcw,
} as const;

function FeatureMockup({ icon }: { icon: string }) {
  switch (icon) {
    case "pen":
      return <PenMockup />;
    case "mail":
      return <MailMockup />;
    case "party":
      return <PartyMockup />;
    case "sparkles":
      return <SparklesMockup />;
    case "calendar-check":
      return <CalendarMockup />;
    case "bell":
      return <BellMockup />;
    case "trophy":
      return <TrophyMockup />;
    case "heart":
      return <HeartMockup />;
    case "star":
      return <StarMockup />;
    case "rotate":
      return <RotateMockup />;
    default:
      return null;
  }
}

function PenMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-amber-100/40 to-rose-100/30 rounded-3xl -z-10" />
      <div className="bg-amber-50 rounded-2xl shadow-2xl p-10 border border-amber-200/60 rotate-2 max-w-md">
        <p className="font-serif italic text-2xl text-amber-900">Lieve Lisa,</p>
        <p className="font-serif italic text-amber-900/80 mt-5 leading-relaxed text-lg">
          Gefeliciteerd met je verjaardag! Geniet van je dag, en tot dinsdag in de box.
        </p>
        <p className="font-serif italic text-amber-900 mt-8">— Jeroen &amp; team CFA</p>
      </div>
    </div>
  );
}

function MailMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-md">
      <div className="bg-navy p-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-white font-black text-lg">C</span>
        </div>
        <p className="text-white font-bold">CrossFit Alkmaar</p>
      </div>
      <div className="p-6">
        <p className="text-xs text-gray-500">van: info@crossfitalkmaar.nl</p>
        <p className="font-black text-dark text-lg mt-2">Welkom Sander, fijn dat je er bent!</p>
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
          Top dat je morgen langskomt voor je proefles. Wat kun je verwachten? We beginnen met
          een korte intake, daarna een lichte training op jouw niveau.
        </p>
        <button className="mt-5 bg-primary text-white font-bold text-sm px-5 py-2.5 rounded-xl">
          Bekijk je intake
        </button>
      </div>
    </div>
  );
}

function PartyMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-md">
      <div className="h-32 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
        <PartyPopper className="h-16 w-16 text-white" />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-wider text-primary font-bold">Zat 15 jun · 10:00</p>
        <h3 className="font-black text-dark text-xl mt-2">Bring-a-Friend WOD</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Neem je sportmaatje mee voor een gratis kennismakingstraining.
        </p>
        <button className="mt-5 w-full bg-primary text-white font-bold py-3 rounded-xl">
          Schrijf in
        </button>
      </div>
    </div>
  );
}

function SparklesMockup() {
  const days = [
    { day: "Welkom", text: "Welkomstmail en WhatsApp", done: true },
    { day: "Eerste week", text: "Check-in door coach", done: true },
    { day: "Eerste maand", text: "Evaluatie en doelen stellen", done: true },
    { day: "Halverwege", text: "Voortgangsgesprek", done: false },
    { day: "Afronding", text: "Persoonlijke kaart en community moment", done: false },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md">
      <p className="text-xs uppercase tracking-wider text-primary font-bold mb-5">
        Sander V. · onboarding
      </p>
      <ol className="space-y-4">
        {days.map((d) => (
          <li key={d.day} className="flex items-start gap-3">
            <div
              className={`h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                d.done
                  ? "bg-primary text-white"
                  : "bg-gray-50 text-gray-400 border-2 border-dashed border-gray-300"
              }`}
            >
              {d.done ? <Check className="h-4 w-4" /> : null}
            </div>
            <div className="flex-1 pt-1">
              <p className="font-bold text-dark text-sm">{d.day}</p>
              <p className="text-gray-600 text-sm">{d.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CalendarMockup() {
  const slots = ["di 14:00", "wo 9:30", "wo 16:00", "do 11:00"];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md">
      <p className="font-bold text-dark mb-2">Kies een tijd voor je intake</p>
      <p className="text-xs text-gray-500 mb-5">Alleen tijden die jou én je coach het beste uitkomen</p>
      <div className="grid grid-cols-2 gap-3">
        {slots.map((s, i) => (
          <div
            key={s}
            className={`p-4 rounded-xl text-sm font-bold text-center ${
              i === 1
                ? "bg-primary text-white shadow-lg"
                : "bg-gray-50 text-dark border border-gray-200"
            }`}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
        <CalendarCheck className="h-4 w-4 text-primary" />
        Bevestigd bij jou én bij coach Bart
      </div>
    </div>
  );
}

function BellMockup() {
  return (
    <div className="bg-gradient-to-br from-[#075e54] to-[#128c7e] rounded-2xl p-6 shadow-xl max-w-md">
      <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-none p-4 shadow-md max-w-[85%]">
        <p className="text-sm text-dark leading-relaxed">
          Hoi Sander! 👋 Morgen om 10:00 staat je proefles bij CrossFit Alkmaar. Laat even
          weten of het lukt!
        </p>
        <p className="text-[10px] text-gray-500 mt-2 text-right">9:43</p>
      </div>
      <div className="bg-white rounded-2xl rounded-tr-none p-4 shadow-md max-w-[85%] ml-auto mt-3">
        <p className="text-sm text-dark">Top, ik ben er! 💪</p>
        <p className="text-[10px] text-gray-500 mt-2 text-right">9:47 ✓✓</p>
      </div>
      <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-none p-3 shadow-md max-w-[85%] mt-3">
        <p className="text-xs text-dark">Reminder verstuurd 1 uur voor je proefles</p>
      </div>
    </div>
  );
}

function TrophyMockup() {
  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 shadow-xl text-white max-w-md">
      <div className="h-16 w-16 rounded-2xl bg-white/15 flex items-center justify-center">
        <Trophy className="h-8 w-8 text-yellow-300" />
      </div>
      <p className="text-xs uppercase tracking-wider font-bold opacity-80 mt-6">Mijlpaal</p>
      <p className="text-2xl font-black mt-2 leading-tight">
        Mark heeft vandaag zijn 100ste les gedaan!
      </p>
      <div className="mt-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
        <p className="text-sm font-bold">Taak voor coach Bart</p>
        <p className="text-sm mt-1 opacity-90">
          Stuur Mark een persoonlijke kaart en regel een 100-les shirt
        </p>
      </div>
    </div>
  );
}

function HeartMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md">
      <div className="flex items-center justify-between mb-5">
        <p className="font-black text-dark">Stille leden</p>
        <span className="text-xs bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-bold">
          3 vragen aandacht
        </span>
      </div>
      <ul className="space-y-3">
        {atRiskMembers.map((m) => (
          <li
            key={m.name}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black">
              {m.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-dark text-sm">{m.name}</p>
              <p className="text-xs text-gray-500">Niet geweest sinds {m.days}</p>
            </div>
            <span className="text-xs text-primary font-bold whitespace-nowrap">Pak op</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StarMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md">
      <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-100">
        <Image src="/integ-google.webp" alt="Google" width={36} height={36} />
        <div>
          <p className="font-black text-dark text-sm">CrossFit Alkmaar</p>
          <div className="flex items-center gap-1 mt-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs text-gray-500 ml-1 font-medium">4.9 · 256 reviews</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed italic">
        &ldquo;Beste box waar ik ooit ben getraind. De community is fantastisch en coaches kennen je
        naam vanaf dag 1.&rdquo;
      </p>
      <p className="text-xs text-gray-500 mt-3 font-bold">— Lisa B., gisteren</p>
    </div>
  );
}

function RotateMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md">
      <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-4">
        Reactivatie · 6 maanden weg
      </p>
      <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
        <p className="text-sm text-dark leading-relaxed">
          Hé Mark, je hebt al even niet bij ons getraind. Volgende week starten we een nieuw
          6-weekse programma. Interesse om even bij te praten?
        </p>
        <p className="text-xs text-gray-500 mt-2">Bart · CFA</p>
      </div>
      <div className="mt-3 bg-primary text-white rounded-2xl rounded-tr-none p-4 max-w-[85%] ml-auto">
        <p className="text-sm">Goed dat je belt! Misschien is dit het juiste moment om weer in te stappen.</p>
      </div>
    </div>
  );
}

export default function LedenervaringPage() {
  return (
    <main className="bg-white">
      <section className="py-20 lg:py-28 bg-gradient-to-b from-accent-light/40 to-white">
        <div className="container-page text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 justify-center mb-6">
            <GearIcon className="h-12 w-12" />
            <span className="text-3xl font-bold tracking-wider">
              GymOps <span className="text-primary">Flow</span>
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark leading-tight">
            Alles wat Flow doet voor jouw ledenervaring
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Persoonlijk contact op de juiste momenten, zonder dat jij of je team er actief
            aan hoeft te denken. Van eerste lead tot 100ste les.
          </p>
        </div>
      </section>

      {coreFeatureTabs.map((feature, idx) => {
        const Icon = iconMap[feature.icon as keyof typeof iconMap];
        const reverse = idx % 2 === 1;
        const stripe = idx % 2 === 1;
        return (
          <section
            key={feature.title}
            className={stripe ? "bg-gray-50" : "bg-white"}
          >
            <div className="container-page py-20 lg:py-24">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={reverse ? "lg:order-2" : ""}>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-dark mt-6 leading-tight">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 mt-5 text-lg leading-relaxed whitespace-pre-line">
                    {feature.body}
                  </p>
                </div>
                <div className={`flex justify-center ${reverse ? "lg:order-1" : ""}`}>
                  <FeatureMockup icon={feature.icon} />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-navy text-white py-20">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black leading-tight">
            Klaar voor een ledenervaring waar jouw gym om bekend staat?
          </h2>
          <p className="text-off-white/80 mt-5">
            Plan een demo en zie hoe Flow al deze touchpoints voor jouw gym in elkaar zet.
          </p>
          <div className="mt-8">
            <Button href="/demo">Plan een demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
