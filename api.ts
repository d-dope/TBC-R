import { revalidatePath } from "next/cache";

export interface User {
  id: number;
  name: string;
  email: string;
}

// export const BASE_URL = "https://tbc-r.vercel.app";
export const BASE_URL = "http://localhost:3000";

export async function getUsers() {
  const response = await fetch(BASE_URL + "/api/get-users");
  const { users } = await response.json();

  return users.rows;
}

export async function createUser(name: string, email: string) {
  return await fetch(BASE_URL + "/api/create-user", {
    method: "POST",
    body: JSON.stringify({ name, email }),
  });
}

export async function deleteUser(id: number) {
  return await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
}

export async function getProducts() {
  try {
    const response = await fetch(BASE_URL + "/api/get-product");
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }
    revalidatePath("/products");
    const data = await response.json();
    const { products } = data;

    return products?.rows || [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export async function getBlogs() {
  try {
    const response = await fetch(BASE_URL + "/api/blogs/get-blogs", {
      cache: 'no-store'
    });
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }
    revalidatePath("/");
    const data = await response.json();
    const { products } = data;
    return products?.rows || [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    throw error;
  }
}

// api.js
export async function getProductById(id: string) {
  const response = await fetch(`/api/get-product?id=${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const data = await response.json();
  return data;
}

// api.js
export async function fetchUserData() {
  const response = await fetch("/api/user"); // Replace with your API endpoint
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
}

// api.ts
export async function getBlogById(id: string) {
  const response = await fetch(`/api/blogs/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }
  return response.json();
}
