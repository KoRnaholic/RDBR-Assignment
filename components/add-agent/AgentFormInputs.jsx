import { Check } from "lucide-react";
import React from "react";

export default function AgentFormInputs({ handleInputChange, formValues }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="text-sm">
        {/* Name Input */}
        <label className="block text-[#021526] font-semibold">
          სახელი *
          <input
            type="text"
            className="mt-1 block w-full border px-2 outline-none rounded-md shadow-sm py-2"
            value={formValues.name}
            onChange={handleInputChange} // Controlled input for name
            name="name"
          />
          <span
            className={`flex items-center gap-1 mt-1 font-medium ${
              formValues.name?.length >= 2 ? "text-[#45A849]" : "text-black"
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
            value={formValues.email}
            onChange={handleInputChange} // Controlled input for email
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
            value={formValues.surname}
            onChange={handleInputChange} // Controlled input for surname
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
            value={formValues.phone}
            onChange={handleInputChange} // Controlled input for phone
            name="phone"
          />
          <span className="flex items-center gap-1 mt-1 font-medium">
            <Check className="w-4 h-4" /> მხოლოდ რიცხვები
          </span>
        </label>
      </div>
    </div>
  );
}
