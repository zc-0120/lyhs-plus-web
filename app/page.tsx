'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div className='p-6 flex flex-col justify-center items-center' style={{height: `calc(100dvh - 65px)`}}>
                <h1 className='text-5xl leading-normal font-bold text-center'>連結校園，共創未來</h1>
                <Link href={'/join-beta'}
                      className='p-4 bg-black text-white rounded-full border-transparent border flex m-5 hover:bg-white hover:text-black hover:border-black transition-all'>搶先加入測試版</Link>
            </div>
        </main>
    );
}
