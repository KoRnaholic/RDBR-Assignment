"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";

export default function FilterBy({ name, label, categories }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const priceRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !priceRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        ref={priceRef}
        className="inline-flex  cursor-pointer px-3 py-2 rounded-lg font-semibold hover:bg-[#F3F3F3] text-black"
      >
        {label}{" "}
        <ChevronDown
          className={`${
            isOpen ? "rotate-180" : ""
          } ml-1 h-4- w-4 transition-all`}
        />
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute mt-4 border bg-white z-10 rounded-xl pl-6 pr-8 py-6 shadow-md text-black"
        >
          <h3 className="text-[#021526] font-semibold">{name}</h3>
          <div className="mt-5 relative flex gap-3">
            <div>
              <input
                type="text"
                className="border w-[155px] rounded-lg px-4 py-2 pr-10 text-gray-500 focus:outline-none focus:border-gray-500"
                placeholder="დან"
              />

              {/* <div className="absolute inset-y-0 right-3 flex items-center">
       <ChevronDown />
     </div> */}
              <ul className="mt-5 space-y-1">
                <label className="font-semibold">მინ. ფასი</label>
                {categories.map((price) => (
                  <li>{price.toLocaleString()} ლ</li>
                ))}
              </ul>
            </div>

            <div>
              <input
                type="text"
                className="border w-[155px] rounded-lg px-4 py-2 pr-10 text-gray-500 focus:outline-none focus:border-gray-500"
                placeholder="დან"
              />

              {/* <div className="absolute inset-y-0 right-3 flex items-center">
       <ChevronDown />
     </div> */}
              <ul className="mt-5 space-y-1">
                <label className="font-semibold">მაქს. ფასი</label>
                {categories.map((price) => (
                  <li>{price.toLocaleString()} ლ</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-around"></div>
          <div className="mt-10 flex justify-end">
            <Button variant="primary" className="w-20 h-9">
              არჩევა
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
