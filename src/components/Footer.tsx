import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#222] bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                Delta<span className="text-gradient">XY</span>
              </span>
            </Link>
            <p className="mt-4 text-white/60 text-sm max-w-md">
              AI agents that learn. Outcomes you can measure. We build reliable
              automation for aviation, compliance, and legal workflows.
            </p>
            <p className="mt-4 text-white/40 text-xs">
              A Vedhverse Company
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white/90">Case Studies</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/aviation"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Aviation
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white/90">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Book a Call
                </Link>
              </li>
              <li>
                <a
                  href="mailto:Satish@deltaxy.ai"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Satish@deltaxy.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            2025 DeltaXY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
