import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 pt-40 md:px-[50px] lg:pt-24 2xl:px-[100px]">
      <div className="absolute left-4 right-4 top-4 z-10 md:top-0">
        <h1 className="font-cormorant text-center text-5xl font-[400] uppercase tracking-[7px] text-[#FDB813] md:text-9xl md:tracking-[10.5px]">
          SCROLL OUR STORY{" "}
        </h1>
      </div>
      <div className="relative z-50 flex flex-col gap-5">
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="w-full lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-5 lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-16"
              />
              <Link
                href={""}
                target="_blank"
                className="text-center font-poppins text-lg font-[400] uppercase text-[#FDB813] lg:text-xl"
              >
                @alacatigrill_d
                <br />
                aventry{" "}
              </Link>
            </div>
            <div className="w-full lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
            <div className="w-full lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full items-center justify-center lg:w-[25%]">
              <Image
                src={"/images/home/follow/image5.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
            <div className="w-full lg:w-[50%]">
              {" "}
              <Image
                src={"/images/home/follow/image4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>

            <div className="flex w-full items-center justify-center lg:w-[25%]">
              <Image
                src={"/images/home/follow/image6.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
