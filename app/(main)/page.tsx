import Navbar from "@/components/Navbar";
import Content from "@/components/main/Content";
import TechStack from "@/components/main/TechStack";
export default function Home() {
  return (
    <div className="min-h-screen w-full relative flex-col justify-center items-center">
      <div className="flex items-center justify-center py-10">
        <Navbar page="Home"/>
      </div>
      <Content />
      <div className="flex justify-center text-center">
        <TechStack />
      </div>
    </div>
  )
}
