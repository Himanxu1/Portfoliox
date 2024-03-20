import { SquigglyUnderline } from "./SquigglyUnderline";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar({page}: {page: string}){
    return (
        <div className="flex px-4">
            <div className="py-2">
            <SquigglyUnderline currentPage={page}/>
            </div>
            <div className="px-5">
            <ThemeToggle />
            </div>
        </div>
    )
}
