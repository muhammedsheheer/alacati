import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000]">
      <div className="flex flex-col md:flex-row">
        <div className="flex h-full w-full items-center justify-center bg-[url('/images/home/reserve/bg.png')] bg-cover bg-center bg-no-repeat md:w-1/2">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-center font-cormorant text-4xl font-[400] uppercase tracking-[7px] text-[#FDB813] md:text-6xl md:tracking-[10.5px]">
                  Reserve <br />
                  Your Table
                </h1>
                <p className="w-full max-w-[450px] text-center font-inter text-sm font-[500] text-[rgba(255,255,255,0.60)]">
                  Lorem ipsum dolor sit amet, consectet adipisicing eli sed do
                  eiu sm od tempor incididunt ut abore et dolore mag aliqua. Ut
                  enim ad minm eniam quis nostrud.
                </p>
              </div>
            </div>{" "}
            <Image
              src={"/images/home/reserve/frame.png"}
              width={160}
              height={160}
              alt="logo"
              className="h-full w-full p-4 md:p-16"
            />
          </div>
        </div>
        <div className="relative h-full w-full bg-[#000] md:w-1/2">
          <div className="absolute -left-4 -top-14 hidden md:block">
            <Image
              src={"/images/home/reserve/left.png"}
              width={160}
              height={160}
              alt="logo"
              className="h-[600px] w-full"
            />
          </div>
          <div className="absolute -bottom-[15%] -right-14 z-40 hidden md:block">
            <Image
              src={"/images/home/reserve/left.png"}
              width={160}
              height={160}
              alt="logo"
              className="h-[600px] w-full"
            />
          </div>
          <div className="relative z-50">
            <Image
              src={"/images/home/reserve/image1.png"}
              width={160}
              height={160}
              alt="logo"
              className="z-50 h-auto w-full p-4 md:p-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
