import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import TypeAnimationSequence from "../Type-animation";
import Image from "next/image";


export default function Content() {
  return (
    <div className="w-full font-fire-code flex flex-col lg:flex-row py-12 lg:py-164 px-48 md:px-40 justify-center items-center">
        <div className="flex justify-end px-10 w-screen text-justify lg:text-justify text-base md:px-24 lg:px-20 sm:px-20">
            <RoughNotationGroup show={true}>
            <p className="text-gray-900 lg:text-lg/relaxed dark:text-gray-100 py-20">
                I&apos;m a <RoughNotation type="box" color="#14b8a6">Software Engineer</RoughNotation> skilled in building functional user interfaces,
                robust backends and develop & deploy them scalably. I enjoy working on projects that utilize both front-end and back-end technologies
                to create seamless user experiences. I excel at designing solutions that are both effective and suited to your individual situation. <br></br><br></br>
                <TypeAnimationSequence />
            </p>
            </RoughNotationGroup>
        </div>
        <div className="flex justify-center w-screen lg:w-full order-first lg:order-last sm:justify-center">
            <div className="flex justify-center lg:justify-start">
               
                <Image
                    alt="Photo"
                    className="aspect-square overflow-hidden rounded-xl object-cover object-center hidden dark:block sm:w-300"
                    height={300}
                    src="/profile.png"
                    width={300}
                />
            </div>
        </div>
    </div>
  );
}
