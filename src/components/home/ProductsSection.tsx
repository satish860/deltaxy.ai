"use client";

import { Check, Lock } from "lucide-react";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { WaveMark } from "./AboutSection";

const roadmap = [
  {
    index: "02",
    category: "Compliance ops",
    eta: "Drafting · 2026",
    notifySubject: "Notify me — Compliance product",
  },
  {
    index: "03",
    category: "Aviation ops",
    eta: "Concept · 2026",
    notifySubject: "Notify me — Aviation product",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.09,
      delayChildren: 0.25,
    },
  },
};

const innerFade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const shelfContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const shelfItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function SheetMock() {
  const rows = [
    { row: "1", a: "Rent", b: "$4.2M", highlight: true },
    { row: "2", a: "Term", b: "96 mo." },
    { row: "3", a: "CPI", b: "3.2%" },
  ];
  return (
    <div className="rounded-[14px] bg-dxy-paper text-dxy-ink p-4 sm:p-5">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-dxy-muted mb-3">
        <span>Sheet · Audit Workbook</span>
        <span className="font-mono lowercase tracking-normal">B1</span>
      </div>
      <div className="grid grid-cols-[28px_1fr_1.1fr] gap-px bg-dxy-border rounded-[8px] overflow-hidden text-[11.5px]">
        <div className="bg-dxy-paper px-2 py-1.5" />
        <div className="bg-dxy-paper px-2 py-1.5 text-dxy-muted text-center">A</div>
        <div className="bg-dxy-paper px-2 py-1.5 text-dxy-muted text-center">B</div>
        {rows.map((r) => (
          <ROW key={r.row} {...r} />
        ))}
      </div>
    </div>
  );
}

function ROW({
  row,
  a,
  b,
  highlight,
}: {
  row: string;
  a: string;
  b: string;
  highlight?: boolean;
}) {
  const cellBase = "bg-dxy-paper px-2 py-1.5";
  const valueCell = highlight
    ? `${cellBase} bg-dxy-primary/8 text-dxy-ink font-semibold relative`
    : cellBase;
  return (
    <>
      <div className={`${cellBase} text-dxy-muted text-center`}>{row}</div>
      <div className={cellBase}>{a}</div>
      <div className={valueCell}>
        {b}
        {highlight ? (
          <sup className="ml-0.5 text-[9px] text-dxy-primary font-bold">[1]</sup>
        ) : null}
      </div>
    </>
  );
}

function DocMock() {
  return (
    <div className="rounded-[14px] bg-dxy-paper text-dxy-ink p-4 sm:p-5">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-dxy-muted mb-3">
        <span>Lease-2025.pdf</span>
        <span className="font-mono lowercase tracking-normal">p. 14</span>
      </div>
      <div className="space-y-2">
        <div className="h-1.5 rounded-full bg-dxy-border w-full" />
        <div className="h-1.5 rounded-full bg-dxy-border w-11/12" />
        <div className="rounded-[6px] bg-dxy-primary/8 px-2 py-1.5 text-[11.5px] leading-relaxed text-dxy-ink">
          <span className="text-dxy-primary font-bold mr-1">[1]</span>
          annual base rent of{" "}
          <span className="font-semibold">$4,200,000</span> payable in
          quarterly instalments…
        </div>
        <div className="h-1.5 rounded-full bg-dxy-border w-9/12" />
        <div className="h-1.5 rounded-full bg-dxy-border w-10/12" />
        <div className="h-1.5 rounded-full bg-dxy-border w-8/12" />
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="py-24">
      <div className="w-[85%] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="max-w-[820px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-dxy-ink mb-8"
          >
            <WaveMark className="h-2.5 w-7 text-dxy-primary" />
            <span>Products</span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl leading-relaxed font-boldonse"
          >
            Tools we ship,{" "}
            <span className="text-dxy-primary">after we prove it.</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-dxy-muted max-w-[680px]"
          >
            When a workflow pattern is mature enough to standardize, we turn it
            into a tool — for the teams we serve, and others like them.
          </motion.p>
        </div>

        {/* Spotlight card */}
        <motion.article
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25, margin: "0px 0px -20% 0px" }}
          className="relative rounded-[32px] bg-dxy-primary text-dxy-paper p-7 sm:p-10 overflow-hidden shadow-[0_30px_80px_-25px_rgba(58,53,48,0.35)]"
        >
          {/* Meta strip */}
          <motion.div
            variants={innerFade}
            className="flex flex-wrap items-center justify-between gap-4 mb-8"
          >
            <div className="flex items-end gap-3">
              <span className="text-xl sm:text-2xl font-boldonse">AgentXL</span>
              {/* <span className="h-1 w-1 rounded-full bg-dxy-paper/40" /> */}
              <span className="text-xs uppercase tracking-[0.14em] text-dxy-paper/70 font-mono">
                v1.0
              </span>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dxy-paper/15 text-[11px] font-semibold uppercase tracking-[0.14em]">
              <motion.span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-dxy-paper"
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              Open Source
            </span>
          </motion.div>

          {/* Split visual */}
          <motion.div
            variants={innerFade}
            className="relative rounded-[20px] bg-dxy-paper/5 border border-dxy-paper/10 p-4 sm:p-6 mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <SheetMock />
              <DocMock />
            </div>

            {/* Citation connector — desktop only */}
            <div
              aria-hidden
              className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center pointer-events-none"
            >
              <span className="h-px w-6 bg-dxy-paper/30" />
              <span className="rounded-full bg-dxy-primary border border-dxy-paper/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-dxy-paper font-semibold whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                ↔ citation
              </span>
              <span className="h-px w-6 bg-dxy-paper/30" />
            </div>
          </motion.div>

          {/* Description + CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-[1.45fr_1fr] gap-6 md:gap-10 md:items-end">
            <motion.div variants={innerFade}>
              <h3 className="text-2xl sm:text-[1.7rem] font-semibold leading-[1.2] tracking-tight mb-3 max-w-[36ch]">
                Your Excel on one side. Your documents on the other.
              </h3>
              <p className="text-[15px] leading-relaxed text-dxy-paper/80 max-w-[55ch]">
                AgentXL cross-references spreadsheet rows against source PDFs,
                verifies the numbers, and writes the answer into the cell with
                a citation beside it — locally, no cloud.
              </p>
            </motion.div>

            <motion.div
              variants={innerFade}
              className="flex flex-wrap items-center gap-5 md:justify-end"
            >
              <Link
                href="https://agentxl.deltaxy.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-dxy-paper/80 hover:text-dxy-paper transition-colors inline-flex items-center gap-2"
              >
                Check out AgentXL
              </Link>
            </motion.div>
          </div>
        </motion.article>

        {/* Roadmap shelf */}
        <motion.div
          variants={shelfContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4, margin: "0px 0px -15% 0px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          <motion.div
            variants={shelfItem}
            className="rounded-[20px] bg-dxy-paper border border-dxy-border p-5 flex items-start gap-4"
          >
            <div className="h-9 w-9 shrink-0 rounded-full bg-dxy-primary text-dxy-paper flex items-center justify-center">
              <Check className="size-4" strokeWidth={2.25} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-boldonse text-dxy-muted">
                  01
                </span>
                <span className="font-semibold text-dxy-ink">AgentXL</span>
              </div>
              <p className="text-xs text-dxy-muted mt-1.5">
                Shipped · v1.0 · Open Source
              </p>
              <Link
                href="https://agentxl.deltaxy.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-dxy-primary hover:text-dxy-sage transition-colors"
              >
                Visit site <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>

          {roadmap.map((s) => (
            <motion.div
              key={s.index}
              variants={shelfItem}
              className="group rounded-[20px] border border-dashed border-dxy-border bg-dxy-accent-light/5 p-5 flex items-start gap-4 hover:bg-dxy-accent-light/10 transition-colors"
            >
              <div className="h-9 w-9 shrink-0 rounded-full border border-dashed border-dxy-border bg-dxy-paper/60 text-dxy-muted flex items-center justify-center group-hover:border-dxy-primary/40 group-hover:text-dxy-primary transition-colors">
                <Lock className="size-3.5" strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-boldonse text-dxy-muted">
                    {s.index}
                  </span>
                  <span className="font-semibold text-dxy-ink">
                    {s.category}
                  </span>
                </div>
                <p className="text-xs text-dxy-muted mt-1.5">{s.eta}</p>
                <Link
                  href={`mailto:satish@deltaxy.ai?subject=${encodeURIComponent(s.notifySubject)}`}
                  className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-dxy-primary hover:text-dxy-sage transition-colors"
                >
                  Notify me <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
