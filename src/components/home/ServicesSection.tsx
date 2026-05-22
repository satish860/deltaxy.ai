"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { WaveMark } from "./AboutSection";

const services = [
  {
    number: "01",
    duration: "10 days",
    title: "Document Accuracy Audit",
    body: "We assess one high-friction document workflow and deliver a precise report on accuracy gaps, time leakage, and what a production-ready system would require.",
    label: "What we deliver",
    items: [
      "Workflow mapping & time analysis",
      "Accuracy baseline & gap report",
      "Edge case inventory",
      "Production readiness assessment",
    ],
    cta: { label: "Discuss this engagement", href: "/contact" },
  },
  {
    number: "02",
    duration: "30 days",
    title: "Workflow Automation Sprint",
    body: "We build and validate a working automation for one workflow — including review steps, structured outputs, and measurable KPIs.",
    label: "What we ship",
    items: [
      "Working automation prototype",
      "Reviewable outputs with confidence scores",
      "Error analysis & remediation guide",
      "KPI baseline & target metrics",
    ],
    cta: { label: "Discuss this engagement", href: "/contact" },
  },
  {
    number: "03",
    duration: "6 weeks",
    title: "Production Rollout",
    body: "For proven workflows, we implement a production-grade system — reviewed, auditable, and integrated into your existing tools and processes.",
    label: "What we implement",
    items: [
      "Production-grade automation",
      "Human review & triage workflows",
      "Source traceability & audit trails",
      "Team training & operational handoff",
    ],
    cta: { label: "Discuss this engagement", href: "/contact" },
  },
];

const ladderContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
      delayChildren: 0.25,
    },
  },
};

const innerVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const listContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const arrowVariants: Variants = {
  rest: { x: 0 },
  hovered: { x: 4, transition: { duration: 0.25, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="w-[85%] mx-auto space-y-24">
        {/* Header */}
        <div className="flex items-start gap-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-dxy-ink mt-2"
          >
            <WaveMark className="h-2.5 w-7 text-dxy-primary" />
            <span>Engagement tiers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl leading-[1.15] tracking-tight"
          >
            <span className="text-dxy-muted font-light">Three tiers, designed to </span>
            <span className="font-bold text-dxy-ink">prove value before scale.</span>
          </motion.h2>
        </div>

        {/* Ladder */}
        <motion.div
          variants={ladderContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {services.map((s, i) => {
            const isLast = i === services.length - 1;
            return (
              <motion.article
                key={s.number}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
                className={`relative flex flex-col rounded-[24px] p-8 lg:p-9 overflow-hidden ${isLast
                  ? "bg-dxy-primary text-dxy-paper shadow-[0_30px_80px_-25px_rgba(58,53,48,0.35)]"
                  : "bg-dxy-paper text-dxy-ink border border-dxy-border"
                  }`}
              >
                {/* Duration pill + index */}
                <motion.div
                  variants={innerVariants}
                  className="relative flex items-center justify-between mb-10"
                >
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] ${isLast
                      ? "bg-dxy-paper/15 text-dxy-paper"
                      : "bg-dxy-primary/10 text-dxy-primary"
                      }`}
                  >
                    <motion.span
                      aria-hidden
                      className={`h-1.5 w-1.5 rounded-full ${isLast ? "bg-dxy-paper" : "bg-dxy-primary"}`}
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {s.duration}
                  </span>
                  <span className={`relative text-lg font-black ${isLast ? "text-dxy-paper/60" : "text-dxy-muted"}`}>
                    {s.number}
                  </span>
                </motion.div>

                <motion.h3
                  variants={innerVariants}
                  className={`relative text-2xl lg:text-[1.75rem] font-semibold leading-[1.15] tracking-tight mb-4 max-w-[18ch] ${isLast ? "text-dxy-paper" : "text-dxy-ink"
                    }`}
                >
                  {s.title}
                </motion.h3>
                <motion.p
                  variants={innerVariants}
                  className={`relative text-[15px] leading-relaxed mb-8 ${isLast ? "text-dxy-paper/80" : "text-dxy-muted"
                    }`}
                >
                  {s.body}
                </motion.p>

                <motion.div
                  variants={innerVariants}
                  className={`relative mt-auto border-t pt-6 ${isLast ? "border-dxy-paper/20" : "border-dxy-border"
                    }`}
                >
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.14em] mb-4 ${isLast ? "text-dxy-paper/70" : "text-dxy-muted"
                      }`}
                  >
                    {s.label}
                  </p>
                  <motion.ul
                    variants={listContainer}
                    className="space-y-2.5 mb-7 pl-3.5"
                  >
                    {s.items.map((item) => (
                      <motion.li
                        key={item}
                        variants={listItem}
                        className={`text-[13.5px] list-disc leading-relaxed ${isLast ? "text-dxy-paper/90" : "text-dxy-ink/85"
                          }`}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div initial="rest" whileHover="hovered" animate="rest" className="inline-block">
                    <Link
                      href={s.cta.href}
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${isLast
                        ? "text-dxy-paper hover:text-dxy-paper/80"
                        : "text-dxy-ink hover:text-dxy-primary"
                        }`}
                    >
                      <span>{s.cta.label}</span>
                      <motion.span aria-hidden variants={arrowVariants}>
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
