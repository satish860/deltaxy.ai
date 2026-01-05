"use client";

import Link from "next/link";
import { useState } from "react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-[#222] w-full">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight">
            Delta<span className="text-gradient">XY</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#case-studies"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="#how-we-work"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            How We Work
          </Link>
          <Link href="/contact" className="btn-primary text-sm py-2 px-5">
            <span>Book a Call</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden nav-blur border-t border-[#222]">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="#case-studies"
              className="text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="#how-we-work"
              className="text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How We Work
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-center py-3"
              onClick={() => setIsOpen(false)}
            >
              <span>Book a Call</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
