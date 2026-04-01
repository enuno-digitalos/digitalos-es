const levels = [
  {
    icon: "/illustrations/target.svg",
    title: "La visión completa del sistema",
    body: "Antes de tocar nada, entiendes cómo encaja todo. Dejas de saltar de herramienta en herramienta sin rumbo. Ves el mapa completo por primera vez.",
    items: [],
  },
  {
    icon: "/illustrations/plan.svg",
    title: "Tu base: quién eres y cómo trabajas",
    body: "El cimiento que nadie te enseña. Defines qué necesitas realmente, eliminas lo que sobra y diseñas tu forma de funcionar antes de abrir ninguna app.",
    items: [
      "Dejar de empezar cada semana desde cero",
      "Saber qué es importante HOY sin listas infinitas",
      "Un sistema de prioridades que funciona sin fuerza de voluntad",
    ],
  },
  {
    icon: "/illustrations/email.svg",
    title: "Email, tareas y tiempo bajo control",
    body: "Lo que más duele, resuelto primero. De 120.000 emails a bandeja controlada. De apagar fuegos a saber qué toca cada día.",
    items: [
      "Reglas automáticas que filtran tu correo sin que toques nada",
      "Carpetas inteligentes para encontrar cualquier email en segundos",
      "Un sistema de tareas que cabe en tu cabeza",
      "Atajos y expansores de texto que te ahorran horas de escritura repetitiva",
    ],
  },
  {
    icon: "/illustrations/workspace.svg",
    title: "Todo en un lugar (no en seis)",
    body: "Archivos, notas, contraseñas, ideas, proyectos. Un solo sitio donde encuentras cualquier cosa en segundos. Tu cerebro digital.",
    items: [
      "Sincronizar todos tus dispositivos para tener lo mismo en el móvil y el ordenador",
      "Organizar carpetas con un sistema que se mantiene solo",
      "Capturar cualquier idea, enlace o referencia sin que se pierda nunca",
      "Tu contexto personal listo para que la IA te ayude de verdad (no con respuestas genéricas)",
    ],
  },
  {
    icon: "/illustrations/launch.svg",
    title: "La IA trabaja para ti",
    body: "Cuando hay orden, la IA multiplica tu capacidad. Revisiones semanales, tu primer asistente digital y automatizaciones que te devuelven horas.",
    items: [
      "Una revisión semanal en 15 minutos que te da claridad para toda la semana",
      "Tu asistente IA personalizado que conoce tu contexto y te da respuestas útiles",
      "Automatizaciones simples que eliminan tareas repetitivas para siempre",
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
                <img src={l.icon} alt="" aria-hidden="true" className="shrink-0" style={{ width: "56px", height: "56px" }} />
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
