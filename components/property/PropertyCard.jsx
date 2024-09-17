import Image from "next/image";
import hotel from "../../public/images/hotel.png";
import pin from "../../public/icons/pin.svg";
import bed from "../../public/icons/bed.svg";
import area from "../../public/icons/area.svg";
import zip from "../../public/icons/zip.svg";
import Link from "next/link";
import { Check, Plus, PlusIcon, Trash2 } from "lucide-react";

export default function PropertyCard() {
  return (
    <Link href="/property/123">
      <div className=" rounded-md hover:shadow-xl">
        <div className="relative">
          <Image src={hotel} alt="hotel" />
          <span className="absolute top-6 left-6 text-white px-[18px] py-1.5 bg-[#39626f] rounded-2xl text-sm">
            იყიდება
          </span>
        </div>

        <div className="text-[#021526B2] p-5 border rounded-lg">
          <h2 className="text-[#021526] text-2xl font-semibold">80 000 ლ</h2>
          <div className="flex gap-2 mt-1">
            <Image src={pin} alt="pin" />
            თბილისი, ი.ჭავჭავაძის 53
          </div>
          <div className="flex gap-7 mt-4">
            <div className="flex gap-1 items-center">
              <Image src={bed} alt="bed" />2
            </div>
            <div className="flex gap-1 items-center">
              <Image src={area} alt="area" />
              55მ
            </div>
            <div className="flex gap-1 items-center">
              <Image src={zip} alt="zip" />
              0160
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
