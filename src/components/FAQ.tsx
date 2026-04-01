"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿No tengo tiempo para un curso más, es realmente práctico?",
    a: "No es un curso que te obliga a sentarte 3 horas. Son niveles cortos que aplicas en tu día a día. La mayoría de personas ven resultados en la primera semana.",
  },
  {
    q: "Soy bastante torpe con la tecnología. ¿Podré seguirlo?",
    a: "Digital OS Personal está diseñado exactamente para ti. No asumimos que sabes nada. Cada paso está explicado como si estuvieras al lado de Raquel.",
  },
  {
    q: "He intentado ordenar mi vida digital mil veces y siempre vuelvo al caos.",
    a: "Porque usabas herramientas sin sistema. Aquí primero diseñas el sistema y luego colocas las herramientas. Por eso funciona de forma permanente.",
  },
  {
    q: "¿Y si es demasiado tarde para mí? Mi desorden es enorme.",
    a: "Hemos acompañado a personas con más de 120.000 emails sin leer. No importa el punto de partida. El sistema funciona porque es progresivo.",
  },
  {
    q: "¿Qué pasa si no me convence?",
    a: "Tienes 14 días para probarlo. Si no te convence, te devolvemos el 100% sin preguntas.",
  },
  {
    q: "¿Cuánto tiempo necesito dedicarle a la semana?",
    a: "Entre 2 y 3 horas semanales para avanzar cómodamente. Puedes ir más rápido o más lento, el acceso es ilimitado.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-3xl md:text-4xl mb-12"
          style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
        >
          Preguntas frecuentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition"
              style={{
                backgroundColor: "var(--card)",
                boxShadow: "var(--shadow)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span
                  className="font-medium text-sm"
                  style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0 text-xl leading-none select-none"
                  style={{ color: "var(--muted)" }}
                >
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
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
