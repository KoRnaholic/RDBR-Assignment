import { Plus, Trash2 } from "lucide-react";
import Image from "next/image";

export default function ImageUploadInput({
  previewImage,
  handleRemoveImage,
  handleFileChange,
  disabled,
  selectedImage,
}) {
  const imageIsValid = () => {
    if (
      selectedImage?.size === undefined ||
      (selectedImage?.size / (1024 * 1024)).toFixed(2) <= 1
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isValid = imageIsValid();
  const validImage = (selectedImage?.size / (1024 * 1024)).toFixed(2) <= 1;
  console.log(selectedImage?.size);
  return (
    <div className="mt-7  flex justify-center items-start flex-col gap-2 w-full">
      <label className="text-[#021526] font-semibold text-sm">
        ატვირთეთ ფოტო *
      </label>
      <label
        htmlFor="file-upload" // In React, use "htmlFor"
        className={`${
          disabled ? "cursor-default" : "cursor-pointer"
        } border-2   border-dashed w-full rounded-md
text-gray-700  px-24 h-[120px]
relative flex justify-center items-center
${isValid ? "border-gray-400" : "border-red-400"}`}
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
          required
          onChange={handleFileChange}
          // disabled={disabled}
          name="image"
        />
      </label>
    </div>
  );
}
