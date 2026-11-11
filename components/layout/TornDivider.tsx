import React from "react";
import { cn } from "@/lib/utils";

interface TornDividerProps {
  position?: "top" | "bottom";
  className?: string;
  fillColor?: string; // Tailwind color fill or hex
}

export function TornDivider({
  position = "bottom",
  className,
  fillColor = "currentColor",
}: TornDividerProps) {
  const isTop = position === "top";

  return (
    <div
      className={cn(
        "w-full overflow-hidden leading-none pointer-events-none select-none z-10 max-w-full",
        isTop ? "transform rotate-180" : "",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        className="w-full h-5 md:h-8 block"
      >
        <path
          d="M0,0 L40,16 L80,6 L120,20 L160,8 L200,24 L240,12 L280,26 L320,10 L360,22 L400,8 L440,24 L480,12 L520,28 L560,14 L600,26 L640,10 L680,24 L720,8 L760,26 L800,14 L840,28 L880,12 L920,24 L960,8 L1000,26 L1040,12 L1080,22 L1120,10 L1160,26 L1200,8 L1200,32 L0,32 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

