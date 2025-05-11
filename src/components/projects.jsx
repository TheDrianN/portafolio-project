import {GithubIcon , SquareArrowOutUpRightIcon} from "lucide-react";
export default function Projects() {
    return (
        <div className="w-full px-20 py-4">
           <div className="flex justify-between items-center">
            <h5 className="font-bold text-lg">~/trabajos/Proyectos</h5>
           </div>
            <div className="w-full mt-3">
                <ul>
                    <li id="projects" className="w-3xs">
                        <div className="w-full h-70 overflow-hidden rounded-xl">
                            <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
        alt="Web Task Preview"
                                className="w-full h-full object-cover rounded-xl"
                            />
    </div>
                        <div className="flex justify-between items-center mt-2">
                            <a href=""><GithubIcon className="w-4 h-4 hover:text-blue-300 transition" /></a>
                            <h5 className="font-bold text-sm">Web Task</h5>
                            <a href="" className="text-xs flex items-center gap-1 hover:text-blue-300 transition">Ver <SquareArrowOutUpRightIcon className="w-4 h-4" /></a>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
}