"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        position,
        "z-50 flex h-[12vh] w-full flex-col items-center bg-transparent p-4 transition-all duration-0 ease-in-out",
        pathname === "/" ? "top-0 md:top-10" : "top-0",
      )}
    >
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-2">
        <div
          className={cn(
            "flex h-full w-full items-center justify-between md:justify-center",
            pathname !== "/" && "items-center",
          )}
        >
          <Link className="w-40 md:hidden" href="/">
            <Image src="/images/logo.png" width={188} height={56} alt="logo" />
          </Link>
          <div className="hidden flex-row items-center justify-center gap-[3.48rem] md:flex">
            <Button
              asChild
              variant="link"
              className="font-manrope px-0 text-center text-sm font-[600] uppercase tracking-[0.96px] text-[#fff]"
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="font-manrope px-0 text-center text-sm font-[600] uppercase tracking-[0.96px] text-[#fff]"
            >
              <Link href="/menu">Menu</Link>
            </Button>
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={188}
                height={56}
                alt="logo"
                className="w-60"
              />
            </Link>
            <Button
              asChild
              variant="link"
              className="font-manrope px-0 text-center text-sm font-[600] uppercase tracking-[0.96px] text-[#fff]"
            >
              <Link href="/about-us">About</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="font-manrope px-0 text-center text-sm font-[600] uppercase tracking-[0.96px] text-[#fff]"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
            >
              <span className="sr-only">Menu</span>
              <EqualizerIcon />
            </Button>
          </Sidebar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
