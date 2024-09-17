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
import Image from "next/image";

export default function AddButton() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputSurnameValue, setInputSurnameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPhoneValue, setInputPhoneValue] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  const disabled = selectedImage === null ? false : true;

  const handleRemoveImage = (e) => {
    e.preventDefault(); // Prevent default behavior of label
    e.stopPropagation(); // Stop event from bubbling up
    setSelectedImage(null); // Reset the selectedImage state to null
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   // setSelectedImage(e.target.files[0]);
  //   if (file) {
  //     setSelectedImage(URL.createObjectURL(file)); // Generate a URL for the uploaded image
  //   }
  // };

  const handleFileChange = (e) => {
    setSelectedImage(e.target.files[0]); // Store selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to hold form fields and file
    const formData = new FormData();
    formData.append("name", inputNameValue);
    formData.append("surname", inputSurnameValue);
    formData.append("email", inputEmailValue);
    formData.append("phone", inputPhoneValue);
    formData.append("avatar", selectedImage); // Add file to formData

    try {
      const response = await fetch(
        "https://api.real-estate-manager.redberryinternship.ge/api/agents",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`, // Ensure token is correct
          },
        }
      );

      // Check if response is JSON or an error page
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        console.log("Result:", result);
      } else {
        const text = await response.text();
        console.error("Received non-JSON response:", text);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  const handleNameChange = (e) => setInputNameValue(e.target.value);
  const handleSurnameChange = (e) => setInputSurnameValue(e.target.value);
  const handleEmailChange = (e) => setInputEmailValue(e.target.value);
  const handlePhoneChange = (e) => setInputPhoneValue(e.target.value);

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

          <form
            // action="api/create-agent"
            // method="post"
            onSubmit={handleSubmit}
            className="mt-10  gap-10"
          >
            {/* Left Column */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-sm">
                {/* Name Input */}
                <label className="block text-[#021526] font-semibold">
                  სახელი *
                  <input
                    type="text"
                    className="mt-1 block w-full border px-2 outline-none rounded-md shadow-sm py-2"
                    value={inputNameValue}
                    onChange={handleNameChange} // Controlled input for name
                    name="name"
                  />
                  <span
                    className={`flex items-center gap-1 mt-1 font-medium ${
                      inputNameValue.length >= 2
                        ? "text-[#45A849]"
                        : "text-black"
                    }`}
                  >
                    <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
                  </span>
                </label>

                {/* Email Input */}
                <label className="block mt-7 text-[#021526] font-semibold">
                  ელ-ფოსტა *
                  <input
                    type="email"
                    className="mt-1 block w-full outline-none px-2 rounded-md border py-2"
                    value={inputEmailValue}
                    onChange={handleEmailChange} // Controlled input for email
                    name="email"
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
                    value={inputSurnameValue}
                    onChange={handleSurnameChange} // Controlled input for surname
                    name="surname"
                  />
                  <span className="flex items-center gap-1 mt-1 font-medium">
                    <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
                  </span>
                </label>

                {/* Phone Input */}
                <label className="block mt-7 text-[#021526] font-semibold">
                  ტელეფონის ნომერი
                  <input
                    type="tel"
                    className="mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2"
                    value={inputPhoneValue}
                    onChange={handlePhoneChange} // Controlled input for phone
                    name="phone"
                  />
                  <span className="flex items-center gap-1 mt-1 font-medium">
                    <Check className="w-4 h-4" /> მხოლოდ რიცხვები
                  </span>
                </label>
              </div>
            </div>
            {/* <Button variant="primary" type="submit">
              დაამატე აგენტი
            </Button> */}

            <div className="mt-7  flex justify-center items-start flex-col gap-2 w-full">
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
                    <Image
                      src={URL.createObjectURL(selectedImage)}
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
                  onChange={handleFileChange}
                  // disabled={disabled}
                  name="image"
                />
              </label>
            </div>
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
          </form>

          {/* Image upload */}
          {/* <UploadImage /> */}
        </DialogContent>
      </Dialog>
    </>
  );
}
