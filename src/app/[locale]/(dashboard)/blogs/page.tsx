import BlogList from "../../../components/BlogList";
import { getBlogs } from "../../../../../api";

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <>
      <section id="home" className="flex justify-center"></section>
      <div className="">
        <BlogList blogs={blogs} />
      </div>
    </>
  );
}
