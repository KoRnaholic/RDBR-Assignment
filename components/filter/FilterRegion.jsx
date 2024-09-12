"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function FilterRegion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const options = [
    "ქართლი",
    "გურია",
    "აჭარა",
    "კახეთი",
    "რაჭა",
    "სვანეთი",
    "იმერეთი",
    "ლეჩხუმი",
    "მცხეთა-მთიანეთი",
    "სამეგრელო",
    "სამცხე-ჯავახეთი",
    "თბილისი",
  ];

  return (
    <>
      <div
        onClick={toggleDropdown}
        className={`${
          isOpen ? "bg-[#F3F3F3]" : ""
        } inline-flex cursor-pointer px-3 py-2 font-semibold rounded-lg hover:bg-[#F3F3F3] text-black`}
      >
        რეგიონი <ChevronDown className=" ml-1 h-4- w-4" />
      </div>

      {isOpen && (
        <div className="absolute mt-14  border rounded-xl inline-flex flex-col p-5 gap-4 pr-10 shadow-md">
          <h3 className="text-[#021526] font-semibold">რეგიონის მიხედვით</h3>

          <div className="  grid grid-cols-3 gap-x-14 gap-4 ">
            {options.map((option, index) => (
              <label key={index} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  // checked={selectedOptions.includes(option)}
                  // onChange={() => handleCheckboxChange(option)}
                  className="h-5 w-5 text-green-600 border-gray-300 rounded"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>

          <div className="mt-3 flex justify-end">
            <Button variant="primary">არჩევა</Button>
          </div>
        </div>
      )}
    </>
  );
}
