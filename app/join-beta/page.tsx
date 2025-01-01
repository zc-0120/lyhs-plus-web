"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JoinBeta() {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [tab, setTab] = useState<number>(0);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

    const tabContent = [
        {
            title: "你的名字是？",
            input: (
                <input
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="請開始輸入"
                    className="mt-4 text-xl focus:outline-0 pt-1 pb-2 w-full"
                />
            )
        },
        {
            title: "你的電子郵件是？",
            input: (
                <>
                    <input
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setIsEmailValid(emailRegex.test(e.target.value)); // 动态检测 Email 格式
                        }}
                        placeholder="請開始輸入"
                        className={`mt-4 text-xl focus:outline-0 pt-1 pb-2 font-sans w-full ${
                            isEmailValid ? '' : 'border-red-500'
                        }`}
                    />
                    {!isEmailValid && (
                        <p className="text-red-500 mt-2">請輸入有效的電子郵件地址！</p>
                    )}
                </>
            )
        },
        {
            title: "大功告成！"
        }
    ];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleButton = (tab: number) => {
        switch (tab) {
            case 0:
                return name === '';
            case 1:
                return email === '' || !isEmailValid;
            default:
                return false;
        }
    };

    return (
        <div className="p-6">
            <AnimatePresence mode="wait">
                <motion.div
                    key={tab}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ type: "spring", duration: 1 }}
                >
                    <h1 className="font-bold text-4xl">{tabContent[tab]?.title}</h1>
                    {tabContent[tab]?.input}
                </motion.div>
            </AnimatePresence>
            { tab != 2 &&
                <button
                    onClick={() => setTab(tab + 1)}
                    disabled={handleButton(tab)}
                    className={`mt-4 px-4 py-2 ${
                        handleButton(tab) ? 'bg-gray-200 text-gray-400 border-2 border-gray-200 cursor-not-allowed' : 'bg-white text-black border-2 border-black hover:bg-gray-200 shadow-sharp'
                    } rounded-xl font-sans font-medium`}
                >
                    下一步
                </button>
            }
        </div>
    );
}