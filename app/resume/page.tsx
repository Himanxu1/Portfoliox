import Navbar from "@/components/Navbar";
import Main from "@/components/resume/Main";

export default function Resume() {
  return (
    <div className="min-h-screen w-full relative flex-col justify-center items-center">
      <div className="flex items-center justify-center py-10">
        <Navbar page="Resume"/>
      </div>
      <div className="flex items-center justify-center py-10">
        <Main />
      </div>
    </div>
  )
}
