"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#445AA8] px-4 pt-12 md:pt-20 lg:px-8">
      <div className="flex flex-col gap-4 md:gap-8">
        {/* first  div */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-14 md:px-32">
          {/* sub first  div */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-36">
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-8">
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/images/home/hero/logo.png"}
                    width={281}
                    height={74}
                    alt="logo"
                    className="w-28"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center gap-2 md:items-start md:pt-4">
                <h6 className="font-poppins text-sm font-[700] uppercase tracking-[1.96] text-[#fff]">
                  cONTACT
                </h6>
                <div className="flex flex-col items-center md:items-start">
                  <span>
                    <Link
                      className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]"
                      target="_blank"
                      href={""}
                    >
                      49 Allerton Rd, <br /> Liverpool L25
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]"
                      href={""}
                    >
                      01512451500{" "}
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]"
                      href={""}
                    >
                      moorishl@yahoo.com{" "}
                    </Link>
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 md:gap-4 md:pt-6">
                <Link href={""} target="_blank">
                  <Icons.instagram className="text-[#fff]" />
                </Link>
                <Link href={""} target="_blank">
                  <Icons.unknown className="text-[#fff]" />
                </Link>
                <Link href={""} target="_blank">
                  <Icons.google className="text-[#fff]" />
                </Link>
                <Link href={""} target="_blank">
                  <Icons.facebook className="text-[#fff]" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:mt-10 md:items-start md:gap-6">
              <Link
                href={"/"}
                className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]"
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]"
              >
                Menu
              </Link>

              <Link
                href={""}
                className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]"
              >
                Products
              </Link>
              <Link
                href={"/table-booking"}
                className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]"
              >
                Reservation
              </Link>
              <Link
                href={"/contact"}
                className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]"
              >
                Contact Us
              </Link>
            </div>{" "}
          </div>

          {/* sub second  div */}
          <div className="flex w-full flex-col items-center gap-2 md:w-[400px] md:items-start md:pt-4">
            <h6 className="font-poppins text-sm font-[700] uppercase tracking-[1.96] text-[#fff] md:pb-4">
              Opening Hours
            </h6>
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9] md:w-[75%]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]">
                  Monday - Thursday
                </span>
                <span className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]">
                  8 AM - 11 PM{" "}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9] md:w-[75%]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]">
                  Friday - Saturday{" "}
                </span>
                <span className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]">
                  9 AM - 11 PM{" "}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9] md:w-[75%]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]">
                  Sunday{" "}
                </span>
                <span className="font-poppins text-xs font-[700] uppercase tracking-[1.6px] text-[#fff]">
                  9 AM - 10 PM{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* second  div */}
        <div className="flex flex-col gap-4">
          <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />
          <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:items-start md:justify-between">
            <Link
              className="font-poppins text-xs font-[700] lowercase tracking-[1px] text-[#fff]"
              href={""}
              target="_blank"
            >
              Powerd by foodo
            </Link>
            <p className="font-poppins pb-6 text-xs font-[700] lowercase tracking-[1px] text-[#fff]">
              © 2024 antonietta ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
