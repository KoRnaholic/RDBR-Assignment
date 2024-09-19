"use client";
import { Check } from "lucide-react";
import React, { useState } from "react";

export default function AgentFormInputs({
  // handleInputChange,
  formValues,
  setFormValues,
}) {
  const [inputStarted, setInputStarted] = useState({
    name: false,
    surname: false,
    email: false,
    phone: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    sessionStorage.setItem(name, value);
    // Mark the field as started typing (only once)
    if (!inputStarted[name]) {
      setInputStarted({ ...inputStarted, [name]: true });
    }
  };

  const isNameValid = formValues.name.length >= 2;
  const isSurnameValid = formValues.surname.length >= 2;
  const isEmailValid = formValues.email.endsWith("@redberry.ge");
  const isPhoneValid = /^[0-9]+$/.test(formValues.phone);
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="text-sm">
        {/* Name Input */}
        <label className="block text-[#021526] font-semibold">
          სახელი *
          <input
            type="text"
            className={`mt-1 block w-full border px-2 outline-none rounded-md shadow-sm py-2 ${
              inputStarted.name
                ? isNameValid
                  ? "border-[#45A849] border"
                  : "border-red-500"
                : " "
            }`}
            value={formValues.name}
            onChange={handleInputChange}
            name="name"
          />
          <span
            className={`flex items-center gap-1 mt-1 font-medium  ${
              inputStarted.name
                ? isNameValid
                  ? "text-[#45A849]"
                  : "text-red-500"
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
            className={`mt-1 block w-full border outline-none px-2 rounded-md py-2 ${
              inputStarted.email
                ? isEmailValid
                  ? "border-[#45A849]"
                  : "border-red-500"
                : ""
            }`}
            value={formValues.email}
            onChange={handleInputChange}
            name="email"
          />
          <span
            className={`flex items-center gap-1 mt-1 font-medium ${
              inputStarted.email
                ? isEmailValid
                  ? "text-[#45A849]"
                  : "text-red-500"
                : "text-black"
            }`}
          >
            <Check className="w-4 h-4" /> გამოიყენეთ @redberry.ge ფოსტა
          </span>
        </label>
      </div>

      {/* Right Column */}
      <div className="text-sm">
        {/* Surname Input */}
        <label className="block text-[#021526] font-semibold">
          გვარი *
          <input
            type="text"
            className={`mt-1 block w-full border outline-none px-2 rounded-md shadow-sm py-2 ${
              inputStarted.surname
                ? isSurnameValid
                  ? "border-[#45A849]"
                  : "border-red-500"
                : ""
            }`}
            value={formValues.surname}
            onChange={handleInputChange}
            name="surname"
          />
          <span
            className={`flex items-center gap-1 mt-1 font-medium ${
              inputStarted.surname
                ? isSurnameValid
                  ? "text-[#45A849]"
                  : "text-red-500"
                : "text-black"
            }`}
          >
            <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
          </span>
        </label>

        {/* Phone Input */}
        <label className="block mt-7 text-[#021526] font-semibold">
          ტელეფონის ნომერი *
          <input
            type="tel"
            className={`mt-1 block w-full border outline-none px-2 rounded-md shadow-sm py-2 ${
              inputStarted.phone
                ? isPhoneValid
                  ? "border-[#45A849]"
                  : "border-red-500"
                : ""
            }`}
            value={formValues.phone}
            onChange={handleInputChange}
            name="phone"
          />
          <span
            className={`flex items-center gap-1 mt-1 font-medium ${
              inputStarted.phone
                ? isPhoneValid
                  ? "text-[#45A849]"
                  : "text-red-500"
                : "text-black"
            }`}
          >
            <Check className="w-4 h-4" /> მხოლოდ რიცხვები
          </span>
        </label>
      </div>
    </div>
  );
}
