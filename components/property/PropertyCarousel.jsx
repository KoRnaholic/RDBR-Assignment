import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PropertyCard from "./PropertyCard";
export default function PropertyCarousel() {
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
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-5 md:basis-1/3 lg:basis-1/4"
            >
              <PropertyCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
