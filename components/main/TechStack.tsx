import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";

function TechStack() {
    return (
        <section className="grid gap-10 p-5 md:p-2 font-fire-code dark:text-gray-300">
            <div className="md:text-xl font-bold text-highlight sm:text-lg  text-nowrap ">What I Know</div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-14 py-10">
                <Card className=" gap-2 sm:w-56 w-fit dark:bg-gray-800/50 bg-slate-200/50">
                    <CardHeader>Frontend</CardHeader>
                    <CardContent className="text-xs text-primary p-2 grid grid-cols-1 gap-2 sm:grid-cols-2 dark:text-gray-300">
                        <Badge className="border border-black dark:border-white w-fit">HTML</Badge>
                        <Badge className="border border-[#2F74C0] w-fit">Typescript</Badge>
                        <Badge className="border border-[#5FD3F3] w-fit">React Js</Badge>
                        <Badge className="border border-black dark:border-white w-fit">Next Js</Badge>
                        <Badge className="border border-[#38BDF9] w-fit">Tailwind</Badge>
                        <Badge className="border border-[#F0DC57] w-fit">Javascript</Badge>
                    </CardContent>
                </Card>
                <Card className="flex-wrap gap-2 sm:w-56 w-fit dark:bg-gray-800/50 bg-slate-200/50">
                    <CardHeader>Backend</CardHeader>
                    <CardContent className="text-xs text-primary p-2 grid grid-cols-1 gap-2 sm:grid-cols-2 dark:text-gray-300">
                        <Badge className="border border-[#78DC58] w-fit">Node Js</Badge>
                        <Badge className="border border-black dark:border-white w-fit">Express Js</Badge>
                        <Badge className="border border-[#FB5A20] w-fit">Hono Js</Badge>
                        <Badge className="border border-[#A725D8] w-fit">Next Auth</Badge>
                        <Badge className="border border-[#F4801F] w-fit">CF Workers</Badge>
                        <Badge className="border border-black dark:border-white w-fit">Prisma ORM</Badge>
                    </CardContent>
                </Card>
                <Card className="flex-wrap gap-2 sm:w-56 w-fit dark:bg-gray-800/50 bg-slate-200/50">
                    <CardHeader>Database</CardHeader>
                    <CardContent className="text-xs text-primary p-2 grid grid-cols-1 gap-2 sm:grid-cols-2 dark:text-gray-300">
                        <Badge className="border border-[#14824D] w-fit">MongoDB</Badge>
                        <Badge className="border border-[#31648C] w-fit">PostgreSQL</Badge>
                        <Badge className="border border-[#035D85] w-fit">MySQL</Badge>
                        <Badge className="border border-[#FEAA23] w-fit">Firebase</Badge>
            
                    </CardContent>
                </Card>
                <Card className="flex-wrap gap-2 sm:w-56 w-fit dark:bg-gray-800/50 bg-slate-200/50">
                    <CardHeader>Devops</CardHeader>
                    <CardContent className="text-xs text-primary p-2 grid grid-cols-1 gap-2 sm:grid-cols-2 dark:text-gray-300">
                        <Badge className="border border-[#1895E6] w-fit">Docker</Badge>
                        <Badge className="border border-[#F1563B] w-fit">Git/Github</Badge>
                        <Badge className="border border-black dark:border-white w-fit">AWS</Badge>
                        <Badge className="border border-black dark:border-white w-fit">Jenkins</Badge>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default TechStack;
