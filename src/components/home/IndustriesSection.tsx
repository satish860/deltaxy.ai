"use client";

import { FileText, type LucideIcon, Plane, Shield } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { WaveMark } from "./AboutSection";

type Industry = {
  tag: string;
  href: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  accentBg: string;
  brandLabel: string;
  icon: LucideIcon;
};

const industries: Industry[] = [
  {
    tag: "Aviation",
    href: "/aviation",
    title:
      "Turning 200+ Leases Into Actionable Intelligence.",
    description:
      "How AI agents automated aircraft utilization tracking for a global professional services firm.",
    stats: [
      { value: "40x", label: "Hours saved weekly" },
      { value: "200+", label: "Documents processed monthly" },
    ],
    accentBg:
      "linear-gradient(135deg, #1f3a5f 0%, #2c5282 55%, #4a90b8 100%)",
    brandLabel: "AERO",
    icon: Plane,
  },
  {
    tag: "Compliance",
    href: "/compliance",
    title:
      "Regulatory filings without missed edge cases.",
    description:
      "Risk assessments, policy mapping, and audit trails for institutions where a missed clause becomes an incident.",
    stats: [
      { value: "500+", label: "Regulations Mapped" },
      { value: "90%", label: "Accuracy Rate" },
    ],
    accentBg:
      "linear-gradient(135deg, #4a3d2e 0%, #8b7e6a 55%, #b8ab96 100%)",
    brandLabel: "POLICY",
    icon: Shield,
  },
  {
    tag: "Legal",
    href: "/legal",
    title:
      "Contract review and clause extraction at scale.",
    description:
      "Due diligence with human-in-the-loop oversight. Decisions are auditable, not opaque, and built to be defended.",
    stats: [
      { value: "5×", label: "Faster contract turnaround" },
      { value: "100%", label: "Reviewable decision trail" },
    ],
    accentBg:
      "linear-gradient(135deg, #2d3d2c 0%, #4e5b4d 55%, #667662 100%)",
    brandLabel: "LEX",
    icon: FileText,
  },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-24"
    >
      <div className="w-[85%] mx-auto grid grid-cols-12 gap-16">
        {/* Header */}
        <div className="max-w-[760px] mb-12 sm:mb-16 col-span-12 lg:col-span-5 lg:sticky lg:top-20 lg:self-start">
          {/* <h3 className="mb-6 text-sm uppercase font-semibold text-dxy-muted tracking-wider">
            Who we serve
          </h3> */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            // variants={labelVariants}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-dxy-ink mb-10"
          >
            <WaveMark className="h-2.5 w-7 text-dxy-primary" />
            <span>Who we serve</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl leading-relaxed font-boldonse">
            AI workflows, built for{" "}
            <span className="text-dxy-primary">your industry.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-dxy-muted max-w-[680px]">
            Every domain has its own edge cases, compliance standards, and
            failure modes. We build deep domain-aware automations — not generic
            templates.
          </p>
        </div>

        {/* Sticky stack */}
        <div className="col-span-12 lg:col-span-7">
          {industries.map((c, i) => (
            <div
              key={c.href}
              className="sticky"
              style={{
                top: `${5 + i * 1.5}rem`,
                marginBottom: i === industries.length - 1 ? 0 : "1.5rem",
                paddingTop: i === 0 ? 0 : "1.5rem",
              }}
            >
              <article
                className={`relative grid grid-cols-1  gap-8 lg:gap-10 rounded-[28px] p-10 overflow-hidden shadow-[0_30px_80px_-25px_rgba(58,53,48,0.2)] ${i === 1 ? 'bg-dxy-primary text-dxy-paper' : 'bg-dxy-paper'}`}
                style={{ minHeight: "min(450px, 75vh)" }}
              >
                {/* Left content */}
                <div className="flex flex-col">
                  <span className="text-sm mb-5 sm:mb-7">
                    {c.tag}
                  </span>

                  <h3 className="text-[1.65rem] sm:text-3xl lg:text-[2.4rem] font-semibold leading-[1.15] tracking-tight max-w-[560px]">
                    {c.title}
                  </h3>

                  <p className="mt-5 text-[15px] sm:text-base leading-relaxed max-w-[520px]">
                    {c.description}
                  </p>

                  {/* Stats */}
                  <div className="mt-auto grid grid-cols-2 gap-6 sm:gap-10 pt-10 sm:pt-12">
                    {c.stats.map((s) => (
                      <div key={s.label}>
                        <p className="text-4xl sm:text-5xl font-semibold tracking-tight">
                          {s.value}
                        </p>
                        <p className="mt-2 text-[13px] sm:text-sm">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
