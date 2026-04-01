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
          Si has llegado hasta aquí,
          <br />
          es porque sabes que algo tiene que cambiar.
        </h2>
        <p
          className="text-lg mb-10"
          style={{
            fontFamily: "var(--font-work)",
            color: "var(--muted)",
          }}
        >
          No hace falta que lo tengas claro del todo.
          Solo hace falta que des el primer paso. El sistema te guía desde ahí.
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
