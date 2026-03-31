"use client";

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div className="flex-1">
            <h2
              className="text-2xl md:text-3xl mb-3"
              style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
            >
              Si no sabes por dónde empezar, empieza aquí.
            </h2>
            <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}>
              Cada quince días en tu correo: una idea práctica para poner orden en tu vida digital.
            </p>
          </div>
          <div className="w-full md:w-auto shrink-0">
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Tu email"
                className="px-4 py-3 rounded-full border text-sm w-full md:w-64 outline-none"
                style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full text-white text-sm font-semibold transition hover:opacity-90"
                style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", backgroundColor: "var(--navy)" }}
              >
                Suscríbete
              </button>
            </form>
            <p className="text-xs mt-2" style={{ color: "var(--muted)", fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}>
              Sin spam. Te puedes dar de baja cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
