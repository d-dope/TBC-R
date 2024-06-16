"use client";

import { FC } from "react";
import { handleQuantityChange, resetCart } from "../../../actions";

export const dynamic = "force-dynamic";

interface Product {
  map(
    arg0: (product: Product, index: number) => import("react").JSX.Element
  ): import("react").ReactNode;
  product_id: string;
  auth_id: string;
  quantity: number;
}

interface iProducts {
  products: Product;
}

const CheckoutLayout: FC<iProducts> = ({ products }) => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center flex-col bg-[#ddd] dark:bg-mainDarkBG2">
      {products.map((product: Product, index: number) => (
        <div key={index} className="m-2">
          <h1>
            Product id: {product.product_id} - quantity: {product.quantity}{" "}
            <button
              className="p-2 mx-2 bg-red"
              onClick={() =>
                handleQuantityChange(
                  product.product_id,
                  product.auth_id,
                  "decrement"
                )
              }
            >
              -
            </button>
            <button
              className="p-2 mx-2 bg-green"
              onClick={() =>
                handleQuantityChange(
                  product.product_id,
                  product.auth_id,
                  "increment"
                )
              }
            >
              +
            </button>
          </h1>
        </div>
      ))}
      <button onClick={() => resetCart(products.auth_id)}>RESET</button>
    </section>
  );
};

export default CheckoutLayout;
