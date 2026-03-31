const dolores = [
  "\"Estoy hasta arriba de trabajo, pero al final del día siento que sigo igual: saltando entre tareas, sin acabar ninguna importante.\"",
  "\"Tengo notas en Notion, mil grupos de WhatsApp, recordatorios en el móvil, listas en papel... pero cuando necesito algo, tardo una eternidad en encontrarlo.\"",
  "\"Empiezo cada semana con intención de organizarme mejor, pero el jueves ya estoy atrapado en la misma situación.\"",
];

export default function PainPoints() {
  return (
    <section id="personal" className="py-20 px-6" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl mb-4"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          ¿Te suena familiar?
        </h2>
        <p
          className="text-base mb-10"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}
        >
          El caos digital no es falta de disciplina. <strong style={{ color: "var(--text)" }}>Es falta de sistema.</strong>
        </p>

        <div className="space-y-4 mb-10">
          {dolores.map((d, i) => (
            <div
              key={i}
              className="p-5 rounded-md border-l-[3px]"
              style={{
                fontFamily: "var(--font-work), 'Work Sans', sans-serif",
                backgroundColor: "var(--bg)",
                borderLeftColor: "var(--orange)",
                color: "var(--muted)",
                fontStyle: "italic",
              }}
            >
              {d}
            </div>
          ))}
        </div>

        <p
          className="text-lg font-medium"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--navy)" }}
        >
          El problema no eres tú. Es el sistema que estás usando — o la ausencia de él.
        </p>
      </div>
    </section>
  );
}
