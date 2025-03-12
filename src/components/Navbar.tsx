"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 h-[10vh] w-full pt-4 md:top-10`,
        pathname === "/" ? "bg-transparent" : "top-0 bg-transparent md:top-0",
      )}
    >
      {/*big screen */}
      <div className="ml-20 hidden px-4 md:block md:px-12">
        <div className="flex flex-row items-center justify-between">
          <div></div>
          <div className="flex flex-row items-center justify-center gap-8">
            <Link
              href={"/"}
              className={
                pathname === "/"
                  ? "font-road_rage text-xl font-[400] uppercase tracking-[2.8px] text-[#fff]"
                  : "font-road_rage text-xl font-[400] uppercase tracking-[2.8px] text-[#fff]"
              }
            >
              Home
            </Link>
            <Link
              href={"/menu"}
              className={
                pathname === "/"
                  ? "font-road_rage text-xl font-[400] uppercase tracking-[2.8px] text-[#fff]"
                  : "font-road_rage text-xl font-[400] uppercase tracking-[2.8px] text-[#fff]"
              }
            >
              Menu
            </Link>
            <Link
              href={"/about-us"}
              className={
                pathname === "/"
                  ? "font-road_rage text-xl font-[400] uppercase tracking-[2.8px] text-[#fff]"
                  : "font-road_rage text-xl font-[400] uppercase tracking-[2.8px] text-[#fff]"
              }
            >
              About
            </Link>

            <Link
              href={"/contact"}
              className={
                pathname === "/"
                  ? "font-road_rage text-xl font-[400] uppercase tracking-[2.8px] text-[#fff]"
                  : "font-road_rage text-xl font-[400] uppercase tracking-[2.8px] text-[#fff]"
              }
            >
              Contact Us
            </Link>
            <Link
              href={""}
              className={
                pathname === "/"
                  ? "font-road_rage text-xl font-[400] uppercase tracking-[2.8px] text-[#fff]"
                  : "font-road_rage text-xl font-[400] uppercase tracking-[2.8px] text-[#fff]"
              }
            >
              Food & Drinks
            </Link>
          </div>
          <div className="mr-6 flex items-end justify-end">
            <Link href={"/table-booking"}>
              <Button
                className={
                  pathname === "/"
                    ? "font-road_rage rounded-none border border-[#fff] bg-[#fff] px-7 text-xl font-[400] uppercase tracking-[3px] text-[#000] hover:bg-[#445AA8] hover:text-[#fff]"
                    : "font-road_rage rounded-none border border-[#fff] bg-transparent px-7 text-xl font-[400] uppercase tracking-[3px] text-[#fff] hover:bg-[#445AA8] hover:text-[#fff]"
                }
              >
                Book
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-24"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate text-[#C0A58A]">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
