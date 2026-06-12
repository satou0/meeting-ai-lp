import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CtaForm from "@/components/CtaForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Features />
        <Benefits />
        <CaseStudies />
        <Pricing />
        <Faq />
        <CtaForm />
      </main>
      <Footer />
    </>
  );
}
