import Image from "next/image";

const logos = [
  { src: "/logos/angel-maria.png", alt: "Ángel María", h: 28 },
  { src: "/logos/doppamine.png", alt: "Doppamine", h: 24 },
  { src: "/logos/incognito.png", alt: "Incógnito Content Mastery", h: 32 },
  { src: "/logos/creven.png", alt: "Creven", h: 32 },
  { src: "/logos/paloma-fernandez.png", alt: "Paloma Fernández", h: 28 },
  { src: "/logos/the-break.png", alt: "The Break", h: 28 },
  { src: "/logos/ipp.jpg", alt: "IPP Formación", h: 30 },
];

export default function Logos() {
  return (
    <section className="py-10 border-y" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={logo.h * 4}
              height={logo.h}
              className="object-contain grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition"
              style={{ height: `${logo.h}px`, width: "auto" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
