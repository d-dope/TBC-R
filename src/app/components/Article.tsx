"use client";
import Link from "next/link";
import Image from "next/image";
import { deleteSingleProduct } from "../../../actions";

interface ArticleProps {
  title: string;
  id: number;
  price: number;
  description: string;
  image: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  id,
  price,
  description,
  image,
}) => {
  console.log(image);

  const handleDelete = async () => {
    await deleteSingleProduct(id);
  };

  return (
    <div className="bg-gray rounded-lg shadow-md hover:shadow-lg">
      <Link href={`/products/${id}`}>
          <div className="relative h-64">
            {image && (
              <Image
                src={image}
                width={400}
                height={400}
                alt="img"
                className="rounded-lg w-full h-full object-cover"
              />
            )}
          </div>
      </Link>
      <div className="p-6">
        <Link href={`/products/${id}`}>
      
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
       
        </Link>
        <p>{description}</p>
        <div className="flex gap-x-3">
          <p>Public Date: </p>
        </div>
        <p className="font-bold text-emerald-600">${price}</p>
        <button
          onClick={() => handleDelete()}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Remove
        </button>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Article;
