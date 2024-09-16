import { Check } from "lucide-react";

export default function AddProperty() {
  return (
    <div className="">
      <h1 className="text-center text-[#021526] text-3xl font-semibold mt-10">
        ლისტინგის დამატება
      </h1>

      <form action="/api/create-agent" method="post" className="mt-10 ">
        {/* Left Column */}
        <div className="text-sm">
          {/* Name Input */}
          <label className="block text-[#021526] font-semibold">
            სახელი *
            <input
              type="text"
              className="mt-1 block w-1/2 border px-2 outline-none rounded-md shadow-sm py-2"
              //   value={inputNameValue}
              //   onChange={handleNameChange} // Controlled input for name
              name="name"
            />
            <span>
              <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
            </span>
          </label>

          {/* Email Input */}
          <label className="block mt-10 text-[#021526] font-semibold">
            ელ-ფოსტა *
            <input
              type="email"
              className="mt-1 block w-1/2 outline-none px-2 rounded-md border py-2"
              //   value={inputEmailValue}
              //   onChange={handleEmailChange} // Controlled input for email
              name="email"
            />
            <span className="flex items-center gap-1 mt-1 font-medium">
              <Check className="w-4 h-4" /> გამოიყენეთ @redberry.ge ფოსტა
            </span>
          </label>
        </div>

        {/* Right Column */}
        <div className="text-sm">
          {/* Surname Input */}
          <label className="block text-[#021526] font-semibold">
            გვარი
            <input
              type="text"
              className="mt-1 block w-1/2 outline-none px-2 rounded-md border shadow-sm py-2"
              //   value={inputSurnameValue}
              //   onChange={handleSurnameChange} // Controlled input for surname
              name="surname"
            />
            <span className="flex items-center gap-1 mt-1 font-medium">
              <Check className="w-4 h-4" /> მინიმუმ ორი სიმბოლო
            </span>
          </label>

          {/* Phone Input */}
          <label className="block mt-10 text-[#021526] font-semibold">
            ტელეფონის ნომერი
            <input
              type="tel"
              className="mt-1 block w-1/2 outline-none px-2 rounded-md border shadow-sm py-2"
              //   value={inputPhoneValue}
              //   onChange={handlePhoneChange} // Controlled input for phone
              name="phone"
            />
            <span className="flex items-center gap-1 mt-1 font-medium">
              <Check className="w-4 h-4" /> მხოლოდ რიცხვები
            </span>
          </label>
        </div>
      </form>
    </div>
  );
}
