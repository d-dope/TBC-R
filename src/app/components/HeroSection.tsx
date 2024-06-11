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
      <section id="home" className="mt-8 flex justify-center font-c">
        <h2 className="text-4xl font-bold">{t("title")}</h2>
      </section>
      <main className="container mx-auto mt-8 px-4">
        <ArticlesList products={products} />
      </main>
    </>
  );
}
