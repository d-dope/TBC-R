"use client";
import React, { useEffect, useState } from "react";
import Article from "./Article";

interface ArticleType {
  id: number;
  name: string;
  description: string;
  price: number;
  title: string;
  picture_url: string;
  date: string;
}

interface ArticlesListProps {
  products: ArticleType[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ products }) => {
  const [sortedArticles, setSortedArticles] = useState<ArticleType[]>(products);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
    let sorted = [...products];

    if (sortOption === "price-asc") {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      sorted = sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "date-asc") {
      sorted = sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sortOption === "date-desc") {
      sorted = sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    setSortedArticles(sorted);
  }, [products, sortOption]);

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
    setSearchQuery(query);
    const filteredArticles = products.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setSortedArticles(filteredArticles);
  }, 10);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <input
          type="text"
          placeholder="Search articles..."
          onChange={(e) => handleSearch(e.target.value)}
          value={searchQuery}
          className="w-full md:w-1/2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-black mb-4 md:mb-0 md:mr-4"
        />
        <select
          onChange={handleSortChange}
          value={sortOption}
          className="w-full md:w-1/4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-black"
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="date-asc">Date: Sooner First</option>
          <option value="date-desc">Date: Furthest First</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortedArticles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            id={article.id}
            image={article.picture_url}
            description={article.description}
            price={article.price}
            date={article.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
