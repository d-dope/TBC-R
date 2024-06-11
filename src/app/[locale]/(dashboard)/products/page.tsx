import { Footer } from "flowbite-react";
import CTA from "../../../components/CTAsection";
import Header from "../../../components/Header";
import HeroSection from "../../../components/HeroSection";
import { getProducts } from "../../../../../api";

export default async function Products() {
  const products = await getProducts();
  console.log(products);

  return (
    <main>
      <CTA />
      <HeroSection products={products} />
    </main>
  );
}
