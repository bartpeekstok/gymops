import type { Metadata } from "next";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "GymOps | Een gym die draait. Ook zonder jou.",
  description:
    "Een gym die draait, ook zonder jou. Ledenbehoud, leadopvolging en team-aansturing op één plek. Gebouwd door twee gym-eigenaren. Werkt met en zonder SportBit.",
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
