import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 dotgrid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-28 text-center relative">
        <h2 className="text-[clamp(36px,5vw,68px)] font-extrabold tight leading-[1.04]">
          Klaar om je gym op
          <br />
          de automaat te zetten?
        </h2>
        <p className="text-slate text-[18px] mt-6 max-w-xl mx-auto">
          Plan een demo en zie binnen 30 minuten wat GymOps voor jouw box betekent.
        </p>
        <Link
          href="/prijzen"
          className="mt-9 inline-flex items-center gap-2 bg-primary text-white px-9 py-4 rounded-xl text-[17px] font-bold hover:bg-primary-dark transition-colors shadow-md"
        >
          Plan een demo <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
