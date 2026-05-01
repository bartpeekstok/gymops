import { GearIcon } from "./Logo";
import { dashboardStats, atRiskMembers } from "@/lib/data";

export default function DashboardMockup() {
  return (
    <div className="relative pb-12 pr-12">
      <div className="bg-navy rounded-2xl p-5 shadow-2xl">
        <div className="flex items-center gap-2 mb-4">
          <GearIcon className="h-6 w-6" />
          <span className="text-white font-bold">GymOps</span>
          <span className="text-off-white/60 text-sm">Dashboard</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {dashboardStats.map((s) => (
            <div key={s.label} className="bg-navy-card rounded-xl p-4">
              <p className="text-off-white/60 text-[10px] tracking-wider font-semibold">
                {s.label}
              </p>
              <p
                className={`text-2xl font-black mt-1 ${
                  s.color === "accent" ? "text-accent" : "text-white"
                }`}
              >
                {s.value}
              </p>
              <p className="text-off-white/50 text-xs mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-navy-card rounded-xl p-4 mt-3">
          <p className="text-off-white/60 text-[10px] tracking-wider font-semibold mb-3">
            Leden met risico
          </p>
          <ul className="space-y-2">
            {atRiskMembers.map((m) => (
              <li key={m.name} className="flex items-center gap-3">
                <span className="h-7 w-7 rounded-full bg-primary inline-flex items-center justify-center text-white text-xs font-bold">
                  {m.name.charAt(0)}
                </span>
                <span className="text-white text-sm flex-1">{m.name}</span>
                <span className="text-red-400 text-xs">{m.days}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-40 bg-[#0f2a33] rounded-2xl p-3 shadow-2xl border border-primary/30">
        <p className="text-off-white/60 text-[10px] mb-2">GymOps App</p>
        <ul className="space-y-1.5">
          {["Inchecken", "Lidmaatschappen", "Producten"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-white text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-1.5 mt-3">
          <button className="bg-navy-card text-white text-[10px] py-1.5 rounded font-semibold">
            Aanmelden
          </button>
          <button className="bg-primary text-white text-[10px] py-1.5 rounded font-semibold">
            Verlengen
          </button>
        </div>
      </div>
    </div>
  );
}
