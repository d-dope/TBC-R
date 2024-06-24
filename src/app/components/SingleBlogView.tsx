import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import DeleteBlogBtn from "./DeleteBlogBtn";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  ViberShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  ViberIcon,
} from "react-share";
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
  const shareUrl = `https://tbc-r.vercel.app/blogs/${blog.id}`;
  const title = blog.title;
  return (
    <div className="bg-gray-100 dark:bg-black py-32 ">
      <div className="max-w-6xl mx-auto mt-32 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4 ">
          <div className="md:flex-1 px-4 flex flex-col justify-between">
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
          <div className="md:flex-1 px-4 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {blog.title}
            </h2>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Blog Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {blog.description}
              </p>
              <div className="flex items-center mt-2 gap-x-3">
                <FacebookShareButton
                  title={title}
                  url={shareUrl}
                  // @ts-ignore
                  image={`${blog.picture_url}`}
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                <EmailShareButton
                  title={title}
                  url={shareUrl}
                  // @ts-ignore
                  image={`${blog.picture_url}`}
                  className="Demo__some-network__share-button"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>

                <TwitterShareButton
                  title={title}
                  url={shareUrl}
                  // @ts-ignore
                  image={`${blog.picture_url}`}
                  className="Demo__some-network__share-button"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>

                <FacebookMessengerShareButton
                  title={title}
                  url={shareUrl}
                  // @ts-ignore
                  image={`${blog.picture_url}`}
                  className="Demo__some-network__share-button"
                >
                  <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>

                <ViberShareButton
                  title={title}
                  url={shareUrl}
                  // @ts-ignore
                  image={`${blog.picture_url}`}
                  className="Demo__some-network__share-button"
                >
                  <ViberIcon size={32} round />
                </ViberShareButton>
              </div>
              <DeleteBlogBtn id={blog.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
