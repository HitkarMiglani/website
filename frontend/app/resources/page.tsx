"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3dpin";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
// import  from 'next/image';
import Image , { StaticImageData } from 'next/image';
import { SidebarDemo } from "@/components/sidebar";

interface param {
  title: string;
  description: string;
  href: string;
  image?: string | StaticImageData;
}


function ResourcePin(params: param) {
    return (
      <div className="h-[30rem] w-[28rem] flex items-center justify-center ">
        <PinContainer
          title={params.title}
          href={params.href}
        >
          <PinContent {...params} />
        </PinContainer>
      </div>
    );
  }
  
function PinContent(params: param) {
    return (
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          {params.title}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">
              {params.description}
          </span>
        </div>
        <div className="flex flex-1 w-full rounded-lg mt-4 " >
            <Image
              src={params.image || ""}
              alt={params.title}
              className="rounded-lg"
            />
        </div>
      </div>
    );
  }
  


export default function Resources() {
    const details = [
            {
                title: "Be a Healthy Caregiver",
                description: "A guide to help you take care of yourself while caring for someone else.",
                href: "resources/be-healthy-caregiver",
                image: img1,
            },
            {
                title: "Caregiver Stress",
                description: "Learn about the signs of caregiver stress and how to manage it.",
                href: "resources/caregiver-stress",
                image: img2,
            },
            {
                title: "Caregiver Stress checklist",
                description: "A checklist to help you identify the signs of caregiver stress.",
                href: "resources/caregiver-stress-checklist",
                image:img3,
            },
            {
                title: "Caregiver Depression",
                description: "Learn about the signs of caregiver depression and how to manage it.",
                href: "resources/caregiver-depression",
                image: img4,
            },
            {
                title: "Chnages to your Relationship",
                description: "Learn about the changes that can happen to your relationship when you become a caregiver.",
                href: "resources/chnages-relationship",
                image: img5,
            },
            {
                title: "Grief and Loss as Alzheimer's Progresses",
                description: "Learn about the stages of grief and loss that you may experience as Alzheimer's progresses.",
                href: "resources/grief-loss-alzheimers",
                image: img6,
            },
        ];
  return (
    <div className="bg-black-100">
      <SidebarDemo />
      <h1 className="text-center text-[5rem] text-white-100  font-mono">Caregiver Health</h1>
      <p className="text-neutral-100 w-[82%] mt-4 text-balance text-2xl left-[8rem] relative border-b-2 pb-16 ">
        Welcome to our resources page. Here you will find valuable information and guides to help you navigate various aspects of caregiving. Whether you are looking for tips on managing stress, understanding caregiver depression, or learning about the changes in relationships, we have resources to support you.
      </p>
        <div className="flex flex-col sm:flex-row flex-wrap">
            {details.map((detail) => (
            <ResourcePin
                key={detail.title}
                title={detail.title}
                description={detail.description}
                href={detail.href}
                image={detail.image}
            />
            ))}
        </div>
    </div>
  );
}
