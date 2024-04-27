"use client";

import React, { useEffect, useState } from "react";
import Blog from "./Blog";

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/posts");
      const jsonData = await response.json();
      setOriginalData(jsonData.posts);
      setData(jsonData.posts);
    }
    fetchData();
  }, []);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSearch = debounce((query) => {
    const filteredArticles = originalData.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchQuery(query);
    setData(filteredArticles);
  });

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
