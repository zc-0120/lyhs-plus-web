"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-center relative">
      <header
        className={`flex w-full p-5 px-6 bg-white/80 fixed top-0 z-10 backdrop-blur-lg justify-between items-center`}
      >
        <Link href={"/"}>
          <Image
            src={"/text-logo.svg"}
            width={70}
            height={100}
            alt="lyhs-plus-text-icon"
          />
        </Link>
        {/*
        <button className="bg-zinc-100 rounded-2xl p-2 flex items-center justify-center">
          <Menu strokeWidth={2.5} size={20} className="text-zinc-500"></Menu>
        </button>
        */}
      </header>
    </div>
  );
}
