import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{ backgroundColor: "var(--navy)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/raq peke BN_2_circle2.png"
              alt="Raquel Vázquez"
              width={44}
              height={44}
              className="rounded-full"
            />
            <div>
              <p
                className="font-bold text-lg text-white"
                style={{ fontFamily: "var(--font-libre), 'Libre Baskerville', serif" }}
              >
                DIGITAL OS
              </p>
              <p
                className="text-xs text-white/40 mt-1"
                style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}
              >
                Gente real en un mundo de IA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/50" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}>
            <a href="#que-hago" className="hover:text-white transition">Qué hago</a>
            <a href="#sobre-mi" className="hover:text-white transition">Sobre mí</a>
            <a href="#resenas" className="hover:text-white transition">Reseñas</a>
            <a href="mailto:hola@digitalos.es" className="hover:text-white transition">Contacto</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}>
            &copy; 2026 Digital OS es una marca de ENUNO
          </p>
          <p className="text-xs text-white/30" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}>
            hola@digitalos.es
          </p>
        </div>
      </div>
    </footer>
  );
}
