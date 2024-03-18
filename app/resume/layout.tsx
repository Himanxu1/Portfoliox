import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Resume",
    description: "My Portfolio Website",
  };

const ResumeLayout = ({
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

export default ResumeLayout;
