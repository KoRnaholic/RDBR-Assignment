import Filter from "@/components/filter/Filter";

import PropertyList from "@/components/property/PropertyList";

export default async function Home() {
  const res = await fetch(`${process.env.BASE_URL}/api/get-agents`);
  const agents = await res.json();

  console.log(agents);
  return (
    <div className="px-36 pt-20">
      <Filter />

      <PropertyList />
    </div>
  );
}
