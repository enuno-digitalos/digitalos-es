import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import PainPoints from "@/components/PainPoints";
import Transformation from "@/components/Transformation";
import SobreMi from "@/components/SobreMi";
import Programa from "@/components/Programa";
import Oferta from "@/components/Oferta";
import FAQ from "@/components/FAQ";
import GoogleReviews from "@/components/GoogleReviews";
import Newsletter from "@/components/Newsletter";
import CTAFinal from "@/components/CTAFinal";
import OtrosPrograms from "@/components/OtrosProgramas";
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
        <SobreMi />
        <Programa />
        <GoogleReviews />
        <Oferta />
        <FAQ />
        <Newsletter />
        <CTAFinal />
        <OtrosPrograms />
      </main>
      <Footer />
    </>
  );
}
