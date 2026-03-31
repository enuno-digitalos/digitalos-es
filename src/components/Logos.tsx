import Image from "next/image";

const logos = [
  { src: "/logos/ipp.png", alt: "IPP Formación", h: 36 },
  { src: "/logos/the-break.png", alt: "The Break", h: 30 },
  { src: "/logos/eoi.jpg", alt: "EOI", h: 30 },
  { src: "/logos/creven.png", alt: "Creven", h: 30 },
  { src: "/logos/angel-maria.png", alt: "Ángel María", h: 22 },
  { src: "/logos/eurofish.png", alt: "Eurofish", h: 30 },
  { src: "/logos/incognito.png", alt: "Incógnito Content Mastery", h: 28 },
  { src: "/logos/doppamine.png", alt: "Doppamine", h: 22 },
  { src: "/logos/paloma-fernandez.png", alt: "Paloma Fernández", h: 24 },
  { src: "/logos/founderz.webp", alt: "Founderz", h: 28 },
];

export default function Logos() {
  return (
    <section className="py-10 border-y" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={logo.h * 5}
              height={logo.h}
              className="object-contain grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition duration-500"
              style={{ height: `${logo.h}px`, width: "auto" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
