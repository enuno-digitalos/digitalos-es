const CTA_URL = "https://raquel-vazquez.quaderno.io/checkout/personal-os-2";

const incluye = [
  "4 niveles: tu mapa y hoja de ruta completos",
  "Guías descargables y plantillas listas para usar",
  "1 año en el Club de Enfocados (sesiones de trabajo + Q&A)",
  "Acceso inmediato, avanza a tu ritmo",
];

const bonus = [
  { emoji: "🎓", text: "Masterclass ChatGPT", valor: "valor 97€" },
  { emoji: "📋", text: "Masterclass Notion", valor: "valor 97€" },
  { emoji: "🤖", text: "Masterclass: tu primer asistente con Claude", valor: "valor 147€" },
];

export default function Oferta() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-3xl mx-auto">
        <p
          className="text-sm font-semibold mb-3 tracking-wide"
          style={{ fontFamily: "var(--font-work)", color: "var(--orange)" }}
        >
          LA OFERTA
        </p>
        <h2
          className="text-3xl md:text-[2.8rem] leading-tight mb-12"
          style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
        >
          Todo lo que incluye Digital OS Personal
        </h2>

        <div
          className="rounded-2xl p-7 md:p-10 mb-8"
          style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
        >
          <div className="space-y-4">
            {incluye.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-0.5 text-lg font-bold"
                  style={{ color: "var(--orange)" }}
                >
                  ✓
                </span>
                <span
                  className="text-base"
                  style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-2xl p-8 md:p-12 mb-8 text-center"
          style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
        >
          <p
            className="text-5xl md:text-6xl font-bold mb-2"
            style={{ fontFamily: "var(--font-work)", color: "var(--navy)" }}
          >
            397€
            <span
              className="text-xl font-normal ml-1"
              style={{ color: "var(--muted)" }}
            >
              + IVA/año
            </span>
          </p>
          <p
            className="text-base mb-10"
            style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
          >
            Menos de 1,10€ al día por tener tu vida digital bajo control.
          </p>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-semibold px-14 py-5 rounded-full transition hover:shadow-xl hover:scale-[1.02] text-lg"
            style={{
              fontFamily: "var(--font-work)",
              backgroundColor: "var(--orange)",
              color: "#fff",
            }}
          >
            Quiero poner orden →
          </a>
          <p
            className="text-sm mt-6 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
          >
            Quiero dinero feliz: yo feliz de recibirlo y tú de dármelo.
            Si después de entrar sientes que no es para ti y me cuentas
            el porqué, te devuelvo el dinero. Sin más.
            Y si todavía tienes dudas, quizá es mejor esperar al momento adecuado.
          </p>
        </div>

        <div
          className="rounded-2xl p-7 md:p-10"
          style={{ backgroundColor: "var(--card)", boxShadow: "var(--shadow)" }}
        >
          <h3
            className="text-xl md:text-2xl mb-6"
            style={{ fontFamily: "var(--font-libre)", color: "var(--navy)" }}
          >
            Y además, estos bonuses:
          </h3>
          <div className="space-y-4">
            {bonus.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-xl shrink-0">{b.emoji}</span>
                <span
                  className="text-base"
                  style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
                >
                  <strong>{b.text}</strong>
                  <span style={{ color: "var(--muted)" }}> ({b.valor})</span>
                </span>
              </div>
            ))}
          </div>
          <p
            className="text-sm mt-6 font-semibold"
            style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
          >
            Valor total de los bonuses: 341€
          </p>
        </div>
      </div>
    </section>
  );
}
