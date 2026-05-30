"use client";

import { motion, type Variants } from "motion/react";
import { HeroMetrics } from "./HeroMetrics";

export function WaveMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M1 5 C 5 1, 9 9, 13 5 S 21 1, 27 5" />
    </svg>
  );
}

const labelVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const phraseFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="w-[90%] md:w-[85%] mx-auto">
        {/* About + bio */}
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={labelVariants}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-dxy-ink mt-1.5"
          >
            <WaveMark className="h-2.5 w-7 text-dxy-primary" />
            <span>About</span>
          </motion.div>

          <div className="col-span-12 lg:col-span-10 space-y-12 md:space-y-24">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={headingContainer}
              className="text-xl md:text-3xl leading-[1.3] tracking-tight"
            >
              <motion.span variants={phraseFade} className="text-dxy-muted font-light">
                We engineer AI workflows for{" "}
              </motion.span>
              <motion.span variants={phraseFade} className="font-bold text-dxy-ink">
                regulated, document-heavy operations
              </motion.span>
              <motion.span variants={phraseFade} className="text-dxy-muted font-light">
                , built for the{" "}
              </motion.span>
              <motion.span variants={phraseFade} className="font-bold text-dxy-ink">
                accuracy, controls, and adoption
              </motion.span>
              <motion.span variants={phraseFade} className="text-dxy-muted font-light">
                {" "}that production demands.
              </motion.span>
            </motion.h2>

            {/* Metrics */}
            <HeroMetrics />
          </div>
        </div>
      </div>
    </section>
  );
}
