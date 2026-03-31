"use client";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="py-20 px-6"
      style={{ backgroundColor: "var(--bg-alt)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start gap-12"
          style={{ backgroundColor: "var(--card)" }}
        >
          {/* Left side — copy */}
          <div className="flex-1">
            <h2
              className="text-2xl md:text-3xl mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-libre)",
                color: "var(--navy)",
              }}
            >
              ¿No estás listo todavía?
              <br />
              Empieza aquí.
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{
                fontFamily: "var(--font-work)",
                color: "var(--muted)",
              }}
            >
              Cada quince días en tu correo: una idea práctica para poner orden
              en tu vida digital. Sin spam, sin humo.
            </p>
            <p
              className="text-sm flex items-center gap-1.5"
              style={{
                fontFamily: "var(--font-work)",
                color: "var(--text)",
              }}
            >
              <span style={{ color: "var(--orange)", letterSpacing: "2px" }}>
                ★★★★★
              </span>
              <span className="font-medium">Más de 2.000 lectores</span>
            </p>
          </div>

          {/* Right side — form */}
          <div className="w-full md:w-80 shrink-0">
            <form
              action="#newsletter"
              method="POST"
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Tu email"
                className="px-5 py-3.5 rounded-full border text-sm w-full outline-none transition"
                style={{
                  fontFamily: "var(--font-work)",
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg)",
                  color: "var(--text)",
                }}
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full text-white text-sm font-semibold transition hover:opacity-90 w-full"
                style={{
                  fontFamily: "var(--font-work)",
                  backgroundColor: "var(--navy)",
                }}
              >
                Suscríbete
              </button>
            </form>
            <p
              className="text-xs mt-3 text-center"
              style={{
                color: "var(--muted)",
                fontFamily: "var(--font-work)",
              }}
            >
              Sin spam. Te puedes dar de baja cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
