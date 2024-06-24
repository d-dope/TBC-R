"use client";

import type { PutBlobResult } from "@vercel/blob";
import Image from "next/image";
import { useState, useRef } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
export default function BlogImageUploadPage({ onImageUpload }: any) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleUpload = async (event: any) => {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      if (!response.ok) {
        const errorData = await response.json();
        setUploadError(`Upload error: ${errorData.message}`);
        return;
      }

      const newBlob = (await response.json()) as PutBlobResult;

      setBlob(newBlob);
      onImageUpload(newBlob.url);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadError("Error uploading image.");
    }
  };

  return (
    <div className="max-w-lg mx-auto py-8">
      <form
        onSubmit={handleUpload}
        className="flex items-center justify-between space-x-4"
      >
        <label className="bg-primaryColor hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer">
          Choose File
          <input
            name="file"
            ref={inputFileRef}
            type="file"
            required
            className="hidden"
          />
        </label>
        <button
          type="submit"
          className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
        >
          Upload
        </button>
      </form>
      {uploadError && <p className="text-red-500 mt-2">{uploadError}</p>}
      {blob && (
        <div className="mt-4">
          <Zoom>
            <Image
              src={blob.url}
              width={550}
              height={550}
              alt="Blog Picture"
              className="rounded-md"
            />
          </Zoom>
        </div>
      )}
    </div>
  );
}
