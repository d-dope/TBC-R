"use client";

import React, { useState } from "react";
import Blog from "./Blog";

interface BlogType {
  id: number;
  title: string;
  description: string; // Add this if you have a description
  picture_url: string; // Add this if you have a picture URL
}

interface BlogListProps {
  blogs: BlogType[];
}

export default function BlogList({ blogs }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredBlogs, setFilteredBlogs] = useState<BlogType[]>(blogs);

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
  }, 300);
  // console.log(filteredBlogs);
  return (
    <div>
      <input
        type="text"
        placeholder="Search articles..."
        onChange={(e) => handleSearch(e.target.value)}
        value={searchQuery}
        className="w-full md:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-black"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 p-10">
        {filteredBlogs?.map((blog) => (
          <Blog
            key={blog.id}
            title={blog.title}
            id={blog.id}
            description={blog.description} // Add this if you have a description
            pictureUrl={blog.picture_url} // Add this if you have a picture URL
          />
        ))}
      </div>
    </div>
  );
}
