import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import QueHago from "@/components/QueHago";
import Newsletter from "@/components/Newsletter";
import PainPoints from "@/components/PainPoints";
import Transformation from "@/components/Transformation";
import Programa from "@/components/Programa";
import Testimonios from "@/components/Testimonios";
import Oferta from "@/components/Oferta";
import FAQ from "@/components/FAQ";
import SobreMi from "@/components/SobreMi";
import GoogleReviews from "@/components/GoogleReviews";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* 1. Hero — quién es Digital OS, claim */}
        <Hero />
        <Logos />

        {/* 2. Los tres ámbitos — Personal, Creator, Business */}
        <QueHago />

        {/* 3. Newsletter — para quien llega frío */}
        <Newsletter />

        {/* 4. Digital OS Personal — el producto activo */}
        <PainPoints />
        <Transformation />
        <Programa />
        <Testimonios />
        <Oferta />
        <FAQ />

        {/* 5. Sobre mí — tipo Ali Abdaal "Hey, I'm Ali" */}
        <SobreMi />

        {/* 6. Reseñas Google — auto-actualización */}
        <GoogleReviews />

        {/* 7. CTA final */}
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
