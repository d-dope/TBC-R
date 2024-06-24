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
  const [added, setAdded] = useState(false); // New state to handle button status

  useEffect(() => {
    if (user && user.sub) {
      setAuthId(user.sub);
    }
  }, [user]);

  const handleAddToCart = () => {
    addToCartAction(Number(id), authId);
    setAdded(true); // Change button state to "added"
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={added} // Disable button if "added" is true
      className={`w-full ${added ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white py-2 px-4 rounded-md font-semibold shadow-md transition duration-300 ease-in-out transform ${!added && 'hover:scale-105'}`}
    >
      {added ? "Added" : "Add To Cart"} 
    </button>
  );
};

export default AddToCartBtn;
