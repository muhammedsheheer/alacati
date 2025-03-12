import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#ECB0CC] py-10">
      <div className="absolute left-4 right-4 top-6 hidden md:left-[22%] md:top-20 md:block">
        <div className="relative flex flex-col items-center justify-center gap-4 border border-[#fff] bg-[#fff] px-8 py-12 md:flex-row md:gap-10">
          <div className="absolute -left-8 bottom-0 top-0 hidden md:block">
            <Image
              src={"/images/home/reserve/side.png"}
              width={281}
              height={550}
              alt="image2"
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 md:flex-row">
        <div className="flex w-full flex-row justify-center gap-4 pl-4 pr-4 md:w-[15%] md:flex-col md:gap-0 md:pl-20 md:pr-0">
          <h1 className="font-road_rage text-7xl font-[400] uppercase text-[#fff] md:text-[160px]">
            M
          </h1>
          <h1 className="font-road_rage text-7xl font-[400] uppercase text-[#fff] md:text-[160px]">
            E
          </h1>
          <h1 className="font-road_rage text-7xl font-[400] uppercase text-[#fff] md:text-[160px]">
            n{" "}
          </h1>
          <h1 className="font-road_rage text-7xl font-[400] uppercase text-[#fff] md:text-[160px]">
            u{" "}
          </h1>
        </div>

        <div className="flex flex-col gap-4 border border-[#fff] bg-[#fff] px-8 py-12 md:hidden md:flex-row md:gap-10">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row">
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  Beef burger meal
                </h6>
                <div className="w-[300px] border-b-[1px] border-b-[#323232]" />
                <h6 className="font-poppins text-base font-[700] uppercase tracking-[2px] text-[#323232]">
                  €32{" "}
                </h6>
              </div>
              <div>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)]">
                  Classic greek salad, barrel aged feta cheese, bread
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden w-full flex-col gap-4 md:flex md:w-[75%] md:gap-8">
          <p className="font-road_rage flex flex-row gap-4 text-center text-4xl font-[400] uppercase tracking-[4px] text-[#BD4A35] md:gap-10 md:text-6xl">
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
            <span>SANDWICHES</span> <span>COOKIES</span>
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
          </p>
          <p className="font-road_rage flex flex-row gap-4 text-center text-4xl font-[400] uppercase tracking-[4px] text-[#BD4A35] md:gap-10 md:text-6xl">
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
            <span>SANDWICHES</span> <span>COOKIES</span>
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
          </p>
          <p className="font-road_rage flex flex-row gap-4 text-center text-4xl font-[400] uppercase tracking-[4px] text-[#BD4A35] md:gap-10 md:text-6xl">
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
            <span>SANDWICHES</span> <span>COOKIES</span>
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
          </p>
          <p className="font-road_rage flex flex-row gap-4 text-center text-4xl font-[400] uppercase tracking-[4px] text-[#BD4A35] md:gap-10 md:text-6xl">
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
            <span>SANDWICHES</span> <span>COOKIES</span>
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
          </p>
          <p className="font-road_rage flex flex-row gap-4 text-center text-4xl font-[400] uppercase tracking-[4px] text-[#BD4A35] md:gap-10 md:text-6xl">
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
            <span>SANDWICHES</span> <span>COOKIES</span>
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
          </p>
          <p className="font-road_rage flex flex-row gap-4 text-center text-4xl font-[400] uppercase tracking-[4px] text-[#BD4A35] md:gap-10 md:text-6xl">
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
            <span>SANDWICHES</span> <span>COOKIES</span>
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
          </p>
          <p className="font-road_rage flex flex-row gap-4 text-center text-4xl font-[400] uppercase tracking-[4px] text-[#BD4A35] md:gap-10 md:text-6xl">
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
            <span>SANDWICHES</span> <span>COOKIES</span>
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
          </p>
          <p className="font-road_rage flex flex-row gap-4 text-center text-4xl font-[400] uppercase tracking-[4px] text-[#BD4A35] md:gap-10 md:text-6xl">
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
            <span>SANDWICHES</span> <span>COOKIES</span>
            <span>BURGER</span> <span>toasts</span> <span>CUPCAKES</span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
