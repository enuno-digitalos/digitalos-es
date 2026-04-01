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
          Tu primer año en el Club de Enfocados.
        </h2>
        <p
          className="text-base mb-4 max-w-2xl leading-relaxed"
          style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
        >
          Accedes a los contenidos, sí. Pero esto avanza rápido: cada semana hay
          trucos nuevos, formas mejores de hacer las cosas, herramientas que cambian.
          Por eso el sistema incluye comunidad.
        </p>
        <p
          className="text-base mb-12 max-w-2xl leading-relaxed"
          style={{ fontFamily: "var(--font-work)", color: "var(--navy)", fontWeight: 500 }}
        >
          Porque organizar tu vida digital no es algo que hagas una vez y te olvides.
          Es un hábito que se construye mejor acompañado.
        </p>

        <div className="flex justify-center mb-10">
          <img
            src="/illustrations/community.svg"
            alt=""
            aria-hidden="true"
            style={{ width: "160px", height: "auto", opacity: 0.85 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            className="rounded-2xl p-7"
            style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <img src="/illustrations/cowork.svg" alt="" aria-hidden="true" className="mb-4" style={{ width: "48px", height: "48px" }} />
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
              Nos conectamos, trabajamos y avanzamos juntos. Lo que no haces
              solo, lo haces acompañado.
            </p>
          </div>

          <div
            className="rounded-2xl p-7"
            style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <img src="/illustrations/qa.svg" alt="" aria-hidden="true" className="mb-4" style={{ width: "48px", height: "48px" }} />
            <h3
              className="text-base font-bold mb-2"
              style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}
            >
              1 sesión temática + preguntas cada 15 días
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
            >
              Raquel en directo resolviendo dudas reales y profundizando en
              lo que importa. Sin relleno.
            </p>
          </div>

          <div
            className="rounded-2xl p-7"
            style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <img src="/illustrations/team.svg" alt="" aria-hidden="true" className="mb-4" style={{ width: "48px", height: "48px" }} />
            <h3
              className="text-base font-bold mb-2"
              style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}
            >
              Gente real con los mismos retos
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
            >
              Sin juicios, sin preguntas tontas. Aquí nadie te mira raro
              por no saber algo. Se aprende haciendo, juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
