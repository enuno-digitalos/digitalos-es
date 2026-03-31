const testimonios = [
  {
    name: "Carles Fernández",
    text: "Me encanta su alegría y pasión, pero sobretodo su enorme practicidad. Siguiendo sus recomendaciones ganas muchísimo tiempo en infinidad de tareas. ¡Muy recomendable!",
  },
  {
    name: "Cinzia Puopolo",
    text: "Conocer a Raquel ha sido como encontrar un faro en medio del océano. Me ayuda a ganar claridad, organización y foco de forma fácil y efectiva. Super recomendable.",
  },
  {
    name: "Lena",
    text: "Raquel es una de las mejores profesionales que puedes encontrar. La capacidad de soluciones que ofrece es tal, que crees que tu vida ha pasado a tener 30 horas. Con ella la eficiencia se vuelve una realidad.",
  },
  {
    name: "Miryam Soto",
    text: "No conozco mejor profesional para aprender la tecnología que todos los emprendedores deberíamos saber. Raquel es conocimiento, pasión y generosidad a borbotones. ¡Por fin alguien que te lo pone fácil!",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)", letterSpacing: "2.5px" }}
        >
          Lo que dicen quienes ya lo viven
        </p>
        <h2
          className="text-3xl md:text-4xl mb-14"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          Resultados reales, gente real.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-md border"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            >
              <p
                className="text-sm leading-relaxed mb-4 italic"
                style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--text)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <p
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--navy)" }}
              >
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
