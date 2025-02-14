"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoChange, setIconChange] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIconChange(true);
        setMenuActive(true);
      } else {
        setIconChange(false);
        setMenuActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <header
        className={`flex flex-row ${menuActive ? "bg-white shadow-lg shadow-zinc-200" : "bg-transparent"} items-center justify-between fixed p-3 px-7 max-sm:pl-4 max-sm:py-2 pr-0 z-20 top-5 w-11/12 transition-all rounded-2xl`}
      >
        <Link href={"/"}>
          <div>
            <Image
              src={"/text-logo.svg"}
              width={70}
              height={100}
              alt="lyhs-plus-text-icon"
            />
          </div>
        </Link>
        {isMobile ? (
          <>
            <button
              aria-label="Open menu"
              className="flex flex-col justify-center items-center h-8 w-8 ml-auto m-0 relative mr-4"
              data-expanded="false"
              onClick={() => {
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <div
                className={`bg-gray-500 h-0.5 rounded-full w-4 m-1 absolute transition-all ${!menuOpen && "top-1.5"} ${menuOpen && "rotate-45 top-3"} `}
                data-position="top"
              ></div>
              <div
                className={`bg-gray-500 h-0.5 rounded-full w-4 m-1 absolute transition-all ${!menuOpen && "bottom-1.5"} ${menuOpen && "-rotate-45 top-3"} `}
                data-position="bottom"
              ></div>
            </button>
          </>
        ) : (
          <>
            <ul className="list-none p-2 flex flex-row mr-0 gap-6 ml-24">
              <li className="border-b border-transparent rounded-full font-bold hover:text-zinc-500 transition-all">
                <Link href={"/"}>首頁</Link>
              </li>
              <li className="border-b border-transparent rounded-full font-bold hover:text-zinc-500 transition-all">
                <Link href={"/fix"}>功能介紹</Link>
              </li>
              <li className="border-b border-transparent rounded-full font-bold hover:text-zinc-500 transition-all">
                <Link href={"/fix"}>關於我們</Link>
              </li>
            </ul>
            <div className="px-2 font-medium">
              <Link
                href={"/"}
                className="p-4 bg-white border border-zinc-200 rounded-xl mr-2"
              >
                登入
              </Link>
              <Link
                href={"https://beta.plus.lyhsca.org"}
                target="_blank"
                className="p-4 bg-black border border-black text-white rounded-xl"
              >
                開啟體驗
              </Link>
            </div>
          </>
        )}
        <AnimatePresence mode="wait">
          {menuOpen && isMobile && (
            <motion.div
              aria-label={"mobileMenu"}
              initial={{ opacity: 0.2 }}
              exit={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              className={
                "fixed left-0 bg-gray-100/80 flex-grow w-full h-dvh m-menu p-4 box-border top-0 z-10 backdrop-blur overflow-auto flex flex-col"
              }
            >
              <ul className="text-center grow flex flex-col items-center justify-center font-custom gap-6 text-zinc-600">
                <li className="font-custom absolute top-8 opacity-50">MENU</li>
                <motion.li
                  className={"text-2xl"}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    delay: 0.1,
                  }}
                >
                  <a href={"/"}>首頁</a>
                </motion.li>
                <motion.li
                  className={"text-2xl"}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    delay: 0.2,
                  }}
                >
                  <a href={"/fix"}>功能介紹</a>
                </motion.li>
                <motion.li
                  className={"text-2xl"}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    delay: 0.2,
                  }}
                >
                  <a href={"/fix"}>關於我們</a>
                </motion.li>
                <li className="absolute bottom-24 flex gap-5 items-center text-sm">
                  <a
                    href="/fix"
                    className="p-2 px-3 bg-zinc-200 rounded-full hover:bg-zinc-300 transition-all font-custom font-semibold border border-zinc-300"
                  >
                    一般登入
                  </a>
                  <a
                    href="https://admin.lyhsca.org"
                    className="p-2 px-3 bg-zinc-200 rounded-full hover:bg-zinc-300 transition-all font-custom font-semibold border border-zinc-300"
                  >
                    管理者登入
                  </a>
                </li>
              </ul>
              <motion.div
                className={`z-20 mx-auto w-full mt-auto mb-5`}
                initial={{ rotate: "45deg" }}
                exit={{ rotate: "45deg" }}
                animate={{ rotate: 0 }}
              >
                <button
                  aria-label="Close menu"
                  className="flex flex-col justify-center items-center h-8 w-8 mx-auto m-0 relative"
                  data-expanded="false"
                  onClick={() => {
                    setMenuOpen((prevState) => !prevState);
                  }}
                >
                  <div
                    className={`bg-gray-500 h-0.5 rounded-full w-4 m-1 absolute transition-all rotate-45 top-3 `}
                    data-position="top"
                  ></div>
                  <div
                    className={`bg-gray-500 h-0.5 rounded-full w-4 m-1 absolute transition-all -rotate-45 top-3 `}
                    data-position="bottom"
                  ></div>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
