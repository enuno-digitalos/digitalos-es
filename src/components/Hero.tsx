export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-[10px] uppercase tracking-[2.5px] text-[var(--muted)] mb-4"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          Digital OS Personal
        </p>
        <p
          className="text-[var(--orange)] text-lg font-medium mb-4"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          Del caos al clic
        </p>
        <h1
          className="text-3xl md:text-5xl leading-tight mb-6"
          style={{ fontFamily: "'Libre Baskerville', serif" }}
        >
          Suelta el &ldquo;no me da la vida&rdquo;
          <br />
          <span className="text-[var(--navy)]">y empieza a controlar tu vida digital</span>
        </h1>
        <p
          className="text-[var(--muted)] text-lg mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          Miles de emails, archivos por todas partes, contraseñas que no recuerdas.
          Y la sensación de que esto ya se te ha ido de las manos.
        </p>
        <a
          href="#empezar"
          id="empezar"
          className="inline-block bg-[var(--navy)] text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition text-sm uppercase tracking-wider"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          Quiero poner orden
        </a>
      </div>
    </section>
  );
}
