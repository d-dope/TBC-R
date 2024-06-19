"use client";

import { useRouter } from "next/navigation";
import { deleteSingleBlog } from "../../../actions";
import { useUser } from "@auth0/nextjs-auth0/client";

interface DeleteCartBtnProps {
  id: number;
}

export default function DeleteBlogBtn({ id }: DeleteCartBtnProps) {
  const { user } = useUser();
  const isAdmin = Array.isArray(user?.role) && user.role.includes("Admin");
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteSingleBlog(id);
      router.push("/blogs");
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };
  if (!isAdmin) {
    return null;
  }
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
