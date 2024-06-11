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
