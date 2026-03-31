"use client";

import { useState } from "react";

const levels = [
  {
    title: "Bienvenida e introducción",
    content: "",
  },
  {
    title: "Nivel 0 → SER | HACER | TENER",
    subtitle: "La base de la productividad real",
    content: "",
  },
  {
    title: "Nivel 1 → Lo imprescindible",
    subtitle: "Gestión del tiempo, las tareas y el correo",
    content: "",
  },
  {
    title: "Nivel 2 → Tu BrainBox, el sistema personal que te da claridad",
    subtitle: "Organiza tu información personal y profesional de una vez por todas",
    content: "",
  },
  {
    title: "Nivel 3: Optimización e IAs",
    subtitle: "Tus armas secretas: revisión y tecnología",
    content: "",
  },
];

export default function Programa() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="programa" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <p
          className="text-[10px] uppercase tracking-[2.5px] text-[var(--muted)] text-center mb-2"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          ¿Qué viaje vamos a hacer juntos?
        </p>
        <p
          className="text-[10px] uppercase tracking-[2.5px] text-[var(--muted)] text-center mb-4"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          Productividad digital → del caos al clic
        </p>
        <h2
          className="text-3xl md:text-4xl text-center text-[var(--orange)] mb-4"
          style={{ fontFamily: "'Libre Baskerville', serif" }}
        >
          Aquí vas a aprender y aplicar
        </h2>
        <p className="text-center text-[var(--muted)] mb-12" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          Esto no va de acumular información → <strong>Va de poner orden haciendo</strong>
        </p>

        <h3 className="text-center font-bold text-lg mb-2 uppercase" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          Sin esfuerzo. Paso a paso
        </h3>
        <p className="text-center text-[var(--muted)] mb-10" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          Porque hay otra manera de hacer las cosas
        </p>

        <div className="space-y-3">
          {levels.map((level, i) => (
            <button
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left bg-[var(--navy)] text-white rounded-md p-4 hover:opacity-95 transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    {level.title}
                  </p>
                  {level.subtitle && (
                    <p className="text-white/70 text-sm mt-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                      {level.subtitle}
                    </p>
                  )}
                </div>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
