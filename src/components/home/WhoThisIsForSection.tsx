"use client";

import { StaggerGrid } from "./hooks";

const bullets = [
  "High-volume document operations",
  "High cost of errors (financial, regulatory, reputational)",
  "Fragmented review workflows across email, spreadsheets, and systems",
  "Pressure to move from pilot to production quickly",
];

export function WhoThisIsForSection() {
  return (
    <section className="border-t border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/65">
      <div className="dxy-container py-8 sm:py-10 text-center">
        <h2 className="font-serif text-[clamp(1.35rem,3.8vw,2.35rem)] leading-tight text-[color:var(--dxy-ink)]">
          Built for Heads of Advisory, Compliance, Operations, Data, and AI
        </h2>
        <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-7 text-[color:var(--dxy-muted)] sm:text-base sm:leading-8">
          Who own outcomes, budgets, and risk.
        </p>
      </div>
      <div className="dxy-container pb-8 sm:pb-10">
        <StaggerGrid className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bullets.map((bullet, i) => (
            <div
              key={bullet}
              className={
                "dxy-card dxy-stagger-item flex items-start gap-3 p-4 sm:p-5 dxy-fade-up-" +
                Math.min(i + 1, 4)
              }
              style={{ "--stagger-i": i } as React.CSSProperties}
            >
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--dxy-sage)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[14px] leading-7 text-[color:var(--dxy-muted)]">
                {bullet}
              </span>
            </div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
