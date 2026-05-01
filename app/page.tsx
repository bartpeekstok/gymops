import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import EverythingYouNeed from "@/components/sections/EverythingYouNeed";
import CoreFeatures from "@/components/sections/CoreFeatures";
import GrowFeatures from "@/components/sections/GrowFeatures";
import TrainFeatures from "@/components/sections/TrainFeatures";
import WhyGymOps from "@/components/sections/WhyGymOps";
import SuccessStories from "@/components/sections/SuccessStories";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <EverythingYouNeed />
      <CoreFeatures />
      <GrowFeatures />
      <TrainFeatures />
      <WhyGymOps />
      <SuccessStories />
      <CtaBanner />
    </>
  );
}
