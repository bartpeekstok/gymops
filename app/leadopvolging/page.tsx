import {
  Zap,
  Inbox,
  MessageSquare,
  UserCheck,
  CalendarCheck,
  Repeat,
  Bell,
  Tag,
  TrendingUp,
  RotateCcw,
  Mail,
  MessageCircle,
  QrCode,
  Instagram,
  Check,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { GearIcon } from "@/components/Logo";
import { leadNurtureTabs } from "@/lib/data";

const iconMap = {
  zap: Zap,
  inbox: Inbox,
  message: MessageSquare,
  "user-check": UserCheck,
  "calendar-check": CalendarCheck,
  repeat: Repeat,
  bell: Bell,
  tag: Tag,
  "trending-up": TrendingUp,
  rotate: RotateCcw,
} as const;

function FeatureMockup({ icon }: { icon: string }) {
  switch (icon) {
    case "zap":
      return <ZapMockup />;
    case "inbox":
      return <InboxMockup />;
    case "message":
      return <MessageMockup />;
    case "user-check":
      return <UserCheckMockup />;
    case "calendar-check":
      return <CalendarMockup />;
    case "repeat":
      return <RepeatMockup />;
    case "bell":
      return <BellMockup />;
    case "tag":
      return <TagMockup />;
    case "trending-up":
      return <TrendingMockup />;
    case "rotate":
      return <RotateMockup />;
    default:
      return null;
  }
}

function ZapMockup() {
  return (
    <div className="bg-gradient-to-br from-[#075e54] to-[#128c7e] rounded-2xl p-6 shadow-xl max-w-md">
      <div className="bg-white rounded-2xl rounded-tr-none p-4 shadow-md max-w-[85%] ml-auto">
        <p className="text-sm text-dark">Hoi! Ik wil graag een keer proefdraaien bij jullie.</p>
        <p className="text-[10px] text-gray-500 mt-2 text-right">14:32 ✓✓</p>
      </div>
      <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-none p-4 shadow-md max-w-[85%] mt-3">
        <p className="text-sm text-dark leading-relaxed">
          Hoi Sander! Welkom bij CrossFit Zuidlaren. Wanneer kom je langs voor een proefles?
          Ik heb morgen 10:00 of donderdag 18:00 vrij.
        </p>
        <p className="text-[10px] text-gray-500 mt-2 text-right">14:33 ✓✓</p>
      </div>
      <div className="mt-3 flex justify-center">
        <span className="text-xs text-white/80 bg-white/10 backdrop-blur px-3 py-1 rounded-full font-bold">
          Reactietijd: 53 seconden
        </span>
      </div>
    </div>
  );
}

function InboxMockup() {
  const sources = [
    { Icon: GearIcon, label: "Website-formulier", time: "net nu" },
    { Icon: MessageCircle, label: "Meta Ads lead form", time: "8 min" },
    { Icon: QrCode, label: "QR code in de box", time: "2 uur" },
    { Icon: Instagram, label: "Instagram DM", time: "vanmorgen" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md">
      <div className="flex items-center justify-between mb-5">
        <p className="font-black text-dark">Nieuwe leads vandaag</p>
        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
          4 binnen
        </span>
      </div>
      <ul className="space-y-3">
        {sources.map((s) => (
          <li
            key={s.label}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
          >
            <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
              <s.Icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-dark text-sm">{s.label}</p>
              <p className="text-xs text-gray-500">Lead binnengekomen · {s.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MessageMockup() {
  return (
    <div className="space-y-3 max-w-md">
      <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-none p-4 shadow-md">
        <p className="text-xs uppercase tracking-wider text-[#075e54] font-bold mb-1">
          WhatsApp
        </p>
        <p className="text-sm text-dark leading-relaxed">
          Hoi Sander, top dat je interesse hebt in CrossFit Zuidlaren! Wanneer kom je langs?
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4">
        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
          <Mail className="h-4 w-4 text-primary" />
          <p className="text-xs uppercase tracking-wider text-primary font-bold">E-mail</p>
        </div>
        <p className="font-bold text-dark text-sm">Welkom bij CrossFit Zuidlaren</p>
        <p className="text-xs text-gray-600 mt-1">
          Hoi Sander, fijn dat je de stap zet. Hier vind je alle info over onze
          proefles en hoe wij werken...
        </p>
      </div>
    </div>
  );
}

function UserCheckMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-wider text-primary font-bold">
          Taak voor coach Daan
        </span>
        <span className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full font-bold">
          Urgent
        </span>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-lg">
          S
        </div>
        <div>
          <p className="font-black text-dark">Sander V.</p>
          <p className="text-xs text-gray-500">Nieuwe lead via Meta Ads</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 bg-gray-50 rounded-xl p-3 leading-relaxed">
        Bel of app deze persoon vandaag nog persoonlijk. WhatsApp en welkomstmail zijn al
        verstuurd.
      </p>
      <button className="mt-4 w-full bg-primary text-white font-bold py-3 rounded-xl text-sm">
        Pak deze taak op
      </button>
    </div>
  );
}

function CalendarMockup() {
  const slots = ["ma 9:00", "ma 18:00", "di 10:30", "wo 19:00"];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md">
      <p className="font-bold text-dark mb-2">Plan je proefles bij CrossFit Zuidlaren</p>
      <p className="text-xs text-gray-500 mb-5">
        Alleen tijden die jou en je coach het beste uitkomen
      </p>
      <div className="grid grid-cols-2 gap-3">
        {slots.map((s, i) => (
          <div
            key={s}
            className={`p-4 rounded-xl text-sm font-bold text-center ${
              i === 2
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
        Bevestigd bij Sander én bij coach Daan
      </div>
    </div>
  );
}

function RepeatMockup() {
  const steps = [
    { label: "Dag 0", text: "Eerste WhatsApp en e-mail", done: true },
    { label: "Dag 1", text: "Herinnering WhatsApp", done: true },
    { label: "Dag 3", text: "Persoonlijk bericht coach", done: true },
    { label: "Dag 7", text: "Laatste check via e-mail", done: false },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md">
      <p className="text-xs uppercase tracking-wider text-primary font-bold mb-5">
        Opvolging Sander V. · geen reactie nog
      </p>
      <ol className="space-y-4">
        {steps.map((s, i) => (
          <li key={s.label} className="flex items-start gap-3 relative">
            {i < steps.length - 1 && (
              <span className="absolute left-4 top-8 bottom-[-1rem] w-0.5 bg-gray-200" />
            )}
            <div
              className={`h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center relative z-10 ${
                s.done
                  ? "bg-primary text-white"
                  : "bg-gray-50 border-2 border-dashed border-gray-300 text-gray-400"
              }`}
            >
              {s.done ? <Check className="h-4 w-4" /> : null}
            </div>
            <div className="flex-1 pt-1">
              <p className="font-bold text-dark text-sm">{s.label}</p>
              <p className="text-gray-600 text-sm">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function BellMockup() {
  return (
    <div className="bg-gradient-to-br from-[#075e54] to-[#128c7e] rounded-2xl p-6 shadow-xl max-w-md">
      <div className="text-center mb-3">
        <span className="text-xs text-white/80 bg-white/10 backdrop-blur px-3 py-1 rounded-full">
          1 uur voor je proefles
        </span>
      </div>
      <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-none p-4 shadow-md max-w-[85%]">
        <p className="text-sm text-dark leading-relaxed">
          Hoi Sander! Over een uurtje staat je proefles bij CrossFit Zuidlaren. Adres: Stationsstraat 12. Tot zo!
        </p>
        <p className="text-[10px] text-gray-500 mt-2 text-right">9:00</p>
      </div>
      <div className="bg-white rounded-2xl rounded-tr-none p-4 shadow-md max-w-[85%] ml-auto mt-3">
        <p className="text-sm text-dark">Top, ben er!</p>
        <p className="text-[10px] text-gray-500 mt-2 text-right">9:02 ✓✓</p>
      </div>
    </div>
  );
}

function TagMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-md">
      <div className="bg-navy p-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-white font-black text-lg">Z</span>
        </div>
        <div className="flex-1">
          <p className="text-white font-bold">CrossFit Zuidlaren</p>
          <p className="text-white/60 text-xs">noreply@crossfitzuidlaren.nl</p>
        </div>
      </div>
      <div className="p-6">
        <p className="font-black text-dark">Welkom Sander, fijn dat je er bent!</p>
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
          Top dat je morgen langskomt voor je proefles. Hier nog even alles op een rij...
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
          <Tag className="h-3 w-3 text-primary" />
          Verstuurd uit jouw gym, niet uit een GymOps-template
        </div>
      </div>
    </div>
  );
}

function TrendingMockup() {
  const flow = [
    { day: "Direct na intake", text: "Bedankt-mail met afspraak-samenvatting" },
    { day: "Dag 2", text: "Korte WhatsApp: hoe was je proefles?" },
    { day: "Dag 5", text: "Mail met info over abonnementen" },
    { day: "Dag 10", text: "Persoonlijk belmoment door coach" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md">
      <div className="flex items-center gap-2 mb-5">
        <TrendingUp className="h-5 w-5 text-primary" />
        <p className="font-black text-dark">Post-intake flow</p>
      </div>
      <ol className="space-y-3">
        {flow.map((f, i) => (
          <li key={f.day} className="flex items-start gap-3">
            <div className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-black text-xs">
              {i + 1}
            </div>
            <div>
              <p className="font-bold text-dark text-sm">{f.day}</p>
              <p className="text-gray-600 text-sm">{f.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function RotateMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md">
      <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-4">
        Reactivatie · 4 maanden geen reactie
      </p>
      <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
        <p className="text-sm text-dark leading-relaxed">
          Hé Mark, eerder dit jaar had je interesse in onze box. We starten volgende week
          met een nieuw 6-weeks beginnersprogramma. Misschien iets voor je?
        </p>
        <p className="text-xs text-gray-500 mt-2">Daan · CrossFit Zuidlaren</p>
      </div>
      <div className="mt-3 bg-primary text-white rounded-2xl rounded-tr-none p-4 max-w-[85%] ml-auto">
        <p className="text-sm">Goed dat je nog even contact zoekt. Heb je vanavond tijd?</p>
      </div>
    </div>
  );
}

export default function LeadopvolgingPage() {
  return (
    <main className="bg-white">
      <section className="bg-white">
        <div className="container-page py-20">
          <Badge>GymOps Flow · Leadopvolging</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-dark mt-6 break-words [hyphens:none]">
            Alles wat Flow doet om jouw leads klant te maken
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mt-6">
            Snelheid, persoonlijk contact en consistentie. Op alle kanalen waar je leads
            binnenkomen, en op elk moment in de reis naar abonnement.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="primary" href="/demo">
              Plan een demo
            </Button>
          </div>
        </div>
      </section>

      {leadNurtureTabs.map((feature, idx) => {
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
            Klaar om geen lead meer kwijt te raken?
          </h2>
          <p className="text-off-white/80 mt-5">
            Plan een demo en zie hoe Flow van het eerste contact tot het abonnement
            automatisch voor je werkt.
          </p>
          <div className="mt-8">
            <Button href="/demo">Plan een demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
