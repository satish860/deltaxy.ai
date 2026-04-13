export function LogosSection() {
  return (
    <section className="border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-paper)]">
      <div className="dxy-container py-8 sm:py-10 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-[color:var(--dxy-muted)]">
          Trusted by industry leaders
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6">
          <img
            src="/logos/gt-logo.svg"
            alt="Grant Thornton"
            className="h-7 sm:h-8 w-auto opacity-60 transition-opacity duration-200 hover:opacity-100"
          />
          <img
            src="/logos/agami-logo.svg"
            alt="Agami"
            className="h-6 sm:h-7 w-auto opacity-60 transition-opacity duration-200 hover:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}
