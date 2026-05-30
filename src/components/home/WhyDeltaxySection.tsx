import { motion } from "motion/react";
import { WaveMark } from "./AboutSection";

const principles = [
  "Outcome Engineering discipline, not ad-hoc automation",
  "Production-first execution with measurable KPIs",
  "Designed for regulated environments where errors are expensive",
  "Built to be auditable, maintainable, and operationally adopted",
  "Focused team, direct delivery — no junior handoffs or bloated account management",
  "Earned expansion model: we scale only when outcomes are measured and verified",
];

export function WhyDeltaxySection() {
  const totalRows = Math.ceil(principles.length / 2);

  return (
    <section id="why-deltaxy" className="py-24">
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="">
          {/* <h3 className="mb-6 text-sm uppercase font-semibold text-dxy-muted tracking-wider">
            Why DeltaXY
          </h3> */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            // variants={labelVariants}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-dxy-ink mb-10"
          >
            <WaveMark className="h-2.5 w-7 text-dxy-primary" />
            <span>Why DeltaXY</span>
          </motion.div>
          <h2 className="text-2xl md:text-3xl leading-snug font-boldonse">
            We optimize{" "}
            <span className="text-dxy-primary">business outcomes.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-dxy-muted max-w-4xl">
            You work with a focused DeltaXY team that combines document AI
            engineering, workflow design, and domain-aware validation. We scale
            only when outcomes are measured and verified — if we don&apos;t
            create measurable value, you shouldn&apos;t continue.
          </p>
        </div>

        {/* Manifesto frame */}
        <div className="rounded-[32px] border border-dxy-border bg-dxy-accent-light/10 p-3 sm:p-4">
          <div className="rounded-[24px] bg-dxy-paper overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {principles.map((principle, i) => {
                const col = i % 2;
                const row = Math.floor(i / 2);
                const isLast = i === principles.length - 1;
                const isLastRow = row === totalRows - 1;
                const isFirstCol = col === 0;

                const cls = [
                  "group relative flex items-center md:items-start justify-center md:items-start gap-5 sm:gap-7 p-6 sm:p-9 transition-colors duration-300 hover:bg-dxy-accent-light/25",
                  !isLast && "border-b border-dxy-border",
                  isLastRow && "md:border-b-0",
                  isFirstCol && "md:border-r md:border-dxy-border",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <div key={principle} className={cls}>
                    {/* sage accent bar that grows on hover */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[3px] bg-dxy-primary transition-all duration-500 group-hover:h-[60%]"
                    />

                    <span className="text-3xl md:text-4xl font-boldonse text-dxy-primary/25 group-hover:text-dxy-primary transition-colors duration-300 leading-none shrink-0 tabular-nums w-14 md:w-16">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <p className="text-[15px] md:text-base leading-relaxed text-dxy-ink transition-transform duration-300 group-hover:translate-x-1">
                      {principle}
                    </p>

                    {/* corner arrow that fades in on hover */}
                    <svg
                      aria-hidden
                      className="absolute top-5 right-5 h-3.5 w-3.5 text-dxy-primary opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
