const CTA_URL = "https://enuno.quadernoapp.com/checkout/session/3453a4b04426bf11672b37a06cddf8f2fcb7b933/init";

const incluye = [
  "4 niveles completos de organización digital",
  "Guías y manuales paso a paso (archivos, contraseñas, copias de seguridad…)",
  "Sesiones en directo cada dos meses para dudas",
  "Buzón de sugerencias permanente",
  "Actualizaciones frecuentes incluidas",
  "Acceso mientras el programa esté activo",
];

const bonus = [
  { text: "Masterclass ChatGPT grabada", detail: "cómo usarlo de forma práctica desde cero" },
  { text: "Masterclass Notion desde Cero", detail: "valor 97€" },
  { text: "Masterclass ecosistema Claude", detail: "segunda parte en directo próximamente" },
  { text: "Primer año del Club de Enfocados incluido", detail: "valor 97€/año" },
];

export default function Oferta() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: "var(--navy)" }}>
          <div className="p-8 md:p-14">
            <p className="text-sm font-semibold tracking-wide mb-8" style={{ fontFamily: "var(--font-work)", color: "var(--orange)" }}>
              TU INVERSIÓN
            </p>

            <div className="space-y-3 mb-10">
              {incluye.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5 shrink-0 text-lg">✓</span>
                  <span className="text-base text-white/85" style={{ fontFamily: "var(--font-work)" }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-7 mb-10" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              <p className="text-sm font-semibold text-white mb-5" style={{ fontFamily: "var(--font-work)" }}>
                Bonus incluidos:
              </p>
              {bonus.map((b, i) => (
                <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                  <span className="shrink-0 mt-0.5 text-lg" style={{ color: "var(--orange)" }}>+</span>
                  <span className="text-sm text-white/80" style={{ fontFamily: "var(--font-work)" }}>
                    <strong className="text-white">{b.text}</strong> — {b.detail}
                  </span>
                </div>
              ))}
              <p className="text-sm mt-5 font-semibold" style={{ fontFamily: "var(--font-work)", color: "var(--orange)" }}>
                Valor total en bonuses: más de 340€
              </p>
            </div>

            <div className="text-center">
              <p className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-work)" }}>
                397€<span className="text-xl font-normal text-white/40 ml-1">+ IVA/año</span>
              </p>
              <p className="text-sm text-white/50 mb-10" style={{ fontFamily: "var(--font-work)" }}>
                Suscripción anual · Acceso inmediato al contenido
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold px-14 py-5 rounded-full transition hover:shadow-xl hover:scale-[1.02] text-lg"
                style={{ fontFamily: "var(--font-work)", backgroundColor: "var(--orange)", color: "#fff" }}
              >
                QUIERO PONER ORDEN →
              </a>
              <p className="text-xs text-white/30 mt-6 max-w-sm mx-auto leading-relaxed" style={{ fontFamily: "var(--font-work)" }}>
                Garantía de devolución: si no es para ti y me explicas el porqué, te devuelvo el dinero. Sin más. Quiero dinero feliz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
