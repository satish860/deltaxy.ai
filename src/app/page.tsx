import { Hero } from "@/components/Hero";
import { ClientCarousel } from "@/components/ClientCarousel";
import { WhatWeDo } from "@/components/WhatWeDo";
import { CaseStudies } from "@/components/CaseStudies";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientCarousel />
      <div className="section-divider" />
      <WhatWeDo />
      <div className="section-divider" />
      <CaseStudies />
      <div className="section-divider" />
      <Process />
      <div className="section-divider" />
      <CTA />
    </>
  );
}
