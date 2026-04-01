import Image from "next/image";

const logos = [
  { src: "/logos/ipp.png", alt: "IPP Formación", h: 40 },
  { src: "/logos/the-break.png", alt: "The Break", h: 32 },
  { src: "/logos/eoi.jpg", alt: "EOI", h: 48 },
  { src: "/logos/creven.png", alt: "Creven", h: 34 },
  { src: "/logos/angel-maria.png", alt: "Ángel María", h: 22 },
  { src: "/logos/eurofish.png", alt: "Eurofish", h: 34 },
  { src: "/logos/incognito.png", alt: "Incógnito Content Mastery", h: 30 },
  { src: "/logos/doppamine.png", alt: "Doppamine", h: 24 },
  { src: "/logos/paloma-fernandez.png", alt: "Paloma Fernández", h: 28 },
  { src: "/logos/founderz.webp", alt: "Founderz", h: 42 },
];

export default function Logos() {
  return (
    <section
      className="py-10 border-y overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      <p
        className="text-center text-xs uppercase tracking-widest mb-4"
        style={{
          fontFamily: "var(--font-work)",
          color: "var(--muted)",
        }}
      >
        He formado equipos en:
      </p>
      <div className="logo-marquee">
        <div className="logo-track">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.h * 5}
                height={logo.h}
                className="object-contain grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition duration-500"
                style={{ height: `${logo.h}px`, width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
