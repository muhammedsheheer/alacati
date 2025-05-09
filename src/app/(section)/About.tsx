import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#611326] px-4 py-12 md:py-28">
      <div className="absolute left-0 top-[25%] z-10 hidden md:block">
        <Image
          src="/images/home/about/left.png"
          width={188}
          height={56}
          alt="logo"
          className="h-[900px] w-full"
        />
      </div>
      <div className="absolute right-0 top-[5%] z-10 hidden md:block">
        <Image
          src="/images/home/about/right.png"
          width={188}
          height={56}
          alt="logo"
          className="h-[900px] w-full"
        />
      </div>
      <div className="absolute inset-0 top-10 z-50 flex justify-center md:top-20">
        <h3 className="text-center font-cormorant text-4xl font-[500] uppercase text-[#fff] md:text-8xl">
          We do our best to <br /> serve pure and simple <br /> Turkish cuisine.
        </h3>
      </div>
      <div className="relative z-50 flex flex-col items-center justify-center gap-6 pt-4 md:gap-8 md:pt-32">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/home/about/image.png"
            width={188}
            height={56}
            alt="logo"
            className="z-40 h-[500px] w-full md:h-[1000px]"
          />
          <p className="w-full max-w-[700px] text-center font-cormorant text-base font-[400] uppercase text-[#fff] md:text-lg">
            Alacati Grill is situated in the lovely Market Town of Daventry. Our
            restaurant is family run with Mahmut (Ata) Raydemir and his lovely
            wife, Pammy Raydemir at the helm and an amazing support team working
            together to bring you a taste of Turkey. We strive to serve you the
            very best quality grill meat. Our authentic Turkish menu has been
            designed with pride to offer the best selection of Turkish Cuisine.
            We serve authentic Turkish Cuisine to Takeaway to Daventry and the
            surrounding areas
          </p>
        </div>
        <div>
          <Button className="z-50 rounded-none bg-transparent px-6 py-6 text-center font-cormorant text-sm font-[700] uppercase tracking-[4.5px] text-[#fff] ring-1 ring-[#FBF1E3] hover:bg-[#fff] hover:text-[#000]">
            <Link href={"/table-booking"}>Book Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
