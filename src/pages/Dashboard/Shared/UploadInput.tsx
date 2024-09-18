import axios from "axios";
// UploadInput.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { TProject } from "@/Types";
// Import your UI components

const UploadInput = ({
  file,
  setFile,
}: {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      console.log("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: process.env.NEXT_PUBLIC_IMAGE_BB_KEY, // Replace with your API key
          },
        }
      );
      console.log(response.data.data.url);
      //   setUploadUrl(response.data.data.url); // Store the uploaded image URL
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-start">
      <Label
        htmlFor="file-upload"
        className="cursor-pointer p-3 w-full border border-accent rounded mb-2"
      >
        {file ? file.name : "Choose File"}
      </Label>
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadInput;
