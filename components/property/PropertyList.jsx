import PropertyCard from "./PropertyCard";

export default async function PropertyList() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-properties`
  );
  const { properties } = await res.json();

  // console.log(properties);

  return (
    <section className="mt-16 flex flex-wrap justify-start gap-5  gap-y-8">
      {properties.map((property, index) => {
        return <PropertyCard property={property} key={index} />;
      })}
    </section>
  );
}
