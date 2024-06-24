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
      <section id="home" className="flex justify-center ">
        <h2 className="text-4xl font-bold">{t("title")}</h2>
      </section>
      <main className="bg-MainBgColor mx-auto px-4 mt-20">
        {/* @ts-ignore */}
        <ArticlesList products={products} />
      </main>
    </>
  );
}
