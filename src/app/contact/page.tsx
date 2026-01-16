import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact DeltaXY | Book a Call",
  description:
    "Book a 30-minute call to discuss how AI agents can transform your document workflows.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb orb-purple w-[250px] h-[250px] md:w-[500px] md:h-[500px] top-[10%] -left-[100px] md:-left-[200px] opacity-30" />
        <div className="gradient-orb orb-blue w-[200px] h-[200px] md:w-[400px] md:h-[400px] bottom-[20%] -right-[75px] md:-right-[150px] opacity-20" />
      </div>

      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">Contact</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s Talk
            </h1>
            <p className="text-xl text-white/70 max-w-xl mx-auto">
              Book a 30-minute call to discuss your document challenges. No
              sales pitch - just a conversation about whether AI agents are
              right for your use case.
            </p>
          </div>

          {/* Calendly Embed */}
          <div className="glass-card p-8 mb-12">
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
              {/* Calendly inline widget - replace URL with actual Calendly */}
              <iframe
                src="https://calendly.com/satish-deltaxy/30min"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a call with DeltaXY"
                className="min-h-[700px]"
              />
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="text-center">
            <div className="section-divider mb-8" />
            <h2 className="text-xl font-semibold mb-4">Prefer email?</h2>
            <p className="text-white/60 mb-4">
              Reach us directly at{" "}
              <a
                href="mailto:Satish@deltaxy.ai"
                className="text-gradient font-medium hover:opacity-80 transition-opacity"
              >
                Satish@deltaxy.ai
              </a>
            </p>
            <p className="text-sm text-white/40">
              We typically respond within 24 hours on business days.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 border-t border-[#222]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What to Expect
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#814ac8]/20 to-[#df7afe]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-gradient">1</span>
              </div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-sm text-white/60">
                We will learn about your document workflows and challenges.
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#814ac8]/20 to-[#df7afe]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-gradient">2</span>
              </div>
              <h3 className="font-semibold mb-2">Assessment</h3>
              <p className="text-sm text-white/60">
                We will discuss whether AI agents are a good fit for your use case.
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#814ac8]/20 to-[#df7afe]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-gradient">3</span>
              </div>
              <h3 className="font-semibold mb-2">Next Steps</h3>
              <p className="text-sm text-white/60">
                If there is a fit, we will outline a pilot project scope.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
