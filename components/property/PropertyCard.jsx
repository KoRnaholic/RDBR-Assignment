import Image from "next/image";
import hotel from "../../public/images/hotel.png";
export default function PropertyCard() {
  return (
    <div className=" rounded-md w-[384px] h-[307px]">
      <div className="relative">
        <Image src={hotel} alt="hotel" />
        <span className="absolute top-6 left-4 text-white px-5 py-1 bg-[#39626f] rounded-2xl text-sm">
          იყიდება
        </span>
      </div>

      <div className="text-[#021526B2] p-5 border rounded-lg">
        <h2 className="text-[#021526] text-2xl font-semibold">80 000 ლ</h2>
        <p>თბილისი, ი.ჭავჭავაძის 53</p>
        <div>
          <span>bed 2</span>
          <span>55მ</span>
          <span>0160</span>
        </div>
      </div>
    </div>
  );
}
