export default function Oferta() {
  const beneficios = [
    "Si lo aplicas, saldrás con el sistema funcionando",
    "Solo información práctica y simple, para la vida real. Lo que necesitas, sin perderte en métodos innecesarios",
    "Sesiones periódicas en directo para dudas y consultas",
    "Incluye asistentes IA para optimizar tu carga de trabajo",
  ];

  return (
    <section className="py-20 px-6 bg-[var(--navy)] text-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[var(--orange)] text-sm uppercase tracking-wider mb-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          De qué estoy hablando exactamente
        </p>
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          Productividad Digital → Del caos al clic
        </h2>
        <p className="text-white/80 mb-4" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          Si quieres una vida más fácil y sencilla, aquí tienes el sistema para conseguirla
        </p>
        <p className="font-bold mb-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          4 niveles para cambiar tu vida y organización digital
        </p>
        <p className="text-white/70 mb-8" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          Pasarás de vivir apagando fuegos a trabajar con claridad, más calma y con tiempo de calidad para lo que te importa
        </p>

        <div className="bg-white/10 rounded-md p-8 md:p-10 text-left mb-8">
          <p className="text-[var(--orange)] text-sm mb-2">★★★★★</p>
          <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            Qué obtienes a cambio
          </h3>
          <ul className="space-y-3">
            {beneficios.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                {b}
              </li>
            ))}
          </ul>

          <div className="text-center mt-10">
            <p className="text-4xl font-bold mb-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              397€ <span className="text-lg font-normal text-white/70">+ IVA</span>
            </p>
            <p className="text-white/60 text-sm mb-6" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Se irá desbloqueando el contenido poco a poco y habrá actualizaciones frecuentes
            </p>
            <a
              href="#empezar"
              className="inline-block bg-[var(--orange)] text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              ¡Quiero vivir mejor!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
