"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#611326] py-12">
      <div className="absolute right-[10%] top-[25%] hidden md:block">
        <p className="font-manrope w-full max-w-[250px] text-center text-base font-[300] tracking-[0.72px] text-[#fff] md:text-start">
          Our authentic Turkish menu has been designed with pride to offer the
          best selection of Turkish Cuisine.{" "}
        </p>
      </div>
      <div className="absolute left-[20%] top-[12%] hidden md:block">
        <span className="font-cormorant text-center text-5xl font-[400] uppercase text-[#FDB813] md:text-start md:text-6xl">
          ALACATI <br /> SPECIAL{" "}
        </span>
      </div>
      <div className="absolute left-[25%] top-[2%] hidden md:block">
        <Button className="bg-[#FDB813] text-[#000] hover:bg-[#ecb128]">
          <Link href={"/table-booking"}>Book Now</Link>
        </Button>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex w-full flex-col items-center justify-center gap-4 px-2 md:hidden">
              <span className="font-cormorant text-center text-5xl font-[400] uppercase text-[#FDB813] md:text-start md:text-6xl">
                ALACATI SPECIAL{" "}
              </span>
              <p className="font-manrope w-full max-w-[450px] text-center text-base font-[300] tracking-[0.72px] text-[#fff] md:text-start">
                Our authentic Turkish menu has been designed with pride to offer
                the best selection of Turkish Cuisine.{" "}
              </p>
              <Button className="bg-[#FDB813] text-[#000] hover:bg-[#ecb128]">
                <Link href={"/table-booking"}>Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
