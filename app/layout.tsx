import type { Metadata } from "next";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "GymOps | Een gym die draait. Ook zonder jou.",
  description:
    "Een gym die draait, ook zonder jou. Leads, leden en ex-leden op één plek, gebouwd door twee gym-eigenaren. In het Nederlands, gekoppeld aan SportBit.",
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
