"use client";

import { useState } from "react";

const faqs = [
  {
    q: "\u00bfNo tengo tiempo para un curso m\u00e1s, es realmente pr\u00e1ctico?",
    a: "No es un curso que te obliga a sentarte 3 horas. Son niveles cortos que aplicas en tu d\u00eda a d\u00eda. La mayor\u00eda de personas ven resultados en la primera semana.",
  },
  {
    q: "Soy bastante torpe con la tecnolog\u00eda. \u00bfPodr\u00e9 seguirlo?",
    a: "Digital OS Personal est\u00e1 dise\u00f1ado exactamente para ti. No asumimos que sabes nada. Cada paso est\u00e1 explicado como si estuvieras al lado de Raquel.",
  },
  {
    q: "He intentado ordenar mi vida digital mil veces y siempre vuelvo al caos.",
    a: "Porque usabas herramientas sin sistema. Aqu\u00ed primero dise\u00f1as el sistema y luego colocas las herramientas. Por eso funciona de forma permanente.",
  },
  {
    q: "\u00bfY si es demasiado tarde para m\u00ed? Mi desorden es enorme.",
    a: "Hemos acompa\u00f1ado a personas con m\u00e1s de 120.000 emails sin leer. No importa el punto de partida. El sistema funciona porque es progresivo.",
  },
  {
    q: "\u00bfQu\u00e9 pasa si no me convence?",
    a: "Tienes 14 d\u00edas para probarlo. Si no te convence, te devolvemos el 100% sin preguntas.",
  },
  {
    q: "\u00bfCu\u00e1nto tiempo necesito dedicarle a la semana?",
    a: "Entre 2 y 3 horas semanales para avanzar c\u00f3modamente. Puedes ir m\u00e1s r\u00e1pido o m\u00e1s lento, el acceso es ilimitado.",
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
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
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
                  {openIndex === i ? "\u2212" : "+"}
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
