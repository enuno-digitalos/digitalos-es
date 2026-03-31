"use client";

import { useEffect, useState } from "react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: string;
  profile_photo_url?: string;
}

interface ReviewsData {
  rating: number;
  total: number;
  reviews: Review[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-[var(--orange)] text-sm">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsData | null>(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then(setData)
      .catch(() => {});
  }, []);

  // Fallback data while API loads or if no API key
  const fallback: ReviewsData = {
    rating: 5.0,
    total: 142,
    reviews: [
      { author_name: "Celia Arévalo Voss", rating: 5, text: "Estoy aprendiendo muchísimo de Raquel, me ha enseñado a usar CHAT GPT entre otras aplicaciones y ahora lo uso profesionalmente como un asistente genial...", time: "Mar 17, 2026" },
      { author_name: "Mercedes García Santam…", rating: 5, text: "Otra vez lo ha conseguido. Material 100% aplicable. Muy recomendable.", time: "Mar 12, 2026" },
      { author_name: "Cecilia Almirón", rating: 5, text: "Raquel gracias por tu excelente explicación !!!", time: "Mar 12, 2026" },
      { author_name: "Diego Repetto", rating: 5, text: "Participé en la charla Claude de Cero, y realmente mucho aprendizaje, y lo que mas valoro es la entrega de Raquel para responder todas las preguntas d...", time: "Mar 12, 2026" },
      { author_name: "Pablo Leal", rating: 5, text: "Increíble, super útil, muchas gracias Raquel. RECOMENDADO. Muy interesante y sobre todo útil. Eres fantástica. Muchas gracias por dar claridad", time: "Mar 12, 2026" },
      { author_name: "Nidia Moros Carvallo", rating: 5, text: "Si hoy entiendo, uso y aprovecho la IA, es gracias a Raquel. Gracias infinitas y detras de sus clases, siempre", time: "Mar 12, 2026" },
      { author_name: "Carmen Alonso", rating: 5, text: "Raquel consigue que alguien que parte de cero en conocimiento digital, en primer lugar pierda el miedo y después se lance a ello observando todo lo b...", time: "Mar 12, 2026" },
      { author_name: "Lucía Herráez", rating: 5, text: "La energía de Raquel Vázquez es contagiosa. Es práctica, directa, va al grano a lo que importa. Ella nos da atajos, nos abre puertas, nos invita a tra...", time: "Mar 12, 2026" },
    ],
  };

  const reviews = data || fallback;

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-5xl font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            {reviews.rating.toFixed(2)}
          </span>
          <div>
            <StarRating rating={5} />
            <p className="text-[var(--muted)] text-sm" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              | {reviews.total} reviews
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[var(--card)] border border-[var(--border)] rounded-md p-5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[var(--orange)] font-bold text-sm" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  {r.rating} <StarRating rating={r.rating} />
                </span>
                <span className="text-[var(--muted)] text-xs" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  {r.time}
                </span>
              </div>
              <p
                className="text-[var(--text)] text-sm leading-relaxed mb-3"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {r.text}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[var(--navy)] flex items-center justify-center text-white text-xs font-bold">
                  {r.author_name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <span className="text-xs text-[var(--muted)]" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  {r.author_name}
                </span>
                <svg className="w-4 h-4 ml-auto" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=en%C2%B7uno+by+Raquel+V%C3%A1zquez+Rese%C3%B1as"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--orange)] font-semibold text-sm hover:underline"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            Ver todas en Google →
          </a>
        </div>
      </div>
    </section>
  );
}
