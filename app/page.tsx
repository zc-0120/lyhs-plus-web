'use client';
import Image from "next/image";
import Link from "next/link";
import { Dot } from "@/components/Dot";


export default function Home() {
    return (
        <main>
            <div className='m-4 p-2 mt-0 box-border bg-gray-100 rounded-2xl flex flex-col justify-center items-center overflow-hidden' style={{height: `calc(100dvh - 85px)`}}>
                <Dot gradient={false} className={'absolute w-11/12 z-0 h-5/6'} />
                <p>專為林園高中設計</p>
                <h1 className='text-5xl leading-normal font-bold text-center z-10'>連結校園，共創未來</h1>
                <Link href={'/join-beta'}
                      className='p-3 pl-5 pr-5 z-10 font-medium bg-black text-white rounded-full border-transparent border flex m-5 hover:bg-white hover:text-black hover:border-black transition-all'>搶先加入測試版</Link>
                <div className={'absolute bottom-10 text-gray-400'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={'none'} viewBox="0 0 26 8"
                         strokeWidth="2.5">
                        <path stroke="currentColor" strokeLinecap="round"
                              d="m1 1 11.553 5.776a1 1 0 0 0 .894 0L25 1"></path>
                    </svg>
                </div>
            </div>
        </main>
    );
}
