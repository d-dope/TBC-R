import React, { useState } from 'react';
import Article from './Article';
import { articles } from '../data';
import SortButton from './Sort';

function ArticlesList() {
  const [sortedArticles, setSortedArticles] = useState(articles);
  const [isSorted, setIsSorted] = useState(false);

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

  return (
    <div>
      <SortButton handleClick={handleSort} />
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
