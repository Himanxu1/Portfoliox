"use client";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ResumeBox from "./ResumeBox";
import Giscus from "@giscus/react"

export default function Main() {
    return(
        <div className="font-fire-code">
            <div className=" py-2 px-4">
                <h1 className="mb-2 text-lg font-semibold">Education</h1>
                <ul className="max-w-lg space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400 text-xs">
                    <li><Badge variant="outline" className="p-2 bg-slate-300/40 dark:bg-slate-700/40 border-none">Shivalik College Of Engineering</Badge> - B.Tech CSE, 2024</li>
                    <li><Badge variant="outline" className="p-2 bg-slate-300/40 dark:bg-slate-700/40 border-none">Shri Ram Vidhya Mandir,Haridwar</Badge> - Higher Education, 2020</li>
                </ul>
            </div>
            <div className="py-10 px-4">
                <h1 className="mb-2 text-lg font-semibold">Experience</h1>
                <ul className="max-w-lg space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-xs">
                    <li className="flex gap-8">
                    <Badge variant="outline" className="p-2 bg-slate-300/40 dark:bg-slate-700/40 border-none">Frontend Developer Intern,EVE</Badge> -  Aug 2023– Sep. 2023
                       
                    </li>
                    <li className="flex gap-8 pt-2">
                    <Badge variant="outline" className="p-2  bg-slate-300/40 dark:bg-slate-700/40 border-none">Software Developer Intern,Brandfull</Badge> - Oct. 2022– Jan. 2023
                       
                    </li>
                    <Button className="  bg-blue-50 dark:bg-gray-700/50 hover:bg-teal-200 dark:hover:bg-emerald-400 dark:hover:text-black 
                         text-black dark:text-white rounded-md border dark:border-gray-500 border-gray-800 text-xs w-fit h-7 py-4" size="sm">
                            <Link href="mailto:singhhimanshu27803@gmail.com">
                            Hire Me <span className="text-xs">🚀</span>
                            </Link>
                        </Button>
                </ul>
            </div>
            <div className="px-4">
                <h1 className="mb-2 text-lg font-semibold">Resume</h1>
                <ResumeBox />
            </div>
         
        </div>
    )
}
