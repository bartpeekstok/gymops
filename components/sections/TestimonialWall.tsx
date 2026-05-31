import { Star } from "lucide-react";

type Card = { quote: string; author: string; stars?: boolean };

const colUp: Card[] = [
  {
    quote: "Elke lead wordt nu automatisch opgevolgd. Ik hoef er niet meer aan te denken.",
    author: "Jeroen · CrossFit Leiden",
    stars: true,
  },
  {
    quote: "Mijn coaches werken eindelijk consistent. Iedereen weet wat er moet gebeuren.",
    author: "Bart · CrossFit Alkmaar",
  },
  {
    quote: "Twee maanden na de start al 8 nieuwe leden direct uit de automatisering.",
    author: "Kees · Gymbox Noordwijk",
  },
  {
    quote: "De ledenervaring is echt uitstekend. Niemand voelt zich nog vergeten.",
    author: "Hannah · Unscared",
  },
];

const colDown: Card[] = [
  {
    quote: "Bespaart mij echt uren per week. Ik kan weer coachen in plaats van administreren.",
    author: "Matthijs · CrossFit Naarden",
  },
  {
    quote: "De handgeschreven kaarten zijn een schot in de roos. Leden praten erover.",
    author: "Trina · CrossFit Capelle",
    stars: true,
  },
  {
    quote: "Intuïtief en compleet. Ze denken echt aan alles wat een gym nodig heeft.",
    author: "Theresa · GymBox",
  },
  {
    quote: "Ze geven echt om kleine gym owners. Support van mensen die het zelf doen.",
    author: "Shad · CrossFit Leiden",
  },
];

function TestimonialCard({ card }: { card: Card }) {
  return (
    <div className="bg-white rounded-2xl border border-line card-shadow p-5">
      {card.stars && (
        <div className="flex gap-0.5 text-amber-400 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
          ))}
        </div>
      )}
      <p className="text-[14px] leading-relaxed">&quot;{card.quote}&quot;</p>
      <p className="text-slate text-[12px] mt-3 font-semibold">{card.author}</p>
    </div>
  );
}

export default function TestimonialWall() {
  return (
    <section className="bg-bg2 border-b border-line overflow-hidden">
      <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-primary font-bold text-[14px] tracking-wide">WAT GYM OWNERS ZEGGEN</p>
          <h2 className="text-[clamp(30px,3.8vw,48px)] font-extrabold tight mt-3 leading-[1.05]">
            Gebouwd door gym owners, geliefd bij gym owners
          </h2>
          <p className="text-slate text-[17px] leading-relaxed mt-5 max-w-md">
            Coaching gyms door heel Nederland draaien op GymOps. Niet omdat het moet, maar omdat het
            werkt.
          </p>
          <div className="flex items-center gap-6 mt-8">
            <div>
              <div className="text-[34px] font-extrabold tight grad-text" data-count="40" data-suffix="+">
                0+
              </div>
              <p className="text-slate text-[13px] mt-1">gyms</p>
            </div>
            <div className="w-px h-10 bg-line" />
            <div>
              <div className="text-[34px] font-extrabold tight" data-count="96" data-suffix="%">
                0%
              </div>
              <p className="text-slate text-[13px] mt-1">retentie</p>
            </div>
            <div className="w-px h-10 bg-line" />
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-5 h-5 fill-amber-400" />
                <span className="text-[34px] font-extrabold tight text-ink">4,9</span>
              </div>
              <p className="text-slate text-[13px] mt-1">gemiddeld</p>
            </div>
          </div>
        </div>

        {/* two scrolling columns */}
        <div className="relative h-[440px] edge-fade-y grid grid-cols-2 gap-4">
          <div className="overflow-hidden">
            <div className="vmarq space-y-4">
              {[...colUp, ...colUp].map((c, i) => (
                <TestimonialCard key={i} card={c} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="vmarq-down space-y-4">
              {[...colDown, ...colDown].map((c, i) => (
                <TestimonialCard key={i} card={c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
