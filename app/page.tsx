'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 500) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={`w-full flex flex-col ${menuOpen && 'overflow-hidden'}`}>
            <header className='p-3 flex flex-row bg-white/85 items-center sticky'>
                <Image src='/text-logo.svg' width={70} height={100} alt='lyhs-plus-text-icon'/>
                {isMobile ?
                    <>
                        <button aria-label="Open menu" className="flex flex-col border border-gray-300 rounded-full justify-center items-center h-8 w-8 ml-auto m-0 hover:bg-gray-200" data-expanded="false" onClick={() => {
                            setMenuOpen(prevState => !prevState);
                        }}>
                            <div className={`bg-gray-500 h-1.5px w-4 m-1 ${menuOpen && 'rotate-45'} absolute transition-all`} data-position="top"></div>
                            <div className={`bg-gray-500 h-1.5px w-4 m-1 ${menuOpen && '-rotate-45 absolute'} transition-all`} data-position="bottom"></div>
                        </button>
                    </>
                    :
                    <>
                        <ul className='list-none p-0 ml-auto flex flex-row'>
                            <li className='m-2 hover:border-b border-b-black'><Link href={'/'}>總覽</Link></li>
                            <li className='m-2 hover:border-b border-b-black'><Link href={'/join-beta'}>加入測試版</Link></li>
                        </ul>
                    </>
                }
                {menuOpen && isMobile &&
                    <div aria-label={'mobileMenu'} className={'absolute left-0 bg-gray-100 flex-grow w-full m-menu mt-nav p-4 box-border'}>
                        <h1>手機版</h1>
                    </div>
                }
            </header>
            <main>
                <div className='p-6 flex flex-col justify-center items-center'>
                    <h1 className='text-5xl leading-normal font-bold'>連結校園，共創未來</h1>
                    <Link href={'/join-beta'} className='p-4 bg-black text-white rounded-full border-transparent border flex m-5 hover:bg-white hover:text-black hover:border-black transition-all'>搶先加入測試版</Link>
                </div>
            </main>
        </div>
    )
}
