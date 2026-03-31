const levels = [
  {
    tag: "00",
    title: "Bienvenida — La visión completa del sistema",
    body: "Antes de entrar en herramientas, la foto completa: los 4 niveles, cómo se conectan y qué principios guían el sistema.",
  },
  {
    tag: "01",
    title: "Nivel 0 · SER | HACER | TENER",
    body: "Empieza donde deberían empezar todos los cursos de productividad: en ti. Cuestiona el sistema que te tiene atrapado. Entiende por qué siempre sientes que vas tarde. Rediseña tu equilibrio. Suelta lo que no toca — sin culpa.",
  },
  {
    tag: "02",
    title: "Nivel 1 · Lo imprescindible — Tiempo, tareas y correo",
    body: "Uno de los módulos favoritos. Organiza tu calendario sin esclavizarte. Diseña una lista de tareas que puedas manejar y cumplir. Gestiona el correo como un sistema, no como un monstruo. Atajos, expansores de texto y automatizaciones simples.",
  },
  {
    tag: "03",
    title: "Nivel 2 · Tu BrainBox — El sistema que te da claridad",
    body: "Construyes un sistema digital que trabaje para ti. Qué información capturar, dónde guardarla, cómo encontrarla. Qué eliminar sin miedo. Nombrado de archivos, estructura de carpetas, limpieza digital. Contraseñas y copias de seguridad.",
  },
  {
    tag: "04",
    title: "Nivel 3 · Optimización — Tus armas secretas",
    body: "El nivel que hace que todo se sostenga. Revisiones semanales simples y rápidas. Criterios para ajustar sin volver al caos. Cómo conectar tu BrainBox con IA: las bases para que la IA trabaje con tu contexto real.",
  },
];

export default function Programa() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)", letterSpacing: "2.5px" }}
        >
          Qué hay dentro
        </p>
        <h2
          className="text-3xl md:text-4xl mb-14"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          Los 4 niveles
        </h2>

        <div className="space-y-8">
          {levels.map((l) => (
            <div
              key={l.tag}
              className="flex gap-5"
            >
              <div
                className="text-2xl font-bold shrink-0 w-12 text-right"
                style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--orange)" }}
              >
                {l.tag}
              </div>
              <div className="border-l-[3px] pl-6" style={{ borderLeftColor: "var(--border)" }}>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--navy)" }}
                >
                  {l.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}
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
