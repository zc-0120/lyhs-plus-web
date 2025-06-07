"use client";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement>(null);

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
            start: "top 90%",
            end: "top center",
            scrub: true,
          },
        },
      );

      // Second text animation with different effect
      gsap.fromTo(
        ".text-2",
        {
          x: -100,
          opacity: 0,
          rotation: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ".text-2",
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".image",
        {
          y: 0,
          opacity: 20,
          scale: 0.3,
        },
        {
          y: 100,
          opacity: 100,
          scale: 1.5,
          duration: 2,
          scrollTrigger: {
            trigger: ".image",
            start: "top 90%",
            end: "top 10%",
            scrub: true,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <main className="pt-14" ref={container}>
      <div className="p-5 flex flex-col gap-2">
        <h1 className="text-5xl font-custom">Next Generation</h1>
        <p className="font-custom text-lg">下一代校園資訊整合平台</p>
      </div>
      <div className="border-y border-zinc-200 flex mt-2">
        <Link
          href={"/"}
          className="p-3 px-5 bg-mainBlue text-white min-w-28 flex items-center justify-center"
        >
          了解更多
        </Link>
        <div className="grow whitespace-nowrap overflow-x-hidden flex items-center pl-5">
          <h1 className="text-2xl font-light">#A NEW ERA IS COMING</h1>
        </div>
      </div>
      <div className="image flex items-center justify-center relative">
        <Image
          src={"/image/shots_home.png"}
          width={500}
          height={100}
          alt="lyps-screenShot"
        />
        <div className="w-full h-16 absolute bottom-0 bg-gradient-to-b from-white/0 to-white"></div>
      </div>
      <div className="p-5">
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-1 text-5xl font-bold text-center leading-normal">
            全新校園資訊整合平台
          </h1>
        </div>
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-2 text-4xl font-bold text-center text-mainBlue">
            創造新時代
          </h1>
        </div>
        <div className="bg-zinc-100 p-5 flex flex-col gap-2 rounded-3xl justify-center items-start">
          <p className="text-xl font-medium">測試版現在已正式發佈</p>
          <Link
            href={"/"}
            className="bg-mainBlue text-white p-2 px-3 font-medium rounded-xl"
          >
            前往使用
          </Link>
        </div>
      </div>
    </main>
  );
}
