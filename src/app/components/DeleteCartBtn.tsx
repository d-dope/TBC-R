"use client";
import { useRouter } from "next/navigation";
import { deleteSingleProduct } from "../../../actions";

interface DeleteCartBtnProps {
  id: number;
}

export default function DeleteCartBtn({ id }: DeleteCartBtnProps) {
  const route = useRouter();
  const handleDelete = async () => {
    await deleteSingleProduct(id);
    route.push("/products");
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        Remove
      </button>
    </div>
  );
}
