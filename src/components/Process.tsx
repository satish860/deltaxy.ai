"use client";

export function Process() {
  return (
    <section id="how-we-work" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-md border border-[#222] bg-[#0d0d0d]/80 mb-4 md:mb-6">
            <span className="text-xs md:text-sm text-white/70">Our Process</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Our Simple, Smart, and Scalable Process
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            We design, develop, and implement AI agents that help you work smarter, not harder
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Step 1: Discovery */}
          <div className="glass-card p-4 md:p-6 group">
            <div className="flex flex-col h-full">
              {/* Text Content */}
              <div className="mb-4 md:mb-6">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <span className="px-2 md:px-3 py-1 text-[10px] md:text-xs rounded border border-[#222] bg-[#0d0d0d]/80 text-white/70">
                    Step 1
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Smart Discovery</h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  We assess your document workflows and identify AI solutions to streamline processes and improve efficiency.
                </p>
              </div>

              {/* Visual - Radar Animation */}
              <div className="h-[180px] md:h-[200px] relative rounded-lg border border-[#222] bg-[#0d0d0d]/50 overflow-hidden">
                <div className="absolute inset-0 flex flex-col sm:flex-row">
                  {/* Left - Radar */}
                  <div className="flex-1 flex items-center justify-center relative min-h-[90px] sm:min-h-0">
                    <div className="relative w-20 h-20 sm:w-32 sm:h-32">
                      {/* Radar circles */}
                      <div className="absolute inset-0 rounded-full border border-[#814ac8]/20" />
                      <div className="absolute inset-2 sm:inset-4 rounded-full border border-[#814ac8]/20" />
                      <div className="absolute inset-4 sm:inset-8 rounded-full border border-[#814ac8]/20" />
                      {/* Radar sweep */}
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div
                          className="absolute top-1/2 left-1/2 w-1/2 h-1/2 origin-left animate-spin"
                          style={{
                            background: "conic-gradient(from 0deg, transparent 0deg, rgba(129, 74, 200, 0.4) 30deg, transparent 60deg)",
                            animationDuration: "3s",
                          }}
                        />
                      </div>
                      {/* Center dot */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#814ac8]" />
                    </div>
                  </div>

                  {/* Right - Checklist */}
                  <div className="flex-1 border-t sm:border-t-0 sm:border-l border-[#222] p-3 sm:p-4 flex flex-col gap-1 sm:gap-2">
                    <CheckItem label="Document types" checked />
                    <CheckItem label="Process mapping" checked />
                    <CheckItem label="Bottlenecks" partial />
                    <CheckItem label="Integration points" />
                    <CheckItem label="Success metrics" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Development */}
          <div className="glass-card p-4 md:p-6 group">
            <div className="flex flex-col h-full">
              {/* Text Content */}
              <div className="mb-4 md:mb-6">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <span className="px-2 md:px-3 py-1 text-[10px] md:text-xs rounded border border-[#222] bg-[#0d0d0d]/80 text-white/70">
                    Step 2
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">AI Development</h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  Our team builds intelligent extraction and processing agents tailored to your document workflows.
                </p>
              </div>

              {/* Visual - Code Editor */}
              <div className="h-[180px] md:h-[200px] relative rounded-lg border border-[#222] bg-[#0d0d0d]/50 overflow-hidden flex flex-col">
                {/* Editor Top Bar */}
                <div className="h-7 md:h-8 bg-white/5 border-b border-[#222] flex items-center px-2 md:px-3 gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/10" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/10" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/10" />
                  </div>
                  <span className="text-[10px] md:text-xs text-white/40 ml-1 md:ml-2">agent.py</span>
                </div>

                {/* Code Content with scroll animation */}
                <div
                  className="h-[140px] md:h-[160px] overflow-hidden relative"
                  style={{
                    maskImage: "linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 12%, rgb(0,0,0) 88%, rgba(0,0,0,0) 100%)"
                  }}
                >
                  <div className="animate-scroll-code font-mono text-[10px] md:text-xs leading-relaxed p-2 md:p-3">
                    <CodeBlock />
                    <CodeBlock />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Integration */}
          <div className="glass-card p-4 md:p-6 group">
            <div className="flex flex-col h-full">
              {/* Text Content */}
              <div className="mb-4 md:mb-6">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <span className="px-2 md:px-3 py-1 text-[10px] md:text-xs rounded border border-[#222] bg-[#0d0d0d]/80 text-white/70">
                    Step 3
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Seamless Integration</h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  We smoothly integrate AI agents into your existing infrastructure with minimal disruption.
                </p>
              </div>

              {/* Visual - Integration Flow */}
              <div className="h-[180px] md:h-[200px] relative rounded-lg border border-[#222] bg-[#0d0d0d]/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Center - Our Solution */}
                  <div className="relative z-10 px-3 md:px-4 py-2 md:py-3 rounded-md border border-[#222] bg-[#0d0d0d]/90">
                    <div className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-1 md:mb-2 rounded-full bg-gradient-to-br from-[#814ac8] to-[#df7afe] flex items-center justify-center">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/80" />
                    </div>
                    <span className="text-[10px] md:text-xs text-white/70">DeltaXY Agent</span>
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Animated lines */}
                    <div className="absolute w-12 md:w-20 h-0.5 left-[12%] md:left-[15%] bg-white/5 overflow-hidden">
                      <div className="h-full w-6 md:w-8 bg-gradient-to-r from-transparent via-[#814ac8] to-transparent animate-flow-right" />
                    </div>
                    <div className="absolute w-12 md:w-20 h-0.5 right-[12%] md:right-[15%] bg-white/5 overflow-hidden">
                      <div className="h-full w-6 md:w-8 bg-gradient-to-r from-transparent via-[#814ac8] to-transparent animate-flow-right" />
                    </div>
                  </div>

                  {/* Left - Your Systems */}
                  <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 md:gap-2">
                    <IntegrationIcon label="PDF" />
                    <IntegrationIcon label="API" />
                    <IntegrationIcon label="DB" />
                  </div>

                  {/* Right - Outputs */}
                  <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 md:gap-2">
                    <IntegrationIcon label="JSON" />
                    <IntegrationIcon label="Excel" />
                    <IntegrationIcon label="CRM" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Optimization */}
          <div className="glass-card p-4 md:p-6 group">
            <div className="flex flex-col h-full">
              {/* Text Content */}
              <div className="mb-4 md:mb-6">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <span className="px-2 md:px-3 py-1 text-[10px] md:text-xs rounded border border-[#222] bg-[#0d0d0d]/80 text-white/70">
                    Step 4
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Continuous Optimization</h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  We refine performance, analyze results, and enhance accuracy for long-term improvement.
                </p>
              </div>

              {/* Visual - Metrics Dashboard */}
              <div className="h-[180px] md:h-[200px] relative rounded-lg border border-[#222] bg-[#0d0d0d]/50 overflow-hidden p-2 md:p-3">
                <div className="space-y-1.5 md:space-y-2">
                  <MetricRow
                    icon="chat"
                    label="Extraction Agent"
                    status="Accuracy up 15%"
                    progress={85}
                  />
                  <MetricRow
                    icon="gear"
                    label="Processing Pipeline"
                    status="Update available"
                    progress={70}
                    updating
                  />
                  <MetricRow
                    icon="check"
                    label="Validation Rules"
                    status="Up to date"
                    progress={100}
                    complete
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckItem({ label, checked, partial }: { label: string; checked?: boolean; partial?: boolean }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
        checked ? "border-[#814ac8] bg-[#814ac8]/20" :
        partial ? "border-[#814ac8]/50 bg-[#814ac8]/10" :
        "border-[#222]"
      }`}>
        {checked && (
          <svg className="w-2.5 h-2.5 text-[#814ac8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
        {partial && <div className="w-1.5 h-1.5 rounded-full bg-[#814ac8]/60" />}
      </div>
      <span className={checked ? "text-white/70" : partial ? "text-white/50" : "text-white/30"}>{label}</span>
    </div>
  );
}

function CodeBlock() {
  const lines = [
    { indent: 0, content: [{ text: "class", color: "#814ac8" }, { text: " DocumentAgent:", color: "rgba(255,255,255,0.75)" }] },
    { indent: 1, content: [{ text: "def", color: "#814ac8" }, { text: " __init__(self, config):", color: "rgba(255,255,255,0.75)" }] },
    { indent: 2, content: [{ text: "self.config = config", color: "rgba(255,255,255,0.6)" }] },
    { indent: 2, content: [{ text: "self.model = load_model()", color: "rgba(255,255,255,0.6)" }] },
    { indent: 0, content: [] },
    { indent: 1, content: [{ text: "def", color: "#814ac8" }, { text: " extract(self, doc):", color: "rgba(255,255,255,0.75)" }] },
    { indent: 2, content: [{ text: "fields = self.parse(doc)", color: "rgba(255,255,255,0.6)" }] },
    { indent: 2, content: [{ text: "validated = self.validate()", color: "rgba(255,255,255,0.6)" }] },
    { indent: 2, content: [{ text: "return", color: "#814ac8" }, { text: " validated", color: "rgba(255,255,255,0.6)" }] },
    { indent: 0, content: [] },
    { indent: 1, content: [{ text: "def", color: "#814ac8" }, { text: " learn(self, feedback):", color: "rgba(255,255,255,0.75)" }] },
    { indent: 2, content: [{ text: "self.model.update(feedback)", color: "rgba(255,255,255,0.6)" }] },
    { indent: 2, content: [{ text: "self.accuracy += 0.01", color: "rgba(255,255,255,0.6)" }] },
  ];

  return (
    <div className="mb-6 font-mono text-[11px] leading-[1.8]">
      {lines.map((line, i) => (
        <div key={i} style={{ paddingLeft: `${line.indent * 16}px`, minHeight: line.content.length === 0 ? "8px" : "auto" }}>
          {line.content.map((part, j) => (
            <span key={j} style={{ color: part.color }}>{part.text}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

function IntegrationIcon({ label }: { label: string }) {
  return (
    <div className="px-1.5 md:px-2 py-1 md:py-1.5 rounded border border-[#222] bg-[#0d0d0d]/80 text-[10px] md:text-xs text-white/60">
      {label}
    </div>
  );
}

function MetricRow({
  icon,
  label,
  status,
  progress,
  updating,
  complete
}: {
  icon: string;
  label: string;
  status: string;
  progress: number;
  updating?: boolean;
  complete?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 md:gap-3 p-2 md:p-2.5 rounded border border-[#222] bg-white/5">
      <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
        {icon === "chat" && (
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {icon === "gear" && (
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )}
        {icon === "check" && (
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs md:text-sm text-white/80 truncate">{label}</div>
        <div className="text-[10px] md:text-xs text-white/40 truncate">{status}</div>
      </div>
      <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center shrink-0">
        {complete ? (
          <svg className="w-5 h-5 text-[#814ac8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : updating ? (
          <svg className="w-5 h-5 text-[#814ac8] animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        ) : (
          <div
            className="w-6 h-6 rounded-full border-2 border-[#814ac8]"
            style={{
              background: `conic-gradient(#814ac8 ${progress * 3.6}deg, transparent 0deg)`
            }}
          />
        )}
      </div>
    </div>
  );
}
