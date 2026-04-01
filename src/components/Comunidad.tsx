export default function Comunidad() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-sm font-semibold mb-3 tracking-wide"
          style={{ fontFamily: "var(--font-work)", color: "var(--orange)" }}
        >
          CLUB DE ENFOCADOS
        </p>
        <h2
          className="text-3xl md:text-[2.8rem] leading-tight mb-6"
          style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
        >
          No es un programa más.
          <br />
          Es un hackeo para pasar a la acción.
        </h2>
        <p
          className="text-base mb-12 max-w-2xl leading-relaxed"
          style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
        >
          Vivimos en un mundo diseñado para distraerte. No eres desordenado:
          es que nadie te ha enseñado a proteger tu atención. El Club de Enfocados
          es el lugar donde dejas de intentarlo solo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            className="rounded-2xl p-7"
            style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <span className="text-3xl block mb-4">⚡</span>
            <h3
              className="text-base font-bold mb-2"
              style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}
            >
              2 sesiones de trabajo conjunto al mes
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
            >
              Nos conectamos, trabajamos en silencio y avanzamos juntos. Sin excusas,
              sin distracciones. Lo que no haces solo, lo haces acompañado.
            </p>
          </div>

          <div
            className="rounded-2xl p-7"
            style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <span className="text-3xl block mb-4">🎯</span>
            <h3
              className="text-base font-bold mb-2"
              style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}
            >
              1 sesión temática + Q&A cada 15 días
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
            >
              Raquel en directo resolviendo dudas reales y profundizando en temas
              que importan. Sin teoría de relleno. Solo lo que necesitas ahora.
            </p>
          </div>

          <div
            className="rounded-2xl p-7"
            style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <span className="text-3xl block mb-4">🤝</span>
            <h3
              className="text-base font-bold mb-2"
              style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}
            >
              Una comunidad que entiende
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
            >
              Gente real con los mismos retos. Sin juicios, sin preguntas tontas.
              Aquí nadie te mira raro por no saber algo. Aquí se aprende haciendo.
            </p>
          </div>
        </div>

        <p
          className="text-center text-sm mt-10"
          style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
        >
          El primer año en el Club de Enfocados está incluido con Digital OS Personal.
        </p>
      </div>
    </section>
  );
}
