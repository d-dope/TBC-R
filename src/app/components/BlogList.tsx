"use client";

import React, { useState } from "react";
import Blog from "./Blog";
import { useUser } from "@auth0/nextjs-auth0/client";

interface BlogType {
  id: number;
  title: string;
  description: string;
  picture_url: string;
  added_on: string;
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
    <div className="py-24 sm:py-32 bg-MainBgColor dark:bg-black">
      <div className="container mx-auto sm:px-6 lg:px-8 px-6">
        <div className="border-b border-gray-200 pb-16 flex justify-between">
          <h3 className="text-base font-semibold leading-6 text-gray-900 mt-2 dark:text-white">
            Journey Into Event: Stories, Tips, and More...{" "}
          </h3>
          <input
            type="text"
            placeholder="Search Blogs..."
            onChange={(e) => handleSearch(e.target.value)}
            value={searchQuery}
            className="w-full md:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-black dark:text-white dark:bg-primaryGray"
          />
        </div>
        <div className="my-4 mx-auto max-w-2xl"></div>
        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-4">
          {filteredBlogs.map((blog, index) => (
            <div
              key={`blog-generate-${blog.id}`}
              className={`${
                index < 2
                  ? "col-span-1 sm:col-span-1 lg:col-span-2"
                  : "col-span-1"
              }`}
            >
              <Blog
                id={blog.id}
                title={blog.title}
                description={blog.description}
                pictureUrl={blog.picture_url}
                date={blog.added_on}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
