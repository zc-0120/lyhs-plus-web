"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-center relative">
      <header
        className={`flex w-full p-3 px-6 bg-white/80 fixed top-0 z-10 backdrop-blur-lg justify-between items-center md:px-52 sm:px-12`}
      >
        <Link href={"/"}>
          <Image
            src={"/text-logo.svg"}
            width={70}
            height={100}
            alt="lyhs-plus-text-icon"
          />
        </Link>
        <Link
          href={"/"}
          className="bg-mainBlue text-white rounded-full text-sm font-medium p-2 px-3 flex items-center justify-center"
        >
          前往體驗
        </Link>
      </header>
    </div>
  );
}
