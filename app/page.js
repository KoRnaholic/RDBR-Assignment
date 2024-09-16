import Filter from "@/components/filter/Filter";

import PropertyList from "@/components/property/PropertyList";
export const revalidate = 0;
export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-agents`);
  const agents = await res.json();

  console.log(agents);
  return (
    <div className="px-36 pt-20">
      <Filter />

      <PropertyList />
    </div>
  );
}
