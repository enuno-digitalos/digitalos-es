export default function Transformation() {
  const futures = [
    "Te levantas sin ansiedad. Sabes qué hacer y en qué enfocarte. Rechazas lo que NO toca",
    "Tu bandeja de entrada no te da pereza, ya no hay 200 emails pendientes",
    "No tienes que apagar fuegos. Lo que haces tiene sentido y te acerca a tus objetivos",
    "La culpa por \"no hacer suficiente\" desaparece, la frustración también",
    "Dejas de sentirte esclavo de los \"tengo que\"",
  ];

  return (
    <section className="py-20 px-6 bg-[var(--navy)] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[var(--orange)] font-semibold text-lg uppercase tracking-wider mb-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          Aquí no vienes a aprender
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          Aquí vamos a transformar la forma en que trabajas
        </h2>
        <p className="text-white/80 text-lg mb-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          No más teoría para aplicar &ldquo;cuando tengas tiempo&rdquo;
        </p>
        <p className="text-white/80 text-lg mb-16" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          No más técnicas ni trucos que NO funcionan
        </p>

        <h3
          className="text-2xl md:text-3xl mb-10 uppercase"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          Imagínate un futuro donde...
        </h3>

        <ul className="space-y-4 text-left max-w-xl mx-auto">
          {futures.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-white/90" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              <span className="text-[var(--orange)] mt-1 shrink-0">●</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-12 space-y-2">
          <p className="font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            Hay otra manera de hacer las cosas → ES POSIBLE TENER UNA BUENA VIDA
          </p>
          <p className="text-white/80" style={{ fontFamily: "'Work Sans', sans-serif" }}>Esto NO es un curso</p>
          <p className="font-bold text-lg" style={{ fontFamily: "'Work Sans', sans-serif" }}>ES UN ANTES Y UN DESPUÉS</p>
        </div>
      </div>
    </section>
  );
}
