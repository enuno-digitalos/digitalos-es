import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import PainPoints from "@/components/PainPoints";
import Transformation from "@/components/Transformation";
import Programa from "@/components/Programa";
import Testimonios from "@/components/Testimonios";
import Oferta from "@/components/Oferta";
import FAQ from "@/components/FAQ";
import SobreMi from "@/components/SobreMi";
import GoogleReviews from "@/components/GoogleReviews";
import Newsletter from "@/components/Newsletter";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Logos />
        <PainPoints />
        <Transformation />
        <Programa />
        <Testimonios />
        <Oferta />
        <FAQ />
        <SobreMi />
        <GoogleReviews />
        <Newsletter />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
