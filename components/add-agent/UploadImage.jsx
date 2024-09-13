"use client";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Generate a URL for the uploaded image
    }
  };

  const handleRemoveImage = (e) => {
    e.preventDefault(); // Prevent default behavior of label
    e.stopPropagation(); // Stop event from bubbling up
    setSelectedImage(null); // Reset the selectedImage state to null
  };

  const disabled = selectedImage === null ? false : true;

  return (
    <div className="mt-2 flex justify-center items-start flex-col gap-2 w-full">
      <label className="text-[#021526] font-semibold text-sm">
        ატვირთეთ ფოტო *
      </label>
      <label
        htmlFor="file-upload" // In React, use "htmlFor"
        className={`${
          disabled ? "cursor-default" : "cursor-pointer"
        } border-2 border-gray-400  border-dashed w-full rounded-md
     text-gray-700  px-24 h-[120px]
      relative flex justify-center items-center`}
      >
        {selectedImage ? (
          <div className="relative">
            <img
              src={selectedImage}
              alt="Uploaded Preview"
              className="object-cover w-24 h-20 rounded-md"
            />
            <Trash2
              onClick={handleRemoveImage}
              className="absolute -bottom-2 -right-2 bg-white h-7 w-7 p-1 rounded-full border border-black cursor-pointer"
            />
          </div>
        ) : (
          <Plus className="mx-auto border rounded-full p-1 border-black" />
        )}
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          disabled={disabled}
        />
      </label>
    </div>
  );
}
