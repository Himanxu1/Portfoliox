import Navbar from "@/components/Navbar";
import Content from "@/components/main/Content";
import TechStack from "@/components/main/TechStack";
export default function Home() {
  return (
    <div className="min-h-screen w-full relative flex-col justify-center items-center">
      <div className="flex justify-start px-48 py-10">
        <h1 className="text-4xl font-bold dark:text-gray-300">Home</h1>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <Navbar page="Home"/>
      </div>
      <div className="flex justify-center px-2 text-center py-5">
        <Content />
      </div>
      <div className="flex justify-center text-center">
        <TechStack />
      </div>
    </div>
  )
}
