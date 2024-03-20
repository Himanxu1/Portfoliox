import Navbar from "@/components/Navbar";
import CardMap from "@/components/projects/CardMap";

export default function Projects() {
  return (
    <div className="min-h-screen w-full relative flex-col justify-center items-center">
      <div className="flex items-center justify-center py-10">
        <Navbar page="Projects"/>
      </div>
      <div className="flex justify-center text-center py-10">
        <CardMap />
      </div>
    </div>
  )
}
