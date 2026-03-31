import Image from "next/image";

const logos = [
  { src: "/logos/ipp.png", alt: "IPP Formación" },
  { src: "/logos/the-break.png", alt: "The Break" },
  { src: "/logos/eoi.jpg", alt: "EOI" },
  { src: "/logos/creven.png", alt: "Creven" },
  { src: "/logos/angel-maria.png", alt: "Ángel María" },
  { src: "/logos/eurofish.png", alt: "Eurofish" },
  { src: "/logos/incognito.png", alt: "Incógnito Content Mastery" },
  { src: "/logos/doppamine.png", alt: "Doppamine" },
  { src: "/logos/paloma-fernandez.png", alt: "Paloma Fernández" },
  { src: "/logos/founderz.webp", alt: "Founderz" },
];

export default function Logos() {
  return (
    <section className="py-10 border-y overflow-hidden" style={{ borderColor: "var(--border)" }}>
      <div className="logo-marquee">
        <div className="logo-track">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={48}
                className="object-contain grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition duration-500"
                style={{ height: "32px", width: "auto", maxWidth: "140px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
