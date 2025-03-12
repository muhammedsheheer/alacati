import Image from "next/image";
import React from "react";

const Explore: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#445AA8] px-4 pb-12 pt-12 md:px-[60px] md:pt-20 2xl:px-[100px]">
      <div className="flex w-full flex-col gap-6 md:gap-12">
        <h1 className="font-road_rage text-center text-4xl font-[700] uppercase tracking-[6px] text-[#fff] md:text-5xl">
          EXPLORE CAFE{" "}
        </h1>
        <div className="flex w-full flex-col gap-6 md:flex-row md:gap-8">
          <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[33%]">
            <Image
              src={"/images/home/explore/image1.png "}
              width={281}
              height={74}
              alt="logo"
              className="h-[300px] w-full md:h-[450px]"
            />
            <h5 className="font-poppins text-center text-lg font-[700] uppercase tracking-[2.8px] text-[#fff] md:text-xl">
              breakfast
            </h5>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[33%]">
            <Image
              src={"/images/home/explore/image2.png "}
              width={281}
              height={74}
              alt="logo"
              className="h-[300px] w-full md:h-[450px]"
            />
            <h5 className="font-poppins text-center text-lg font-[700] uppercase tracking-[2.8px] text-[#fff] md:text-xl">
              BAKED
            </h5>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[33%]">
            <Image
              src={"/images/home/explore/image3.png "}
              width={281}
              height={74}
              alt="logo"
              className="h-[300px] w-full md:h-[450px]"
            />
            <h5 className="font-poppins text-center text-lg font-[700] uppercase tracking-[2.8px] text-[#fff] md:text-xl">
              Drinks
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
