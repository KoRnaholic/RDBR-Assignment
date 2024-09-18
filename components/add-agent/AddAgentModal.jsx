"use client";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import ImageUploadInput from "./ImageUploadInput";
import AgentFormInputs from "./AgentFormInputs";

export default function AddAgentModal() {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const disabled = selectedImage === null ? false : true;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    sessionStorage.setItem(name, value);
  };

  const convertImageToBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      sessionStorage.setItem("selectedImage", base64String);
      setPreviewImage(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    convertImageToBase64(file);
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedImage(null);
    setPreviewImage(null);
    sessionStorage.removeItem("selectedImage");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if values are empty
    const { name, surname, email, phone } = formValues;
    if (!name || !surname || !email || !phone || !selectedImage) {
      console.warn("Please fill out all fields and select an image.");
      return;
    }
    //

    const formData = new FormData();
    Object.keys(formValues).forEach((key) =>
      formData.append(key, formValues[key])
    );
    formData.append("avatar", selectedImage);

    try {
      await fetch(
        "https://api.real-estate-manager.redberryinternship.ge/api/agents",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        }
      );
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  useEffect(() => {
    const savedValues = {
      name: sessionStorage.getItem("name") || "",
      surname: sessionStorage.getItem("surname") || "",
      email: sessionStorage.getItem("email") || "",
      phone: sessionStorage.getItem("phone") || "",
    };
    setFormValues((prev) => ({ ...prev, ...savedValues }));
    const savedImage = sessionStorage.getItem("selectedImage");
    if (savedImage) setPreviewImage(savedImage);
  }, []);

  const handleClearInputs = () => {
    setFormValues({ name: "", surname: "", email: "", phone: "" });
    setSelectedImage(null);
    setPreviewImage(null);
    sessionStorage.clear();
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

          <form onSubmit={handleSubmit} className="mt-10  gap-10">
            <AgentFormInputs
              handleInputChange={handleInputChange}
              formValues={formValues}
            />
            <ImageUploadInput
              previewImage={previewImage}
              handleRemoveImage={handleRemoveImage}
              handleFileChange={handleFileChange}
              disabled={disabled}
            />
            <DialogFooter className="mt-14">
              <DialogClose asChild>
                <Button
                  onClick={handleClearInputs}
                  variant="secondary"
                  type="button"
                >
                  გაუქმება
                </Button>
              </DialogClose>
              <Button variant="primary" type="submit">
                დაამატე აგენტი
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
