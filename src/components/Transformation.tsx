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
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-4xl mb-12 text-center"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          Lo que cambia con Digital OS Personal
        </h2>

        <div className="rounded-md border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          <div className="grid grid-cols-2 text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}>
            <div className="p-4" style={{ backgroundColor: "var(--bg)", color: "var(--muted)" }}>Ahora mismo</div>
            <div className="p-4" style={{ backgroundColor: "var(--navy)", color: "#fff" }}>Con Digital OS Personal</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-2 border-t" style={{ borderColor: "var(--border)" }}>
              <div
                className="p-4 text-sm"
                style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)", backgroundColor: "var(--card)" }}
              >
                {r[0]}
              </div>
              <div
                className="p-4 text-sm font-medium"
                style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--navy)", backgroundColor: "var(--card)" }}
              >
                {r[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
