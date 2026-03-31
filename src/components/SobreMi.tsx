export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start"
          style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div className="flex-1">
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif", color: "var(--navy)" }}
            >
              Hola, soy Raquel.
            </h2>
            <div className="space-y-4" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}>
              <p className="text-base leading-relaxed">
                Diseño y organizo ecosistemas digitales para profesionales que necesitan
                recuperar foco, tiempo y control. Integro tecnología e IA de forma
                práctica y accesible.
              </p>
              <p className="text-base leading-relaxed">
                Vivo en Copenhague, trabajo en remoto y llevo años ayudando a emprendedores
                y profesionales hispanohablantes a dejar de improvisar con su organización digital.
              </p>
              <p className="text-base leading-relaxed font-medium" style={{ color: "var(--navy)" }}>
                Si hay caos, la IA amplifica tu caos. Primero el orden. Después, todo lo demás.
              </p>
            </div>
          </div>
          <div className="w-full md:w-64 shrink-0">
            <div
              className="w-full aspect-square rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
            >
              <span className="text-xs" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--muted)" }}>
                [Foto de Raquel]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
