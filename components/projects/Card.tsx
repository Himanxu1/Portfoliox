"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/projects/3d-card";
import Link from "next/link";
import { ProjectData } from "@/utils/data";
import { Badge } from "../ui/badge";
import { ArrowUpRight } from "lucide-react";

export default function Card_Layout({title, description, code, live, image, alt}: ProjectData) {
  return (
    <CardContainer>
      <CardBody className="max-w-sm  bg-white/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-indigo-500 hover:shadow-2xl hover:shadow-[#104B5F] dark:bg-gray-800/50 dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl border border-gray-800 dark:border-gray-700">
        <CardItem translateZ="50">
          <Image
            src={image}
            height="300"
            width="500"
            className="group-hover/card:shadow-xl rounded-t-xl group-hover/card:rounded-b-xl"
            alt={alt}
          />
        </CardItem>
        <div className="flex justify-center items-center py-5">
            <CardItem
                as="h5"
                translateZ="40"
                className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
                {title}
            </CardItem>
        </div>
        <div className="flex justify-center items-center text-pretty">
            <CardItem
                as="p"
                translateZ="50"
                className="text-gray-700 dark:text-gray-400 text-sm max-w-sm mt-2 py-1 px-2"
            >
                {description}
            </CardItem>
        </div>
        <div className="flex gap-8 justify-center py-3">
                <Link href={code} target="_blank">
                    <Badge className="border border-black dark:border-white w-fit">Code&nbsp;<ArrowUpRight className="h-4 w-4"/></Badge>
                </Link>
                <Link href={live} target="_blank">
                    <Badge className="border border-black dark:border-white w-fit">Live&nbsp;<ArrowUpRight className="h-4 w-4"/></Badge>
                </Link>
            </div>
      </CardBody>
    </CardContainer>
  );
}
