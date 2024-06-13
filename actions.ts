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
