import { getBlogs, getProducts } from "../../../api";
import HomeLayout from "../components/HomeLayout";

export default async function Home() {
  const products = await getProducts();
  const blogs = await getBlogs();

  return (
    <>
      <HomeLayout products={products} blogs={blogs} />
    </>
  );
}
