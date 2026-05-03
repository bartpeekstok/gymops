import {
  LayoutDashboard,
  Users,
  MessageCircle,
  UserPlus,
  Timer,
  Info,
  Euro,
  TrendingUp,
  MapPin,
  IdCard,
  ShoppingBag,
  RotateCw,
} from "lucide-react";
import { GearIcon } from "./Logo";

const navItems = [
  { label: "Dashboard", Icon: LayoutDashboard, active: true },
  { label: "Mensen", Icon: Users, active: false },
  { label: "Communicatie", Icon: MessageCircle, active: false },
];

const atRisk = [
  { name: "Sander V.", initial: "S", days: "10 dagen", color: "bg-primary" },
  { name: "Lisa de B.", initial: "L", days: "20 dagen", color: "bg-accent" },
  { name: "Mark P.", initial: "M", days: "28 dagen", color: "bg-primary-dark" },
];

const phoneMenu = [
  { label: "Inchecken", Icon: MapPin },
  { label: "Lidmaatschappen", Icon: IdCard },
  { label: "Producten kopen", Icon: ShoppingBag },
];

export default function DashboardMockup() {
  return (
    <div className="relative pb-10 pr-8">
      {/* Main dashboard window */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex">
        {/* Sidebar */}
        <aside className="bg-primary text-white p-3 w-[110px] flex-shrink-0 flex flex-col">
          <div className="flex items-center gap-1.5 mb-5">
            <GearIcon className="h-5 w-5" />
            <span className="font-black text-[11px] leading-none">
              GymOps
              <br />
              <span className="font-medium text-[8px] opacity-80">CORE</span>
            </span>
          </div>

          <nav className="space-y-3 flex-1">
            {navItems.map(({ label, Icon, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 text-[11px] ${
                  active ? "font-bold" : "opacity-75"
                }`}
              >
                <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                <span>{label}</span>
              </div>
            ))}
            <div className="pt-3 space-y-2">
              <div className="h-1 w-14 bg-white/25 rounded" />
              <div className="h-1 w-12 bg-white/25 rounded" />
              <div className="h-1 w-16 bg-white/25 rounded" />
            </div>
          </nav>

          <div className="flex items-center gap-2 mt-auto pt-4">
            <div className="h-7 w-7 rounded-full bg-accent text-dark flex items-center justify-center text-[11px] font-bold flex-shrink-0">
              E
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold leading-none">Eva D.</p>
              <p className="text-[9px] opacity-75 truncate">Demo Gym</p>
            </div>
          </div>
        </aside>

        {/* Content area */}
        <div className="bg-gray-50 flex-1 p-3 grid grid-cols-2 gap-2.5 min-w-0">
          {/* Mijn dag */}
          <div className="min-w-0">
            <h4 className="text-[11px] font-bold mb-2">Mijn dag</h4>

            <div className="bg-white rounded-lg p-2 mb-1.5 shadow-sm">
              <UserPlus className="h-3 w-3 text-primary mb-1" />
              <p className="text-base font-black leading-none">24</p>
              <p className="text-[8px] text-gray-500 mt-1">Nieuwe aanmeldingen</p>
            </div>

            <div className="bg-white rounded-lg p-2 mb-1.5 shadow-sm">
              <Timer className="h-3 w-3 text-primary mb-1" />
              <p className="text-base font-black leading-none">8 mnd</p>
              <p className="text-[8px] text-gray-500 mt-1">Gem. betrokkenheid</p>
            </div>

            <div className="bg-accent-light rounded-lg p-1.5 mb-2 flex items-center gap-1">
              <Info className="h-3 w-3 text-primary flex-shrink-0" />
              <p className="text-[9px] font-semibold text-primary leading-tight">
                GymOps AI inzichten
              </p>
            </div>

            <p className="text-[10px] font-bold mb-1">Leden met risico</p>
            <div className="space-y-1">
              {atRisk.map((m) => (
                <div
                  key={m.name}
                  className="bg-white rounded-md p-1.5 shadow-sm flex items-center gap-1.5"
                >
                  <div
                    className={`h-5 w-5 rounded-full ${m.color} text-white text-[9px] flex items-center justify-center font-bold flex-shrink-0`}
                  >
                    {m.initial}
                  </div>
                  <p className="text-[9px] flex-1 truncate">{m.name}</p>
                  <p className="text-[8px] text-red-500 flex-shrink-0">{m.days}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Omzetrapport */}
          <div className="min-w-0">
            <h4 className="text-[11px] font-bold mb-2">Omzetrapport</h4>

            <div className="bg-white rounded-lg p-2 mb-1.5 shadow-sm">
              <Euro className="h-3 w-3 text-primary mb-1" />
              <p className="text-base font-black leading-none">€37.228</p>
              <p className="text-[8px] text-gray-500 mt-1">Jaaromzet</p>
            </div>

            <div className="bg-white rounded-lg p-2 mb-1.5 shadow-sm">
              <Euro className="h-3 w-3 text-primary mb-1" />
              <p className="text-base font-black leading-none">€7.834</p>
              <p className="text-[8px] text-gray-500 mt-1">Maandomzet</p>
            </div>

            <div className="bg-white rounded-lg p-2 mb-1.5 shadow-sm">
              <TrendingUp className="h-3 w-3 text-primary mb-1" />
              <p className="text-base font-black leading-none">96%</p>
              <p className="text-[8px] text-gray-500 mt-1">Levenslange waarde</p>
              <div className="flex items-end gap-0.5 h-8 mt-2">
                <div className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t" style={{ height: "40%" }} />
                <div className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t" style={{ height: "62%" }} />
                <div className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t" style={{ height: "85%" }} />
                <div className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t" style={{ height: "100%" }} />
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 shadow-sm">
              <svg viewBox="0 0 100 30" className="w-full h-7" preserveAspectRatio="none">
                <polyline
                  points="0,22 14,16 28,24 42,11 56,18 70,8 84,14 100,10"
                  fill="none"
                  stroke="#3E788E"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Phone mockup */}
      <div className="absolute -bottom-2 -right-2 w-32 bg-[#0f1f24] rounded-[18px] p-1.5 shadow-2xl border border-primary/40">
        <div className="bg-primary rounded-[14px] p-2.5">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="bg-white rounded p-0.5">
              <GearIcon className="h-3 w-3" />
            </div>
            <span className="text-white font-bold text-[10px]">Demo Gym</span>
          </div>
          <div className="space-y-1 mb-2">
            {phoneMenu.map(({ label, Icon }) => (
              <div
                key={label}
                className="bg-white/15 backdrop-blur rounded-md p-1.5 flex items-center gap-1.5"
              >
                <Icon className="h-3 w-3 text-white flex-shrink-0" />
                <span className="text-white text-[9px]">{label}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-1">
            <button className="bg-white text-primary text-[9px] font-bold py-1.5 rounded">
              Aanmelden
            </button>
            <button className="bg-accent text-dark text-[9px] font-bold py-1.5 rounded flex items-center justify-center gap-0.5">
              <RotateCw className="h-2.5 w-2.5" />
              Verlengen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
