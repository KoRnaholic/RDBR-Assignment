import Filter from "@/components/filter/Filter";
import FilterRegion from "@/components/filter/FilterRegion";
import PropertyCard from "@/components/property/PropertyCard";

export default function Home() {
  return (
    <div className="px-40 pt-20">
      <Filter />

      <PropertyCard />
    </div>
  );
}
