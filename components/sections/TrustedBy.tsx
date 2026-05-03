import { trustedLogos } from "@/lib/data";

export default function TrustedBy() {
  const doubled = [...trustedLogos, ...trustedLogos];
  return (
    <section className="px-6 lg:px-16 py-8">
      <div className="bg-navy rounded-2xl py-10 overflow-hidden">
        <h2 className="text-white text-center font-bold text-xl mb-8">
          Onze klanten
        </h2>
        <div className="overflow-hidden">
          <div className="flex logo-scroll whitespace-nowrap w-max">
            {doubled.map((logo, i) => (
              <span
                key={i}
                className="uppercase font-black text-2xl text-off-white/60 mx-12 tracking-widest"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
