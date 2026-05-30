"use client";

import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { LogosSection } from "./LogosSection";
import { workingSessionMailto } from "./data";

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-between h-[90vh] w-full">
      <div className="h-11/12 flex items-center w-[90%] md:w-[85%]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="mx-auto max-w-4xl flex flex-col items-center text-center gap-8"
        >
          <motion.h1
            variants={fadeUp}
            className="font-boldonse leading-relaxed text-xl md:text-5xl"
          >
            Outcome Engineering for Regulated, Document-Heavy Operations
          </motion.h1>
          <motion.p variants={fadeUp}>
            Most enterprise AI efforts fail in production — not because
            models are weak, but because workflows are not engineered
            for accuracy, controls, and adoption.
          </motion.p>

          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={workingSessionMailto}
            className="group relative inline-flex items-center gap-3 h-11 rounded-full bg-dxy-primary pl-6 pr-1.5 uppercase text-sm font-semibold overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            {/* Sage fill sweep on hover */}
            <span className="absolute inset-0 -translate-x-full bg-dxy-sage transition-transform duration-500 ease-out group-hover:translate-x-0" />
            <span className="relative tracking-wide text-white">Book a call</span>
            <span className="relative h-8 w-8 flex items-center justify-center bg-dxy-paper rounded-full transition-transform duration-300 ease-out group-hover:translate-x-1">
              <ArrowRight className="size-4 text-dxy-primary" strokeWidth={1.75} />
            </span>
          </motion.a>
        </motion.div>
      </div>
      <div className="w-full">
        <LogosSection />
      </div>
    </section>
  );
}
