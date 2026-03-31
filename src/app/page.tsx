import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Logos from "@/components/Logos";
import Transformation from "@/components/Transformation";
import Programa from "@/components/Programa";
import Testimonios from "@/components/Testimonios";
import Oferta from "@/components/Oferta";
import Frases from "@/components/Frases";
import GoogleReviews from "@/components/GoogleReviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <Logos />
        <Transformation />
        <Programa />
        <Testimonios />
        <Oferta />
        <FAQ />
        <Frases />
        <GoogleReviews />
      </main>
      <Footer />
    </>
  );
}
