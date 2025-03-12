"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-6 bg-[#141313] pb-12 pt-12 md:w-[65%] md:gap-12 md:pb-28 md:pt-24">
          <div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={188}
                height={56}
                alt="logo"
                className="w-44 md:w-60"
              />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <Link href={""}>
              <Icons.instagram className="text-[#fff]" />
            </Link>
            <Link href={""}>
              <Icons.facebook className="text-[#fff]" />
            </Link>
            <Link href={""}>
              <Icons.unknown className="text-[#fff]" />
            </Link>
            <Link href={""}>
              <Icons.google className="text-[#fff]" />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 md:mt-8 md:flex-row md:gap-40">
            <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
              <h6 className="font-cormorant text-center text-base font-[700] uppercase tracking-[3.96px] text-[#D3AF5E]">
                Address
              </h6>
              <div className="flex flex-col">
                <Link
                  className="font-cormorant text-center text-base font-[600] uppercase tracking-[3.96px] text-[#ECE6D6]"
                  href={""}
                >
                  68 High St, Daventry <br /> NN11 4HU, United <br /> Kingdom
                </Link>
                <Link
                  className="font-cormorant text-center text-base font-[600] uppercase tracking-[3.96px] text-[#ECE6D6]"
                  href={""}
                >
                  opentable.co.uk{" "}
                </Link>
                <Link
                  className="font-cormorant text-center text-base font-[600] uppercase tracking-[3.96px] text-[#ECE6D6]"
                  href={""}
                >
                  alacatigrill.co.uk{" "}
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
              <h6 className="font-cormorant text-center text-base font-[700] uppercase tracking-[3.96px] text-[#D3AF5E]">
                Hours of Operation{" "}
              </h6>
              <div className="flex flex-col">
                <span className="font-cormorant text-center text-base font-[600] uppercase tracking-[3.96px] text-[#ECE6D6]">
                  MON-Thur: 12pm-10pm, <br />
                  Fri & Sat: 4pm-11am, Sun: <br /> 12pm-10pm
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 bg-[#611326] px-4 pb-12 pt-12 md:w-[35%] md:pb-32 md:pt-28">
          <Link
            className="font-cormorant text-center text-xl font-[700] uppercase tracking-[7px] text-[#ECE6D6] hover:underline"
            href={"/about-us"}
          >
            About
          </Link>
          <Link
            className="font-cormorant text-center text-xl font-[700] uppercase tracking-[7px] text-[#ECE6D6] hover:underline"
            href={"/menu"}
          >
            menu
          </Link>
          <Link
            className="font-cormorant text-center text-xl font-[700] uppercase tracking-[7px] text-[#ECE6D6] hover:underline"
            href={""}
          >
            Gallery
          </Link>
          <Link
            className="font-cormorant text-center text-xl font-[700] uppercase tracking-[7px] text-[#ECE6D6] hover:underline"
            href={""}
          >
            Blog
          </Link>
          <Link
            className="font-cormorant text-center text-xl font-[700] uppercase tracking-[7px] text-[#ECE6D6] hover:underline"
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
