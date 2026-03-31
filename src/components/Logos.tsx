const logos = [
  "imageen.", "doppamine", "PALOMA FERNÁNDEZ", "ipp",
  "[m·break]", "EOI", "CREA", "angelmanez", "EUROFISH",
];

export default function Logos() {
  return (
    <section className="py-10 border-y" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((name, i) => (
            <span
              key={i}
              className="text-xs font-semibold uppercase tracking-widest opacity-40"
              style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--navy)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
