export default function PainPoints() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-[2.8rem] leading-tight mb-6"
          style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
        >
          ¿Te suena?
        </h2>

        <div
          className="rounded-2xl p-8 md:p-10 mb-8"
          style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
        >
          <div className="space-y-6" style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}>
            <div className="flex gap-4 items-start">
              <span className="text-2xl shrink-0" style={{ color: "var(--orange)" }}>&ldquo;</span>
              <p className="text-base leading-relaxed italic" style={{ color: "var(--muted)" }}>
                Estoy hasta arriba de trabajo, pero al final del día siento que sigo igual:
                saltando entre tareas, sin acabar ninguna importante.
              </p>
            </div>

            <div className="border-t" style={{ borderColor: "var(--border)" }} />

            <div className="flex gap-4 items-start">
              <span className="text-2xl shrink-0" style={{ color: "var(--orange)" }}>&ldquo;</span>
              <p className="text-base leading-relaxed italic" style={{ color: "var(--muted)" }}>
                Tengo notas en Notion, mil grupos de WhatsApp, recordatorios en el móvil,
                listas en papel... pero cuando necesito algo, tardo una eternidad en encontrarlo.
              </p>
            </div>

            <div className="border-t" style={{ borderColor: "var(--border)" }} />

            <div className="flex gap-4 items-start">
              <span className="text-2xl shrink-0" style={{ color: "var(--orange)" }}>&ldquo;</span>
              <p className="text-base leading-relaxed italic" style={{ color: "var(--muted)" }}>
                Empiezo cada semana con intención de organizarme mejor, pero el jueves ya
                estoy atrapado en la misma situación.
              </p>
            </div>
          </div>
        </div>

        <p
          className="text-xl font-medium leading-relaxed"
          style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}
        >
          El caos digital no es falta de disciplina. <strong>Es falta de sistema.</strong>
          <br />
          <span style={{ color: "var(--muted)", fontWeight: 400, fontSize: "1.05rem" }}>
            El problema no eres tú. Es el sistema que estás usando — o la ausencia de él.
          </span>
        </p>
      </div>
    </section>
  );
}
