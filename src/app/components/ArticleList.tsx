"use client";
import React, { useEffect, useState } from "react";
import Article from "./Article";
import Sidebar from "./Sidebar";

interface ArticleType {
  id: number;
  name: string;
  description: string;
  price: number;
  title: string;
  picture_url: string;
  date: string;
  category: string;
  place: string;
}

interface ArticlesListProps {
  products: ArticleType[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ products }) => {
  const [sortedArticles, setSortedArticles] = useState<ArticleType[]>(products);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory
      );
    }

    if (sortOption === "price-asc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "date-asc") {
      filtered = filtered.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else if (sortOption === "date-desc") {
      filtered = filtered.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }

    setSortedArticles(filtered);
  }, [products, sortOption, selectedCategory]);

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
  }, 1);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleClearCategory = () => {
    setSelectedCategory("");
  };

  const categories = [
    "Concert",
    "Festival",
    "Theatre",
    "Art",
    "Technology",
    "Sports",
    "Other",
  ];

  return (
    <div className="bg-MainBgColor dark:bg-black  w-full min-h-screen ">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          onClearCategory={handleClearCategory}
          // @ts-ignore
          className="md:w-1/4 bg-white  shadow-md rounded-md p-4"
        />
        <div className="flex-1 ">
          <div className="flex flex-col mt-0 sm:mt-28 md:flex-row justify-between mb-4 space-y-4 md:space-y-0 gap-x-5">
            <input
              type="text"
              placeholder="Search articles..."
              onChange={(e) => handleSearch(e.target.value)}
              value={searchQuery}
              className="w-full md:w-2/3 px-4 py-2 rounded-md border border-gray-100 focus:outline-none focus:border-blue-500 text-black dark:text-gray-100 dark:bg-primaryGray"
            />
            <select
              onChange={handleSortChange}
              value={sortOption}
              className="w-full md:w-1/3 px-4 py-2 rounded-md border border-gray-100 focus:outline-none focus:border-blue-500 text-black dark:text-gray-100 dark:bg-primaryGray"
            >
              <option value="">Sort by</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="date-asc">Date: Sooner First</option>
              <option value="date-desc">Date: Furthest First</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
            {sortedArticles.map((article, index) => (
              <Article
                key={`article-${article.id}`}
                title={article.title}
                id={article.id}
                image={article.picture_url}
                description={article.description}
                price={article.price}
                date={article.date}
                category={article.category}
                place={article.place}
                // @ts-ignore
                className="bg-white shadow-md rounded-lg overflow-hidden"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
