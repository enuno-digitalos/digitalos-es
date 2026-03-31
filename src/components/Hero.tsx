const CTA_URL = "https://enuno.quadernoapp.com/checkout/session/3453a4b04426bf11672b37a06cddf8f2fcb7b933/init";

export default function Hero() {
  return (
    <section className="pt-28 pb-6 md:pt-36 md:pb-10 px-6" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-3xl mx-auto">
        <p
          className="text-sm font-semibold mb-6 tracking-wide"
          style={{ fontFamily: "var(--font-work)", color: "var(--orange)" }}
        >
          DIGITAL OS PERSONAL
        </p>

        <h1
          className="text-[2.5rem] md:text-[3.8rem] leading-[1.1] mb-8"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          Para de apagar fuegos.<br />
          <span style={{ color: "var(--orange)" }}>Construye el sistema</span> que te
          devuelve el control.
        </h1>

        <p
          className="text-xl md:text-[1.35rem] leading-relaxed mb-10 max-w-xl"
          style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
        >
          El programa con el que pones orden en tu vida digital de una vez
          — sin teoría innecesaria, sin excusas, con resultados desde el primer nivel.
        </p>

        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-semibold px-10 py-4 rounded-full text-white transition hover:shadow-lg hover:scale-[1.02] text-base"
          style={{ fontFamily: "var(--font-work)", backgroundColor: "var(--orange)" }}
        >
          Quiero poner orden →
        </a>

        <p
          className="text-sm mt-4 mb-6"
          style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
        >
          397€ + IVA/año · Acceso inmediato
        </p>
      </div>
    </section>
  );
}
