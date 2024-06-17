"use client";

import { FC, useEffect, useState } from "react";
import {
  getProductDetail,
  handleQuantityChange,
  resetCart,
} from "../../../actions";
import Image from "next/image";

export const dynamic = "force-dynamic";

interface Product {
  product_id: string;
  auth_id: string;
  quantity: number;
  title: string;
  picture_url: string;
  id: string;
  price: number;
}

interface iProducts {
  products: Product[];
}

const CheckoutLayout: FC<iProducts> = ({ products: initialProducts }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await Promise.all(
          initialProducts.map(async (product) => {
            const productDetail = await getProductDetail(
              Number(product.product_id)
            );
            return {
              ...productDetail,
              auth_id: product.auth_id,
              quantity: product.quantity,
            };
          })
        );
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [initialProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = products.reduce((acc, product) => acc + product.quantity * product.price, 0);

  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800 p-8">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Shopping cart
        </h1>
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={index} className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center">
                <Image src={product.picture_url} width={60} height={60} alt={product.title} className="rounded-lg" />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="p-2 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={() => handleQuantityChange(product.id, product.auth_id, "decrement")}
                >
                  -
                </button>
                <span className="mx-4 text-gray-800 dark:text-gray-200">
                  {product.quantity}
                </span>
                <button
                  className="p-2 bg-green-600 text-white rounded hover:bg-green-700"
                  onClick={() => handleQuantityChange(product.id, product.auth_id, "increment")}
                >
                  +
                </button>
              </div>
              <p className="text-gray-800 dark:text-gray-200">
                ${(product.price * product.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Total Price: ${totalPrice.toFixed(2)}
            </h2>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Total Quantity: {totalQuantity}
            </h2>
          </div>
          <button
            className="mt-8 py-2 px-6 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => resetCart(products[0]?.auth_id)}
          >
            RESET
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutLayout;
