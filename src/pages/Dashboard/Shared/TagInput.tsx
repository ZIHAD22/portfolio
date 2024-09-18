import React, { useState, ChangeEvent, KeyboardEvent } from "react";
// Replace with actual imports from ShadCN UI
import CustomTag from "./CustomTag";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TProject } from "@/Types";
// Adjust the import path as necessary

const TagInput = ({
  details,
  setDetails,
}: {
  details: TProject;
  setDetails: React.Dispatch<React.SetStateAction<TProject>>;
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      inputValue.trim() !== "" &&
      details.stack.length <= 4 &&
      details.stack.filter((tag) => tag.name === inputValue.trim()).length === 0
    ) {
      event.preventDefault();
      setDetails({
        ...details,
        stack: [...details.stack, { name: inputValue.trim() }],
      });
      setInputValue("");
    }
  };

  const handleDelete = (tagToDelete: number) => {
    // setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
    setDetails({
      ...details,
      stack: details.stack.filter((tag, i) => i !== tagToDelete),
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClearAll = () => {
    setDetails({
      ...details,
      stack: [],
    });
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {details?.stack?.map((tag, index) => (
          <CustomTag
            key={index}
            tag={tag.name}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {details?.stack?.length <= 4 && (
          <Input
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Type and press Enter"
            style={{ flex: 1 }}
            className="border-r-0 rounded-r-none block w-full"
          />
        )}
        <Button
          variant="outline"
          onClick={handleClearAll}
          className={`${
            details?.stack?.length <= 4 && "rounded-l-none border-1"
          }`}
        >
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default TagInput;
