"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";

const prices = [50000, 100000, 150000, 200000];
const prices2 = [100000, 150000, 200000, 300000];

export default function FilterByPrice({
  filteredByBedrooms,
  filteredByRegion,
  filterByPrice,
  filterState,
  setProperties,
}) {
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

  const handleMinPriceChange = (event) => {
    filterState.priceState.setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    filterState.priceState.setMaxPrice(event.target.value);
  };

  const handleSubmit = () => {
    console.log(
      "Selected price range:",
      filterState.priceState.minPrice,
      filterState.priceState.maxPrice
    );
    const filteredProp = [
      ...filteredByBedrooms,
      ...filteredByRegion,
      ...filterByPrice,
    ];
    setProperties(filteredProp);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        ref={priceRef}
        className="inline-flex cursor-pointer px-3 py-2 rounded-lg font-semibold hover:bg-[#F3F3F3] text-black"
      >
        საფასო კატეგორია
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
          <h3 className="text-[#021526] font-semibold">ფასის მიხედვით</h3>
          <div className="mt-5 relative flex gap-3">
            <div>
              <input
                type="text"
                className="border w-[155px] rounded-lg px-4 py-2 pr-10 text-gray-500 focus:outline-none focus:border-gray-500"
                placeholder="დან"
                value={filterState.priceState.minPrice}
                onChange={handleMinPriceChange}
              />

              <ul className="mt-5 space-y-1">
                <label className="font-semibold">მინ. ფასი</label>
                {prices.map((price) => (
                  <li key={price}>{price.toLocaleString()} ლ</li>
                ))}
              </ul>
            </div>

            <div>
              <input
                type="text"
                className="border w-[155px] rounded-lg px-4 py-2 pr-10 text-gray-500 focus:outline-none focus:border-gray-500"
                placeholder="მდე"
                value={filterState.priceState.maxPrice}
                onChange={handleMaxPriceChange}
              />

              <ul className="mt-5 space-y-1">
                <label className="font-semibold">მაქს. ფასი</label>
                {prices2.map((price) => (
                  <li key={price}>{price.toLocaleString()} ლ</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-around"></div>
          <div className="mt-10 flex justify-end">
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
    </div>
  );
}
