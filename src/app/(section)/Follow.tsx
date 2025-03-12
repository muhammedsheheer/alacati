import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#445AA8] pt-12 lg:pt-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between md:px-20">
          <h1 className="font-road_rage text-4xl font-[400] uppercase tracking-[7px] text-[#fff] md:text-5xl md:tracking-[10.5px]">
            SCROLL US{" "}
          </h1>
          <Link href={""} target="_blank">
            <span className="font-road_rage rounded-full bg-[#fff] px-6 py-4 text-center text-2xl font-[400] uppercase tracking-[6px] text-[#323232]">
              @bakerybakery
            </span>
          </Link>
        </div>
        <div className="flex w-full flex-col gap-4 px-6 md:flex-row md:gap-3 md:px-0">
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/image1.png"}
              width={281}
              height={550}
              alt="image2"
              className="h-[300px] w-full md:h-[400px]"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/image2.png"}
              width={281}
              height={550}
              alt="image2"
              className="h-[300px] w-full md:h-[400px]"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/image3.png"}
              width={281}
              height={550}
              alt="image2"
              className="h-[300px] w-full md:h-[400px]"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/image4.png"}
              width={281}
              height={550}
              alt="image2"
              className="h-[300px] w-full md:h-[400px]"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/image5.png"}
              width={281}
              height={550}
              alt="image2"
              className="h-[300px] w-full md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
