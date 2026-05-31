import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import OdometerBand from "@/components/sections/OdometerBand";
import EverythingYouNeed from "@/components/sections/EverythingYouNeed";
import AppBento from "@/components/sections/AppBento";
import HandwrittenCard from "@/components/sections/HandwrittenCard";
import ConnectedNetwork from "@/components/sections/ConnectedNetwork";
import QuoteSection from "@/components/sections/QuoteSection";
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
      <AppBento />
      <HandwrittenCard />
      <ConnectedNetwork />
      <QuoteSection />
      <PricingTeaser />
      <CtaBanner />
      <FlowScripts />
    </>
  );
}
