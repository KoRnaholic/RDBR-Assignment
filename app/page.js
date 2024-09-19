"use client";
import Filter from "@/components/filter/Filter";
import PropertyList from "@/components/property/PropertyList";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [properties, setProperties] = useState(null);
  const [originalProperties, setOriginalProperties] = useState(null); // Keep original properties
  const [loading, setLoading] = useState(true);
  const [bedrooms, setBedrooms] = useState("");
  const [selectedRegions, setSelectedRegions] = useState([]);

  console.log(selectedRegions);

  const filterState = {
    bedroomsState: {
      bedrooms,
      setBedrooms,
    },
    regionsState: {
      selectedRegions,
      setSelectedRegions,
    },
  };

  const filteredByRegion = originalProperties?.filter((property) =>
    filterState.regionsState.selectedRegions.includes(property.city.region.name)
  );

  const filteredByBedrooms = originalProperties?.filter(
    (property) =>
      property.bedrooms === parseInt(filterState.bedroomsState.bedrooms, 10)
  );

  const deleteFilteredRegion = (region) => {
    const newArray = selectedRegions.filter((item) => item !== region);

    setSelectedRegions(newArray);
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-properties`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties);
        setOriginalProperties(data.properties); // Store the original properties list
        setLoading(false); // Data is loaded, stop showing spinner
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setLoading(false); // In case of error, stop showing spinner
      });
  }, []);

  return (
    <div className="px-36 pt-20">
      <Filter
        filterState={filterState}
        properties={properties}
        setProperties={setProperties}
        originalProperties={originalProperties}
        filteredByRegion={filteredByRegion}
        filteredByBedrooms={filteredByBedrooms} // Pass original properties
      />
      <div className="mt-3 text-black flex gap-2">
        {selectedRegions.map((region) => (
          <div
            key={region}
            className="border flex items-center gap-1 rounded-2xl px-3 py-1"
          >
            {region}
            <X
              onClick={() => deleteFilteredRegion(region)}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        ))}{" "}
        {bedrooms}
      </div>
      {loading ? (
        <div className="flex justify-center mt-40 items-center h-1/3">
          <div className="relative">
            <div className="w-20 h-20 rounded-full absolute border-8 border-solid border-gray-200"></div>

            <div className="w-20 h-20 rounded-full animate-spin absolute border-8 border-solid border-[#DF3014] border-t-transparent"></div>
          </div>
        </div>
      ) : (
        <>
          {properties.length < 1 ? (
            <p className="text-[#021526CC] mt-20 text-xl">
              აღნიშნული მონაცემებით განცხადება არ იძებნება
            </p>
          ) : (
            <PropertyList properties={properties} />
          )}
        </>
      )}
    </div>
  );
}
