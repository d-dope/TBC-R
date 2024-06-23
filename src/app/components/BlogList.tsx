"use client";

import React, { useState } from "react";
import Blog from "./Blog";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

interface BlogType {
  id: number;
  title: string;
  description: string;
  picture_url: string;
}

interface BlogListProps {
  blogs: BlogType[];
}

export default function BlogList({ blogs }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredBlogs, setFilteredBlogs] = useState<BlogType[]>(blogs);
  const { user } = useUser();
  const isAdmin = Array.isArray(user?.role) && user.role.includes("Admin");

  const debounce = <T extends unknown[]>(
    func: (...args: T) => void,
    delay: number
  ) => {
    let timeoutId: NodeJS.Timeout;
    return function (...args: T) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  };

  const handleSearch = debounce((query: string) => {
    const filteredArticles = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchQuery(query);
    setFilteredBlogs(filteredArticles);
  }, 1);

  return (
    <div className="py-24 sm:py-32 ">
      <div className="container mx-auto  sm:px-6 lg:px-8 px-6">
        <div className="mx-auto  text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="my-4 mx-auto max-w-2xl">
          <input
            type="text"
            placeholder="Search articles..."
            onChange={(e) => handleSearch(e.target.value)}
            value={searchQuery}
            className="w-full md:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-black"
          />
        </div>
        <div className=" mt-16 grid  grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-3 md:mx-0 md:max-w-none  md:grid-cols-4">
          {filteredBlogs.map((blog) => (
            <div key={`blog-generate-${blog.id}`}>
              <Blog
                id={blog.id}
                title={blog.title}
                description={blog.description}
                pictureUrl={blog.picture_url}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
