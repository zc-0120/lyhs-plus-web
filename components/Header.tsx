'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header(){
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
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
        <header className='flex flex-row bg-white/85 items-center sticky p-4 pl-7 pr-7 z-20'>
            <Image src='/text-logo.svg' width={70} height={100} alt='lyhs-plus-text-icon'/>
            {isMobile ?
                <>
                    <button aria-label="Open menu"
                            className="flex flex-col justify-center items-center h-8 w-8 ml-auto m-0 relative z-20"
                            data-expanded="false" onClick={() => {
                        setMenuOpen(prevState => !prevState);
                    }}>
                        <div
                            className={`bg-gray-500 h-0.5 rounded-full w-4 m-1 absolute transition-all ${!menuOpen && 'top-1.5'} ${menuOpen && 'rotate-45 top-3'} `}
                            data-position="top"></div>
                        <div
                            className={`bg-gray-500 h-0.5 rounded-full w-4 m-1 absolute transition-all ${!menuOpen && 'bottom-1.5'} ${menuOpen && '-rotate-45 top-3'} `}
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
            <AnimatePresence>
                {menuOpen && isMobile &&
                    <motion.div aria-label={'mobileMenu'} initial={{ opacity: 0, height: 0 }} exit={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "100dvh" }} transition={{ type: "spring", stiffness: 150, damping: 20 }} style={{ transformOrigin: "top" }}
                         className={'fixed left-0 bg-gray-100/85 flex-grow w-full m-menu p-4 box-border top-0 z-10 backdrop-blur overflow-auto'}>
                        <ul className={'mt-8'}>
                            <motion.li className={'m-7 ml-3 text-4xl font-bold'} initial={{ opacity: 0, y: 30 }} exit={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y:0 }} transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1, exit: { delay: 0 }}}><a href={'/'}>總覽</a></motion.li>
                            <motion.li className={'m-7 ml-3 text-4xl font-bold'} initial={{ opacity: 0, y: 30 }} exit={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y:0 }} transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2, exit: { delay: 0 }}}><a href={'/join-beta'}>加入測試版</a></motion.li>
                        </ul>
                    </motion.div>
                }
            </AnimatePresence>
        </header>
    )
}