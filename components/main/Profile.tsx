import Image from "next/image";
import React from "react";

export const Profile = () => {
  return (
    <div className=" h-fit w-fit">
      <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative bg-gray-900/5 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <Image
            src="/profile.png"
            width={200}
            height={200}
            alt="Profile Picture"/>
        </div>
      </div>
    </div>
  );
};
