import { Footer } from "flowbite-react";
import Header from "../../../components/Header";
import HeroSection from "../../../components/HeroSection";
import { getProducts } from "../../../../../api";

export default async function Products() {
  const products = await getProducts();
  return (
    <main>
      <HeroSection products={products} />
    </main>
  );
}
