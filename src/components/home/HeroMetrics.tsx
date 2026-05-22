"use client";

import { Clock, FileText, Rocket, Target } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { mertircs } from "./data";

const metricIcons = [Target, Clock, FileText, Rocket];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
  },
};

export function HeroMetrics() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid w-full grid-cols-2 gap-y-10 sm:gap-12 lg:grid-cols-4"
    >
      {mertircs.map((metric, i) => {
        const Icon = metricIcons[i];
        return (
          <motion.div
            key={metric.value}
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight text-dxy-ink leading-none">
              {metric.value}
            </h2>
            <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-dxy-muted">
              {Icon ? (
                <motion.span variants={iconVariants} className="inline-flex">
                  <Icon
                    className="size-3 text-dxy-primary shrink-0"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </motion.span>
              ) : null}
              <span>{metric.description}</span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
