"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Notification from "./Notification";
import BlogImageUploadPage from "../[locale]/(dashboard)/upload-blog-avatar/page";

interface FormData {
  title: string;
  description: string;
  picture_url: string;
}

const AddBlogForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    picture_url: "",
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (url: string) => {
    setFormData({ ...formData, picture_url: url });
  };

  const validateForm = (): boolean => {
    const { title, description, picture_url } = formData;
    if (!title || !description || !picture_url) {
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
      const response = await fetch("/api/add-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Blog added successfully:", data);
        setFormData({
          title: "",
          description: "",
          picture_url: "",
        });
        setSuccess(true);
      } else {
        const errorData = await response.json();
        console.error("Error:", response.statusText, errorData);
        setError(`Error adding blog: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Error submitting form.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <Notification />}
      <BlogImageUploadPage onImageUpload={handleImageUpload} />
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-3 py-2 rounded"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlogForm;
