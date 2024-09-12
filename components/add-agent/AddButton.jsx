"use client";
import { Button } from "../ui/button";
import { Check, PlusIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AddButton() {
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

          {/* inputs here */}

          <form className="mt-10 grid grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="text-sm">
              {/* Name Input */}
              <label className="block text-[#021526] font-semibold">
                სახელი *
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md shadow-sm py-2"
                />
                <span className="flex items-center gap-1 mt-1 font-medium">
                  <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
                </span>
              </label>

              {/* Email Input */}
              <label className="block mt-10 text-[#021526] font-semibold">
                ელ-ფოსტა *
                <input
                  type="email"
                  className="mt-1 block w-full  rounded-md border py-2"
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
                  className="mt-1 block w-full  rounded-md border shadow-sm py-2"
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
                  className="mt-1 block w-full  rounded-md border shadow-sm py-2"
                />
                <span className="flex items-center gap-1 mt-1 font-medium">
                  <Check className="w-4 h-4" /> მხოლოდ რიცხვები
                </span>
              </label>
            </div>
          </form>
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
