"use client";

import { useEffect, useState } from "react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: string;
}

interface ReviewsData {
  rating: number;
  total: number;
  reviews: Review[];
}

const FALLBACK_REVIEWS: Review[] = [
  { author_name: "Celia Arévalo Voss", rating: 5, text: "Estoy aprendiendo muchísimo de Raquel, me ha enseñado a usar CHAT GPT entre otras aplicaciones y ahora lo uso profesionalmente como un asistente genial. Es una maestra estupenda, maestra de vida y de IA, entre otras muchas cosas. La recomiendo 100%", time: "Mar 17, 2026" },
  { author_name: "Mercedes García Santamarina", rating: 5, text: "Otra vez lo ha conseguido. Material 100% aplicable. Muy recomendable.", time: "Mar 12, 2026" },
  { author_name: "Cecilia Almiron", rating: 5, text: "Raquel gracias por tu excelente explicación !!!", time: "Mar 12, 2026" },
  { author_name: "Diego Repetto", rating: 5, text: "Participe en la charla Claude de Cero, y realmente mucho aprendizaje, y lo que mas valoro es la entrega de Raquel para respodner todas las preguntas de todos, no dejo a nadie sin responder. Una charla de 90 minutos, se extendio casi 3 horas, increible ese aporte valiossimo, Seguire participando en sus talleres", time: "Mar 12, 2026" },
  { author_name: "Pablo Leal", rating: 5, text: "Increíble, super útil, muchas gracias Raquel, RECOMENDADO. Muy interesante y sobre todo útil. Eres fantástica. Muchas gracias por dar claridad", time: "Mar 12, 2026" },
  { author_name: "Nidia Moros Carvallo", rating: 5, text: "Si hoy entiendo, uso y aprovecho la IA es gracias a Raquel. Gracias infinitas y detrás de sus clases, siempre", time: "Mar 12, 2026" },
  { author_name: "Carmen Alonso", rating: 5, text: "Raquel consigue que alguien que parta de cero en conocimiento digital, en primer lugar pierda el medio y después se lance a ello observando todo lo bueno que se puede sacar de este conocimiento al ponerlo en práctica. Es una excelente facilitadora. Muchas gracias por todo lo que das.", time: "Mar 12, 2026" },
  { author_name: "Lucia Herráez", rating: 5, text: "La energía de Raquel Vázquez es contagiosa. Es practica, directa, va al grano a lo que importa. Ella nos da atajos, nos abra puertas, nos invita a transitar entre ellas. Nos pone la cabeza como un bombo, pero tendremos una cabeza mejor estructurada. Mi relación con AI cambio mucho después de su charla, y ahora con el Brain Box. Quiero aprender Notion con ella. No imagino otra persona mejor que ella para aprender. Raquel me encanta!", time: "Mar 12, 2026" },
  { author_name: "Carles Fernández", rating: 5, text: "Me encanta su alegría y pasión, pero sobretodo su enorme practicidad. Siguiendo sus recomendaciones ganas muchísimo tiempo en infinidad de tareas. ¡Muy recomendable!", time: "Feb 2026" },
  { author_name: "Cinzia Puopolo", rating: 5, text: "Conocer a Raquel ha sido como encontrar un faro en medio del océano. Me ayuda a ganar claridad, organización y foco de forma fácil y efectiva.", time: "Feb 2026" },
  { author_name: "Lena", rating: 5, text: "La capacidad de soluciones que ofrece es tal, que crees que tu vida ha pasado a tener 30 horas. Con ella la eficiencia se vuelve una realidad.", time: "Ene 2026" },
  { author_name: "Miryam Soto", rating: 5, text: "No conozco mejor profesional para aprender la tecnología que todos los emprendedores deberíamos saber. Raquel es conocimiento, pasión y generosidad a borbotones.", time: "Ene 2026" },
];

const VISIBLE_STEP = 3;

const TRUNCATE_LENGTH = 150;

function GoldStar() {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
      <path
        d="M3.686 15.004c-.215 0-.425-.066-.6-.19-.34-.24-.49-.667-.383-1.068l1.164-4.243L.38 6.74c-.33-.255-.46-.69-.33-1.084.132-.396.495-.67.913-.69l4.485-.227 1.6-4.1C7.206.252 7.58 0 8 0c.417 0 .792.253.948.64l1.607 4.1 4.484.227c.417.02.78.293.914.69.13.394 0 .827-.328 1.084L12.14 9.5l1.165 4.242c.108.4-.045.827-.384 1.067-.34.242-.795.254-1.15.03l-3.766-2.4-3.766 2.4c-.164.106-.356.163-.552.164z"
        fill="#ffbc00"
        fillRule="evenodd"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <GoldStar key={i} />
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncate = review.text.length > TRUNCATE_LENGTH;
  const displayText = !expanded && needsTruncate
    ? review.text.slice(0, TRUNCATE_LENGTH) + "..."
    : review.text;

  const initials = review.author_name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="rounded-lg p-5 flex flex-col gap-3"
      style={{
        backgroundColor: "var(--navy)",
        borderLeft: "3px solid #ffbf23",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold" style={{ color: "#ffbc00" }}>
            {review.rating}
          </span>
          <Stars />
        </div>
        <span className="text-xs" style={{ color: "#bdbdbd" }}>
          {review.time}
        </span>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "#f0f0f0" }}>
        {displayText}
        {needsTruncate && (
          <>
            {" "}
            <button
              onClick={() => setExpanded(!expanded)}
              className="font-semibold hover:underline cursor-pointer"
              style={{ color: "#ffbc00" }}
            >
              {expanded ? "Less" : "More"}
            </button>
          </>
        )}
      </p>

      <div className="flex items-center gap-2 mt-auto">
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
          style={{ backgroundColor: "#99a2b4", color: "#fff" }}
        >
          {initials}
        </span>
        <span className="text-xs truncate" style={{ color: "#bdbdbd" }}>
          {review.author_name}
        </span>
        <span className="ml-auto shrink-0">
          <GoogleIcon />
        </span>
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  const [allReviews, setAllReviews] = useState<Review[]>(FALLBACK_REVIEWS);
  const [rating, setRating] = useState(5.0);
  const [total, setTotal] = useState(142);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_STEP);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((d: ReviewsData) => {
        if (d.rating) setRating(d.rating);
        if (d.total) setTotal(d.total);
        if (d.reviews && d.reviews.length > 0) {
          // Merge API reviews (newest) with fallback, dedup by name
          const apiNames = new Set(d.reviews.map((r: Review) => r.author_name));
          const uniqueFallback = FALLBACK_REVIEWS.filter(
            (r) => !apiNames.has(r.author_name)
          );
          setAllReviews([...d.reviews, ...uniqueFallback]);
        }
      })
      .catch(() => {});
  }, []);

  const visibleReviews = allReviews.slice(0, visibleCount);
  const hasMore = visibleCount < allReviews.length;

  return (
    <section
      id="resenas"
      className="py-16 px-6"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="text-5xl font-bold" style={{ color: "#f0f0f0" }}>
            {rating.toFixed(2)}
          </span>
          <Stars />
          <div className="w-px h-6" style={{ backgroundColor: "#bdbdbd" }} />
          <span className="text-sm" style={{ color: "#bdbdbd" }}>
            {total} reviews
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleReviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((c) => c + VISIBLE_STEP)}
              className="text-sm font-semibold cursor-pointer hover:underline"
              style={{ color: "#f0f0f0" }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
