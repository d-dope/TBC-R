import { articles } from "../data";
import Article from "./Article";

function ArticlesList() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {articles.map((article, index) => (
          <Article key={index} title={article.title} image={article.image} description={article.description} />
        ))}
      </div>
    );
  }

  export default ArticlesList;
