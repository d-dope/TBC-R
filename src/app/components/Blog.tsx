import React from "react";

interface BlogProps {
  id: number;
  title: string;
  description?: string;  // Add this if you have a description
  pictureUrl?: string;  // Add this if you have a picture URL
}

const Blog: React.FC<BlogProps> = ({ id, title, description, pictureUrl }) => {
  return (
    <div className="blog-card">
      {pictureUrl && <img src={pictureUrl} alt={title} />}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Blog;
