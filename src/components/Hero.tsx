export default function Hero() {
  return (
    <section className="pt-28 pb-10 md:pt-40 md:pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl md:text-[3.5rem] leading-[1.15] mb-8"
          style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
        >
          Para de apagar fuegos.{" "}
          <span style={{ color: "var(--orange)" }}>Construye el sistema</span>{" "}
          que te devuelve el control.
        </h1>

        <p
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}
        >
          Digital OS Personal es el programa con el que pones orden en tu vida digital
          de una vez — sin teoría innecesaria, sin excusas, con resultados desde el primer nivel.
        </p>

        <a
          href="https://enuno.quadernoapp.com/checkout/session/3453a4b04426bf11672b37a06cddf8f2fcb7b933/init"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-semibold px-10 py-4 rounded-full text-white transition hover:opacity-90 text-base"
          style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", backgroundColor: "var(--orange)" }}
        >
          Quiero poner orden
        </a>
      </div>
    </section>
  );
}
