import type { Metadata } from "next";
import { HomeNieuwPage } from "@/components/site";

/* Voorbeeld van de homepage in de nieuwe insteek (1 box, 1 miljoen).
   Bewust verborgen: niet in de nav, niet in Google. */
export const metadata: Metadata = {
  title: "Voorbeeld nieuwe homepage · GymOps",
  robots: { index: false, follow: false },
};

export default function Page() { return <HomeNieuwPage />; }
