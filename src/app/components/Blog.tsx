import Image from "next/image";
import React from "react";
import Link from "next/link";

interface BlogProps {
  id: number;
  title: string;
  description: string;
  pictureUrl: string;
  date: string;
}

// Helper function to truncate the description to 40 words
const truncateDescription = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const Blog: React.FC<BlogProps> = ({
  id,
  title,
  description,
  pictureUrl,
  date,
}) => {
  // Parse the date and format it to show only month and day
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  // Truncate the description to 40 words
  const truncatedDescription = truncateDescription(description, 30);

  return (
    <article className="transform hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg overflow-hidden bg-white dark:bg-primaryGray">
      <Link href={`/blogs/${id}`}>
        <div className="relative w-full">
          <Image
            src={pictureUrl}
            alt={title}
            className="w-full h-72 object-cover"
            width={200}
            height={200}
          />
        </div>
      </Link>
      <div className="p-4 bg-white dark:bg-primaryGray">
        <Link href={`/blogs/${id}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
        </Link>
        <p className="mt-2 text-gray-600 dark:text-gray-400 h-32 overflow-hidden">
          {truncatedDescription}
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{formattedDate}</p>
      </div>
    </article>
  );
};

export default Blog;
