
import HeroSection from "@/app/components/HeroSection";
import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
            <Header />
      <HeroSection /> 
      <Footer/>
    </main>
  );
}
