import Link from "next/link";
import { Metadata } from "next";

interface CaseStudyProps {
  industry: string;
  client: string;
  title: string;
  subtitle: string;
  challenge: {
    title: string;
    content: string[];
  };
  solution: {
    title: string;
    content: string;
    features: {
      name: string;
      description: string;
    }[];
  };
  results: {
    metrics: {
      value: string;
      label: string;
    }[];
    quote?: {
      text: string;
      author?: string;
    };
  };
  ctaTitle: string;
  accentColor: string;
}

export function CaseStudyLayout({
  industry,
  client,
  title,
  subtitle,
  challenge,
  solution,
  results,
  ctaTitle,
  accentColor,
}: CaseStudyProps) {
  return (
    <article className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div
          className={`gradient-orb w-[600px] h-[600px] -top-[200px] -right-[200px] opacity-40`}
          style={{
            background: `linear-gradient(135deg, ${accentColor} 0%, #df7afe 100%)`,
          }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/#case-studies"
              className="hover:text-white transition-colors"
            >
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-white/70">{industry}</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#222] bg-[#0d0d0d]/80 mb-6">
            <span className="text-sm text-white/70">{industry}</span>
          </div>

          {/* Client */}
          <p className="text-white/50 mb-4">{client}</p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/70 max-w-2xl">{subtitle}</p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 border-t border-[#222]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">{challenge.title}</h2>
          <div className="space-y-4">
            {challenge.content.map((para, idx) => (
              <p key={idx} className="text-white/70 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 border-t border-[#222]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">{solution.title}</h2>
          <p className="text-white/70 leading-relaxed mb-8">{solution.content}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {solution.features.map((feature) => (
              <div key={feature.name} className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-3 text-gradient">
                  {feature.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 border-t border-[#222]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12">The Results</h2>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {results.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-white/50">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Quote */}
          {results.quote && (
            <blockquote className="glass-card p-8 border-l-4 border-[#814ac8]">
              <p className="text-lg text-white/80 italic mb-4">
                &quot;{results.quote.text}&quot;
              </p>
              {results.quote.author && (
                <cite className="text-sm text-white/50 not-italic">
                  - {results.quote.author}
                </cite>
              )}
            </blockquote>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#222]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">{ctaTitle}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              <span>Book a Call</span>
            </Link>
            <Link href="/#case-studies" className="btn-secondary">
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
