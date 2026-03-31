const rows = [
  ["Bandeja de entrada como campo de batalla", "Procesada, en cero emails pendientes"],
  ["Tareas urgentes que nunca son importantes", "Solo trabajas en lo que mueve la aguja"],
  ["Información dispersa en 6 herramientas", "Un BrainBox: todo en un sitio, localizable"],
  ["Semanas que terminan igual que empezaron", "Revisión semanal que mantiene el sistema"],
  ["Sensación de ir tarde a todo, siempre", "Foco, claridad y tiempo para lo que importa"],
  ["IA que amplifica el caos", "Asistentes de IA que trabajan para ti"],
];

export default function Transformation() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-4xl mb-12 text-center"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          Lo que cambia con Digital OS Personal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rows.map((r, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div
                className="flex-1 p-5 rounded-xl"
                style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}>
                  Antes
                </p>
                <p className="text-sm" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}>
                  {r[0]}
                </p>
              </div>
              <div
                className="flex-1 p-5 rounded-xl"
                style={{ backgroundColor: "var(--orange-light, #fff3eb)", border: "1px solid var(--orange)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--orange)" }}>
                  Después
                </p>
                <p className="text-sm font-medium" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--navy)" }}>
                  {r[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
