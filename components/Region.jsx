"use client";
import FilterRegion from "./filter/FilterRegion";

import FilterBy from "./filter/FilterByPrice";
import FilterByBed from "./filter/FilterByBed";
import { useEffect, useState } from "react";
import FilterByPrice from "./filter/FilterByPrice";
import FilterByArea from "./filter/FilterByArea";

export default function Region({
  originalProperties,
  properties,
  setProperties,
  filterState,
  filteredByRegion,
  filteredByBedrooms,
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
          filterState={filterState}
          originalProperties={originalProperties}
          properties={properties}
          setProperties={setProperties}
          regions={regions}
          filteredByBedrooms={filteredByBedrooms}
          filteredByRegion={filteredByRegion}
        />

        <FilterByPrice filterState={filterState} />

        <FilterByArea filterState={filterState} />
        <FilterByBed
          originalProperties={originalProperties}
          properties={properties}
          setProperties={setProperties}
          filterState={filterState}
          filteredByRegion={filteredByRegion}
          filteredByBedrooms={filteredByBedrooms}
        />
      </div>
    </>
  );
}
