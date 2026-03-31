export default function PainPoints() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-md p-8 md:p-12 text-center">
          <p
            className="text-[10px] uppercase tracking-[2.5px] text-[var(--muted)] mb-3"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            ¡Libera tu día, tu agenda y tu cabeza!
          </p>
          <h2
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            ¿Necesitas más horas al día?
          </h2>
          <p className="text-[var(--muted)] text-sm uppercase tracking-wider mb-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            No te engañes. Hazlo simple
          </p>
          <p className="text-[var(--text)] mb-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            Trabaja menos, pero mejor. <strong>¡Vive más!</strong>
          </p>
          <p className="text-[var(--muted)] mb-8" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            Sin presión, sin agobios, sin culpa
          </p>
          <a
            href="#empezar"
            className="inline-block bg-[var(--orange)] text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition text-sm uppercase tracking-wider"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            ¡Quiero vivir mejor!
          </a>
          <p className="text-[var(--muted)] text-xs mt-6" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            Impulsando a +2.000 emprendedores a estructurar su negocio y su vida digital con claridad, foco y herramientas que sí funcionan
          </p>
        </div>

        <div className="mt-16 space-y-6 text-center">
          <p className="text-[var(--muted)]" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            Desde el caos del correo y las tareas infinitas, hasta notas olvidadas y contenido que nunca aplicas...
          </p>
          <p className="text-[var(--text)]" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            Aquí encuentras el paso a paso para poner orden, reducir el ruido y crear un sistema digital simple, claro y sostenible
          </p>
          <div className="space-y-2">
            <p className="text-[var(--muted)]" style={{ fontFamily: "'Work Sans', sans-serif" }}>Sin teoría innecesaria, sin promesas vacías</p>
            <p className="text-[var(--muted)]" style={{ fontFamily: "'Work Sans', sans-serif" }}>Solo lo que uso cada día para tener foco, ahorrar tiempo y evitar dolores de cabeza</p>
          </div>
          <div>
            <p className="font-semibold" style={{ fontFamily: "'Work Sans', sans-serif" }}>Funciona para mí. Funciona para mis clientes</p>
            <p className="text-[var(--muted)]" style={{ fontFamily: "'Work Sans', sans-serif" }}>Si buscas claridad, estructura y herramientas fáciles de aplicar, esto es para ti</p>
          </div>
        </div>
      </div>
    </section>
  );
}
