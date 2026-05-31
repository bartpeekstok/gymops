import Image from "next/image";
import { Zap, CalendarCheck, Sparkles, Star, PenLine } from "lucide-react";

const lines = [
  { x2: 88, y2: 50 },
  { x2: 69, y2: 83 },
  { x2: 31, y2: 83 },
  { x2: 12, y2: 50 },
  { x2: 31, y2: 17 },
  { x2: 69, y2: 17 },
];

const chips = [
  { Icon: Zap, label: "Leadcapture" },
  { Icon: CalendarCheck, label: "Proefles" },
  { Icon: Sparkles, label: "Welkomstflow" },
  { Icon: Star, label: "Reviews" },
];

export default function ConnectedNetwork() {
  return (
    <section className="bg-bg2 border-b border-line overflow-hidden">
      <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary font-bold text-[14px] tracking-wide">ÉÉN SYSTEEM, ALLES VERBONDEN</p>
          <h2 className="text-[clamp(30px,3.8vw,48px)] font-extrabold tight mt-3 leading-[1.06]">
            Lead, coach en lid, verbonden in dezelfde flow
          </h2>
          <p className="text-slate text-[17px] leading-relaxed mt-5 max-w-md">
            GymOps koppelt elk contactmoment aan dezelfde persoon. Een lead die lid wordt, een
            mijlpaal die een review triggert, een stille periode die een coach-taak aanmaakt. Niks
            staat los van elkaar.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-8 max-w-md">
            {chips.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white rounded-xl border border-line p-3"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-[14px] font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* graphic */}
        <div className="relative w-full max-w-[520px] mx-auto aspect-square">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            {lines.map((l, i) => (
              <line
                key={i}
                className="net-line"
                x1="50"
                y1="50"
                x2={l.x2}
                y2={l.y2}
                stroke="#3E788E"
                strokeWidth="0.5"
              />
            ))}
          </svg>
          {/* center node */}
          <div className="net-pulse absolute left-1/2 top-1/2 w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-bright shadow-xl flex flex-col items-center justify-center text-white">
            <Image src="/gear.png" alt="" width={36} height={36} className="w-9 h-9 brightness-0 invert" />
            <span className="text-[10px] font-bold mt-1">GymOps</span>
          </div>
          {/* surrounding nodes */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl card-shadow border border-line w-14 h-14 flex items-center justify-center"
            style={{ left: "88%", top: "50%" }}
          >
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl card-shadow border border-line w-14 h-14 flex items-center justify-center"
            style={{ left: "69%", top: "83%" }}
          >
            <CalendarCheck className="w-6 h-6 text-primary" />
          </div>
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 bg-white rounded-full card-shadow border-2 border-white w-14 h-14 overflow-hidden"
            style={{ left: "31%", top: "83%" }}
          >
            <Image
              src="/jeroen-van-duijn.webp"
              alt=""
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl card-shadow border border-line w-14 h-14 flex items-center justify-center"
            style={{ left: "12%", top: "50%" }}
          >
            <Star className="w-6 h-6 text-primary" />
          </div>
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 bg-white rounded-full card-shadow border-2 border-white w-14 h-14 overflow-hidden"
            style={{ left: "31%", top: "17%" }}
          >
            <Image
              src="/bart-peekstok.webp"
              alt=""
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl card-shadow border border-line w-14 h-14 flex items-center justify-center"
            style={{ left: "69%", top: "17%" }}
          >
            <PenLine className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
