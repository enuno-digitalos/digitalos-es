const levels = [
  {
    tag: "00",
    title: "Bienvenida — La visión completa del sistema",
    body: "Antes de entrar en herramientas, la foto completa: los 4 niveles, cómo se conectan y qué principios guían el sistema.",
    color: "#7a8a9a",
  },
  {
    tag: "01",
    title: "SER | HACER | TENER",
    body: "Empieza donde deberían empezar todos los cursos de productividad: en ti. Cuestiona el sistema que te tiene atrapado. Entiende por qué siempre sientes que vas tarde. Rediseña tu equilibrio. Suelta lo que no toca — sin culpa.",
    color: "#FF6A00",
  },
  {
    tag: "02",
    title: "Lo imprescindible — Tiempo, tareas y correo",
    body: "Uno de los módulos favoritos. Organiza tu calendario sin esclavizarte. Diseña una lista de tareas que puedas manejar y cumplir. Gestiona el correo como un sistema, no como un monstruo.",
    color: "#FF6A00",
  },
  {
    tag: "03",
    title: "Tu BrainBox — El sistema que te da claridad",
    body: "Construyes un sistema digital que trabaje para ti. Qué información capturar, dónde guardarla, cómo encontrarla. Qué eliminar sin miedo. Nombrado de archivos, estructura de carpetas, contraseñas y copias de seguridad.",
    color: "#FF6A00",
  },
  {
    tag: "04",
    title: "Optimización — Tus armas secretas",
    body: "El nivel que hace que todo se sostenga. Revisiones semanales simples y rápidas. Criterios para ajustar sin volver al caos. Cómo conectar tu BrainBox con IA: las bases para que la IA trabaje con tu contexto real.",
    color: "#FF6A00",
  },
];

export default function Programa() {
  return (
    <section id="programa" className="py-20 px-6">
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

        <div className="space-y-5">
          {levels.map((l) => (
            <div
              key={l.tag}
              className="rounded-2xl p-6 md:p-8 flex gap-5"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div
                className="text-3xl font-bold shrink-0"
                style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: l.color }}
              >
                {l.tag}
              </div>
              <div>
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
