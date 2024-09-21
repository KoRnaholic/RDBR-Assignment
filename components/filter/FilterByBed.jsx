"use client";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

export default function FilterByBed({
  filterState,
  setProperties,
  filteredByRegion,
  filteredByBedrooms,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const bedRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !bedRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const handleInputChange = (e) => {
    filterState.bedroomsState.setBedrooms(e.target.value);
  };

  const handleFilter = () => {
    if (
      !filterState.bedroomsState.bedrooms ||
      isNaN(filterState.bedroomsState.bedrooms)
    ) {
    } else {
      console.log(filteredByRegion, filteredByBedrooms);

      const filteredProp2 = [...filteredByRegion, ...filteredByBedrooms];

      setProperties(filteredProp2);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e) => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        ref={bedRef}
        className="inline-flex relative cursor-pointer px-3 py-2 rounded-lg font-semibold hover:bg-[#F3F3F3] text-black"
      >
        საძინებლების რაოდენობა{" "}
        <ChevronDown
          className={`${
            isOpen ? "rotate-180" : ""
          } ml-1 h-4- w-4 transition-all`}
        />
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute w-[260px]  mt-14 left-0 bg-white z-10 border rounded-xl inline-flex flex-col p-5 gap-4  shadow-md"
        >
          <h3 className="text-[#021526] font-semibold">
            საძინებლების რაოდენობა
          </h3>

          <div className="my-2  grid grid-cols-3 gap-x-14 gap-4 text-black">
            <input
              className="border w-10 h-10 text-center rounded-lg mx-auto
              text-gray-900 focus:outline-none focus:border-gray-500"
              value={filterState.bedroomsState.bedrooms}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-3 flex justify-end">
            <Button
              onClick={handleFilter}
              variant="primary"
              className="w-20 h-9"
            >
              არჩევა
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
