"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#000] pb-10">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-t-full py-12 md:py-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-center font-cormorant text-5xl font-[400] uppercase tracking-[7px] text-[#FDB813] md:text-7xl md:tracking-[10.5px]">
              FROM OUR HEARTS
            </h1>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          {reviews && (
            <Carousel className="ml-6 mr-0 w-full md:ml-0">
              <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none border-[#611326] bg-[#611326] py-6 md:basis-1/4 md:py-12"
                  >
                    <div className="flex flex-col gap-6 bg-transparent px-6 pb-4">
                      <div className="flex w-full justify-center">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star
                              key={index}
                              className="text-[#DCB355]"
                            />
                          ),
                        )}
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="line-clamp-6 w-full max-w-[350px] text-center font-poppins text-sm font-[500] uppercase tracking-[2px] text-[#fff] md:px-4 lg:leading-[120%]">
                          {review.text.text}
                        </p>
                      </div>
                      <div>
                        <p className="line-clamp-6 w-full max-w-[350px] text-center font-poppins text-sm font-[500] uppercase tracking-[2px] text-[#fff] md:px-4 lg:leading-[120%]">
                          {review.authorAttribution.displayName}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#611326] text-[#611326] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#611326] text-[#611326] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
