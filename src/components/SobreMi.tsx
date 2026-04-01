import Image from "next/image";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20 px-6" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-14 flex flex-col md:flex-row gap-10 items-start"
          style={{ backgroundColor: "var(--navy)" }}
        >
          <div className="flex-1">
            <h2
              className="text-3xl md:text-4xl mb-6 text-white"
              style={{ fontFamily: "var(--font-libre)" }}
            >
              Hola, soy Raquel.
            </h2>
            <div className="space-y-4 text-white/80" style={{ fontFamily: "var(--font-work)" }}>
              <p className="text-base leading-relaxed">
                En los últimos años he formado a miles de emprendedores,
                y acompañado a más de 2.000 en mis propias charlas y formaciones.
              </p>
              <p className="text-base leading-relaxed">
                Demasiadas herramientas, demasiada información, muy poco sistema.
                Eso es lo que resuelvo.
              </p>
              <p className="text-base leading-relaxed">
                No soy gurú ni experta en trucos. Confío más en los sistemas que en las promesas.
                Soy una persona extrañamente normal en un mundo que va demasiado rápido.
              </p>
              <p className="text-base leading-relaxed font-medium text-white">
                Mi enfoque se resume en una palabra: simplificar.
                <br />
                Más claridad, más impacto, menos esfuerzo.
              </p>
              <p className="text-sm text-white/50">
                Vivo en Copenhague. Trabajo en remoto. Mi equipo más fiel tiene cuatro patas.
              </p>
            </div>
          </div>
          <div className="w-full md:w-60 shrink-0">
            <Image
              src="/raquel-bn.jpg"
              alt="Raquel Vázquez"
              width={240}
              height={320}
              className="w-full aspect-[3/4] rounded-2xl object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
