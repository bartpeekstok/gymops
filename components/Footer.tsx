import Link from "next/link";
import { Star } from "lucide-react";
import Logo from "./Logo";

const columns = [
  {
    title: "Product",
    links: ["Beheer", "Groei", "Training", "Prijzen", "Functies"],
  },
  {
    title: "Bronnen",
    links: ["Blog", "Evenementen", "Kennisbank", "Release-notities"],
  },
  {
    title: "GymOps",
    links: ["Over ons", "Werken bij ons", "Algemene voorwaarden", "Privacybeleid"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo variant="light" />
            <p className="text-off-white/80 text-sm mt-4 max-w-xs leading-relaxed">
              Placeholder tagline. Vervang met je eigen positionering.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-off-white/80">4.9/5</span>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-off-white/80 hover:text-accent transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-off-white/60">
          <span>© 2025 GymOps B.V.</span>
          <span>Adresregel placeholder, Plaats</span>
        </div>
      </div>
    </footer>
  );
}
