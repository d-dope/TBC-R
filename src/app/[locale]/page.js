import HeroSection from "@/app/components/HeroSection";
import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTAsection";

export default function Home() {
  return (
    <main>
      <Header />
      <CTA/>
      <HeroSection />
      <Footer />
    </main>
  );
}
