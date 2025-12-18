"use client";
// skipcq: JS-W1028
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  // skipcq: JS-0356
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconUserStar,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
// import Image from "next/image";
import { cn } from "@/lib/utils/utils";
import {
  SignInButton,
  UserButton,
  SignedOut,
  // SignIn,
  SignedIn,
  // Waitlist,
} from "@clerk/nextjs";
// import { currentUser } from "@clerk/nextjs/server";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-white dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-white-100 dark:text-white whitespace-pre"
      >
        AlzCaree
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

export function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconBrandTabler className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "MRI ",
      href: "/upload",
      icon: (
        <IconUserStar className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Medical Classification",
      href: "/text_classification",
      icon: (
        <IconUserBolt className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Resourse",
      href: "/resources",
      icon: (
        <IconUserBolt className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },

    {
      label: "Manage",
      href: "/Patients",
      icon: (
        <IconSettings className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    // skipcq: JS-0415
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-black-100  dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto dark:border-neutral-700 overflow-hidden z-30 ",
        "h-screen top-0 fixed left-0 w-[auto] z-30" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 border bg-transparent z-30 ">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="text-white-200">
            <SignedOut>
              <SignInButton mode="modal" />
              {/* <Waitlist /> */}
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
