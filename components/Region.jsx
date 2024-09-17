import { ChevronDown } from "lucide-react";
import FilterRegion from "./filter/FilterRegion";
import FilterByPrice from "./filter/FilterBy";
import FilterBy from "./filter/FilterBy";
import FilterByBed from "./filter/FilterByBed";

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
        <FilterByBed />
      </div>
    </>
  );
}
