"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JoinBeta() {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [tab, setTab] = useState<number>(0);
    const [emailError, setEmailError] = useState<string>('');

    // 驗證 email 的函數
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const tabContent = [
        {
            title: "你的名字是？",
            input: (
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="點擊這裡開始輸入"
                    className={'mt-4 text-xl focus:outline-0 pt-1 pb-2 w-full'}
                />
            )
        },
        {
            title: "你的電子郵件是？",
            input: (
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (validateEmail(e.target.value)) {
                                setEmailError('');
                            } else {
                                setEmailError('請輸入有效的電子郵件地址');
                            }
                        }}
                        placeholder="點擊這裡開始輸入"
                        className={'mt-4 text-xl focus:outline-0 pt-1 pb-2 w-full'}
                    />
                    {emailError && (
                        <p className="text-red-500 text-sm mt-2">{emailError}</p>
                    )}
                </div>
            )
        },
        {
            title: "感謝你的填寫！",
            subtitle: "我們會在測試版釋出時通知你",
        }
    ];

    const handleButton = (tab: number) => {
        switch (tab) {
            case 0:
                return name === '';
            case 1:
                return email === '' || !validateEmail(email);
            default:
                return false;
        }
    }

    return (
        <div className={'p-6'}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={tab}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -40, opacity: 0 }}
                    transition={{ type: "spring", duration: 1 }}
                >
                    <h1 className={'font-bold text-4xl'}>{tabContent[tab]?.title}</h1>
                    {tabContent[tab].subtitle &&
                        <p className={'mt-2'}>{tabContent[tab].subtitle}</p>
                    }
                    {tabContent[tab]?.input}
                </motion.div>
            </AnimatePresence>
            {tab != 2 &&
                <button
                    onClick={() => setTab(tab + 1)}
                    disabled={handleButton(tab)}
                    className={`px-4 py-2 absolute bottom-20 right-10 ${
                        handleButton(tab) ? 'bg-gray-200 text-gray-400 border-2 border-gray-200 cursor-not-allowed' : 'bg-white text-black border-2 border-black hover:bg-gray-200 shadow-sharp'
                    } rounded-xl font-sans font-medium`}
                >
                    下一步
                </button>
            }
        </div>
    );
}