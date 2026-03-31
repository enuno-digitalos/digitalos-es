const testimonios = [
  {
    name: "Carles Fernández",
    text: "Me encanta su alegría y pasión que transmite, pero sobretodo su enorme practicidad: siguiendo sus recomendaciones ganas muchísimo tiempo en infinidad de tareas (creación asistentes en IA, uso de Freepik, Copilot, muchos trucos...). ¡Muy recomendable!",
  },
  {
    name: "Cinzia Puopolo",
    text: "Conocer a Raquel ha sido como encontrar un faro en medio del océano. No solo te ayuda a ganar claridad, organización y foco de forma fácil, efectiva y sin perder tiempo en cosas inútiles, sino que lo hace con una simpatía y cercanía que reconfortan el alma.",
  },
  {
    name: "Barbie García",
    text: "He asistido a dos masterclass de Raquel, y aunque ambas eran de larga duración, consigue hacerlas muy amenas. No pierdes el interés en ningún momento, ya que logra que lo difícil parezca fácil. Desde la primera sesión conecta contigo, incluso a través de la pantalla. Absolutamente recomendable.",
  },
  {
    name: "Justo Abad Crespo",
    text: "Raquel transmite energía, sinceridad y muchísima humanidad en cada contenido, webinar o curso que imparte. Su visión práctica y honesta de la vida hace que te sientas junto a una persona que conoces de toda la vida.",
  },
  {
    name: "Julia Clipe",
    text: "Solo se puede transmitir con esa claridad y soltura si se ha trabajado mucho antes con esa herramienta, por eso Raquel te enseña desde 0 cómo usar por ejemplo ChatGPT y lo hace tan fácil y accesible que lo llevas inmediatamente a la práctica.",
  },
  {
    name: "Miryam Soto",
    text: "No conozco mejor profesional para aprender la tecnología que todos los emprendedores deberíamos saber para hacer más fácil nuestro trabajo. Raquel es conocimiento, pasión y generosidad a borbotones. Y además ¡por fin! alguien que te lo pone fácil.",
  },
  {
    name: "Nora Andrea Marchesi",
    text: "Raquel es profesional y cercana, explica con claridad (nos lo hace fácil) y enseña herramientas nuevas e inimaginables para mí. En sus \"guías visuales\" nos da información valiosísima para comprender y trabajar mejor en nuestros proyectos.",
  },
  {
    name: "Celia Molina",
    text: "Raquel explica de forma clara y accesible para todos. Cada vez que tengo una sesión con ella, aprendo algo nuevo, incluso cuando se trata de temas que creía dominar. Tiene una forma de enseñar que aporta valor añadido y nuevas perspectivas.",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-4xl text-center mb-14"
          style={{ fontFamily: "'Libre Baskerville', serif" }}
        >
          Lo que piensan sobre mí...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="bg-[var(--card)] border border-[var(--border)] rounded-md p-6"
            >
              <p
                className="font-bold text-[var(--text)] mb-3"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {t.name}
              </p>
              <p
                className="text-[var(--muted)] text-sm leading-relaxed"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#empezar"
            className="inline-block bg-[var(--orange)] text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition text-sm uppercase tracking-wider"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            Quiero liberar mi tiempo y mi cabeza
          </a>
        </div>
      </div>
    </section>
  );
}
