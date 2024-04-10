'use client'  

import React, { useEffect, useState } from 'react';
import Article from './Article';
import SortButton from './Sort';

export default function ArticlesList() {
  const [sortedArticles, setSortedArticles] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const test = await fetch('https://dummyjson.com/products');
      const res = await test.json();
      setData(res.products);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!isSorted) {
      setSortedArticles(data);
    }
  }, [data, isSorted]);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSort = () => {
    if (!isSorted) {
      const sorted = [...data].sort((a, b) => a.price - b.price);
      setSortedArticles(sorted);
      setIsSorted(true);
    } else {
      setSortedArticles(data);
      setIsSorted(false);
    }
  };

  const handleSearch = debounce((query) => {
    setSearchQuery(query);
    const filteredArticles = data.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setSortedArticles(filteredArticles);
  });

  return (
    <div>
      <SortButton handleClick={handleSort} />
      <input
        type="text"
        placeholder="Search articles..."
        onChange={(e) => handleSearch(e.target.value)}
        value={searchQuery}
        className="w-full md:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-black"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 p-10">
        {sortedArticles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            id={article.id}
            image={article.thumbnail}
            description={article.description}
            // publicDate={article.publicDate}
            price={article.price}
          />
        ))}
      </div>
    </div>
  );
}
