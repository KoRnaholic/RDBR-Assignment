"use client";
import FilterRegion from "./filter/FilterRegion";

import FilterBy from "./filter/FilterBy";
import FilterByBed from "./filter/FilterByBed";
import { useEffect, useState } from "react";

const prices = [50000, 100000, 150000, 200000, 300000];
const area = [50000, 50000, 50000, 50000, 50000];

export default function Region({
  originalProperties,
  properties,
  setProperties,
}) {
  const [regions, setRegions] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-regions`)
      .then((res) => res.json())
      .then((data) => {
        setRegions(data.regions);
        // setLoading(false)
      });
  }, []);
  return (
    <>
      <div className=" border-2  rounded-lg p-0.5 inline-flex gap-5 ">
        <FilterRegion
          originalProperties={originalProperties}
          properties={properties}
          setProperties={setProperties}
          regions={regions}
        />

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
