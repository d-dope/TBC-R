import Image from "next/image";
import React from "react";
import DeleteBlogBtn from "./DeleteBlogBtn";
import Link from "next/link";

interface BlogProps {
  id: number;
  title: string;
  description: string;
  pictureUrl: string;
}

const Blog: React.FC<BlogProps> = ({ id, title, description, pictureUrl }) => {
  return (
    <article className="flex flex-col items-start justify-between">
      <Link href={`/blogs/${id}`}>
        <div className="relative w-full">
          <Image
            src={pictureUrl}
            alt={title}
            className="aspect-[16/9] h-52 w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            width={200}
            height={200}
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </Link>
      <div className="max-w-xl">
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Blog;
