"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto dura el programa? ¿Cuánto tiempo me llevará?",
    a: "El programa es autoguiado. Puedes ir a tu ritmo, dedicando el tiempo que puedas cada semana. Lo importante es avanzar, no acumular.",
  },
  {
    q: "¿Y si se me atraganta o tengo dudas?",
    a: "Tienes sesiones periódicas en directo para resolver dudas y consultas. No te quedas solo/a.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. Todo está explicado desde cero, paso a paso. Si sabes usar un ordenador, puedes seguir el programa.",
  },
  {
    q: "¿Cuánto tiempo tendré acceso a los materiales?",
    a: "Acceso de por vida. Además, se irán añadiendo actualizaciones frecuentes que también tendrás incluidas.",
  },
  {
    q: "¿Cuál es la garantía?",
    a: "Si aplicas el método y no ves resultados, hablamos. Mi compromiso es que funcione para ti.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <p
          className="text-[10px] uppercase tracking-[2.5px] text-[var(--muted)] text-center mb-3"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          No te quedes con la duda
        </p>
        <h2
          className="text-3xl md:text-4xl text-center text-[var(--orange)] mb-12"
          style={{ fontFamily: "'Libre Baskerville', serif" }}
        >
          Preguntas frecuentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-md overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-5 flex items-center justify-between"
              >
                <span className="font-medium text-sm text-[var(--text)]" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 text-[var(--muted)] transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-[var(--muted)] text-sm leading-relaxed" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#empezar"
            className="inline-block bg-[var(--orange)] text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition text-sm uppercase tracking-wider"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            ¡Quiero vivir mejor!
          </a>
        </div>
      </div>
    </section>
  );
}
