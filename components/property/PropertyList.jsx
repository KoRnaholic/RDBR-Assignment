import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  return (
    <section className="mt-16 flex flex-wrap justify-center gap-6  gap-y-8">
      {[...Array(10)].map((_, index) => {
        return <PropertyCard />;
      })}
    </section>
  );
}
