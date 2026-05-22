"use client";

import { motion } from "motion/react";

const logos = [
  { src: "/logos/gt-logo.svg", alt: "Grant Thornton", height: "h-7 sm:h-8" },
  { src: "/logos/agami-logo.svg", alt: "Agami", height: "h-6 sm:h-7" },
];

const track = Array.from({ length: 6 }, () => logos).flat();

export function LogosSection() {
  return (
    <section className="bg-dxy-paper py-12 sm:py-16">
      <div className="w-[85%] mx-auto">
        <div className="flex items-center gap-8 sm:gap-12 lg:gap-20">
          <p className="shrink-0 max-w-[160px] text-xs sm:text-sm leading-relaxed text-dxy-muted">
            Brands we've helped
            <br />
            implement AI:
          </p>

          <div
            className="relative flex-1 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
              className="flex items-center gap-12 sm:gap-16 w-max"
            >
              {[...track, ...track].map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.height} w-auto opacity-60 grayscale shrink-0 select-none pointer-events-none`}
                  draggable={false}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
