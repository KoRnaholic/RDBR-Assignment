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
              className="mt-1 block w-full border px-2 outline-none rounded-md shadow-sm py-2"
              value={inputAdressValue}
              onChange={handleAdressChange} // Controlled input for name
              name="address"
              required
            />
            <span
              className={`flex items-center gap-1 mt-1 font-medium ${
                inputAdressValue.length >= 2 ? "text-[#45A849]" : "text-black"
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
              {data?.map((region) => (
                <option key={region.id}>{region.name}</option>
              ))}
            </select>
            {/* <span className="flex items-center gap-1 mt-1 font-medium">
              <Check className="w-4 h-4" /> გამოიყენეთ @redberry.ge ფოსტა
            </span> */}
          </label>
        </div>

        {/* Right Column */}
        <div className="text-sm">
          {/* Surname Input */}
          <label className="block text-[#021526] font-semibold">
            საფოსტო ინდექსი
            <input
              type="text"
              className="mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2"
              value={inputIndexValue}
              onChange={handleIndexChange} // Controlled input for surname
              name="index"
              required
            />
            <span className="flex items-center gap-1 mt-1 font-medium">
              <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
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
                {" "}
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
