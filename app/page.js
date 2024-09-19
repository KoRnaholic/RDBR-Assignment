"use client";
import Filter from "@/components/filter/Filter";
import PropertyList from "@/components/property/PropertyList";
import { useEffect, useState } from "react";

export default function Home() {
  const [properties, setProperties] = useState(null);
  const [originalProperties, setOriginalProperties] = useState(null); // Keep original properties

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-properties`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties);
        setOriginalProperties(data.properties); // Store the original properties list
      });
  }, []);

  return (
    <div className="px-36 pt-20">
      <Filter
        properties={properties}
        setProperties={setProperties}
        originalProperties={originalProperties} // Pass original properties
      />

      <PropertyList properties={properties} />
    </div>
  );
}
