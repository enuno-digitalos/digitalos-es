"use client";

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-16 px-6" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10"
          style={{ backgroundColor: "var(--bg-alt)", boxShadow: "var(--shadow)" }}
        >
          <div className="flex-1">
            <h2
              className="text-2xl md:text-3xl mb-3 leading-tight"
              style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
            >
              ¿No estás listo todavía?
              <br />
              Empieza aquí.
            </h2>
            <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}>
              Cada quince días en tu correo: una idea práctica para poner orden
              en tu vida digital. Sin spam, sin humo.
            </p>
          </div>
          <div className="w-full md:w-auto shrink-0">
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Tu nombre"
                className="px-5 py-3.5 rounded-full border text-sm w-full md:w-64 outline-none focus:border-[var(--orange)]"
                style={{ fontFamily: "var(--font-work)", borderColor: "var(--border)", backgroundColor: "var(--card)" }}
              />
              <input
                type="email"
                placeholder="Tu email"
                className="px-5 py-3.5 rounded-full border text-sm w-full md:w-64 outline-none focus:border-[var(--orange)]"
                style={{ fontFamily: "var(--font-work)", borderColor: "var(--border)", backgroundColor: "var(--card)" }}
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full text-white text-sm font-semibold transition hover:opacity-90"
                style={{ fontFamily: "var(--font-work)", backgroundColor: "var(--navy)" }}
              >
                Suscríbete
              </button>
            </form>
            <p className="text-xs mt-3" style={{ color: "var(--muted)", fontFamily: "var(--font-work)" }}>
              Sin spam. Te puedes dar de baja cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
