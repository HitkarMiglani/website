"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/linkprew" 

export function LinkPreviewDemoSecond() {
  return (
    <div className="flex mt-10 h-[25rem] flex-col px-4 absolute">
      <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-5xl mb-10 absolute w-[35rem] text-center left-[-137px]">
        Visit my Github {" "}
        <LinkPreview
          url="https://github.com/HitkarMiglani"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Hitkar Miglani
        </LinkPreview>{" "}
        for more amazing Projects.
      </div>
    </div>
  );
}
