"use client";
import React, { useEffect, useState } from "react";
import Article from "./Article";
import SortButton from "./Sort";

interface ArticleType {
  id: number;
  name: string;
  description: string;
  price: number;
  title: string;
  picture_url: string;
}

interface ArticlesListProps {
  products: ArticleType[];
}

export default function ArticlesList({ products }: ArticlesListProps) {
  const [sortedArticles, setSortedArticles] = useState<ArticleType[]>(products);
  const [isSorted, setIsSorted] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (!isSorted) {
      setSortedArticles(products);
    }
  }, [products, isSorted]);

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

  const handleSort = () => {
    if (!isSorted) {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setSortedArticles(sorted);
      setIsSorted(true);
    } else {
      setSortedArticles(products);
      setIsSorted(false);
    }
  };

  const handleSearch = debounce((query: string) => {
    setSearchQuery(query);
    const filteredArticles = products.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setSortedArticles(filteredArticles);
  }, 10);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12 p-10">
        {sortedArticles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            id={article.id}
            image={article.picture_url}
            description={article.description}
            price={article.price}
          />
        ))}
      </div>
    </div>
  );
}
