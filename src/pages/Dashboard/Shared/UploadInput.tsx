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
