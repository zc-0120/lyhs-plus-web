"use client";
import { Input as NextUIInput } from "@nextui-org/react";

export const Input = ({ ...props }) => (
    <NextUIInput
        {...props}
        className="w-auto m-5 z-0"
    >
    </NextUIInput>
);