import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#445AA8] py-12 md:py-28">
      <div className="absolute right-[33%] top-[15%] hidden md:block">
        <Image
          src={"/images/home/about/first.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-[380px] w-[400px]"
        />
      </div>
      <div className="absolute right-[15%] top-[20%] z-10 hidden md:block">
        <Image
          src={"/images/home/about/cup.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-[400px] w-[400px]"
        />
      </div>
      <div className="absolute right-0 top-[30%] hidden md:block">
        <Image
          src={"/images/home/about/second.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-[350px] w-[350px]"
        />
      </div>
      <div className="flex w-full flex-col gap-2 py-4 pl-4 pr-4 md:w-[40%] md:py-12 md:pl-28 md:pr-0">
        <h1 className="font-road_rage text-5xl font-[400] uppercase tracking-[7px] text-[#fff] md:text-6xl md:tracking-[10.5px]">
          ABOUT US
        </h1>
        <p className="font-luckiest_guy w-full max-w-[400px] text-sm font-[400] lowercase tracking-[6px] text-[#fff] md:px-0 md:text-base">
          Welcome to CAFE, where the coffee is hot, the vibes are cool, and the
          funk never stops! We’re not your average café—we’re a flavor factory,
          a groove station, and a caffeine-fueled creativity hub all rolled into
          one.
        </p>
        <div className="relative h-[400px] py-28 md:hidden">
          <div className="absolute left-0 top-8">
            <Image
              src={"/images/home/about/first.png"}
              width={281}
              height={74}
              alt="logo"
              className="h-[200px] w-full"
            />
          </div>
          <div className="absolute left-[25%] top-[20%] z-10">
            <Image
              src={"/images/home/about/cup.png"}
              width={281}
              height={74}
              alt="logo"
              className="h-[200px] w-full"
            />
          </div>
          <div className="absolute -right-8 bottom-8">
            <Image
              src={"/images/home/about/second.png"}
              width={281}
              height={74}
              alt="logo"
              className="h-[200px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
