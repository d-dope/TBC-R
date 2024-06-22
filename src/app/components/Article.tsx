"use client";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import AddToCartBtn from "./AddToCartBtn";
import DeleteCartBtn from "./DeleteCartBtn";

interface ArticleProps {
  title: string;
  id: number;
  price: number;
  description: string;
  image: string;
  date: string;
  category: string;
  place: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  id,
  price,
  description,
  image,
  date,
  category,
  place,
}) => {
  const { user } = useUser();
  const isAdmin = Array.isArray(user?.role) && user.role.includes("Admin");

  // Format the event date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  const formattedDay = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
  });

  const formattedTime = new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleAddToCart = () => {
    if (!user) {
      window.location.href = "/api/auth/login";
    } else {
      // Add the item to the cart
      // You can call the add to cart logic here
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <Link href={`/products/${id}`}>
        <div className="relative h-64 overflow-hidden rounded-t-lg">
          {image && (
            <Image
              src={image}
              width={400}
              height={400}
              alt="img"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute top-2 left-2 bg-white text-center p-1 rounded">
            <p className="text-xs font-semibold">{formattedDate}</p>
          </div>
          <div className="absolute top-2 right-2 bg-white text-center p-1 rounded">
            <p className="text-xs font-semibold text-green-600">${price}</p>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${id}`}>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
        </Link>
        <p className="text-gray-700 mb-2">{formattedDay}</p>
        <p className="text-gray-700 mb-2">{place}</p>
        <div className="flex items-center justify-between">
          {isAdmin && <DeleteCartBtn id={id} />}
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
