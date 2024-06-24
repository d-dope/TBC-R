"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";
import { addToCartAction } from "../../../actions";

interface addToCartBtnProps {
  id: number;
}

const AddToCartBtn = ({ id }: addToCartBtnProps) => {
  const { user } = useUser();
  const [authId, setAuthId] = useState("");

  useEffect(() => {
    if (user && user.sub) {
      setAuthId(user.sub);
    }
  }, [user]);

  return (
    <button
      onClick={() => addToCartAction(Number(id), authId)}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
    >
      Add To Cart
    </button>
  );
};

export default AddToCartBtn;
