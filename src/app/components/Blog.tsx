import Image from "next/image";
import React from "react";
import Link from "next/link";

interface BlogProps {
  id: number;
  title: string;
  description: string;
  pictureUrl: string;
}

const Blog: React.FC<BlogProps> = ({ id, title, description, pictureUrl }) => {
  return (
    <article className="transform hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg overflow-hidden">
      <Link href={`/blogs/${id}`}>
        <div className="relative w-full">
          <Image
            src={pictureUrl}
            alt={title}
            className="w-full h-52 object-cover"
            width={200}
            height={200}
          />
        </div>
      </Link>
      <div className="p-4 bg-white">
        <Link href={`/blogs/${id}`}>
          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-500 transition-colors duration-300">
            {title}
          </h3>
        </Link>
        <p className="mt-2 text-gray-600 h-32 overflow-hidden ">
          {description}
        </p>
      </div>
    </article>
  );
};

export default Blog;
