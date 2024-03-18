import { ProjectData } from "@/utils/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function Card_Layout({title, description, code, live, image, alt}: ProjectData){
    return(
        <div className="max-w-sm bg-white/50 border border-gray-800 rounded-lg shadow dark:bg-gray-800/40 dark:border-gray-700">
        <Image src={image} className="rounded-t-lg" width={500} height={300} alt={alt} />
        <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="text-gray-700 dark:text-gray-400 text-xs">
                {description}
            </p>
            <div className="flex gap-8 justify-center py-3">
                <Link href={code} target="_blank">
                    <Badge className="border border-black dark:border-white w-fit">Code&nbsp;<ArrowUpRight className="h-4 w-4"/></Badge>
                </Link>
                <Link href={live} target="_blank">
                    <Badge className="border border-black dark:border-white w-fit">Live&nbsp;<ArrowUpRight className="h-4 w-4"/></Badge>
                </Link>
            </div>
        </div>
    </div>
    )
}
