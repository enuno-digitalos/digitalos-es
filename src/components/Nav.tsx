"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ backgroundColor: "rgba(247,245,242,0.92)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="/"
          className="text-lg font-bold tracking-tight"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          DIGITAL·OS
        </a>

        <div
          className="hidden md:flex items-center gap-8 text-sm"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}
        >
          <a href="#programa" className="hover:opacity-70 transition">Programa</a>
          <a href="#testimonios" className="hover:opacity-70 transition">Testimonios</a>
          <a href="#sobre-mi" className="hover:opacity-70 transition">Sobre mí</a>
          <a href="#faq" className="hover:opacity-70 transition">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#newsletter"
            className="text-sm font-medium px-4 py-2 rounded-full border transition hover:opacity-80"
            style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", borderColor: "var(--border)", color: "var(--navy)" }}
          >
            Newsletter
          </a>
          <a
            href="https://enuno.quadernoapp.com/checkout/session/3453a4b04426bf11672b37a06cddf8f2fcb7b933/init"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2 rounded-full text-white transition hover:opacity-90"
            style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", backgroundColor: "var(--orange)" }}
          >
            Quiero poner orden
          </a>
        </div>

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
          <a href="#programa" onClick={() => setOpen(false)} className="block text-sm" style={{ color: "var(--muted)" }}>Programa</a>
          <a href="#testimonios" onClick={() => setOpen(false)} className="block text-sm" style={{ color: "var(--muted)" }}>Testimonios</a>
          <a href="#sobre-mi" onClick={() => setOpen(false)} className="block text-sm" style={{ color: "var(--muted)" }}>Sobre mí</a>
          <a href="#faq" onClick={() => setOpen(false)} className="block text-sm" style={{ color: "var(--muted)" }}>FAQ</a>
          <a href="#newsletter" onClick={() => setOpen(false)} className="block text-sm font-medium py-3 rounded-full text-center border" style={{ borderColor: "var(--border)", color: "var(--navy)" }}>Newsletter</a>
          <a href="https://enuno.quadernoapp.com/checkout/session/3453a4b04426bf11672b37a06cddf8f2fcb7b933/init" onClick={() => setOpen(false)} className="block text-sm font-semibold py-3 rounded-full text-center text-white" style={{ backgroundColor: "var(--orange)" }}>Quiero poner orden</a>
        </div>
      )}
    </nav>
  );
}
