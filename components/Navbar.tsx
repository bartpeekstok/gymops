"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import Button from "./ui/Button";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-page h-[72px] flex items-center justify-between">
        <Logo />

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] font-medium transition-colors flex items-center gap-1 ${
                  active ? "text-primary" : "text-dark hover:text-primary"
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#"
            className="text-primary font-medium hover:text-primary-dark transition-colors text-[15px]"
          >
            Inloggen
          </Link>
          <Button variant="primary" href="/demo">
            Plan een demo
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="container-page py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-dark hover:text-primary py-2 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#" className="text-primary py-2 font-medium">
              Inloggen
            </Link>
            <Button variant="primary" href="/demo" className="mt-2">
              Plan een demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
