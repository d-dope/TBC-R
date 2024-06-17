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
    <>
      <h1>Upload Blog Picture</h1>

      <form onSubmit={handleUpload}>
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>
      {uploadError && <p className="text-red-500">{uploadError}</p>}
      {blob && (
        <Zoom>
          <Image src={blob.url} width={200} height={200} alt="Blog Picture" />
        </Zoom>
      )}
    </>
  );
}
