"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { LinkPreviewDemoSecond } from "./linkpreview";
// import Link from next/link

// import Map from "./maps";

export function LampDemo() {
  return (
    <LampContainer >
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Contact US <br />
      </motion.h1>
       <motion.h3
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        className="top-35 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-1xl font-medium tracking-tight text-transparent relative md:text-3xl"
      >
        We are here to help You <br />
        <LinkPreviewDemoSecond />
      </motion.h3>
    </LampContainer>
  );
}
