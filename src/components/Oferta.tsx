const incluye = [
  "4 niveles completos de organización digital",
  "Guías y manuales adicionales (archivos, contraseñas, copias de seguridad…)",
  "Sesiones en directo cada dos meses para dudas",
  "Buzón de sugerencias permanente",
  "Actualizaciones frecuentes incluidas",
  "Acceso mientras el programa esté activo",
];

const bonus = [
  { text: "Masterclass ChatGPT grabada", detail: "cómo usar ChatGPT de forma práctica desde cero" },
  { text: "Masterclass Notion desde Cero", detail: "valor 97€" },
  { text: "Masterclass ecosistema Claude", detail: "segunda parte en directo próximamente" },
  { text: "Primer año del Club de Enfocados incluido", detail: "valor 97€/año" },
];

export default function Oferta() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "var(--navy)" }}>
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--orange)", letterSpacing: "2.5px" }}>
              Tu inversión — todo lo que incluye
            </p>

            <div className="space-y-3 mb-8 mt-6">
              {incluye.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                  <span className="text-sm text-white/85" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
              <p className="text-sm font-semibold text-white mb-4" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}>Bonus incluidos:</p>
              {bonus.map((b, i) => (
                <div key={i} className="flex items-start gap-3 mb-2">
                  <span style={{ color: "var(--orange)" }} className="shrink-0 mt-0.5">+</span>
                  <span className="text-sm text-white/80" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}>
                    <strong className="text-white">{b.text}</strong> — {b.detail}
                  </span>
                </div>
              ))}
              <p className="text-sm mt-4 font-semibold" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", color: "var(--orange)" }}>
                Valor total en bonuses: más de 340€
              </p>
            </div>

            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}>
                397€ <span className="text-lg font-normal text-white/50">+ IVA</span>
              </p>
              <p className="text-sm text-white/50 mb-8" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}>
                Pago único. Sin suscripción. Acceso inmediato.
              </p>
              <a
                href="https://enuno.quadernoapp.com/checkout/session/3453a4b04426bf11672b37a06cddf8f2fcb7b933/init"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold px-12 py-4 rounded-full transition hover:opacity-90 text-base"
                style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif", backgroundColor: "var(--orange)", color: "#fff" }}
              >
                QUIERO PONER ORDEN
              </a>
              <p className="text-xs text-white/35 mt-5 max-w-md mx-auto" style={{ fontFamily: "var(--font-work), 'Work Sans', sans-serif" }}>
                Garantía de devolución: si no es para ti y me explicas el porqué, te devuelvo el dinero. Sin más. Quiero dinero feliz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
