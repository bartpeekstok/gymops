import type { Metadata } from "next";
import { WebinarPage } from "@/components/site";

export const metadata: Metadata = {
  title: "Webinar: Twee banen, één salaris | GymOps",
  description:
    "Gratis webinar voor gym-eigenaren op woensdag 2 december 2026 om 12:30 uur. Jeroen en Bart laten zien hoe je als eigenaar uit de operatie komt, met je eigen cijfers.",
};

export default function Page() { return <WebinarPage />; }
