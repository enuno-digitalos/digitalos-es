const testimonios = [
  {
    name: "Carles Fernández",
    text: "Me encanta su alegría y pasión, pero sobretodo su enorme practicidad. Siguiendo sus recomendaciones ganas muchísimo tiempo en infinidad de tareas. ¡Muy recomendable!",
  },
  {
    name: "Cinzia Puopolo",
    text: "Conocer a Raquel ha sido como encontrar un faro en medio del océano. Me ayuda a ganar claridad, organización y foco de forma fácil y efectiva.",
  },
  {
    name: "Lena",
    text: "La capacidad de soluciones que ofrece es tal, que crees que tu vida ha pasado a tener 30 horas. Con ella la eficiencia se vuelve una realidad.",
  },
  {
    name: "Miryam Soto",
    text: "No conozco mejor profesional para aprender la tecnología que todos los emprendedores deberíamos saber. Raquel es conocimiento, pasión y generosidad a borbotones.",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 px-6" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold mb-3 tracking-wide" style={{ fontFamily: "var(--font-work)", color: "var(--orange)" }}>
          MÁS DE 6.000 PERSONAS FORMADAS
        </p>
        <h2
          className="text-3xl md:text-[2.8rem] leading-tight mb-14"
          style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
        >
          Lo que dicen quienes ya lo viven
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl"
              style={{ backgroundColor: "var(--bg)", boxShadow: "var(--shadow)" }}
            >
              <div className="text-sm mb-4" style={{ color: "var(--orange)" }}>★★★★★</div>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-libre)", color: "var(--text)", fontStyle: "italic" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: "var(--navy)" }}
                >
                  {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}>
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
