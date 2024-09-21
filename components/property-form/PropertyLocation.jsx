"use client";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function PropertyLocation({
  inputAdressValue,
  inputIndexValue,
  inputRegionValue,
  inputCityValue,
  handleAdressChange,
  handleIndexChange,
  handleRegionChange,
  handleCityChange,
  data,
}) {
  const [cities, setCities] = useState(null);

  const [inputStarted, setInputStarted] = useState({
    address: false,
    index: false,
  });

  const isAddressValid = inputAdressValue.length >= 2;
  const isIndexValid = !isNaN(inputIndexValue) && inputIndexValue.trim() !== "";

  const handleAddressInputChange = (e) => {
    const { name, value } = e.target;
    handleAdressChange(e); // Call the passed handler
    // Mark the field as started typing (only once)
    if (!inputStarted[name]) {
      setInputStarted({ ...inputStarted, [name]: true });
    }
  };

  const handleIndexInputChange = (e) => {
    const { name, value } = e.target;
    handleIndexChange(e);
    // Mark the field as started typing (only once)
    if (!inputStarted[name]) {
      setInputStarted((prev) => ({ ...prev, [name]: true }));
    }
  };

  const filteredRegion = data?.find(
    (region) => region.name === inputRegionValue
  );

  const filteredCities = filteredRegion
    ? cities?.filter((city) => city.region_id === filteredRegion.id)
    : [];

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/get-cities");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const citiesData = await response.json();
        setCities(citiesData.cities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);
  return (
    <>
      <h3 className="mt-14 text-[#1A1A1F] font-semibold">მდებარეობა</h3>
      <div className="mt-5 grid grid-cols-2 gap-6">
        <div className="text-sm">
          {/* Name Input */}
          <label className="block text-[#021526] font-semibold">
            მისამართი *
            <input
              type="text"
              className={`mt-1 block w-full border px-2 outline-none rounded-md shadow-sm py-2 ${
                inputStarted.address
                  ? isAddressValid
                    ? "border-[#45A849]"
                    : "border-red-500"
                  : ""
              }`}
              value={inputAdressValue}
              onChange={handleAddressInputChange}
              name="address"
              required
            />
            <span
              className={`flex items-center gap-1 mt-1 font-medium ${
                inputStarted.address
                  ? isAddressValid
                    ? "text-[#45A849]"
                    : "text-red-500"
                  : ""
              }`}
            >
              <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
            </span>
          </label>

          {/* Email Input */}

          <label className="block mt-5 text-[#021526] font-semibold">
            რეგიონი *
            <select
              className="mt-1 block w-full outline-none px-2 rounded-md border py-2"
              value={inputRegionValue}
              onChange={handleRegionChange} // Controlled input for email
              name="region"
              required
            >
              <option value="" disabled>
                აირჩიე რეგიონი
              </option>
              {data?.map((region) => (
                <option key={region.id}>{region.name}</option>
              ))}
            </select>
          </label>
        </div>

        {/* Right Column */}
        <div className="text-sm">
          {/* Surname Input */}
          <label className="block text-[#021526] font-semibold">
            საფოსტო ინდექსი
            <input
              type="text"
              className={`mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2 ${
                inputStarted.index
                  ? isIndexValid
                    ? "border-[#45A849]"
                    : "border-red-500"
                  : ""
              }`}
              value={inputIndexValue}
              onChange={handleIndexInputChange} // Controlled input for surname
              name="index"
              required
            />
            <span
              className={`flex items-center gap-1 mt-1 font-medium ${
                inputStarted.index
                  ? isIndexValid
                    ? "text-[#45A849]"
                    : "text-red-500"
                  : ""
              }`}
            >
              <Check className="w-4 h-4" /> მხოლოდ რიცხვები
            </span>
          </label>

          {/* Phone Input */}
          {inputRegionValue && (
            <label className="block mt-5 text-[#021526] font-semibold">
              ქალაქი *
              <select
                className="mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2"
                value={inputCityValue}
                onChange={handleCityChange} // Controlled input for phone
                name="city"
                required
              >
                <option value="" disabled>
                  აირჩიე ქალაქი
                </option>
                {filteredCities?.map((city) => (
                  <option key={city.id}>{city.name}</option>
                ))}
              </select>
              {/* <span className="flex items-center gap-1 mt-1 font-medium">
                <Check className="w-4 h-4" /> მხოლოდ რიცხვები
              </span> */}
            </label>
          )}
        </div>
      </div>
    </>
  );
}
