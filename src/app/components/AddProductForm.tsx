"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import AvatarUploadPage from "../[locale]/(dashboard)/upload/page";
import Notification from "./Notification"; // Import the Notification component

interface FormData {
  title: string;
  description: string;
  price: string;
  sale: string;
  category: string;
  picture_url: string;
}

const AddProductForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    price: "",
    sale: "",
    category: "",
    picture_url: "",
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false); // State to handle success notification

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (url: string) => {
    setFormData({ ...formData, picture_url: url });
  };

  const validateForm = (): boolean => {
    const { title, description, price, sale, category, picture_url } = formData;
    if (!title || !description || !price || !sale || !category || !picture_url) {
      setError("All fields are required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("/api/add-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product added successfully:", data);
        setFormData({
          title: "",
          description: "",
          price: "",
          sale: "",
          category: "",
          picture_url: "",
        });
        setSuccess(true); // Set success state to true
      } else {
        console.error("Error:", response.statusText);
        setError("Error adding product.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Error submitting form.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <Notification />} {/* Show success notification */}
      <AvatarUploadPage onImageUpload={handleImageUpload} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Sale</label>
          <input
            type="text"
            name="sale"
            value={formData.sale}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-3 py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
