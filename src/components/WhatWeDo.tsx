const capabilities = [
  {
    title: "Extract",
    description:
      "Our agents read documents like humans do - leases, contracts, transcripts, regulatory filings. They understand context, not just keywords.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Learn",
    description:
      "Every correction makes them smarter. Our agents improve continuously from feedback, reducing errors over time without retraining from scratch.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Deliver",
    description:
      "Structured data flows directly into your systems. No copy-paste. No manual entry. Just clean outputs ready for your workflow.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
    ),
  },
];

export function WhatWeDo() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Our Agents Work
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We combine document intelligence with continuous learning to deliver
            automation that actually works.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.title}
              className="glass-card p-5 sm:p-6 md:p-8 group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#814ac8]/20 to-[#df7afe]/20 flex items-center justify-center mb-4 md:mb-6 group-hover:from-[#814ac8]/30 group-hover:to-[#df7afe]/30 transition-all">
                <div className="text-[#df7afe]">{cap.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{cap.title}</h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
