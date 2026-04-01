export default function CTAFinal() {
  return (
    <section
      className="py-24 px-6 text-center"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-3xl md:text-4xl mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-libre)",
            color: "var(--navy)",
          }}
        >
          No necesitas más información.
          <br />
          Necesitas implementar.
        </h2>
        <p
          className="text-lg mb-10"
          style={{
            fontFamily: "var(--font-work)",
            color: "var(--muted)",
          }}
        >
          Digital OS Personal es el sistema con el que por fin pones orden. De
          verdad. 397€ + IVA/año.
        </p>
        <a
          href="https://raquel-vazquez.quaderno.io/checkout/personal-os-2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-semibold px-12 py-4 rounded-full transition hover:opacity-90 text-lg"
          style={{
            fontFamily: "var(--font-work)",
            backgroundColor: "var(--orange)",
            color: "#fff",
          }}
        >
          Quiero poner orden →
        </a>
        <p
          className="text-sm mt-5"
          style={{
            fontFamily: "var(--font-work)",
            color: "var(--muted)",
          }}
        >
          Dinero feliz. Si no es para ti, te lo devuelvo.
        </p>
      </div>
    </section>
  );
}
