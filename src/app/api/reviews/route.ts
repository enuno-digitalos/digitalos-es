import { NextResponse } from "next/server";

// Google Places API — auto-fetches reviews for "en·uno by Raquel Vázquez"
// Set GOOGLE_PLACES_API_KEY in Vercel env vars to enable live reviews
// Without the key, the component uses fallback data

// CID: 8494171885757166874 — "en·uno by Raquel Vázquez"
// To find Place ID: use Google Places API findplacefromtext with the business name
// For now using CID-based lookup
const PLACE_ID = process.env.GOOGLE_PLACE_ID || "";
const CACHE_TTL = 3600 * 1000; // 1 hour cache

let cachedData: { data: unknown; timestamp: number } | null = null;

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      rating: 5.0,
      total: 142,
      reviews: [],
      source: "fallback",
    });
  }

  // Return cached data if fresh
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_TTL) {
    return NextResponse.json(cachedData.data);
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&reviews_sort=newest&language=es&key=${apiKey}`;
    const res = await fetch(url);
    const json = await res.json();

    if (json.result) {
      const data = {
        rating: json.result.rating || 5.0,
        total: json.result.user_ratings_total || 0,
        reviews: (json.result.reviews || []).map(
          (r: {
            author_name: string;
            rating: number;
            text: string;
            relative_time_description: string;
            profile_photo_url?: string;
          }) => ({
            author_name: r.author_name,
            rating: r.rating,
            text: r.text,
            time: r.relative_time_description,
            profile_photo_url: r.profile_photo_url,
          })
        ),
        source: "google",
      };

      cachedData = { data, timestamp: Date.now() };
      return NextResponse.json(data);
    }

    return NextResponse.json({ rating: 5.0, total: 142, reviews: [], source: "fallback" });
  } catch {
    return NextResponse.json({ rating: 5.0, total: 142, reviews: [], source: "fallback" });
  }
}
