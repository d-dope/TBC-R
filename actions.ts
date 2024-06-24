"use server";

import { createUser, deleteUser, BASE_URL } from "./api";
import { revalidatePath } from "next/cache";

export async function createUserAction(formData: FormData) {
  const { name, email } = Object.fromEntries(formData);

  return createUser(name as string, email as string);
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
}

export async function addProduct(formData: any) {
  try {
    const response = await fetch(BASE_URL + "/api/add-product", {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    revalidatePath("/");
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Submission failed");
  }
}

export async function deleteSingleProduct(id: number) {
  const response = await fetch(BASE_URL + "/api/delete-product/", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  revalidatePath("/products");

  const data = await response.json();
  return data.response;
}

export async function sendContactMessage(formData: any) {
  try {
    const res = await fetch(BASE_URL + "/api/contacts/send-contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data) {
      revalidatePath("/contact");
    }
  } catch (error) {
    console.error("Error submitting message:", error);
  }
}

export async function getContact() {
  const response = await fetch(BASE_URL + "/api/contacts/get-contacts", {
    cache: "no-store",
  });
  const data = await response.json();

  const contact = data.contacts.rows;

  return contact;
}

export async function addBlog(formData: any) {
  try {
    const response = await fetch(BASE_URL + "/api/add-blog", {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    revalidatePath("/");
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Submission failed");
  }
}

export const addToCartAction = async (product_id: number, auth_id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/cart/add-to-cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id,
        auth_id: auth_id,
        quantity: 1,
      }),
    });
    revalidatePath("/");

    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }

    return response.json();
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

export async function getUserCartAction(id: string) {
  const response = await fetch(BASE_URL + `/api/cart/get-cart/${id}`, {
    cache: "no-store",
  });

  revalidatePath("/");
  const carts = await response.json();

  const cart = carts.carts.rows;

  return cart;
}

export const handleQuantityChange = async (
  product_id: string,
  auth_id: string,
  action: "increment" | "decrement"
) => {
  try {
    const response = await fetch(BASE_URL + "/api/cart/quantity-change", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id, auth_id, action }),
    });

    revalidatePath("/");
    const result = await response.json();

    if (response.ok) {
    } else {
      console.error("Error updating quantity:", result.message);
    }
  } catch (error) {
    console.error("Error updating quantity:", error);
  }
};

export async function resetCart(id: string) {
  await fetch(`${BASE_URL}/api/cart/reset-cart/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/cart");
}

export async function getProductDetail(id: number) {
  const response = await fetch(`${BASE_URL}/api/get-product/${id}`);
  const data = await response.json();
  const product = data.singleProd?.rows ? data.singleProd.rows[0] : null;
  return product;
}

export async function deleteSingleBlog(id: number) {
  const response = await fetch(BASE_URL + "/api/delete-blog/", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  revalidatePath("/blogs");

  const data = await response.json();
  return data.response;
}



export async function createRefund(charge: string) {
  revalidatePath("/orders");
  await fetch(BASE_URL + "/api/create-refund", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ charge }),
  });
}