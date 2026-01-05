"use client";

const clients = [
  { name: "Grant Thornton", type: "Professional Services" },
  { name: "Agami", type: "Legal Tech" },
  { name: "World Bank", type: "Development Finance" },
];

export function ClientCarousel() {
  return (
    <section className="py-16 border-t border-[#222]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-sm text-white/40 uppercase tracking-widest mb-12">
          Trusted by industry leaders
        </p>

        {/* Static centered client logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-20">
          {clients.map((client, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white/25 group-hover:text-white/50 transition-colors duration-300">
                {client.name}
              </span>
              <span className="text-[10px] sm:text-xs text-white/15 mt-1 group-hover:text-white/30 transition-colors duration-300">
                {client.type}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider my-12" />

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-xl md:text-3xl font-bold text-white/20">3+</div>
            <div className="text-[10px] md:text-xs text-white/30 mt-1">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-3xl font-bold text-white/20">5+</div>
            <div className="text-[10px] md:text-xs text-white/30 mt-1">AI Agents Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-3xl font-bold text-white/20">10K+</div>
            <div className="text-[10px] md:text-xs text-white/30 mt-1">Documents Processed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
