import Link from "next/link"
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";


export default function Footer() {
  return(
    <footer className="mt-60 pt-8 grid justify-center grid-rows-2">
      <div className="flex flex-row gap-10">
        <Link href="https://twitter.com/lord_zexa" target="_blank">
          <FaXTwitter className="h-6 w-6"/>
        </Link>
        <Link href="https://github.com/ajay-mandal" target="_blank">
          <FaGithub className="h-6 w-6" />
        </Link>
        <Link href="https://www.linkedin.com/in/ajay-mandal" target="_blank">
          <BsLinkedin className="h-6 w-6" />
        </Link>
        <Link href="https://www.youtube.com/@Zexa_YT" target="_blank">
          <FaYoutube className="h-6 w-6" />
        </Link>
        <Link href="https://www.instagram.com/ajay_ith" target="_blank">
          <SiInstagram className="h-6 w-6" />
        </Link>
      </div>
      <div className="border-t border-gray-400 pt-8 py-2">
          <p className="text-center text-xs text-gray-400">© 2024 Ajay Kumar Mandal, Inc. </p>
        </div>
    </footer>
  )
}
