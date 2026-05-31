import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const outer = [
  { src: "/integ-sportbit.png", alt: "SportBit", deg: 0 },
  { src: "/integ-whatsapp.avif", alt: "WhatsApp", deg: 60 },
  { src: "/integ-google.webp", alt: "Google", deg: 120 },
  { src: "/integ-meta.png", alt: "Meta", deg: 180 },
  { src: "/integ-stripe.png", alt: "Stripe", deg: 240 },
  { src: "/integ-facebook.png", alt: "Facebook", deg: 300 },
];

const inner = [
  { src: "/integ-instagram.jpg", alt: "Instagram", deg: 36 },
  { src: "/integ-ideal.svg", alt: "iDEAL", deg: 108 },
  { src: "/integ-writify.jpg", alt: "Writify", deg: 180 },
  { src: "/integ-slack.png", alt: "Slack", deg: 252 },
  { src: "/integ-zapier.png", alt: "Zapier", deg: 324 },
];

function Node({
  src,
  alt,
  deg,
  radius,
}: {
  src: string;
  alt: string;
  deg: number;
  radius: number;
}) {
  return (
    <div className="orbit-node" style={{ transform: `rotate(${deg}deg) translateX(${radius}px)` }}>
      <div>
        <div style={{ transform: `rotate(${-deg}deg)` }}>
          <div className="w-16 h-16 -ml-8 -mt-8 rounded-full bg-white shadow-lg ring-1 ring-black/5 flex items-center justify-center p-1.5 overflow-hidden">
            <Image
              src={src}
              alt={alt}
              width={56}
              height={56}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IntegrationOrbit() {
  return (
    <section className="bg-navy text-white relative overflow-hidden border-b border-white/10">
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-primary/20 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 dotgrid opacity-[0.05] pointer-events-none" />
      <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 relative text-center">
        <p className="text-accent font-bold text-[14px] tracking-wide">NAADLOZE INTEGRATIES</p>
        <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tight mt-3 leading-[1.05] max-w-2xl mx-auto">
          GymOps draait om de tools die je al gebruikt
        </h2>
        <p className="text-white/60 text-[17px] mt-5 max-w-xl mx-auto">
          SportBit, WhatsApp, Google, Meta en meer, alles verbonden in één systeem dat voor je
          werkt.
        </p>

        <div className="orbit-wrap mx-auto mt-16 w-[300px] h-[300px] sm:w-[520px] sm:h-[520px]">
          {/* rings */}
          <div className="absolute inset-[9%] rounded-full border border-white/10" />
          <div className="absolute inset-[27%] rounded-full border border-white/10" />
          {/* center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-3xl bg-gradient-to-br from-primary to-bright shadow-2xl flex flex-col items-center justify-center z-10">
            <Image src="/gear.png" alt="" width={44} height={44} className="w-11 h-11 brightness-0 invert" />
            <span className="text-[12px] font-extrabold mt-1">GymOps</span>
          </div>
          {/* outer orbit */}
          <div className="orbit">
            {outer.map((n) => (
              <Node key={n.alt} {...n} radius={215} />
            ))}
          </div>
          {/* inner orbit (reverse) */}
          <div className="orbit rev">
            {inner.map((n) => (
              <Node key={n.alt} {...n} radius={120} />
            ))}
          </div>
        </div>

        <Link
          href="/producten"
          className="mt-14 inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-xl text-[16px] font-bold hover:bg-white/10 transition-colors"
        >
          Bekijk alle integraties <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
