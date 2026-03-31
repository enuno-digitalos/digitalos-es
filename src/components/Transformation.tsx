const rows = [
  {
    before: "120.000 emails sin leer",
    after: "Bandeja bajo control en 20 min/día",
  },
  {
    before: "Archivos en 6 sitios distintos",
    after: "Todo en un lugar, encontrable en segundos",
  },
  {
    before: "La misma contraseña para todo",
    after: "Contraseñas seguras sin memorizarlas",
  },
  {
    before: "«No sé ni por dónde empezar»",
    after: "Un sistema paso a paso que simplemente sigues",
  },
  {
    before: "Vergüenza de pedir ayuda",
    after: "Autonomía real sin depender de nadie",
  },
  {
    before: "La IA suena a ciencia ficción",
    after: "La IA trabaja para ti, sin complicaciones",
  },
];

export default function Transformation() {
  return (
    <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-[2.8rem] leading-tight mb-3 text-center"
          style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
        >
          Lo que cambia con Digital OS Personal
        </h2>
        <p
          className="text-center text-base md:text-lg mb-16"
          style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
        >
          No es magia. Es tener un sistema.
        </p>

        {/* Column headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 px-1">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase hidden md:block"
            style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
          >
            ANTES
          </p>
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase hidden md:block"
            style={{ fontFamily: "var(--font-work)", color: "var(--orange)" }}
          >
            DESPUÉS
          </p>
        </div>

        <div className="space-y-4">
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
            >
              {/* Before */}
              <div
                className="p-5 rounded-xl flex items-center gap-3"
                style={{ backgroundColor: "var(--bg-alt)" }}
              >
                <span
                  className="text-base shrink-0"
                  style={{ color: "var(--muted)", opacity: 0.5 }}
                >
                  ✕
                </span>
                <p
                  className="text-sm md:text-[0.95rem] line-through"
                  style={{
                    fontFamily: "var(--font-work)",
                    color: "var(--muted)",
                    textDecorationColor: "var(--border)",
                  }}
                >
                  {r.before}
                </p>
              </div>

              {/* After */}
              <div
                className="p-5 rounded-xl flex items-center gap-3"
                style={{
                  backgroundColor: "var(--card)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <span
                  className="text-base shrink-0 font-bold"
                  style={{ color: "var(--orange)" }}
                >
                  ✓
                </span>
                <p
                  className="text-sm md:text-[0.95rem] font-semibold"
                  style={{
                    fontFamily: "var(--font-work)",
                    color: "var(--navy)",
                  }}
                >
                  {r.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
