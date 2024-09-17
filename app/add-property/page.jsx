"use client";
import ChooseAgent from "@/components/add-agent/ChooseAgent";
import { Check, Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function AddProperty() {
  const [inputAdressValue, setInputAdressValue] = useState("");
  const [inputSurnameValue, setInputSurnameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPhoneValue, setInputPhoneValue] = useState("");

  const [agents, setAgents] = useState(null);

  const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.real-estate-manager.redberryinternship.ge/api/cities")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // setLoading(false)
        console.log(data);
      });

    fetch("http://localhost:3000//api/get-agents")
      .then((res) => res.json())
      .then((data) => {
        setAgents(data.agents);
        // setLoading(false)
        console.log(data.agents);
      });
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const handleAdressChange = (e) => setInputAdressValue(e.target.value);
  const handleSurnameChange = (e) => setInputSurnameValue(e.target.value);
  const handleEmailChange = (e) => setInputEmailValue(e.target.value);
  const handlePhoneChange = (e) => setInputPhoneValue(e.target.value);
  const disabled = selectedImage === null ? false : true;
  return (
    <section className="pb-10">
      <h2 className="text-[#021526] text-[32px] text-center mt-[62px]">
        {" "}
        ლისტინგის დამატება
      </h2>
      <form className="mt-10  gap-10 max-w-[788px] mx-auto">
        <div className="flex flex-col gap-2">
          <label className="text-[#1A1A1F]">გარიგების ტიპი</label>

          <div className="flex text-[#021526] gap-20">
            <div className="flex items-center gap-2">
              <input type="radio" name="saleOrRent" />
              იყიდება
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="saleOrRent" />
              ქირავდება
            </div>
          </div>
        </div>
        {/* Left Column */}
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
                name="name"
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
                value={inputEmailValue}
                onChange={handleEmailChange} // Controlled input for email
                name="email"
              >
                {data?.map((region) => (
                  <option>{region.name}</option>
                ))}
              </select>
              <span className="flex items-center gap-1 mt-1 font-medium">
                <Check className="w-4 h-4" /> გამოიყენეთ @redberry.ge ფოსტა
              </span>
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
                value={inputSurnameValue}
                onChange={handleSurnameChange} // Controlled input for surname
                name="surname"
              />
              <span className="flex items-center gap-1 mt-1 font-medium">
                <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
              </span>
            </label>

            {/* Phone Input */}
            <label className="block mt-5 text-[#021526] font-semibold">
              ქალაქი
              <select
                className="mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2"
                value={inputPhoneValue}
                onChange={handlePhoneChange} // Controlled input for phone
                name="city"
              />
              <span className="flex items-center gap-1 mt-1 font-medium">
                <Check className="w-4 h-4" /> მხოლოდ რიცხვები
              </span>
            </label>
          </div>
        </div>

        <h3 className="mt-24 text-[#1A1A1F] font-semibold">ბინის დეტალები</h3>
        <div className="mt-5 grid grid-cols-2 gap-6">
          <div className="text-sm">
            {/* Name Input */}
            <label className="block text-[#021526] font-semibold">
              ფასი *
              <input
                type="text"
                className="mt-1 block w-full border px-2 outline-none rounded-md shadow-sm py-2"
                value={inputAdressValue}
                onChange={handleAdressChange} // Controlled input for name
                name="name"
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
              საძინებლების რაოდენობა *
              <input
                type="text"
                className="mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2"
                value={inputSurnameValue}
                onChange={handleSurnameChange} // Controlled input for surname
                name="surname"
              />
              <span className="flex items-center gap-1 mt-1 font-medium">
                <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
              </span>
            </label>
          </div>

          <div className="text-sm">
            {/* Surname Input */}
            <label className="block text-[#021526] font-semibold">
              ფართობი
              <input
                type="text"
                className="mt-1 block w-full outline-none px-2 rounded-md border shadow-sm py-2"
                value={inputSurnameValue}
                onChange={handleSurnameChange} // Controlled input for surname
                name="surname"
              />
              <span className="flex items-center gap-1 mt-1 font-medium">
                <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
              </span>
            </label>
          </div>
        </div>
        <div>
          <h3 className="block mt-5 text-[#021526] font-semibold">აღწერა *</h3>
          <textarea
            className="mt-2 w-full resize-none border rounded-md outline-none text-black px-2"
            rows={6}
          ></textarea>
        </div>
        {/* <Button variant="primary" type="submit">
      დაამატე აგენტი
    </Button> */}

        <div className="mt-2  flex justify-center items-start flex-col gap-2 w-full">
          <label className="text-[#021526] font-semibold text-sm">
            ატვირთეთ ფოტო *
          </label>
          <label
            htmlFor="file-upload" // In React, use "htmlFor"
            className={`${
              disabled ? "cursor-default" : "cursor-pointer"
            } border-2 border-gray-400  border-dashed w-full rounded-md
text-gray-700  px-24 h-[120px]
relative flex justify-center items-center`}
          >
            {selectedImage ? (
              <div className="relative">
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="Uploaded Preview"
                  className="object-cover w-24 h-20 rounded-md"
                  width={100}
                  height={100}
                />
                <Trash2
                  onClick={handleRemoveImage}
                  className="absolute -bottom-2 -right-2 bg-white h-7 w-7 p-1 rounded-full border border-black cursor-pointer"
                />
              </div>
            ) : (
              <Plus className="mx-auto border rounded-full p-1 border-black" />
            )}
            <input
              id="file-upload"
              type="file"
              className="hidden"
              // onChange={handleFileChange}
              // disabled={disabled}
              name="image"
            />
          </label>
          <ChooseAgent agents={agents} />
        </div>
      </form>
    </section>
  );
}
