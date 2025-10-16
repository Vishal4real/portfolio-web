"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import {FileText } from "lucide-react";

type Props = {
  ButtonName: string;
};

export function HoverBorderGradientDemo({ ButtonName }: Props) {
  return (
    <div className="flex justify-center items-center p-4 text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-2 cursor-pointer"
      >
        <FileText />
        <span>{ButtonName}</span>
      </HoverBorderGradient>
    </div>
  );
}
