import { ChevronDown } from "lucide-react";
import FilterRegion from "./filter/FilterRegion";

export default function Region() {
  return (
    <>
      <div className=" border-2  rounded-lg p-0.5 inline-flex gap-5 ">
        <FilterRegion />
        <div className="inline-flex cursor-pointer px-3 py-2 rounded-lg font-semibold hover:bg-[#F3F3F3] text-black">
          საფასო კატეგორია <ChevronDown className=" ml-1 h-4- w-4" />
        </div>
        <div className="inline-flex cursor-pointer px-3 py-2 rounded-lg font-semibold hover:bg-[#F3F3F3] text-black">
          ფართობი <ChevronDown className=" ml-1 h-4- w-4" />
        </div>
        <div className="inline-flex cursor-pointer px-3 py-2 rounded-lg font-semibold hover:bg-[#F3F3F3] text-black">
          საძინებლების რაოდენობა <ChevronDown className=" ml-1 h-4- w-4" />
        </div>
      </div>
    </>
  );
}
