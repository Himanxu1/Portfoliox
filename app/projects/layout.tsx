import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Projects",
    description: "My Portfolio Website",
  };

const ProjectLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ProjectLayout;
