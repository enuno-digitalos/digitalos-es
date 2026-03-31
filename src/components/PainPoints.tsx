const quotes = [
  {
    text: "Tengo más de 60.000 emails sin leer. Cuando necesito encontrar algo, tardo 10 minutos. Y al final uso «olvidé mi contraseña» porque ni eso controlo.",
  },
  {
    text: "Tengo archivos en el escritorio, en descargas, en un pendrive, en «alguna nube que no recuerdo cuál». Y versiones: documento_final, documento_final_2, documento_DEFINITIVO.",
  },
  {
    text: "Sé que debería saber hacer esto. Pero cada vez que intento ordenarlo, me bloqueo. He tirado la toalla tantas veces que ya no creo que pueda cambiar.",
  },
  {
    text: "Mientras yo busco ese archivo que «mandé la semana pasada», otros resuelven en segundos lo que a mí me lleva media mañana.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-[2.8rem] leading-tight mb-12"
          style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
        >
          ¿Te suena?
        </h2>

        <div className="space-y-5 mb-14">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="rounded-xl p-6 md:p-8"
              style={{
                backgroundColor: "var(--card)",
                borderLeft: "4px solid var(--orange)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <p
                className="text-base md:text-[1.05rem] leading-relaxed italic"
                style={{
                  fontFamily: "var(--font-libre), 'Libre Baskerville', serif",
                  color: "var(--text)",
                }}
              >
                &ldquo;{q.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl">
          <p
            className="text-xl md:text-2xl font-medium leading-snug mb-2"
            style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}
          >
            El caos digital no es falta de disciplina.{" "}
            <strong>Es falta de sistema.</strong>
          </p>
          <p
            className="text-lg"
            style={{ fontFamily: "var(--font-work)", color: "var(--orange)" }}
          >
            Y eso se arregla.
          </p>
        </div>
      </div>
    </section>
  );
}
