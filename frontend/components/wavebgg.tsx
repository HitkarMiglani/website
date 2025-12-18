"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavebg";

export function WavyBackgroundDemo() {
  return (
    <div  className="flex flex-col items-center justify-center h-screen">

      <WavyBackground
        className="max-w-2xl mx-auto pb-40"
        backgroundFill="rgb(0,3,25)"
      >
        <p className="text-2xl md:text-3xl lg:text-6xl text-white font-bold inter-var text-center">
          Detect Alzhimer Predection using AI
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          With the accuracy of above 95%
        </p>
      </WavyBackground>
    </div>
  );
}
