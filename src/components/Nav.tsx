"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#programa", label: "Programa" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-[var(--font-libre-baskerville)] text-[var(--navy)] font-bold text-lg tracking-tight" style={{ fontFamily: "'Libre Baskerville', serif" }}>
          en·uno
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--navy)] transition">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#empezar"
          className="hidden md:inline-flex bg-[var(--navy)] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition items-center gap-2"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          QUIERO PONER ORDEN
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--navy)]"
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--bg)] border-t border-[var(--border)] px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-[var(--muted)] hover:text-[var(--navy)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#empezar"
            onClick={() => setOpen(false)}
            className="block bg-[var(--navy)] text-white text-sm font-semibold px-5 py-3 rounded-md text-center"
          >
            QUIERO PONER ORDEN
          </a>
        </div>
      )}
    </nav>
  );
}
