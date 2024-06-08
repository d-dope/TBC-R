import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTAsection";
import HeroSection from "../components/HeroSection";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main>
      <Header />
      <CTA />
      {/* <Carousel /> */}
      <HeroSection />
      <Footer />
    </main>
  );
}
