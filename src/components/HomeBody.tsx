"use client";

import { HeroSection } from "./home/HeroSection";
import { AboutSection } from "./home/AboutSection";
import { WhoThisIsForSection } from "./home/WhoThisIsForSection";
import { LogosSection } from "./home/LogosSection";
import { IndustriesSection } from "./home/IndustriesSection";
import { OutcomesSection } from "./home/OutcomesSection";
import { ServicesSection } from "./home/ServicesSection";
import { ProductsSection } from "./home/ProductsSection";
import { TestimonialsSection } from "./home/TestimonialsSection";
import { HowItWorksSection } from "./home/HowItWorksSection";
import { WhyDeltaxySection } from "./home/WhyDeltaxySection";
import { FinalCtaSection } from "./home/FinalCtaSection";

export function HomeBody() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      {/* <WhoThisIsForSection /> */}
      {/* <LogosSection /> */}
      <IndustriesSection />
      {/* <OutcomesSection /> */}
      <ServicesSection />
      <ProductsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <WhyDeltaxySection />
      {/* <FinalCtaSection /> */}
    </div>
  );
}
