const levels = [
  {
    emoji: "🗺️",
    title: "La visión completa del sistema",
    body: "Antes de tocar nada, entiendes cómo encaja todo. Dejas de saltar de herramienta en herramienta sin rumbo. Ves el mapa completo por primera vez.",
    items: [],
  },
  {
    emoji: "🧭",
    title: "Empieza contigo, no con las apps",
    body: "Tu sistema debe encajar contigo. Ni conmigo ni con el vecino. No va de recetas mágicas. Aquí defines qué necesitas, sueltas lo que sobra y diseñas tu forma de funcionar.",
    items: [
      "Dejar de sentir que siempre vas tarde",
      "Saber qué es importante HOY sin listas infinitas",
      "Un sistema de prioridades que funciona sin fuerza de voluntad",
    ],
  },
  {
    emoji: "⏱️",
    title: "Email, tareas y tiempo bajo control",
    body: "No se trata de hacer más. Se trata de saber qué hacer, cuándo y cómo, sin agobiarte. Adiós a las agendas agobiantes, las listas infinitas y las tareas basura.",
    items: [
      "Reglas automáticas que filtran tu correo sin que toques nada",
      "Carpetas inteligentes para encontrar cualquier email en segundos",
      "Un sistema de tareas que cabe en tu cabeza",
      "Atajos de teclado y expansores de texto que te ahorran horas de escritura repetitiva",
    ],
  },
  {
    emoji: "🧠",
    title: "Tu BrainBox: todo en un lugar, no en seis",
    body: "Esto no va solo de guardar archivos. Va de construir un sistema digital que trabaje para ti. Sin depender de tu memoria ni vivir en el caos.",
    items: [
      "Cómo nombrar archivos y estructurar carpetas sin errores",
      "Sincronizar móvil y ordenador sin duplicar nada",
      "Trabajar en la nube con orden, proteger tus datos y gestionar contraseñas",
      "Copias de seguridad automáticas para no perder nunca nada importante",
      "Capturar ideas, enlaces y aprendizajes en un solo lugar",
      "Tu contexto personal listo para que la IA te dé respuestas útiles, no genéricas",
    ],
  },
  {
    emoji: "⚡",
    title: "Que el sistema se sostenga solo",
    body: "Este nivel es lo que hace que todo funcione semana tras semana. Lo que convierte tu sistema en parte de tu vida, no en otra tarea más.",
    items: [
      "Una revisión semanal en 15 minutos que te da claridad para toda la semana",
      "Criterios simples para ajustar tu sistema y mantenerlo al día sin volver al caos",
      "Siempre claro en qué estás, qué toca y qué no",
      "Tu sistema preparado para que la IA trabaje para ti, no al revés",
    ],
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
          QUÉ HAY DENTRO
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
          No es un curso que devoras y olvidas. Es un sistema que aplicas desde el día uno.
          Cada nivel resuelve un dolor concreto.
        </p>

        <div className="space-y-5">
          {levels.map((l, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 md:p-8"
              style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{l.emoji}</span>
                <div className="flex-1">
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}
                  >
                    {l.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
                  >
                    {l.body}
                  </p>
                  {l.items.length > 0 && (
                    <ul className="space-y-1.5">
                      {l.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm"
                          style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
                        >
                          <span className="shrink-0 mt-0.5" style={{ color: "var(--orange)" }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
