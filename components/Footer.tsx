import Link from "next/link";
import { Star } from "lucide-react";
import Logo from "./Logo";

type FooterItem = { label: string; href?: string };

const columns: { title: string; links: FooterItem[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Flow", href: "#" },
      { label: "Prijzen", href: "#" },
    ],
  },
  {
    title: "GymOps",
    links: [
      { label: "Over ons", href: "/over-ons" },
      { label: "Algemene voorwaarden" },
      { label: "Privacybeleid" },
    ],
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
              Jouw gym verdient een systeem dat voor je werkt.
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
              <h4 className="font-bold text-sm tracking-wider mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-off-white/80 hover:text-accent transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-off-white/80 text-sm">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-off-white/60">
          <span>© 2025 GymOps B.V.</span>
        </div>
      </div>
    </footer>
  );
}
