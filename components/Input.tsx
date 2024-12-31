"use client";
import { Input as NextUIInput } from "@nextui-org/react";

export const Input = ({ children, ...props }) => (
    <NextUIInput
        {...props}
        className="w-auto m-5 z-0"
    >
        {children}
    </NextUIInput>
);