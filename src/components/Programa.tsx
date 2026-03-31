const levels = [
  {
    emoji: "\u{1F5FA}\uFE0F",
    title: "La visi\u00f3n completa del sistema",
    body: "Entiendes c\u00f3mo encaja todo antes de tocar nada. Sin agobio, sin prisas.",
  },
  {
    emoji: "\u{1F9ED}",
    title: "SER \u00B7 HACER \u00B7 TENER",
    body: "Tu base personal: qu\u00e9 quieres, c\u00f3mo trabajas, qu\u00e9 necesitas. El cimiento que nadie te ense\u00f1a.",
  },
  {
    emoji: "\u23F1\uFE0F",
    title: "Tiempo, tareas y email",
    body: "Los imprescindibles: de 120.000 emails a bandeja controlada. De caos de tareas a sistema claro.",
  },
  {
    emoji: "\u{1F9E0}",
    title: "Tu BrainBox digital",
    body: "El sistema que conecta todo: archivos, notas, contrase\u00f1as, proyectos. Un lugar, no seis.",
  },
  {
    emoji: "\u26A1",
    title: "Optimizaci\u00f3n + IA",
    body: "Revisiones semanales y tu primer asistente IA. El sistema se mantiene solo.",
  },
];

export default function Programa() {
  return (
    <section id="programa" className="py-20 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-sm font-semibold mb-3 tracking-wide"
          style={{ fontFamily: "var(--font-work)", color: "var(--orange)" }}
        >
          QU\u00c9 HAY DENTRO
        </p>
        <h2
          className="text-3xl md:text-[2.8rem] leading-tight mb-4"
          style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
        >
          4 niveles. Un sistema completo.
        </h2>
        <p
          className="text-base mb-14 max-w-2xl"
          style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
        >
          No es un curso que devoras y olvidas. Es un sistema que aplicas desde el d\u00eda uno.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {levels.map((l, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 md:p-8 transition hover:shadow-md${
                i === 0 ? " md:col-span-2" : ""
              }`}
              style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
            >
              <span className="text-4xl block mb-4">{l.emoji}</span>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}
              >
                {l.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
              >
                {l.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
