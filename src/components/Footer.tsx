export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[var(--navy)] text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="font-bold text-lg"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              en·uno
            </p>
            <p className="text-white/60 text-sm" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Productividad digital para emprendedores
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/60" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            <a href="#programa" className="hover:text-white transition">Programa</a>
            <a href="#testimonios" className="hover:text-white transition">Testimonios</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </div>

          <p className="text-xs text-white/40" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            &copy; 2026 en·uno by Raquel Vázquez
          </p>
        </div>
      </div>
    </footer>
  );
}
