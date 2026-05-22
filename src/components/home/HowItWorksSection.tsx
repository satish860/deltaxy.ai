"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { WaveMark } from "./AboutSection";

const ACCENT = "#374A34";

const steps = [
  {
    title: "Executive Intake",
    body: "Define business objective, risk constraints, and success metrics directly with DeltaXY leadership.",
  },
  {
    title: "Proof",
    body: "We assess your workflow and return a measurable proof of what can be automated — and what can't.",
  },
  {
    title: "Decision",
    body: "You decide whether to proceed based on clear evidence, not a pitch.",
  },
  {
    title: "Scale",
    body: "We implement and integrate the workflow into production with measurable KPIs and operational handoff.",
  },
];

function CornerBrackets({ size = 10, thickness = 1.5 }: { size?: number; thickness?: number }) {
  const base = {
    position: "absolute" as const,
    width: size,
    height: size,
    borderColor: ACCENT,
    pointerEvents: "none" as const,
  };
  return (
    <>
      <span aria-hidden style={{ ...base, top: -4, left: -4, borderLeft: `${thickness}px solid ${ACCENT}`, borderTop: `${thickness}px solid ${ACCENT}` }} />
      <span aria-hidden style={{ ...base, top: -4, right: -4, borderRight: `${thickness}px solid ${ACCENT}`, borderTop: `${thickness}px solid ${ACCENT}` }} />
      <span aria-hidden style={{ ...base, bottom: -4, left: -4, borderLeft: `${thickness}px solid ${ACCENT}`, borderBottom: `${thickness}px solid ${ACCENT}` }} />
      <span aria-hidden style={{ ...base, bottom: -4, right: -4, borderRight: `${thickness}px solid ${ACCENT}`, borderBottom: `${thickness}px solid ${ACCENT}` }} />
    </>
  );
}

export function HowItWorksSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>(() => steps.map(() => false));

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.5;
      const p = Math.max(0, Math.min(1, (anchor - rect.top) / rect.height));
      setProgress(p);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealed((prev) => {
              if (prev[i]) return prev;
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        // trigger when the step crosses into the top 55% of the viewport
        { threshold: 0, rootMargin: "0px 0px -45% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="how-it-works"
      className="py-24"
    >
      <div className="w-[85%] mx-auto">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:gap-12 lg:gap-24">
          {/* Sticky left intro */}
          <div className="md:sticky md:top-32 md:self-start flex flex-col gap-3">
            {/* <h3 className="mb-3 text-sm uppercase font-semibold text-dxy-muted tracking-wider">
              How engagement works
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
            <h2 className="text-3xl leading-relaxed font-boldonse">
              <span>A proven &amp; effective </span>
              <span className="text-dxy-primary">workflow process.</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-dxy-muted max-w-md">
              We dig deep into your goals, constraints, and success metrics to align on strategy and direction.
            </p>
          </div>

          {/* Right timeline */}
          <div ref={timelineRef} className="relative">
            {/* Base connector */}
            <div
              aria-hidden
              className="absolute left-[19px] top-10 bottom-10 w-px bg-dxy-border"
            />
            {/* Animated coral fill */}
            <div
              aria-hidden
              className="absolute left-[18px] top-10 w-[2px] transition-[height] duration-200 ease-out"
              style={{
                height: `calc((100% - 5rem) * ${progress})`,
                background: ACCENT,
              }}
            />

            <div className="flex flex-col gap-20">
              {steps.map((step, i) => {
                const isOpen = revealed[i];
                return (
                  <div
                    key={step.title}
                    ref={(el) => {
                      stepRefs.current[i] = el;
                    }}
                    className="flex items-start gap-8"
                  >
                    <div
                      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-dxy-paper font-medium transition-colors duration-500 font-boldonse text-xs"
                      style={{
                        borderColor: isOpen ? ACCENT : "var(--dxy-border)",
                        color: isOpen ? "var(--dxy-ink)" : "var(--dxy-muted)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div
                      className={
                        "relative max-w-[440px] px-3 py-1 transition-all duration-700 ease-out" +
                        (isOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3")
                      }
                    >
                      <h3 className="text-[1.35rem] font-semibold tracking-tight leading-tight text-dxy-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-dxy-muted">
                        {step.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
