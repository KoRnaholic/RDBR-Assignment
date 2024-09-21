"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";

export default function FilterRegion({
  regions,
  setProperties,
  filterState,
  filteredByBedrooms,
  filteredByRegion,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const regionRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !regionRef.current.contains(event.target)
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (regionName) => {
    if (filterState.regionsState.selectedRegions.includes(regionName)) {
      filterState.regionsState.setSelectedRegions(
        filterState.regionsState.selectedRegions.filter(
          (name) => name !== regionName
        )
      );
    } else {
      filterState.regionsState.setSelectedRegions([
        ...filterState.regionsState.selectedRegions,
        regionName,
      ]);
    }
  };

  // Filter properties based on selected regions
  const handleSubmit = () => {
    if (filterState.regionsState.selectedRegions.length === 0) {
    } else {
      const filteredProp = [...filteredByBedrooms, ...filteredByRegion];
      setProperties(filteredProp);
    }
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={toggleDropdown}
        ref={regionRef}
        className={`${
          isOpen ? "bg-[#F3F3F3]" : ""
        } inline-flex cursor-pointer px-3 py-2 font-semibold rounded-lg hover:bg-[#F3F3F3] text-black`}
      >
        რეგიონი{" "}
        <ChevronDown
          className={`${
            isOpen ? "rotate-180" : ""
          } ml-1 h-4- w-4 transition-all`}
        />
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute mt-14 bg-white z-10 border rounded-xl inline-flex flex-col p-5 gap-4 pr-10 shadow-md"
        >
          <h3 className="text-[#021526] font-semibold">რეგიონის მიხედვით</h3>

          <div className="grid grid-cols-3 gap-x-14 gap-4">
            {regions?.map((region, index) => (
              <label key={index} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={filterState.regionsState.selectedRegions.includes(
                    region.name
                  )}
                  onChange={() => handleCheckboxChange(region.name)} // Handle checkbox state
                  className="h-5 w-5 accent-[#45A849]"
                />
                <span className="text-gray-700">{region.name}</span>
              </label>
            ))}
          </div>

          <div className="mt-3 flex justify-end">
            <Button
              variant="primary"
              className="w-20 h-9"
              onClick={handleSubmit}
            >
              არჩევა
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
