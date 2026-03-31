"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#que-hago", label: "Qué hago" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#resenas", label: "Reseñas" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        fontFamily: "var(--font-work), 'Work Sans', sans-serif",
        backgroundColor: "rgba(247,245,242,0.92)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="/"
          className="text-lg font-bold tracking-tight"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          DIGITAL·OS
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "var(--muted)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-70 transition">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#newsletter"
          className="hidden md:inline-flex text-sm font-semibold px-5 py-2.5 rounded-full transition hover:opacity-90"
          style={{ backgroundColor: "var(--orange)", color: "#fff" }}
        >
          Suscríbete
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden" style={{ color: "var(--navy)" }} aria-label="Menú">
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
        <div className="md:hidden px-6 py-4 space-y-3 border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm" style={{ color: "var(--muted)" }}>
              {l.label}
            </a>
          ))}
          <a href="#newsletter" onClick={() => setOpen(false)} className="block text-sm font-semibold px-5 py-3 rounded-full text-center text-white" style={{ backgroundColor: "var(--orange)" }}>
            Suscríbete
          </a>
        </div>
      )}
    </nav>
  );
}
