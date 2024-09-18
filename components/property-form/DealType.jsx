export default function DealType() {
  return (
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
  );
}
