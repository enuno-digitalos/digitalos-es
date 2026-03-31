const programas = [
  { title: "Digital OS Creator", desc: "Para profesionales que quieren monetizar su presencia digital con sistemas.", status: "Octubre 2026" },
  { title: "Digital OS Business", desc: "Ecosistemas digitales para equipos. Procesos, delegación, IA aplicada.", status: "Próximamente" },
  { title: "Digital SOS", desc: "¿No estás listo para Personal? Entrada mínima para empezar a poner orden.", status: "Siempre disponible" },
  { title: "Seminario: Construye tu sistema IA", desc: "Intensivo práctico para integrar IA en tu día a día.", status: "Próxima edición" },
];

export default function OtrosPrograms() {
  return (
    <section className="py-16 px-6 border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold mb-3 tracking-wide" style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}>
          TAMBIÉN EN DIGITAL OS
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {programas.map((p, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl"
              style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
            >
              <span
                className="text-xs px-2.5 py-1 rounded-full font-medium inline-block mb-3"
                style={{ fontFamily: "var(--font-work)", backgroundColor: "var(--bg-alt)", color: "var(--muted)", fontSize: "0.7rem" }}
              >
                {p.status}
              </span>
              <h3
                className="text-sm font-bold mb-2"
                style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}
              >
                {p.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
