const CTA_URL = "https://raquel-vazquez.quaderno.io/checkout/personal-os-2";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="text-[2.2rem] md:text-[3.6rem] leading-[1.12] mb-4"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          120.000 emails sin leer.
          <br />
          Archivos perdidos. Contraseñas olvidadas.
          <br />
          <span className="text-[1.6rem] md:text-[2.4rem]" style={{ color: "var(--muted)" }}>
            La IA avanzando sin ti.
          </span>
        </h1>

        <p
          className="text-[1.4rem] md:text-[2rem] leading-[1.3] mt-8 mb-4"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          Respira.{" "}
          <span style={{ color: "var(--orange)" }}>Para esto hay un sistema.</span>
        </p>

        <p
          className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
        >
          Digital OS Personal. Tu mapa para organizar tu vida digital.
          <br />
          A tu manera. A tu ritmo.
        </p>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex -space-x-3">
            {[
              { bg: "#e8d5c4", text: "R" },
              { bg: "#c4d5e8", text: "M" },
              { bg: "#d5e8c4", text: "A" },
              { bg: "#e8c4d5", text: "L" },
              { bg: "#d5c4e8", text: "J" },
            ].map((avatar, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold border-2 border-white"
                style={{
                  backgroundColor: avatar.bg,
                  fontFamily: "var(--font-work)",
                  color: "var(--navy)",
                }}
              >
                {avatar.text}
              </div>
            ))}
          </div>
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
          >
            Más de 2.000 personas ya han empezado a poner orden
          </p>
        </div>

        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-semibold px-12 py-4 rounded-full text-white transition-all duration-200 hover:shadow-lg hover:scale-[1.03] text-base"
          style={{ fontFamily: "var(--font-work)", backgroundColor: "var(--orange)" }}
        >
          Quiero poner orden →
        </a>

        <p
          className="text-sm mt-5"
          style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
        >
          397€ + IVA/año · Acceso inmediato
        </p>
      </div>

    </section>
  );
}
