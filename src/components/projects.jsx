import { GithubIcon, SquareArrowOutUpRightIcon } from "lucide-react";
export default function Projects() {
    return (
        <div id="projects" className="w-full py-4 mb-5">
            <div className="flex justify-between items-center">
                <h5 className="font-bold text-lg">~/trabajos/Proyectos</h5>
            </div>
            <div className="w-full mt-5">
                <ul className="grid md:grid-cols-2 grid-rows-2">
                    <li  className="col-start-1 row-start-1 px-10 border-l-2 md:border-l-0 md:border-r-2 border-white relative">

                        <div className="w-full flex flex-col  md:items-end">
                            <div className="w-2/3 h-50 overflow-hidden rounded-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                                    alt="Web Task Preview"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                            <div className="w-2/3 flex flex-col gap-2 mt-2">
                                <h5 className="font-bold text-lg">Web Task</h5>
                                <p className="text-md text-gray-400"><span>Año:</span> 2025</p>
                                <p className="text-md text-gray-400"><span>Descripción:</span> Sistema de tareas para una empresa</p>
                                <div className="w-full flex flex-col gap-2">
                                    <p className="text-md text-gray-400"><span>Tecnologías:</span></p>
                                    <ul className="flex gap-4">
                                        <li><img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" className="w-5 h-5" /></li>
                                        <li><img src="https://cdn.simpleicons.org/typescript/ffffff" alt="TypeScript" className="w-5 h-5" /></li>
                                        <li><img src="https://cdn.simpleicons.org/prisma/ffffff" alt="Prisma" className="w-5 h-5" /></li>
                                        <li><img src="https://cdn.simpleicons.org/mysql/ffffff" alt="MySQL" className="w-5 h-5" /></li>
                                        <li><img src="https://cdn.simpleicons.org/tailwindcss/ffffff" alt="Tailwind CSS" className="w-5 h-5" /></li>
                                    </ul>
                                </div>
                                <div className="mt-5 mb-5 flex justify-between items-center gap-2">
                                    <a href=""><GithubIcon className="w-4 h-4 hover:text-yellow-300 hover:scale-110 transition" /></a>
                                    <a href="" className="text-xs flex items-center gap-1 hover:scale-110 transition">Ver <SquareArrowOutUpRightIcon className="w-4 h-4" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block size-4 bg-white rounded-full absolute top-0 right-[-10px]"></div>
                        <div className="block md:hidden size-4 bg-white rounded-full absolute top-0 left-[-10px]"></div>
                    </li>
                    <li className="md:col-start-2 row-start-2 px-10 border-l-2 border-white m-[-2px] relative">

                        <div className="w-full flex flex-col items-start">
                            <div className="w-2/3 h-50 overflow-hidden rounded-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                                    alt="Web Task Preview"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                            <div className="w-2/3 mt-2 flex flex-col gap-2">
                                <h5 className="font-bold text-lg">Sistema de cupones</h5>
                                <p  className="text-md text-gray-400"><span>Año:</span> 2025</p>
                                <p className="text-md text-gray-400"><span>Descripción:</span> Sistema de cupones para una tienda virtual</p>
                                <div className="w-full flex flex-col gap-2">
                                    <p className="text-md text-gray-400"><span>Tecnologías:</span></p>
                                    <ul className="flex gap-4">
                                        <li><img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" className="w-5 h-5" /></li>
                                        <li><img src="https://cdn.simpleicons.org/typescript/ffffff" alt="TypeScript" className="w-5 h-5" /></li>
                                        <li><img src="https://cdn.simpleicons.org/prisma/ffffff" alt="Prisma" className="w-5 h-5" /></li>
                                        <li><img src="https://cdn.simpleicons.org/mysql/ffffff" alt="MySQL" className="w-5 h-5" /></li>
                                        <li><img src="https://cdn.simpleicons.org/tailwindcss/ffffff" alt="Tailwind CSS" className="w-5 h-5" /></li>
                                    </ul>
                                </div>
                                <div className="mt-5 mb-5 flex justify-between items-center gap-2">
                                    <a href=""><GithubIcon className="w-4 h-4 hover:text-yellow-300 hover:scale-110 transition" /></a>
                                    <a href="/CV_DELGADO_VIDARTE_EDGARD_ADRIANN_2025.pdf_2025_3_14.pdf"
        download className="text-xs flex items-center gap-1 hover:scale-110 transition">Ver <SquareArrowOutUpRightIcon className="w-4 h-4" /></a>
                                </div>

                            </div>
                        </div>
                        <div className="size-4 bg-white rounded-full absolute top-0 left-[-10px]"></div>
                    </li>
                </ul>
            </div>

        </div>
    );
}