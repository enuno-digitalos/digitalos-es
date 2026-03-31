const levels = [
  {
    tag: "00",
    title: "La visión completa del sistema",
    body: "Antes de entrar en herramientas, la foto completa. Los 4 niveles, cómo se conectan y los principios que guían todo.",
  },
  {
    tag: "01",
    title: "SER · HACER · TENER",
    body: "Aquí empieza todo: en ti. Cuestionas el sistema que te tiene atrapado. Entiendes por qué siempre sientes que vas tarde. Rediseñas tu equilibrio. Sueltas lo que no toca — sin culpa.",
  },
  {
    tag: "02",
    title: "Lo imprescindible — Tiempo, tareas y correo",
    body: "El módulo favorito. Tu calendario sin esclavizarte. Una lista de tareas que puedes manejar y cumplir. El correo como sistema, no como monstruo. Atajos, automatizaciones simples.",
  },
  {
    tag: "03",
    title: "Tu BrainBox — El sistema que te da claridad",
    body: "Un sistema digital que trabaja para ti. Qué capturar, dónde guardarlo, cómo encontrarlo. Qué eliminar sin miedo. Archivos, carpetas, contraseñas y copias de seguridad.",
  },
  {
    tag: "04",
    title: "Optimización — Tus armas secretas",
    body: "Lo que hace que todo se sostenga. Revisiones semanales simples. Criterios para ajustar sin volver al caos. Tu BrainBox conectado con IA: las bases para que la IA trabaje con tu contexto real.",
  },
];

export default function Programa() {
  return (
    <section id="programa" className="py-20 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold mb-3 tracking-wide" style={{ fontFamily: "var(--font-work)", color: "var(--orange)" }}>
          QUÉ HAY DENTRO
        </p>
        <h2
          className="text-3xl md:text-[2.8rem] leading-tight mb-4"
          style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
        >
          4 niveles. Un sistema completo.
        </h2>
        <p className="text-base mb-14" style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}>
          No es un curso que devoras y olvidas. Es un sistema que aplicas desde el día uno.
        </p>

        <div className="space-y-4">
          {levels.map((l) => (
            <div
              key={l.tag}
              className="rounded-2xl p-7 md:p-8 flex gap-6 items-start transition hover:shadow-md"
              style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
            >
              <span
                className="text-3xl font-bold shrink-0 leading-none mt-1"
                style={{ fontFamily: "var(--font-libre)", color: l.tag === "00" ? "var(--muted)" : "var(--orange)" }}
              >
                {l.tag}
              </span>
              <div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
