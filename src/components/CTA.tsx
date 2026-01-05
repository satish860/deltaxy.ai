import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb orb-purple w-[300px] h-[300px] md:w-[600px] md:h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-card p-6 sm:p-12 md:p-16 text-center">
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Eliminate Document Drudgery?
          </h2>

          {/* Subtext */}
          <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how AI agents can transform your document workflows.
            No sales pitch - just a conversation about your challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              <span>Book a Call</span>
            </Link>
            <a
              href="mailto:hello@deltaxy.ai"
              className="btn-secondary text-lg"
            >
              Email Us
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#222]">
            <p className="text-xs sm:text-sm text-white/40 mb-4">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-white/30">
              <span className="text-sm sm:text-lg font-semibold">Grant Thornton</span>
              <span className="text-sm sm:text-lg font-semibold">Agami</span>
              <span className="text-sm sm:text-lg font-semibold">World Bank</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
