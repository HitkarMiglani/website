/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";
import { Hero } from "@/components/Hero";
import { SidebarDemo } from "@/components/sidebar";
import { FlipWords } from "@/components/ui/flipwords";
import CoreFeatures from "@/components/Features";
import FAQ from "@/components/Faq";
import { InfiniteMovingCardsDemo } from "@/components/MovingCards";
import { LampDemo } from "@/components/lamp";

export default function Home() {
  const words = ["Patients", "Caretakers", "Doctors"];

  return (
    <main suppressHydrationWarning>
      <div>
        <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto h-[100vh] ">
          <Hero />
        </div>
        <div>
          <SidebarDemo />
        </div>
        <div className="h flex justify-center items-center px-4">
          <div className="text-6xl mx-auto font-semibold text-white-100 dark:text-neutral-400 absolute top-[38vh]">
            Helping
            <FlipWords words={words} /> <br />
            to live a better life.
          </div>
        </div>
        <div>
          <CoreFeatures />
        </div>
        <div>
          <FAQ />
        </div>
        <div>
          <InfiniteMovingCardsDemo />
          <LampDemo />
        </div>
      </div>
    </main>
  );
}
