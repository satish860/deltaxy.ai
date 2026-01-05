import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs - contained in absolute wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb orb-purple w-[300px] h-[300px] md:w-[600px] md:h-[600px] -top-[100px] md:-top-[200px] -left-[100px] md:-left-[200px] opacity-60" />
        <div className="gradient-orb orb-blue w-[250px] h-[250px] md:w-[500px] md:h-[500px] top-[20%] -right-[75px] md:-right-[150px] opacity-50" />
        <div className="gradient-orb orb-violet w-[200px] h-[200px] md:w-[400px] md:h-[400px] bottom-[10%] left-[10%] md:left-[20%] opacity-40" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#222] bg-[#0d0d0d]/80 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-white/70">
            Now serving aviation, compliance & legal teams
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up delay-100">
          AI Agents That Learn.
          <br />
          <span className="text-gradient">Outcomes You Can Measure.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
          We build reliable AI agents that eliminate document drudgery across
          aviation, compliance, and legal domains. No hype. Just measurable
          results.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
          <Link href="/contact" className="btn-primary text-lg">
            <span>Book a Call</span>
          </Link>
          <Link href="#case-studies" className="btn-secondary text-lg">
            View Case Studies
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-up delay-400">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-gradient">
              40+
            </div>
            <div className="text-xs md:text-sm text-white/50 mt-1">Hours Saved Weekly</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-gradient">
              95%
            </div>
            <div className="text-xs md:text-sm text-white/50 mt-1">Extraction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-gradient">
              6 wk
            </div>
            <div className="text-xs md:text-sm text-white/50 mt-1">Avg. Deployment</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
