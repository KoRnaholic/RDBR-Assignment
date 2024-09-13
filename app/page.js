import Filter from "@/components/filter/Filter";
import FilterRegion from "@/components/filter/FilterRegion";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyList from "@/components/property/PropertyList";

export default function Home() {
  return (
    <div className="px-36 pt-20">
      <Filter />

      <PropertyList />
    </div>
  );
}
