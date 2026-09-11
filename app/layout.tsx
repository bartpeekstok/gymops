import type { Metadata } from "next";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "GymOps — Elke lead opgevolgd. Elk lid gezien.",
  description:
    "GymOps: leadopvolging, ledenbehoud en team-aansturing voor coaching gyms. In het Nederlands, gekoppeld aan SportBit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
