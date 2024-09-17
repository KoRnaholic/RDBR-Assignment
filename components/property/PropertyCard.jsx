import Image from "next/image";

import pin from "../../public/icons/pin.svg";
import bed from "../../public/icons/bed.svg";
import total from "../../public/icons/area.svg";
import zip from "../../public/icons/zip.svg";
import Link from "next/link";

export default function PropertyCard({ property }) {
  const { address, price, image, bedrooms, area, zip_code, is_rental, id } =
    property;
  return (
    <Link href={`/property/${id}`}>
      <div className="border rounded-xl hover:shadow-xl">
        <div className="relative">
          <Image
            src={image}
            width={384}
            height={307}
            className="w-[384px] h-[307px] rounded-t-md"
            alt="hotel"
          />
          <span className="absolute top-6 left-6 text-white px-[18px] py-1.5 bg-[#39626f] rounded-2xl text-sm">
            იყიდება
          </span>
        </div>

        <div className="text-[#021526B2] p-5 border-b rounded-b-lg">
          <h2 className="text-[#021526] text-2xl font-semibold">{price} ლ</h2>
          <div className="flex gap-2 mt-1">
            <Image src={pin} alt="pin" />
            {address}
          </div>
          <div className="flex gap-7 mt-4">
            <div className="flex gap-1 items-center">
              <Image src={bed} alt="bed" />
              {bedrooms}
            </div>
            <div className="flex gap-1 items-center">
              <Image src={total} alt="area" />
              {area}მ
            </div>
            <div className="flex gap-1 items-center">
              <Image src={zip} alt="zip" />
              {zip_code}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
