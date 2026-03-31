"use client";

import { useState } from "react";

const CTA_URL = "https://enuno.quadernoapp.com/checkout/session/3453a4b04426bf11672b37a06cddf8f2fcb7b933/init";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ backgroundColor: "rgba(250,248,245,0.92)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[68px]">
        <a
          href="/"
          className="text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
        >
          DIGITAL OS
        </a>

        <div className="hidden md:flex items-center gap-7 text-[0.85rem]" style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}>
          <a href="#programa" className="hover:text-[var(--navy)] transition">Programa</a>
          <a href="#testimonios" className="hover:text-[var(--navy)] transition">Testimonios</a>
          <a href="#sobre-mi" className="hover:text-[var(--navy)] transition">Sobre mí</a>
          <a href="#faq" className="hover:text-[var(--navy)] transition">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#newsletter"
            className="text-[0.85rem] font-medium px-5 py-2.5 rounded-full border transition hover:bg-[var(--bg-alt)]"
            style={{ fontFamily: "var(--font-work)", borderColor: "var(--border)", color: "var(--navy)" }}
          >
            Newsletter
          </a>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.85rem] font-semibold px-5 py-2.5 rounded-full text-white transition hover:opacity-90"
            style={{ fontFamily: "var(--font-work)", backgroundColor: "var(--orange)" }}
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
        <div className="md:hidden px-6 py-5 space-y-3 border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}>
          <a href="#programa" onClick={() => setOpen(false)} className="block text-sm py-1" style={{ color: "var(--muted)" }}>Programa</a>
          <a href="#testimonios" onClick={() => setOpen(false)} className="block text-sm py-1" style={{ color: "var(--muted)" }}>Testimonios</a>
          <a href="#sobre-mi" onClick={() => setOpen(false)} className="block text-sm py-1" style={{ color: "var(--muted)" }}>Sobre mí</a>
          <a href="#faq" onClick={() => setOpen(false)} className="block text-sm py-1" style={{ color: "var(--muted)" }}>FAQ</a>
          <div className="pt-3 space-y-2">
            <a href="#newsletter" onClick={() => setOpen(false)} className="block text-sm font-medium py-3 rounded-full text-center border" style={{ borderColor: "var(--border)", color: "var(--navy)" }}>Newsletter</a>
            <a href={CTA_URL} onClick={() => setOpen(false)} className="block text-sm font-semibold py-3 rounded-full text-center text-white" style={{ backgroundColor: "var(--orange)" }}>Quiero poner orden</a>
          </div>
        </div>
      )}
    </nav>
  );
}
