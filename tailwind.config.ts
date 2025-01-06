import type { Config } from "tailwindcss";
import {nextui} from '@nextui-org/theme';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainBlue: '#1E9BDE',
      },
      height: {
        '1.5px': '1.5px',
      },
      boxShadow: {
        'sharp': '3px 3px 0px rgba(0, 0, 0, 0.5)', // 自定义阴影，模糊值为0
      },
      screens: {
        'xs': '100px',
      },
    },
  },
  plugins: [
    nextui()
  ],
} satisfies Config;
