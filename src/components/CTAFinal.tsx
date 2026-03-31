export default function CTAFinal() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-3xl md:text-4xl mb-6"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          No necesitas más información ni más cursos.
          <br />
          Necesitas implementar.
        </h2>
        <p
          className="text-lg mb-10"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}
        >
          Y eso empieza hoy.
        </p>
        <a
          href="https://enuno.quadernoapp.com/checkout/session/3453a4b04426bf11672b37a06cddf8f2fcb7b933/init"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-semibold px-10 py-4 rounded-full transition hover:opacity-90 text-base"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", backgroundColor: "var(--orange)", color: "#fff" }}
        >
          QUIERO PONER ORDEN
        </a>
        <p
          className="text-sm mt-4"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}
        >
          397€ + IVA · Pago único · Acceso inmediato al contenido
        </p>
      </div>
    </section>
  );
}
