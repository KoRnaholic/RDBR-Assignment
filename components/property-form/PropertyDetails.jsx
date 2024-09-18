import { Check } from "lucide-react";
import { useState } from "react";

export default function PropertyDetails() {
  const [formValues, setFormValues] = useState({
    price: "",
    bedrooms: "",
    area: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

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
              className="mt-1 block w-full border px-2 outline-none rounded-md shadow-sm py-2"
              value={formValues.price}
              onChange={handleInputChange}
              name="price"
            />
            <span
              className={`flex items-center gap-1 mt-1 font-medium ${
                formValues.price.length >= 2 ? "text-[#45A849]" : "text-black"
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
              className="mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2"
              value={formValues.bedrooms}
              onChange={handleInputChange}
              name="bedrooms"
            />
            <span className="flex items-center gap-1 mt-1 font-medium">
              <Check className="w-4 h-4" /> მხოლოდ რიცხვები
            </span>
          </label>
        </div>

        <div className="text-sm">
          {/* Area Input */}
          <label className="block text-[#021526] font-semibold">
            ფართობი
            <input
              type="text"
              className="mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2"
              value={formValues.area}
              onChange={handleInputChange}
              name="area"
            />
            <span className="flex items-center gap-1 mt-1 font-medium">
              <Check className="w-4 h-4" /> მხოლოდ რიცხვები
            </span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="block mt-5 text-[#021526] font-semibold">აღწერა *</h3>
        <textarea
          className="mt-2 w-full resize-none border rounded-md outline-none text-black px-2"
          rows={6}
          value={formValues.description}
          onChange={handleInputChange}
          name="description"
        ></textarea>
      </div>
    </div>
  );
}
