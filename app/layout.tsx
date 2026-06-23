import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GymOps — Elke lead opgevolgd. Elk lid gezien.",
  description:
    "GymOps Flow: leadopvolging, ledenbehoud en team-aansturing voor coaching gyms. In het Nederlands, gekoppeld aan SportBit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
