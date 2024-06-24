"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import AvatarUploadPage from "../[locale]/(dashboard)/upload/page";
import Notification from "./Notification"; // Import the Notification component

interface FormData {
  title: string;
  description: string;
  price: string;
  date: string; // Changed from sale to date
  category: string;
  picture_url: string;
  place: string;
}

const AddProductForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    price: "",
    date: "", // Changed from sale to date
    category: "",
    picture_url: "",
    place: "",
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false); // State to handle success notification

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (url: string) => {
    setFormData({ ...formData, picture_url: url });
  };

  const validateForm = (): boolean => {
    const { title, description, price, date, category, picture_url } = formData;
    if (
      !title ||
      !description ||
      !price ||
      !date ||
      !category ||
      !picture_url
    ) {
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
          date: "", // Changed from sale to date
          category: "",
          picture_url: "",
          place: "",
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
    <div className="mx-auto max-w-lg px-5 py-20">
      <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <Notification />} {/* Show success notification */}
      <AvatarUploadPage onImageUpload={handleImageUpload} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 ">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border dark:bg-primaryGray border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-300">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border dark:bg-primaryGray border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-300 ">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border dark:bg-primaryGray border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-300">Date</label>{" "}
          {/* Changed from Sale to Date */}
          <input
            type="date"
            name="date" // Changed from sale to date
            value={formData.date} // Changed from formData.sale to formData.date
            onChange={handleChange}
            className="w-full px-3 py-2 border dark:bg-primaryGray border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-300 ">Place</label>{" "}
          {/* Changed from Sale to Date */}
          <input
            type="text"
            name="place" // Changed from sale to date
            value={formData.place} // Changed from formData.sale to formData.date
            onChange={handleChange}
            className="w-full px-3 py-2 border dark:bg-primaryGray border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-300">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-5 border dark:bg-primaryGray border-gray-300 rounded-md"
          >
            <option value="">Select a category</option>
            <option value="Concert">CONCERT</option>
            <option value="Festival">FESTIVAL</option>
            <option value="Theatre">THEATRE</option>
            <option value="Art">ART</option>
            <option value="Technology">TECHNOLOGY</option>
            <option value="Sports">SPORT</option>
            <option value="Other">OTHER</option>

            {/* Add more categories as needed */}
          </select>
        </div>
        <button
          type="submit"
          className="w-full  bg-blue-500 text-white px-3 py-3 rounded-md"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
