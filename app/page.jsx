"use client";
import Filter from "@/components/filter/Filter";
import PropertyList from "@/components/property/PropertyList";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [properties, setProperties] = useState(null);
  const [originalProperties, setOriginalProperties] = useState(null); // Keep original properties
  const [selectedRegions, setSelectedRegions] = useState([]);

  const [loading, setLoading] = useState(true);
  const [bedrooms, setBedrooms] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");

  console.log(selectedRegions);

  const showClear = bedrooms || minArea || minPrice;

  const filterState = {
    bedroomsState: {
      bedrooms,
      setBedrooms,
    },
    regionsState: {
      selectedRegions,
      setSelectedRegions,
    },
    priceState: {
      minPrice,
      setMinPrice,
      maxPrice,
      setMaxPrice,
    },
    areaState: {
      minArea,
      setMinArea,
      maxArea,
      setMaxArea,
    },
  };

  const filteredByRegion = originalProperties?.filter((property) =>
    selectedRegions.includes(property.city.region.name)
  );

  const filteredByBedrooms = originalProperties?.filter(
    (property) => property.bedrooms === parseInt(bedrooms, 10)
  );
  const filterByPrice = originalProperties?.filter((property) => {
    const propertyPrice = parseInt(property.price, 10);
    const min = parseInt(minPrice, 10);
    const max = parseInt(maxPrice, 10);

    return (
      (min ? propertyPrice >= min : true) && (max ? propertyPrice <= max : true)
    );
  });

  const filterByArea = originalProperties?.filter((property) => {
    const propertyArea = parseInt(property.area, 10); // Assuming property has an 'area' field
    const min = parseInt(minArea, 10);
    const max = parseInt(maxArea, 10);

    return (
      (min ? propertyArea >= min : true) && (max ? propertyArea <= max : true)
    );
  });

  console.log(filterByPrice);

  const handleClear = () => {
    setBedrooms("");
    setSelectedRegions([]);
    setMinArea("");
    setMaxArea("");
    setMinPrice("");
    setMaxPrice("");
  };

  const deleteFilteredRegion = (region) => {
    const newArray = selectedRegions.filter((item) => item !== region);

    setSelectedRegions(newArray);
  };

  const deleteFilteredBedroom = () => {
    setBedrooms("");

    // Reapply the region filter only
    let filteredProperties = originalProperties;

    if (selectedRegions.length > 0) {
      filteredProperties = filteredProperties.filter((property) =>
        selectedRegions.includes(property.city.region.name)
      );
    }

    setProperties(filteredProperties); // Update properties after removing the bedroom filter
  };

  const deleteFilteredPrice = () => {
    setMinPrice("");
    setMaxPrice("");
  };
  const deleteFilteredArea = () => {
    setMinArea("");
    setMaxArea("");
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

  useEffect(() => {
    if (selectedRegions.length === 0) {
      // If no regions are selected, show all properties
      setProperties(originalProperties);
    } else {
      // Filter the original properties based on the selected regions
      const filteredProperties = originalProperties?.filter((property) =>
        selectedRegions.includes(property.city.region.name)
      );
      setProperties(filteredProperties);
    }
  }, [selectedRegions, originalProperties]);

  return (
    <div className="px-36 pt-20">
      <Filter
        filterState={filterState}
        properties={properties}
        setProperties={setProperties}
        originalProperties={originalProperties}
        filteredByRegion={filteredByRegion}
        filteredByBedrooms={filteredByBedrooms}
        filterByPrice={filterByPrice}
        filterByArea={filterByArea} // Pass original properties
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
        ))}
        {minArea && maxArea && (
          <div className="border flex items-center gap-1 rounded-2xl px-3 py-1">
            {minArea}მ2 - {maxArea}მ2
            <X
              onClick={deleteFilteredArea}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        )}
        {minPrice && maxPrice && (
          <div className="border flex items-center gap-1 rounded-2xl px-3 py-1">
            {minPrice}ლ - {maxPrice}ლ
            <X
              onClick={deleteFilteredPrice}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        )}
        {bedrooms && (
          <div className="border flex items-center gap-1 rounded-2xl px-3 py-1">
            {bedrooms}
            <X
              onClick={deleteFilteredBedroom}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        )}
        {showClear && (
          <div
            onClick={handleClear}
            className="text-[#021526] cursor-pointer flex items-center font-semibold"
          >
            გასუფთავება
          </div>
        )}
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
