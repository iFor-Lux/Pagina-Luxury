"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

export function GridPatternDashed() {
  return (
    <div className="absolute inset-0">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:linear-gradient(to_right,transparent_0%,white_20%,white_80%,transparent_100%)]",
        )}
      />
    </div>
  );
}