import Navbar from "@/components/Navbar";
import CardMap from "@/components/projects/CardMap";

export default function Projects() {
  return (
    <div className="min-h-screen w-full relative flex-col justify-center items-center">
      <div className="flex justify-start px-48 py-10">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <Navbar page="Projects"/>
      </div>
      <div className="flex justify-center text-center py-10">
        <CardMap />
      </div>
    </div>
  )
}
