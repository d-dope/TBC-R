import { useTranslations } from "next-intl";
import ArticlesList from "./ArticleList";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  title: string;
  thumbnail: string;
}

export default function HeroSection({ products }: { products: Product[] }) {
  const t = useTranslations("Title");

  return (
    <>
      <main className=" mx-auto ">
        {/* @ts-ignore */}
        <ArticlesList products={products} />
      </main>
    </>
  );
}
