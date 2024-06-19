import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import DeleteBlogBtn from "./DeleteBlogBtn";

interface Blog {
  id: number;
  title: string;
  description: string;
  picture_url: string;
  // Add other fields if necessary
}

interface SingleBlogViewProps {
  blog: Blog;
}

export default function SingleBlogView({ blog }: SingleBlogViewProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="sm:h-[300px] h-[200px] rounded-lg dark:bg-gray-700 mb-4">
              <Zoom>
                <Image
                  className="w-full h-full object-cover"
                  height={460}
                  width={460}
                  src={blog.picture_url}
                  alt="Blog Image"
                />
              </Zoom>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {blog.description}
            </p>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Blog Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {blog.description}
              </p>
              <DeleteBlogBtn id={blog.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
