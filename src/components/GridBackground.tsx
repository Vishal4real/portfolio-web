import { cn } from "@/lib/utils";
import React from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function GridBackground({ children }: Props) {
  return (
    <div className="relative px-10 flex h-full w-full min-h-screen items-center justify-center bg-white dark:bg-black overflow-x-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 text-white bg-clip-text py-8 text-4xl font-bold sm:text-7xl">
        {children}
      </div>
    </div>
  );
}