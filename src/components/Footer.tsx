import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="py-16 px-6"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/raquel-circle.png"
                alt="Raquel Vázquez"
                width={44}
                height={44}
                className="rounded-full"
              />
              <p
                className="font-bold text-lg text-white"
                style={{ fontFamily: "var(--font-libre)" }}
              >
                DIGITAL OS
              </p>
            </div>
            <p
              className="text-sm"
              style={{
                fontFamily: "var(--font-work)",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Gente real en un mundo de IA
            </p>
          </div>

          {/* Column: Programas */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider text-white mb-4"
              style={{ fontFamily: "var(--font-work)" }}
            >
              Programas
            </p>
            <ul className="space-y-2.5">
              {[
                "Digital OS Personal",
                "Club de Enfocados",
                "Seminario IA",
                "Mentorías",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm transition hover:text-white"
                    style={{
                      fontFamily: "var(--font-work)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Recursos */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider text-white mb-4"
              style={{ fontFamily: "var(--font-work)" }}
            >
              Recursos
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Newsletter", href: "#newsletter" },
                { label: "Reseñas", href: "#resenas" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition hover:text-white"
                    style={{
                      fontFamily: "var(--font-work)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Contacto */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider text-white mb-4"
              style={{ fontFamily: "var(--font-work)" }}
            >
              Contacto
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hola@digitalos.es"
                  className="text-sm transition hover:text-white"
                  style={{
                    fontFamily: "var(--font-work)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  hola@digitalos.es
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition hover:text-white"
                  style={{
                    fontFamily: "var(--font-work)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-work)",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            &copy; 2026 Digital OS es una marca de ENUNO
          </p>
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-work)",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            hola@digitalos.es
          </p>
        </div>
      </div>
    </footer>
  );
}
