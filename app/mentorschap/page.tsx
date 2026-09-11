import type { Metadata } from "next";
import { MentorschapPage } from "@/components/site";

export const metadata: Metadata = {
  title: "Mentorschap: een mentor die meekijkt in jouw systeem | GymOps",
  description:
    "Bart of Jeroen als mentor, live meekijkend in jouw GymOps. Gerichte feedback en sturing op je leads, je verloop en je cijfers. 1-op-1, minimaal zes maanden, tien plekken.",
};

export default function Page() { return <MentorschapPage />; }
