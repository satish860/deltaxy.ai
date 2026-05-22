"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { WaveMark } from "./AboutSection";

function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.98v10h-9.98z" />
    </svg>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="h-10 w-10 shrink-0 rounded-full bg-linear-to-br from-dxy-accent to-dxy-sage flex items-center justify-center text-dxy-paper text-xs font-semibold">
      {initials}
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const bentoContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const mainCardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const innerFade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const highlightColumn: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const highlightCard: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const quoteIconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="w-[85%] mx-auto">
        <div className="max-w-[720px] mb-10 sm:mb-12 gap-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-dxy-ink mb-10"
          >
            <WaveMark className="h-2.5 w-7 text-dxy-primary" />
            <span>Client stories</span>
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl leading-relaxed font-boldonse text-dxy-ink"
          >
            What our <span className="text-dxy-primary">clients</span> say
          </motion.h2>
        </div>

        {/* Bento container */}
        <motion.div
          variants={bentoContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="rounded-[32px] border border-dxy-border bg-dxy-accent-light/10 p-3 sm:p-4 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-3 sm:gap-4">
            {/* LEFT — main tall testimonial */}
            <motion.article
              variants={mainCardVariants}
              className="rounded-[24px] bg-dxy-paper p-7 flex flex-col gap-6 min-h-[380px]"
            >
              <motion.div variants={quoteIconVariants}>
                <QuoteIcon className="h-8 w-8 text-dxy-primary" />
              </motion.div>

              <motion.blockquote
                variants={innerFade}
                className="text-base leading-8 text-dxy-ink flex-1"
              >
                &ldquo;We partnered with Vedhverse (deltaxy.ai) on an automated
                processing tool for aircraft utilisation reports. From the
                beginning, they impressed us with their professionalism, speed
                and problem solving capabilities. The solution they delivered
                has streamlined our process and driven efficiencies.
              </motion.blockquote>

              <motion.blockquote
                variants={innerFade}
                className="text-base leading-7 text-dxy-ink"
              >
                What stood out the most was their deep technical
                expertise, clear communication and responsiveness. We would
                highly recommend them to any organization looking for reliable
                AI-driven solutions.&rdquo;
              </motion.blockquote>

              <motion.div
                variants={innerFade}
                className="flex items-center justify-between gap-4 pt-2"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Avatar initials="LG" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-dxy-ink truncate">
                      Liam Gleeson
                    </p>
                    <p className="text-xs text-dxy-muted truncate">
                      Director — Aviation Advisory, Grant Thornton Ireland
                    </p>
                  </div>
                </div>
                <Image src="/logos/gt-logo-2.svg" alt="GT Logo" width={25} height={25} />
              </motion.div>
            </motion.article>

            {/* RIGHT column */}
            <motion.div
              variants={highlightColumn}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    title: "Professionalism & Speed",
                    caption: "What clients notice first",
                  },
                  {
                    title: "Deep Technical Expertise",
                    caption: "Built on years of AI engineering",
                  },
                  {
                    title: "Clear Communication",
                    caption: "Keeps everyone aligned throughout the project.",
                  },
                ].map((item) => (
                  <motion.article
                    key={item.title}
                    variants={highlightCard}
                    whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                    className="rounded-[24px] bg-dxy-paper p-5 flex flex-col gap-2"
                  >
                    <QuoteIcon className="h-5 w-5 text-dxy-primary mb-2" />
                    <p className="text-base text-dxy-ink font-medium flex-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-dxy-muted">{item.caption}</p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
