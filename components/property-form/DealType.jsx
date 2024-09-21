export default function DealType({ saleOrRent, setSaleOrRent }) {
  const handleChange = (e) => {
    setSaleOrRent(e.target.value);
  };

  console.log(saleOrRent);
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#1A1A1F]">გარიგების ტიპი</label>

      <div className="flex text-[#021526] gap-20">
        {/* Custom styled radio input for 'იყიდება' */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="saleOrRent"
            value="0"
            onChange={handleChange}
            className="hidden"
          />
          <div className="border rounded-full p-1">
            <span
              className={`w-2.5 h-2.5 rounded-full  border-[#021526] flex justify-center items-center ${
                saleOrRent === "0" ? "bg-[#021526] " : "bg-transparent"
              }`}
            ></span>
          </div>
          იყიდება
        </label>

        {/* Custom styled radio input for 'ქირავდება' */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="saleOrRent"
            value="1"
            onChange={handleChange}
            className="hidden"
          />
          <div className="border rounded-full p-1">
            <span
              className={`w-2.5 h-2.5 rounded-full   border-[#021526] flex justify-center items-center ${
                saleOrRent === "1" ? "bg-[#021526] " : "bg-transparent"
              }`}
            ></span>
          </div>
          ქირავდება
        </label>
      </div>
    </div>
  );
}
