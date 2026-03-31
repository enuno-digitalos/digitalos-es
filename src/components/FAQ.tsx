"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto tiempo me llevará el curso?",
    a: "Mi recomendación: 4 semanas, una por nivel. Pero no hay carrera — aplicas desde el día uno, no devoras y olvidas. Construir tu sistema es una tarea para toda la vida ;-)",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. Diseñado para que no tengas que complicarte la vida. Paso a paso, manuales y guías visuales incluidas.",
  },
  {
    q: "¿Hay soporte si tengo dudas?",
    a: "Sesiones en directo cada dos meses + buzón de sugerencias. Los materiales están pensados para que el paso a paso sea suficiente.",
  },
  {
    q: "¿Cuánto tiempo tendré acceso?",
    a: "Mientras el programa esté activo. Si dejara de venderse, recibirías los materiales descargables para quedártelos.",
  },
  {
    q: "¿Qué pasa si no es para mí?",
    a: "Te devuelvo el dinero. Solo pido que me expliques el porqué para poder mejorar.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-3xl md:text-4xl mb-12"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          Preguntas frecuentes
        </h2>

        <div className="space-y-0 divide-y" style={{ borderColor: "var(--border)" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderColor: "var(--border)" }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-5 flex items-center justify-between"
              >
                <span
                  className="font-medium text-sm"
                  style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--text)" }}
                >
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 ml-4 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--muted)" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="pb-5">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
