export default function Comunidad() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-sm font-semibold mb-3 tracking-wide"
          style={{ fontFamily: "var(--font-work)", color: "var(--orange)" }}
        >
          INCLUIDO EN DIGITAL OS PERSONAL
        </p>
        <h2
          className="text-3xl md:text-[2.8rem] leading-tight mb-6"
          style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
        >
          Descubre el Club de Enfocados.
        </h2>
        <p
          className="text-base mb-4 max-w-2xl leading-relaxed"
          style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
        >
          Organizar tu vida digital no es aprender algo una vez. Es construir hábitos.
          Y los hábitos no se construyen solos, leyendo, ni viendo vídeos.
          Se construyen haciendo. Con ritmo. Con gente al lado.
        </p>
        <p
          className="text-base mb-12 max-w-2xl leading-relaxed"
          style={{ fontFamily: "var(--font-work)", color: "var(--navy)", fontWeight: 500 }}
        >
          El Club de Enfocados es donde dejas de aprender y empiezas a transformarte.
          Aquí no vienes a consumir contenido. Vienes a pasar a la acción.
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
              2 sesiones de coworking al mes
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
            >
              Nos conectamos y avanzamos juntos en tiempo real.
              Tú con tus tareas, los demás con las suyas. Sin distracciones,
              sin excusas. Lo que llevas posponiendo semanas, se hace en una sesión.
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
              Sesión temática + Q&A cada 15 días
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
            >
              Raquel en directo profundizando en lo que necesitas y
              resolviendo dudas reales. No teoría de relleno: lo que te bloquea ahora,
              resuelto ahora.
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
              Tu accountability partner
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
            >
              Alguien que va al mismo ritmo que tú, con quien compartir avances
              y empujarte mutuamente. Porque cuando alguien te espera,
              es mucho más difícil dejarlo para mañana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
