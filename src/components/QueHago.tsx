const ambitos = [
  {
    title: "Personal",
    desc: "Pon orden en tu vida digital. Correo, calendario, tareas, archivos, contraseñas. Un sistema que funciona y que puedes mantener.",
    status: "Disponible",
    cta: "Ver programa",
    href: "#personal",
  },
  {
    title: "Creator",
    desc: "Para profesionales que quieren monetizar su presencia digital con sistemas, no con improvisación.",
    status: "Octubre 2026",
    cta: null,
    href: null,
  },
  {
    title: "Business",
    desc: "Ecosistemas digitales para equipos pequeños. Procesos, delegación, IA aplicada al negocio.",
    status: "Próximamente",
    cta: null,
    href: null,
  },
];

export default function QueHago() {
  return (
    <section id="que-hago" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)", letterSpacing: "2.5px" }}
        >
          Cómo puedo ayudarte
        </p>
        <h2
          className="text-3xl md:text-4xl mb-4"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          Tres ámbitos. Un sistema.
        </h2>
        <p
          className="text-lg mb-14 max-w-2xl"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}
        >
          Si hay caos, la IA amplifica tu caos. Primero el sistema. Después, la tecnología.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ambitos.map((a, i) => (
            <div
              key={i}
              className="rounded-md p-8 border flex flex-col"
              style={{
                backgroundColor: i === 0 ? "var(--card)" : "var(--bg)",
                borderColor: i === 0 ? "var(--orange)" : "var(--border)",
                borderLeftWidth: i === 0 ? "3px" : "1px",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--navy)" }}
                >
                  {a.title}
                </h3>
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    fontFamily: "var(--font-work), 'Work Sans', sans-serif",
                    backgroundColor: i === 0 ? "var(--orange)" : "var(--bg)",
                    color: i === 0 ? "#fff" : "var(--muted)",
                    border: i === 0 ? "none" : "1px solid var(--border)",
                  }}
                >
                  {a.status}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}
              >
                {a.desc}
              </p>
              {a.cta && a.href && (
                <a
                  href={a.href}
                  className="text-sm font-semibold inline-flex items-center gap-1 transition hover:opacity-70"
                  style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--orange)" }}
                >
                  {a.cta} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
