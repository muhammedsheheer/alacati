import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Heart: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] pt-12 md:pt-14">
      <div className="absolute bottom-2 left-0 right-0 top-2 overflow-hidden">
        <p className="font-road_rage flex flex-row gap-4 text-center text-xl font-[400] uppercase tracking-[4px] text-[#445AA8] md:gap-10 md:text-4xl">
          <span>Smoothies</span> <span>pancakes</span> <span>toasts</span>{" "}
          <span>coffee</span> <span>smoothies</span> <span>pancakes</span>{" "}
          <span>toasts</span> <span>coffee</span> <span>Smoothies</span>{" "}
          <span>pancakes</span> <span>toasts</span>
        </p>
      </div>
      <div className="flex w-full flex-col gap-6 bg-[#BB4731] md:flex-row md:gap-0">
        <div className="w-full px-4 py-10 md:w-1/2 md:px-10 md:py-20">
          <Image
            src={"/images/home/about/image.png "}
            width={281}
            height={74}
            alt="logo"
            className="h-[300px] w-full md:h-[450px]"
          />
        </div>
        <div className="flex w-full flex-col gap-4 px-4 py-4 md:mt-14 md:w-1/2 md:gap-6 md:px-10 md:py-20">
          <h1 className="font-road_rage text-4xl font-[700] uppercase tracking-[6px] text-[#fff] md:text-5xl">
            THE HEART BEHIND THE PLATE
          </h1>
          <p className="font-playfair_display w-full max-w-[430px] text-sm font-[700] lowercase italic tracking-[6px] text-[#fff] md:text-base">
            Welcome to CAFE, where the coffee is hot, the vibes are cool, and
            the funk never stops! We’re not your average café—we’re a flavor
            factory, a groove station, and a caffeine-fueled creativity hub all
            rolled into one.
          </p>
          <div>
            <Link href={"/menu"}>
              <Button className="font-road_rage rounded-none border border-[#fff] bg-[#fff] px-6 py-5 text-xl font-[400] uppercase tracking-[3px] text-[#000] hover:bg-[#445AA8] hover:text-[#fff]">
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heart;
