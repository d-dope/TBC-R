import ArticlesList from './ArticleList';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Title');

  return (
    <>
      <section id="home" className="mt-8 flex justify-center font-c">
        <h2 className="text-4xl font-bold">{t("title")}</h2>
      </section>
      <main className="container mx-auto mt-8 px-4">
        <ArticlesList />
      </main>
    </>
  );
}