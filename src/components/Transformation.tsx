const rows = [
  { before: "Bandeja de entrada como campo de batalla", after: "Procesada, en cero emails pendientes" },
  { before: "Tareas urgentes que nunca son importantes", after: "Solo trabajas en lo que mueve la aguja" },
  { before: "Información dispersa en 6 herramientas", after: "Un BrainBox: todo en un sitio, localizable" },
  { before: "Semanas que terminan igual que empezaron", after: "Revisión semanal que mantiene el sistema" },
  { before: "Sensación de ir tarde a todo, siempre", after: "Foco, claridad y tiempo para lo que importa" },
  { before: "IA que amplifica el caos", after: "Asistentes de IA que trabajan para ti" },
];

export default function Transformation() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-[2.8rem] leading-tight mb-4 text-center"
          style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
        >
          Lo que cambia con Digital OS Personal
        </h2>
        <p className="text-center text-base mb-14" style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}>
          De improvisar a tener un sistema. De caos a claridad.
        </p>

        <div className="space-y-4">
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
            >
              <div
                className="p-5 rounded-xl flex items-start gap-3"
                style={{ backgroundColor: "var(--bg-alt)" }}
              >
                <span className="text-lg shrink-0">✕</span>
                <p className="text-sm" style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}>{r.before}</p>
              </div>
              <div
                className="p-5 rounded-xl flex items-start gap-3"
                style={{ backgroundColor: "var(--orange-soft)", borderLeft: "3px solid var(--orange)" }}
              >
                <span className="text-lg shrink-0" style={{ color: "var(--orange)" }}>✓</span>
                <p className="text-sm font-medium" style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}>{r.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
