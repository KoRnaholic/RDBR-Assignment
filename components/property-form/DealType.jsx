export default function DealType({ saleOrRent, setSaleOrRent }) {
  const handleChange = (e) => {
    setSaleOrRent(e.target.value);
  };

  console.log(saleOrRent);
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#1A1A1F]">გარიგების ტიპი</label>

      <div className="flex text-[#021526] gap-20">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="saleOrRent"
            value="0"
            onChange={handleChange}
          />
          იყიდება
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="saleOrRent"
            value="1"
            onChange={handleChange}
          />
          ქირავდება
        </div>
      </div>
    </div>
  );
}
