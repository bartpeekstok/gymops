import type { Metadata } from "next";
import { PrivacyPage } from "@/components/site";

export const metadata: Metadata = {
  title: "Privacyverklaring — GymOps",
};

export default function Page() { return <PrivacyPage />; }
