"use client";

import React, { useEffect, useState } from "react";
import Blog from "./Blog";

interface BlogType {
  id: number;
  title: string;
  
}

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<BlogType[]>([]);
  const [originalData, setOriginalData] = useState<BlogType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/posts");
      const jsonData = await response.json();
      setOriginalData(jsonData.posts);
      setData(jsonData.posts);
    }
    fetchData();
  }, []);
  
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
    const filteredArticles = originalData.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchQuery(query);
    setData(filteredArticles);
  },10 );

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
        {data.map((article, index) => (
          <Blog key={index} title={article.title} id={article.id} />
        ))}
      </div>
    </div>
  );
}
