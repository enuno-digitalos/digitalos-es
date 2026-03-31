export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl md:text-6xl leading-tight mb-6"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          Para de apagar fuegos.{" "}
          <span style={{ color: "var(--orange)" }}>Construye el sistema</span> que te
          devuelve el control.
        </h1>
        <p
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}
        >
          Diseño ecosistemas digitales para profesionales que necesitan recuperar
          foco, tiempo y control. Sin humo, sin hype. Gente real en un mundo de IA.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#personal"
            className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded-full text-white transition hover:opacity-90 text-sm"
            style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", backgroundColor: "var(--navy)" }}
          >
            Quiero poner orden
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#newsletter"
            className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded-full transition hover:opacity-80 text-sm border"
            style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", borderColor: "var(--border)", color: "var(--navy)" }}
          >
            Suscríbete a la newsletter
          </a>
        </div>
      </div>
    </section>
  );
}
