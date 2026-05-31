const stats = [
  { value: 12500, label: "leads automatisch opgevolgd", accent: false },
  { value: 3200, label: "handgeschreven kaarten verstuurd", accent: true },
  { value: 1800, label: "Google reviews binnengehaald", accent: false },
  { value: 9000, label: "taken naar de juiste coach gestuurd", accent: true },
];

export default function OdometerBand() {
  return (
    <section className="bg-navy text-white relative overflow-hidden border-b border-white/10">
      <div className="absolute -top-28 left-1/3 w-[420px] h-[420px] rounded-full bg-primary/25 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-10 w-[380px] h-[380px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dotgrid opacity-[0.05] pointer-events-none" />
      <div className="max-w-[1220px] mx-auto px-6 lg:px-10 py-20 relative">
        <p className="text-center text-accent font-bold text-[13px] tracking-[0.18em] uppercase">
          Deze maand op GymOps-gyms
        </p>
        <h2 className="text-center text-[clamp(24px,3vw,38px)] font-extrabold tight mt-3">
          Het werk dat op de automaat ging
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mt-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className={`odometer text-[clamp(40px,5vw,60px)] font-extrabold tight justify-center ${
                  s.accent ? "text-accent" : ""
                }`}
                data-value={s.value}
              />
              <p className="text-white/55 text-[14px] mt-3 max-w-[180px] mx-auto leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
