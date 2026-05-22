import { ArrowRight } from "lucide-react";
import { LogosSection } from "./LogosSection";
import { workingSessionMailto } from "./data";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-between h-[90vh] w-full">
      <div className="h-11/12 flex items-center">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-8">
          <h1 className="font-boldonse leading-relaxed text-5xl dxy-fade-up dxy-fade-up-2">
            Outcome Engineering for Regulated, Document-Heavy Operations
          </h1>
          <p className="dxy-fade-up dxy-fade-up-2">
            Most enterprise AI efforts fail in production — not because
            models are weak, but because workflows are not engineered
            for accuracy, controls, and adoption.
          </p>

          <a href={workingSessionMailto} className="bg-background h-10 rounded-sm flex items-center w-40 justify-between px-1 uppercase text-sm font-semibold border">
            <span className="flex-1">Book a call</span>
            <span className="h-8 w-8 flex items-center justify-center bg-dxy-primary rounded-sm">
              <ArrowRight className="size-4 text-dxy-paper" strokeWidth={1.5} />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full">
        <LogosSection />
      </div>
    </section>
  );
}
