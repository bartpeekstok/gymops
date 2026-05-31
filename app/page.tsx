import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import OdometerBand from "@/components/sections/OdometerBand";
import EverythingYouNeed from "@/components/sections/EverythingYouNeed";
import HandwrittenCard from "@/components/sections/HandwrittenCard";
import ConnectedNetwork from "@/components/sections/ConnectedNetwork";
import IntegrationOrbit from "@/components/sections/IntegrationOrbit";
import QuoteSection from "@/components/sections/QuoteSection";
import TestimonialWall from "@/components/sections/TestimonialWall";
import PricingTeaser from "@/components/sections/PricingTeaser";
import CtaBanner from "@/components/sections/CtaBanner";
import FlowScripts from "@/components/FlowScripts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <OdometerBand />
      <EverythingYouNeed />
      <HandwrittenCard />
      <ConnectedNetwork />
      <IntegrationOrbit />
      <QuoteSection />
      <TestimonialWall />
      <PricingTeaser />
      <CtaBanner />
      <FlowScripts />
    </>
  );
}
