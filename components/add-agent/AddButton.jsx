"use client";
import { Button } from "../ui/button";
import { Check, Plus, PlusIcon, Trash2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import UploadImage from "./UploadImage";

export default function AddButton() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Generate a URL for the uploaded image
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null); // Reset the selectedImage state to null
  };

  const handleInputChange = (e) => {
    setInputNameValue(e.target.value);
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="flex  group">
            <PlusIcon className="h-4 w-4 text-[#F93B1D] mr-1 group-hover:text-[#FFFFFF]" />
            აგენტის დამატება
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white p-20">
          <DialogHeader>
            <DialogTitle className="mx-auto text-[#021526] text-3xl">
              აგენტის დამატება
            </DialogTitle>
          </DialogHeader>

          <form className="mt-10 grid grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="text-sm">
              {/* Name Input */}
              <label className="block text-[#021526] font-semibold">
                სახელი *
                <input
                  type="text"
                  className="mt-1 block w-full border px-2 outline-none rounded-md shadow-sm py-2"
                  value={inputNameValue}
                  onChange={handleInputChange}
                />
                <span
                  className={`flex items-center gap-1 mt-1 font-medium ${
                    inputNameValue.length >= 2 ? "text-[#45A849]" : "text-black"
                  }`}
                >
                  <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
                </span>
              </label>

              {/* Email Input */}
              <label className="block mt-10 text-[#021526] font-semibold">
                ელ-ფოსტა *
                <input
                  type="email"
                  className="mt-1 block w-full outline-none px-2 rounded-md border py-2"
                />
                <span className="flex items-center gap-1 mt-1 font-medium">
                  <Check className="w-4 h-4" /> გამოიყენეთ @redberry.ge ფოსტა
                </span>
              </label>
            </div>

            {/* Right Column */}
            <div className="text-sm">
              {/* Surname Input */}
              <label className="block text-[#021526] font-semibold">
                გვარი
                <input
                  type="text"
                  className="mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2"
                />
                <span className="flex items-center gap-1 mt-1 font-medium">
                  <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
                </span>
              </label>

              {/* Phone Input */}
              <label className="block mt-10 text-[#021526] font-semibold">
                ტელეფონის ნომერი
                <input
                  type="tel"
                  className="mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2"
                />
                <span className="flex items-center gap-1 mt-1 font-medium">
                  <Check className="w-4 h-4" /> მხოლოდ რიცხვები
                </span>
              </label>
            </div>
          </form>

          {/* Image upload */}
          <UploadImage />
          <DialogFooter className="mt-14">
            <DialogClose asChild>
              <Button variant="secondary" type="close">
                გაუქმება
              </Button>
            </DialogClose>
            <Button variant="primary" type="submit">
              დაამატე აგენტი
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
