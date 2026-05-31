import Image from "next/image";
import { Star } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-[980px] mx-auto px-6 lg:px-10 py-28 text-center">
        <div className="flex justify-center gap-1 text-accent mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-accent" />
          ))}
        </div>
        <blockquote className="text-[clamp(26px,3.4vw,42px)] font-bold tight leading-[1.18]">
          &quot;In drie maanden van <span className="text-white/50">22%</span> naar{" "}
          <span className="text-accent">61%</span> leadconversie. Elke lead wordt nu automatisch
          opgevolgd. Ik hoef er niet meer aan te denken.&quot;
        </blockquote>
        <div className="flex items-center justify-center gap-3 mt-10">
          <Image
            src="/jeroen-van-duijn.webp"
            alt="Jeroen van Duijn"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <div className="font-bold text-[16px]">Jeroen van Duijn</div>
            <div className="text-[13px] text-white/60">CrossFit Leiden</div>
          </div>
        </div>
      </div>
    </section>
  );
}
