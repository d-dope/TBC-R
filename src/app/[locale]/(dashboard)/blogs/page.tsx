import { useTranslations } from "next-intl";
import BlogList from "../../../components/BlogList";

export default function Blogs() {
  const t = useTranslations('Blogs')
  return (
    <>
      <section id="home" className="flex justify-center mt-7">
        <h2 className="text-3xl font-bold">{t('Blogs')}</h2>
      </section>
      <div className="">
        <BlogList />
      </div>
    </>
  );
}