import Image from "next/image";
import React from "react";

const Explore: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] py-12 md:py-24">
      <div className="absolute -top-14 left-0 hidden md:block">
        <Image
          src={"/images/home/explore/left.png"}
          width={160}
          height={160}
          alt="logo"
          className="h-[600px] w-full"
        />
      </div>
      <div className="absolute -right-14 bottom-0 hidden md:block">
        <Image
          src={"/images/home/explore/left.png"}
          width={160}
          height={160}
          alt="logo"
          className="h-[600px] w-full"
        />
      </div>
      <div className="absolute inset-0 top-10 z-20 flex justify-center md:top-16">
        <h3 className="font-cormorant text-center text-4xl font-[500] uppercase text-[#fff] md:text-7xl">
          WE DO OUR BEST TO <br />
          PROVIDE PURE AND <br />
          SIMPLE FOOD
        </h3>
      </div>
      <div className="relative z-50 flex flex-col items-center justify-center gap-8 px-2 pt-32 md:flex-row md:px-[50px] 2xl:px-[100px]">
        <div className="flex w-full flex-col items-center justify-center gap-4 px-6 md:w-1/3">
          <Image
            src={"/images/home/explore/image1.png"}
            width={160}
            height={160}
            alt="logo"
            className="h-[400px] w-full md:h-[600px]"
          />
          <h6 className="font-cormorant text-center text-lg font-[500] uppercase text-[#fff] md:text-xl">
            KOFTE
          </h6>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 px-6 md:mb-40 md:w-1/3">
          <Image
            src={"/images/home/explore/image2.png"}
            width={160}
            height={160}
            alt="logo"
            className="h-[400px] w-full md:h-[600px]"
          />
          <h6 className="font-cormorant text-center text-lg font-[500] uppercase text-[#fff] md:text-xl">
            KEBABS
          </h6>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 px-6 md:w-1/3">
          <Image
            src={"/images/home/explore/image3.png"}
            width={160}
            height={160}
            alt="logo"
            className="h-[400px] w-full md:h-[600px]"
          />
          <h6 className="font-cormorant text-center text-lg font-[500] uppercase text-[#fff] md:text-xl">
            DRINKS
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Explore;
