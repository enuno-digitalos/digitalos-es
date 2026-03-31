const logos = [
  "imageen.", "doppamine", "PALOMA FERNÁNDEZ", "ipp", "[m·break]",
  "EOI", "CREA", "angelmanez", "EUROFISH", "imageen.",
];

export default function Logos() {
  return (
    <section className="py-12 border-y border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6">
        <h3
          className="text-center text-xl mb-8"
          style={{ fontFamily: "'Libre Baskerville', serif" }}
        >
          Han confiado en mí...
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((name, i) => (
            <span
              key={i}
              className="text-[var(--muted)] text-sm font-medium opacity-60"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
