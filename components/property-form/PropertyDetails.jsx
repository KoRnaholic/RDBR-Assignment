import { Check } from "lucide-react";
import { useState } from "react";

export default function PropertyDetails({ formValues, setFormValues }) {
  const [inputStarted, setInputStarted] = useState({
    price: false,
    bedrooms: false,
    area: false,
    description: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    if (!inputStarted[name]) {
      setInputStarted((prev) => ({ ...prev, [name]: true }));
    }
  };

  const isPriceValid =
    !isNaN(formValues.price) && formValues.price.trim() !== "";
  const isBedroomsValid =
    !isNaN(formValues.bedrooms) && formValues.bedrooms.trim() !== "";
  const isAreaValid = !isNaN(formValues.area) && formValues.area.trim() !== "";
  const isDescriptionValid =
    formValues.description.trim().split(/\s+/).length >= 5;

  return (
    <div>
      <h3 className="mt-24 text-[#1A1A1F] font-semibold">ბინის დეტალები</h3>
      <div className="mt-5 grid grid-cols-2 gap-6">
        <div className="text-sm">
          {/* Price Input */}
          <label className="block text-[#021526] font-semibold">
            ფასი *
            <input
              type="text"
              className={`mt-1 block w-full border px-2 outline-none rounded-md shadow-sm py-2 ${
                inputStarted.price
                  ? isPriceValid
                    ? "border-[#45A849]"
                    : "border-red-500"
                  : ""
              }`}
              value={formValues.price}
              onChange={handleInputChange}
              name="price"
              required
            />
            <span
              className={`flex items-center gap-1 mt-1 font-medium ${
                inputStarted.price
                  ? isPriceValid
                    ? "text-[#45A849]"
                    : "text-red-500"
                  : ""
              }`}
            >
              <Check className="w-4 h-4" /> მხოლოდ რიცხვები
            </span>
          </label>

          {/* Bedrooms Input */}
          <label className="block mt-5 text-[#021526] font-semibold">
            საძინებლების რაოდენობა *
            <input
              type="text"
              className={`mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2 ${
                inputStarted.bedrooms
                  ? isBedroomsValid
                    ? "border-[#45A849]"
                    : "border-red-500"
                  : ""
              }`}
              value={formValues.bedrooms}
              onChange={handleInputChange}
              name="bedrooms"
              required
            />
            <span
              className={`flex items-center gap-1 mt-1 font-medium ${
                inputStarted.bedrooms
                  ? isBedroomsValid
                    ? "text-[#45A849]"
                    : "text-red-500"
                  : ""
              }`}
            >
              <Check className="w-4 h-4" /> მხოლოდ რიცხვები
            </span>
          </label>
        </div>

        <div className="text-sm">
          {/* Area Input */}
          <label className="block text-[#021526] font-semibold">
            ფართობი *
            <input
              type="text"
              className={`mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2 ${
                inputStarted.area
                  ? isAreaValid
                    ? "border-[#45A849]"
                    : "border-red-500"
                  : ""
              }`}
              value={formValues.area}
              onChange={handleInputChange}
              name="area"
              required
            />
            <span
              className={`flex items-center gap-1 mt-1 font-medium ${
                inputStarted.area
                  ? isAreaValid
                    ? "text-[#45A849]"
                    : "text-red-500"
                  : ""
              }`}
            >
              <Check className="w-4 h-4" /> მხოლოდ რიცხვები
            </span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="block mt-5 text-[#021526] font-semibold">აღწერა *</h3>
        <textarea
          className={`mt-2 w-full resize-none border rounded-md outline-none text-black px-2 ${
            inputStarted.description
              ? isDescriptionValid
                ? "border-[#45A849]"
                : "border-red-500"
              : ""
          }`}
          rows={6}
          value={formValues.description}
          onChange={handleInputChange}
          name="description"
          required
        ></textarea>
        <span
          className={`flex items-center gap-1 mt-1 text-sm  ${
            inputStarted.description
              ? isDescriptionValid
                ? "text-[#45A849]"
                : "text-red-500"
              : "text-black"
          }`}
        >
          <Check className="w-4 h-4" /> მინიმუმ 5 სიტყვა
        </span>
      </div>
    </div>
  );
}
