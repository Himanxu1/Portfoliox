import Navbar from "@/components/Navbar";
import Main from "@/components/resume/Main";

export default function Resume() {
  return (
    <div className="min-h-screen w-full relative flex-col justify-center items-center">
      <div className="flex justify-start px-48 py-10">
        <h1 className="text-4xl font-bold">Resume</h1>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <Navbar page="Resume"/>
      </div>
      <div className="flex items-center justify-center">
        <Main />
      </div>
    </div>
  )
}
