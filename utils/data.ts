export interface ProjectData {
    title: string;
    description: string;
    code: string;
    live: string;
    image: string;
    alt: string;
}

export const ProjectsDataAll: ProjectData[] = [
    {
        title: "NoteMe",
        description: "Next.js 14, React Hooks, Hono, CloudFlare Workers, Prisma, Typescript, TailwindCSS, Zod, PostgresSQL",
        code: "https://github.com/ajay-mandal/NoteMe-App",
        live: "https://noteme.ajaymandal.me/",
        image: "/noteme.png",
        alt: "NoteMe"
    },
    {
        title: "Youtube Clone",
        description: "Next.js 14, React.js, Express.js, TailwindCSS, Typescript, Firebase Auth, Firebase Functions, Docker, GCP",
        code: "https://github.com/ajay-mandal/youtube-clone",
        live: "https://youtube-clone.ajaymandal.me/",
        image: "/youtube.png",
        alt: "Youtube Clone"
    },
    {
        title: "SumZ",
        description: "React.js, Rapid API, CSS, Javascript, Vite.js, TailwindCSS, Redux.js, React-route, Local Storage",
        code: "https://github.com/ajay-mandal/Summarizer_AI_ReactApp",
        live: "https://summarease-ai.netlify.app/",
        image: "/sumz.png",
        alt: "SumZ"
    }

]
