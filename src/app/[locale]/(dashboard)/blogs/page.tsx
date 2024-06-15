// import BlogList from "../../../components/BlogList";
// import { getBlogs } from "../../../../../api";

// export default async function Blogs() {
//   // const t = useTranslations("Blogs");
//   const blogs = await getBlogs();
//   return (
//     <>
//       <section id="home" className="flex justify-center mt-7">
//         {/* <h2 className="text-3xl font-bold">{t("Blogs")}</h2> */}
//       </section>
//       <div className="">
//         <BlogList blogs={blogs} />
//       </div>
//     </>
//   );
// }

import BlogList from "../../../components/BlogList";
import { getBlogs } from "../../../../../api";

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <>
      <section id="home" className="flex justify-center mt-7"></section>
      <div className="">
        <BlogList blogs={blogs} />
      </div>
    </>
  );
}
