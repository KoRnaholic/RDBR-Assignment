import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PropertyCard from "./PropertyCard";

export const revalidate = 0;
export default async function PropertyCarousel({ property }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-properties`
  );
  const { properties } = await res.json();

  const filteredData = properties.filter(
    (item) => item.city.region.name === property.city.region.name
  );

  const filteredWithoutCurrentProperty = filteredData.filter(
    (item) => item.id !== property.id
  );
  return (
    <section className="mt-14">
      <h2 className="text-[#021526] text-3xl font-semibold ">
        ბინები მსგავს ლოკაციაზე
      </h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mt-12 w-full max-w-[1700px] mx-auto"
        propertyLength={filteredWithoutCurrentProperty.length}
      >
        <CarouselContent className="">
          {filteredWithoutCurrentProperty.map((filterdProperty, index) => (
            <CarouselItem
              key={index}
              className="pl-5 md:basis-1/3 lg:basis-1/4"
            >
              <PropertyCard property={filterdProperty} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          propertyLength={filteredWithoutCurrentProperty.length}
        />
        <CarouselNext propertyLength={filteredWithoutCurrentProperty.length} />
      </Carousel>
    </section>
  );
}
