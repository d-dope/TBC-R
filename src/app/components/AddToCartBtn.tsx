"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";
import { addToCartAction } from "../../../actions";
import { useRouter } from "next/navigation";

interface addToCartBtnProps {
  id: number;
}

const AddToCartBtn = ({ id }: addToCartBtnProps) => {
  const { user } = useUser();
  const [authId, setAuthId] = useState("");
  const [added, setAdded] = useState(false); // New state to handle button status
  const route = useRouter();
  const notLoggedIn = () => {
    route.push("/api/auth/login");
  };
  useEffect(() => {
    if (user && user.sub) {
      setAuthId(user.sub);
    }
  }, [user]);

  const handleAddToCart = () => {
    addToCartAction(Number(id), authId);
    setAdded(true); // Change button state to "added"
  };
  if (!user) {
    return (
      <button
        onClick={notLoggedIn}
        className="w-full 
       text-white py-2 px-4 rounded-md font-semibold shadow-md transition duration-300 ease-in-out transform 
         hover:scale-105 bg-blue-500 hover:bg-blue-600"
      >
        Add To Cart
      </button>
    );
  }
  return (
    <button
      onClick={handleAddToCart}
      disabled={added} // Disable button if "added" is true
      className={`w-full ${
        added ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
      } text-white py-2 px-4 rounded-md font-semibold shadow-md transition duration-300 ease-in-out transform ${
        !added && "hover:scale-105"
      }`}
    >
      {added ? "Added" : "Add To Cart"}
    </button>
  );
};

export default AddToCartBtn;
