'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header(){
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
        <header className='flex flex-row bg-white/85 items-center sticky p-4 pl-7 pr-7'>
            <Image src='/text-logo.svg' width={70} height={100} alt='lyhs-plus-text-icon'/>
            {isMobile ?
                <>
                    <button aria-label="Open menu"
                            className="flex flex-col border border-gray-300 rounded-full justify-center items-center h-8 w-8 ml-auto m-0 hover:bg-gray-200 relative"
                            data-expanded="false" onClick={() => {
                        setMenuOpen(prevState => !prevState);
                    }}>
                        <div
                            className={`bg-gray-500 h-1.5px w-4 m-1 absolute transition-all ${!menuOpen && 'top-1.5'} ${menuOpen && 'rotate-45 top-2.5'} `}
                            data-position="top"></div>
                        <div
                            className={`bg-gray-500 h-1.5px w-4 m-1 absolute transition-all ${!menuOpen && 'bottom-1.5'} ${menuOpen && '-rotate-45 top-2.5'} `}
                            data-position="bottom"></div>
                    </button>
                </>
                :
                <>
                    <ul className='list-none p-0 ml-auto flex flex-row'>
                        <li className='m-2 hover:border-b border-b-black'><Link href={'/'}>總覽</Link></li>
                        <li className='m-2 hover:border-b border-b-black'><Link
                            href={'/join-beta'}>加入測試版</Link></li>
                    </ul>
                </>
            }
            {menuOpen && isMobile &&
                <motion.div aria-label={'mobileMenu'} initial={{ transform: "scaleY(0)", opacity: 0 }} animate={{ transform: "scaleY(1)", opacity: 1 }} transition={{ type: "spring", duration: 0.5 }} style={{ transformOrigin: "top", height: `calc(100dvh - 65px)` }}
                     className={'fixed left-0 bg-gray-100 flex-grow w-full m-menu p-4 box-border bottom-0'}>
                    <ul>
                        <li className={'m-7 ml-3 text-4xl font-bold'}><a href={'/'}>總覽</a></li>
                        <li className={'m-7 ml-3 text-4xl font-bold'}><a href={'/join-beta'}>加入測試版</a></li>
                    </ul>
                </motion.div>
            }
        </header>
    )
}