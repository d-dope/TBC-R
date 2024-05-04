import { useEffect, useState } from "react";

interface Product {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
}

interface PageProps {
  params: {
    id: number;
  };
}

const Page: React.FC<PageProps> = ({ params: { id } }) => {
  const [data, setData] = useState<Product>({
    id: 0,
    thumbnail: "",
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    stock: 0,
    brand: "",
    category: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const test = await fetch(`https://dummyjson.com/products/${id}`);
        const res: Product = await test.json();
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src={data.thumbnail} alt="" />
          </div>
          <div className="py-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">{data.title}</h5>
            <p className="mb-4 text-base">{data.description}</p>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-emerald-600">Price: ${data.price}</p>
              <h3 className="font-bold text-red-600">Discount: {data.discountPercentage}%</h3>
              <h3 className="text-xl font-semibold mb-2">In Stock: {data.stock}</h3>
              <p className="font-semibold text-black-600">Brand: {data.brand}</p>
              <p className="font-semibold text-black-600">Category: {data.category}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
