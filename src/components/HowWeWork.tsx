const benefits = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    text: "No surprise invoices",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    text: "Clear deliverables upfront",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    text: "Results you can measure",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    text: "Agents that improve over time",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We analyze your document workflows, identify bottlenecks, and define success metrics.",
  },
  {
    step: "02",
    title: "Pilot",
    description:
      "We build a focused proof-of-concept to demonstrate value before scaling.",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "We integrate agents into your workflow with monitoring and feedback loops.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We continuously improve accuracy based on real-world corrections and feedback.",
  },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 relative">
      {/* Background */}
      <div className="gradient-orb orb-blue w-[500px] h-[500px] -left-[200px] top-[30%] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pay for Outcomes,
              <br />
              <span className="text-gradient">Not Hours</span>
            </h2>

            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              Traditional consulting charges for time. We charge for results.
            </p>

            <p className="text-white/60 mb-8 leading-relaxed">
              Our pricing model is simple: we scope the work, agree on
              deliverables, and price it as a fraction of what a full-time
              employee would cost to do the same job. You get predictable costs
              and measurable outcomes.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-3 text-white/80"
                >
                  <span className="text-[#df7afe]">{benefit.icon}</span>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-white/50 border-l-2 border-[#814ac8] pl-4">
              We typically work on 3-6 month engagements, starting with a pilot
              to prove value before scaling.
            </p>
          </div>

          {/* Right - Process steps */}
          <div className="space-y-4">
            {process.map((item, idx) => (
              <div
                key={item.step}
                className="glass-card p-6 flex gap-6 items-start group"
              >
                <div className="text-3xl font-bold text-gradient opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
