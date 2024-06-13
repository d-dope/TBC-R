import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import BlogList from "../../../components/BlogList";
import { getBlogs } from "../../../../../api";
import Blog from "../../../components/Blog";

export default async function Blogs() {
  // const t = useTranslations("Blogs");
  const blogs = await getBlogs();
  console.log(blogs, "11111111111");
  return (
    <>
      <section id="home" className="flex justify-center mt-7">
        {/* <h2 className="text-3xl font-bold">{t("Blogs")}</h2> */}
      </section>
      <div className="">
        <BlogList blogs={blogs} />
      </div>
    </>
  );
}
