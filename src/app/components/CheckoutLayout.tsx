// checkoutLayout.tsx

"use client";

import { FC, useEffect, useState } from "react";
import {
  getProductDetail,
  handleQuantityChange,
  resetCart,
} from "../../../actions";
import Image from "next/image";
import { BASE_URL } from "../../../api";

export const dynamic = "force-dynamic";

interface Product {
  product_id: string;
  auth_id: string;
  quantity: number;
  title: string;
  picture_url: string;
  id: string;
  price: number; // Initially price might be a string
}

interface CheckoutLayoutProps {
  products: Product[];
  sessionId: string;
  sessionEmail: string;
}

const CheckoutLayout: FC<CheckoutLayoutProps> = ({
  products: initialProducts,
  sessionId,
  sessionEmail,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await Promise.all(
          initialProducts.map(async (product) => {
            // Fetch product details including auth_id and product_id
            const productDetail = await getProductDetail(
              Number(product.product_id)
            );
            return {
              ...productDetail,
              auth_id: product.auth_id,
              quantity: product.quantity,
              // Ensure price is a number
              price: Number(productDetail.price),
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

  const totalQuantity = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  const totalPrice = products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  const checkout = async () => {
    await fetch(BASE_URL + "/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products, sessionId, sessionEmail }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.url) {
          window.location.href = response.url;
        }
      })
      .catch((error) => {
        console.error("Error during checkout:", error);
      });
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center flex-col bg-gray-100 p-8 text-gray-800">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Shopping cart</h1>
        <p className="text-sm text-pink-600">{totalQuantity} items</p>
        <div className="mt-4">
          {products.map((product, index) => (
            <div
              key={`indexxxxxxxx-generate-${index}`}
              className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4"
            >
              <Image
                src={product.picture_url}
                width={64}
                height={64}
                alt={product.title}
                className="rounded-lg"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <div className="flex items-center mt-2">
                  <span className="text-gray-600 mr-2">
                    Qty: {product.quantity}
                  </span>
                  <button
                    className="p-2 mx-2 bg-red-600 text-white rounded hover:bg-red-700"
                    onClick={() =>
                      handleQuantityChange(
                        product.id,
                        product.auth_id,
                        "decrement"
                      )
                    }
                  >
                    -
                  </button>
                  <button
                    className="p-2 mx-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() =>
                      handleQuantityChange(
                        product.id,
                        product.auth_id,
                        "increment"
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="text-lg font-semibold">
                {Number(product.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">
            Total Price: ${totalPrice.toFixed(2)}
          </h2>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => resetCart(products[0]?.auth_id)}
        >
          RESET
        </button>
        <button
          onClick={checkout}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default CheckoutLayout;
