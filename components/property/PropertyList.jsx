import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties }) {
  // console.log(properties);

  return (
    <section className="mt-16 flex flex-wrap justify-start gap-5  gap-y-8">
      {properties?.map((property, index) => {
        return <PropertyCard property={property} key={index} />;
      })}
    </section>
  );
}
