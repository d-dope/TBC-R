import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
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
import { useUser } from "@auth0/nextjs-auth0/client";
import DeleteCartBtn from "./DeleteCartBtn";
import AddToCartBtn from "./AddToCartBtn";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  picture_url: string;
  sale: number;
  // Add other fields if necessary
}

interface SingleProductFormProps {
  product: Product;
}

export default function SingleProductForm({ product }: SingleProductFormProps) {
  const { user } = useUser();
  const isAdmin = Array.isArray(user?.role) && user.role.includes("Admin");
  const shareUrl = `https://tbc-r.vercel.app/products/${product.id}`;
  const title = product.title;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4 flex flex-col justify-between">
            <div className="sm:h-[300px] h-[200px] rounded-lg dark:bg-gray-700 mb-4">
              <Zoom>
                <Image
                  className="w-full h-full object-cover"
                  height={460}
                  width={460}
                  src={product.picture_url}
                  alt="Product Image"
                />
              </Zoom>
            </div>
            <div className="flex -mx-2 mb-4">
              {isAdmin ? (
                <>
                  <div className="w-1/2 px-2">
                    <AddToCartBtn id={product.id} />
                  </div>
                  <div className="w-1/2 px-2">
                    <DeleteCartBtn id={product.id} />
                  </div>
                </>
              ) : (
                <div className="w-full px-2">
                  <AddToCartBtn id={product.id} />
                </div>
              )}
            </div>
          </div>
          <div className="md:flex-1 px-4 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.title}
            </h2>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Event Description:
            </span>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {product.price}₾
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center mt-2 gap-x-3">
                <FacebookShareButton
                  title={title}
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <EmailShareButton
                  title={title}
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
                <TwitterShareButton
                  title={title}
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                {/* @ts-ignore */}
                <FacebookMessengerShareButton
                  title={title}
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>
                <ViberShareButton
                  title={title}
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <ViberIcon size={32} round />
                </ViberShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
