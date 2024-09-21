import { Check, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PropertyImageUpload({
  previewImage,
  handleRemoveImage,
  handleFileChange,
  disabled,
  selectedImage,
}) {
  const [inputTouched, setInputTouched] = useState(false);

  console.log(previewImage);

  // Check if the selected image is valid
  const isValidImage = selectedImage?.size / (1024 * 1024) <= 1;

  const handleFileChangeWithTouch = (e) => {
    handleFileChange(e);
    setInputTouched(true); // Mark the input as touched
  };

  return (
    <div className="mt-4 flex justify-center items-start flex-col gap-2 w-full">
      <label className="text-[#021526] font-semibold text-sm">
        ატვირთეთ ფოტო *
      </label>
      <label
        htmlFor="file-upload"
        className={`${
          disabled ? "cursor-default" : "cursor-pointer"
        } border-2 border-gray-400 border-dashed w-full rounded-md
        text-gray-700 px-24 h-[120px]
        relative flex justify-center items-center`}
      >
        {previewImage ? (
          <div className="relative">
            <Image
              src={previewImage}
              alt="Uploaded Preview"
              className="object-cover w-24 h-20 rounded-md"
              width={100}
              height={100}
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
          onChange={handleFileChangeWithTouch} // Use the new function
          name="image"
          required
        />
      </label>
      <span
        className={`flex items-center gap-1 mt-1 font-medium text-sm ${
          !inputTouched || !selectedImage // Check for null or untouched
            ? "text-black" // Default color
            : isValidImage
            ? "text-[#45A849]"
            : "text-red-500"
        }`}
      >
        <Check className="w-4 h-4" /> არ უნდა აღებმატებოდეს 1mb-ის ზომაში
      </span>
    </div>
  );
}
