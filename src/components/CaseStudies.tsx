import Link from "next/link";

const caseStudies = [
  {
    slug: "aviation",
    industry: "Aviation Leasing",
    client: "Grant Thornton",
    title: "Aircraft Utilization Intelligence",
    description:
      "Automated extraction from 200+ lease documents per month, eliminating 40+ hours of manual work weekly.",
    metrics: ["40+ hrs saved/week", "200+ docs/month", "95% accuracy"],
    gradient: "from-blue-500/20 to-purple-500/20",
    accentColor: "text-blue-400",
  },
  {
    slug: "compliance",
    industry: "Regulatory Compliance",
    client: "Grant Thornton",
    title: "DORA Compliance Automation",
    description:
      "Mapped 500+ regulatory requirements to client controls in days, not months.",
    metrics: ["500+ requirements", "Days not months", "90% accuracy"],
    gradient: "from-purple-500/20 to-pink-500/20",
    accentColor: "text-purple-400",
  },
  {
    slug: "legal",
    industry: "Legal Technology",
    client: "Agami / World Bank",
    title: "Court Transcript Processing",
    description:
      "Processed thousands of court transcripts for legal research with 95%+ accuracy.",
    metrics: ["1000s of transcripts", "95%+ accuracy", "Full-text search"],
    gradient: "from-pink-500/20 to-orange-500/20",
    accentColor: "text-pink-400",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb orb-purple w-[200px] h-[200px] md:w-[400px] md:h-[400px] top-[20%] -right-[100px] md:-right-[200px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            See how we have helped organizations transform their document
            workflows with AI agents.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {caseStudies.map((study, idx) => (
            <Link
              key={study.slug}
              href={`/${study.slug}`}
              className="glass-card p-5 md:p-6 group block"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Industry badge */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${study.gradient} ${study.accentColor}`}
                >
                  {study.industry}
                </span>
              </div>

              {/* Client */}
              <p className="text-sm text-white/50 mb-2">{study.client}</p>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all">
                {study.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                {study.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {study.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="text-xs px-2 py-1 rounded bg-[#1a1a1a] text-white/70 border border-[#222]"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                View Case Study
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
