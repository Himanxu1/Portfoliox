import { SquigglyUnderline } from "./SquigglyUnderline";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar({page}: {page: string}){
    return (
        <div className="flex grid-cols-2 px-4">
            <SquigglyUnderline currentPage={page}/>
            <div className="px-6 py-1">
            <ThemeToggle />
            </div>
        </div>
    )
}
