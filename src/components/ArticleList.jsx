import React, { useState } from 'react';
import Article from './Article';
import { articles } from '../data';
import SortButton from './Sort';

function ArticlesList() {
  const [sortedArticles, setSortedArticles] = useState(articles);
  const [isSorted, setIsSorted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSort = () => {
    if (!isSorted) {
      const sorted = [...sortedArticles].sort((a, b) => a.price - b.price);
      setSortedArticles(sorted);
      setIsSorted(true);
    } else {
      setSortedArticles(articles);
      setIsSorted(false);
    }
  };

  const handleSearch = debounce((query) => {
    setSearchQuery(query);
    const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setSortedArticles(filteredArticles);
  }, 150); 

  return (
    <div>
      <SortButton handleClick={handleSort} />
      <input
        type="text"
        placeholder="Search articles..."
        onChange={(e) => handleSearch(e.target.value)}
        value={searchQuery}
        className="w-full md:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 p-10">
        {sortedArticles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            image={article.image}
            description={article.description}
            publicDate={article.publicDate}
            price={article.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
