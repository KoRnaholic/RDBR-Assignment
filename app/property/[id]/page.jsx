import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import property from "../../../public/images/hotel.png";
import Link from "next/link";
import pin from "../../../public/icons/pin.svg";
import bed from "../../../public/icons/bed.svg";
import total from "../../../public/icons/area.svg";
import zip from "../../../public/icons/zip.svg";
import PropertyDeleteModal from "@/components/property/PropertyDeleteModal";
import PropertyCarousel from "@/components/property/PropertyCarousel";
import { formatDate } from "@/lib/utils";

export default async function PropertyPage({ params }) {
  const res = await fetch(
    `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${params.id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const property = await res.json();

  const {
    address,
    price,
    image,
    description,
    bedrooms,
    area,
    zip_code,
    created_at,
    is_rental,
    id,
  } = property;

  return (
    <div className="px-40 py-16">
      <Link href="/">
        <ArrowLeft className="text-black mb-5" />
      </Link>

      <section className="flex gap-[68px]">
        <div className="">
          <div className="text-[#808A93] relative inline-flex flex-col gap-2">
            <Image
              src={image}
              width={839}
              height={670}
              alt="property"
              className="w-[839px] h-[670px] rounded-t-xl"
              priority
            />
            <span className="absolute top-10 left-10 text-white px-6 py-2 bg-[#39626f] rounded-3xl text-xl leading-6">
              იყიდება
            </span>
            <p className="text-end">
              გამოქვეყნების თარიღი {formatDate(created_at)}
            </p>
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-5xl text-[#021526] font-semibold">{price} ლ</h2>

          <div className="flex flex-col gap-3 mt-6 text-[#808A93]">
            <div className="flex gap-1 mt-1 text-[#808A93]">
              <Image src={pin} alt="pin" />
              {address}
            </div>
            <div className="flex gap-1 items-center">
              <Image src={bed} alt="bed" /> საძინებელი {bedrooms}
            </div>
            <div className="flex gap-1 items-center">
              <Image src={total} alt="area" />
              ფართი {area}მ
            </div>
            <div className="flex gap-1 items-center">
              <Image src={zip} alt="zip" />
              საფოსტო ინდექსი {zip_code}
            </div>
          </div>

          {/* info about agent */}

          <div className="mt-10 text-[#808A93] w-[500px]">
            <p>{description}</p>

            <div className="mt-[50px] px-5 flex flex-col gap-4 py-6 border  rounded-lg">
              <div className="flex items-center gap-3">
                <Image
                  src={property.agent.avatar}
                  width={72}
                  height={72}
                  alt="avatar"
                  className="rounded-full h-[72px]"
                />
                <div>
                  <p className="text-[#021526]">
                    {property.agent.name}
                    {property.agent.surname}
                  </p>
                  <p>აგენტი</p>
                </div>
              </div>

              <div className="">
                <p>{property.agent.email}</p>
                <p>{property.agent.phone}</p>
              </div>
            </div>
          </div>

          <PropertyDeleteModal propertyId={property.id} />
        </div>
      </section>

      <PropertyCarousel property={property} />
    </div>
  );
}
