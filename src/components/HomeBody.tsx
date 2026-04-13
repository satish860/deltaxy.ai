"use client";

import { HeroSection } from "./home/HeroSection";
import { WhoThisIsForSection } from "./home/WhoThisIsForSection";
import { LogosSection } from "./home/LogosSection";
import { IndustriesSection } from "./home/IndustriesSection";
import { OutcomesSection } from "./home/OutcomesSection";
import { ServicesSection } from "./home/ServicesSection";
import { TestimonialsSection } from "./home/TestimonialsSection";
import { HowItWorksSection } from "./home/HowItWorksSection";
import { WhyDeltaxySection } from "./home/WhyDeltaxySection";
import { FinalCtaSection } from "./home/FinalCtaSection";

export function HomeBody() {
  return (
    <div className="home-shell">
      <HeroSection />
      <WhoThisIsForSection />
      <LogosSection />
      <IndustriesSection />
      <OutcomesSection />
      <ServicesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <WhyDeltaxySection />
      <FinalCtaSection />
    </div>
  );
}
