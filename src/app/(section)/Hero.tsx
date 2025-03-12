"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

const Hero = ({}) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".head-container", 1.5, {
      y: 50,
      opacity: 1,
      ease: "power4.out",
    })
      .from(".head-hero", 1, {
        x: 160,
        opacity: 0,
        delay: -0.5,
      })
      .from(".hero-button", 1, {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: -0.5,
      });
  }, []);
  return (
    <section
      id="hero"
      className="flex h-screen w-full items-center justify-center"
    >
      <div className="relative flex h-screen w-full items-center justify-center bg-black">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="/video/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="z-40 flex h-full w-full items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-7">
            <div>
              <h1
                className="font-cormorant text-center text-5xl font-[500] uppercase md:text-9xl md:tracking-[-4px]"
                style={{
                  background:
                    "linear-gradient(180deg, #FDB813  0%, #32302D  100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ALCATI GRILL
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <Link href="/menu">
                <Button className="text-#000 font-cormorant flex items-center justify-center gap-3 rounded-none bg-[#CA930F] px-7 py-7 text-center text-base font-[700] uppercase tracking-[4px] hover:bg-[#ecb128]">
                  VIEW MENU{" "}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
