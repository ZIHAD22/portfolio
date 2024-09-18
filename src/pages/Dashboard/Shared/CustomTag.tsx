import React from "react";

interface TagProps {
  tag: string;
  onDelete: () => void;
}

const CustomTag: React.FC<TagProps> = ({ tag, onDelete }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 8px",
        borderRadius: "4px",
        backgroundColor: "#e0e0e0",
        margin: "0 4px 4px 0",
      }}
    >
      <span>{tag}</span>
      <button
        onClick={onDelete}
        style={{
          border: "none",
          background: "none",
          marginLeft: "8px",
          cursor: "pointer",
        }}
      >
        &times;
      </button>
    </div>
  );
};

export default CustomTag;
