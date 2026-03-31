const frases = [
  "Trabajar con Raquel es como un atajo de meses en unas pocas horas.",
  "No te pierdes en tecnicismos, sino que aplicas lo que realmente importa.",
  "No da rodeos ni teorías, va directa a lo que necesitas para avanzar.",
  "Si sientes que el caos digital te come, aquí encuentras claridad sin humo.",
  "No es una mentora de las que te sueltan teoría, sino alguien que te hace avanzar.",
  "Trabajar con Raquel es brutalmente efectivo. No hay tiempo para perderse, solo acción.",
];

export default function Frases() {
  return (
    <section className="py-20 px-6 bg-[var(--navy)] text-white">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-2xl md:text-3xl text-center font-bold mb-12"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          ¿Qué dicen las empresas y profesionales que me conocen?
        </h2>
        <div className="space-y-4 text-center">
          {frases.map((f, i) => (
            <p
              key={i}
              className="text-white/80 text-lg italic"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              &ldquo;{f}&rdquo;
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
