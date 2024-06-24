"use client";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import DeleteCartBtn from "./DeleteCartBtn";
import { MapPinIcon } from "@heroicons/react/20/solid";
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
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <Link href={`/products/${id}`}>
        <div className="relative h-64 overflow-hidden">
          {image && (
            <Image
              src={image}
              width={400}
              height={400}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
            />
          )}
          <div className="absolute top-2 left-2 bg-white bg-opacity-75 text-center px-2 py-1 rounded">
            <p className="text-xs font-semibold text-gray-800">
              {formattedDate}
            </p>
          </div>
          <div className="absolute top-2 right-2 bg-white bg-opacity-75 text-center px-2 py-1 rounded">
            <p className="text-sm font-sm py-0.5 px-2 text-green-600">
              {Number(price).toFixed(2).replace(/\.00$/, "")} ₾
            </p>
          </div>
        </div>
      </Link>
      <div className="p-4 ">
        <Link href={`/products/${id}`}>
          <h3 className="text-lg font-semibold mb-1 hover:text-blue-500 transition-colors duration-200">
            {title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-1">{formattedDay}</p>
        <div className="flex gap-x-2">
          {" "}
          <MapPinIcon className="w-4 h-4" />
          <p className="text-gray-500 text-sm mb-4">{place}</p>
        </div>
        <div className="flex items-center justify-between"></div>
      </div>
    </div>
  );
};

export default Article;
