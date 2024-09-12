import { ChevronDown } from "lucide-react";
import FilterRegion from "./filter/FilterRegion";
import FilterByPrice from "./filter/FilterBy";
import FilterBy from "./filter/FilterBy";

const prices = [50000, 100000, 150000, 200000, 300000];
const area = [50000, 50000, 50000, 50000, 50000];

export default function Region() {
  return (
    <>
      <div className=" border-2  rounded-lg p-0.5 inline-flex gap-5 ">
        <FilterRegion />

        <FilterBy
          name="ფასის მიხედვით"
          label="საფასო კატეგორია"
          categories={prices}
        />

        <FilterBy name="ფართობის მიხედვით" label="ფართობი" categories={area} />
        <div className="inline-flex cursor-pointer px-3 py-2 rounded-lg font-semibold hover:bg-[#F3F3F3] text-black">
          საძინებლების რაოდენობა <ChevronDown className=" ml-1 h-4- w-4" />
        </div>
      </div>
    </>
  );
}
