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
    <button onClick={() => addToCartAction(Number(id), authId)}>
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
