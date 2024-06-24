"use client";

import type { PutBlobResult } from "@vercel/blob";
import Image from "next/image";
import { useState, useRef } from "react";

export default function AvatarUploadPage({ onImageUpload }: any) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  const handleUpload = async (event: any) => {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    const response = await fetch(`/api/upload?filename=${file.name}`, {
      method: "POST",
      body: file,
    });

    const newBlob = (await response.json()) as PutBlobResult;

    setBlob(newBlob);
    onImageUpload(newBlob.url); // Call the callback with the image URL
  };

  return (
    <div className="max-w-lg mx-auto py-8">
      <form
        onSubmit={handleUpload}
        className="flex justify-between items-center space-x-4"
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
      {blob && (
        <div className="mt-4">
          <Image
            src={blob.url}
            width={550}
            height={550}
            alt="Avatar"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
