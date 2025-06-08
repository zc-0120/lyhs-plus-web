"use client";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useEffect, useState } from "react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
  }, []);

  useGSAP(
    () => {
      // First text animation
      gsap.fromTo(
        ".text-1",
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ".text-1",
            start: "top 50%",
            end: "top 10%",
            scrub: true,
          },
        },
      );

      // Second text animation with different effect
      gsap.fromTo(
        ".text-2",
        {
          y: -100,
          opacity: 0,
          scale: 0.5,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ".text-2",
            start: "top 30%",
            end: "top 0%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".image",
        {
          y: 0,
          opacity: 20,
          scale: isMobile ? 1 : 1,
        },
        {
          y: 100,
          opacity: 100,
          scale: isMobile ? 1.5 : 2,
          duration: 2,
          scrollTrigger: {
            trigger: ".image",
            start: "top 40%",
            end: "top 10%",
            scrub: true,
          },
        },
      );
    },
    { scope: container, dependencies: [isMobile] },
  );

  return (
    <main className="pt-14 transition-all overflow-hidden" ref={container}>
      <div className="p-5 flex flex-col gap-2 sm:gap-5 sm:p-10 md:px-52 sm:px-12">
        <h1 className="text-5xl sm:text-8xl font-custom">Next Generation</h1>
        <p className="font-custom text-lg sm:text-3xl">
          下一代校園資訊整合平台
        </p>
      </div>
      <div className="border border-zinc-200 flex mt-2 sm:rounded-xl overflow-hidden md:mx-52 sm:mx-12">
        <Link
          href={"/"}
          className="p-3 px-5 bg-mainBlue text-white min-w-28 sm:min-w-32 flex items-center justify-center sm:text-xl"
        >
          了解更多
        </Link>
        <div className="grow whitespace-nowrap overflow-x-hidden flex items-center pl-5 gap-5 bg-zinc-50">
          <p className="text-2xl font-light">#A NEW ERA IS COMING</p>
          <p className="text-2xl font-light">#A NEW ERA IS COMING</p>
          <p className="text-2xl font-light">#A NEW ERA IS COMING</p>
          <p className="text-2xl font-light">#A NEW ERA IS COMING</p>
          <p className="text-2xl font-light">#A NEW ERA IS COMING</p>
          <p className="text-2xl font-light">#A NEW ERA IS COMING</p>
          <p className="text-2xl font-light">#A NEW ERA IS COMING</p>
        </div>
      </div>
      <div className="image flex items-center justify-center relative mt-5">
        <Image
          src={`/image/shots_${isMobile ? "home" : "desktop"}.png`}
          width={500}
          height={100}
          alt="lyps-screenShot"
        />
        <div className="w-full h-16 absolute -bottom-1 bg-gradient-to-b from-white/0 to-white"></div>
      </div>
      <div className="p-5">
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-1 text-5xl sm:text-8xl font-bold text-center leading-normal bg-gradient-to-b from-zinc-800 to-zinc-400 bg-clip-text text-transparent">
            全新校園資訊整合平台
          </h1>
        </div>
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-2 text-5xl sm:text-8xl font-bold text-center bg-gradient-to-r from-orange-300 to-purple-300 bg-clip-text text-transparent">
            專為林園高中打造
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="px-3 w-full md:px-12">
            <div className="bg-zinc-100 p-5 flex max-sm:flex-col gap-2 rounded-3xl md:rounded-[30px] max-sm:justify-center max-sm:items-start justify-between items-center w-full">
              <p className="text-xl font-medium">測試版現在已正式發佈</p>
              <Link
                href={"https://app.lyhsca.org"}
                target="_blank"
                className="bg-mainBlue text-white p-2 px-3 font-medium rounded-xl"
              >
                前往使用
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
