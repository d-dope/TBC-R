"use client";
import Link from "next/link";
import Image from "next/image";
import { deleteSingleProduct } from "../../../actions";
import AddToCartBtn from "./AddToCartBtn";
import DeleteCartBtn from "./DeleteCartBtn";
import { useUser } from "@auth0/nextjs-auth0/client";

interface ArticleProps {
  title: string;
  id: number;
  price: number;
  description: string;
  image: string;
  date: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  id,
  price,
  description,
  image,
  date,
}) => {
  const { user } = useUser();
  const isAdmin = Array.isArray(user?.role) && user.role.includes("Admin");

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
          <p>Event Date: {date}</p>
        </div>
        <p className="font-bold text-emerald-600">${price}</p>
        {isAdmin && <DeleteCartBtn id={id} />}
        <AddToCartBtn id={id} />
      </div>
    </div>
  );
};

export default Article;
