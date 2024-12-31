"use client";
import { useState } from "react";
import { Input } from "@/components/Input";

export default function JoinBeta(){

    return (
        <div>
            <Input label="Email" type="email" variant="bordered" isClearable />
        </div>
    )
}