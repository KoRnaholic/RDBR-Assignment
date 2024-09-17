import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import property from "../../../public/images/hotel.png";
import Link from "next/link";
import pin from "../../../public/icons/pin.svg";
import bed from "../../../public/icons/bed.svg";
import area from "../../../public/icons/area.svg";
import zip from "../../../public/icons/zip.svg";
import PropertyDeleteModal from "@/components/property/PropertyDeleteModal";
import PropertyCarousel from "@/components/property/PropertyCarousel";

export default function PropertyPage(props) {
  return (
    <div className="px-40 py-16">
      <Link href="/">
        <ArrowLeft className="text-black mb-5" />
      </Link>

      <section className="flex gap-[68px]">
        <div className="">
          <div className="text-[#808A93] relative inline-flex flex-col gap-2">
            <Image
              src={property}
              alt="property"
              className="w-[839px] h-[670px]"
            />
            <span className="absolute top-10 left-10 text-white px-6 py-2 bg-[#39626f] rounded-3xl text-xl leading-6">
              იყიდება
            </span>
            <p className="text-end">გამოქვეყნების თარიღი 08/08/24</p>
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-5xl text-[#021526] font-semibold">80, 458 ლ</h2>

          <div className="flex flex-col gap-3 mt-6 text-[#808A93]">
            <div className="flex gap-1 mt-1 text-[#808A93]">
              <Image src={pin} alt="pin" />
              თბილისი, ი.ჭავჭავაძის 53
            </div>
            <div className="flex gap-1 items-center">
              <Image src={bed} alt="bed" /> საძინებელი 2
            </div>
            <div className="flex gap-1 items-center">
              <Image src={area} alt="area" />
              ფართი 55მ
            </div>
            <div className="flex gap-1 items-center">
              <Image src={zip} alt="zip" />
              საფოსტო ინდექსი 0160
            </div>
          </div>

          {/* info about agent */}

          <div className="mt-10 text-[#808A93] max-w-lg">
            <p>
              იყიდება ბინა ჭავჭავაძის ქუჩაზე, ვაკეში. ბინა არის ახალი რემონტით,
              ორი საძინებლითა და დიდი აივნებით. მოწყობილია ავეჯითა და ტექნიკით.
            </p>

            <div className="mt-[50px] px-5 flex flex-col gap-4 py-6 border rounded-lg">
              <div className="flex items-center gap-3">
                <Image
                  src={property}
                  width={72}
                  height={72}
                  alt="avatar"
                  className="rounded-full h-[72px]"
                />
                <div>
                  <p className="text-[#021526]">სოფიო გელოვანი</p>
                  <p>აგენტი</p>
                </div>
              </div>

              <div className="">
                <p>sophio.gelovany@redbary.ge</p>
                <p>577 777 777</p>
              </div>
            </div>
          </div>

          <PropertyDeleteModal />
        </div>
      </section>

      <PropertyCarousel />
    </div>
  );
}
