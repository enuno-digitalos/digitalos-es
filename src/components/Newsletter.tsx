"use client";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="py-16 px-6 border-y"
      style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2
            className="text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
          >
            Si no sabes por dónde empezar, empieza aquí.
          </h2>
          <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}>
            Cada quince días en tu correo: una idea práctica para poner orden en tu vida digital. Sin spam, sin humo.
          </p>
        </div>
        <div className="w-full md:w-auto flex-shrink-0">
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Tu email"
              className="px-4 py-3 rounded-full border text-sm w-full sm:w-64 outline-none focus:ring-2"
              style={{
                fontFamily: "var(--font-work), 'Work Sans', sans-serif",
                borderColor: "var(--border)",
                backgroundColor: "var(--bg)",
              }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full text-white text-sm font-semibold transition hover:opacity-90"
              style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", backgroundColor: "var(--orange)" }}
            >
              Suscríbete
            </button>
          </form>
          <p className="text-xs mt-2" style={{ color: "var(--muted)", fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}>
            Gratis. Sin spam. Te puedes dar de baja cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}
