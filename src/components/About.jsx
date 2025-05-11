"use client"
import { InstagramIcon, LinkedinIcon, GithubIcon } from "lucide-react";
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

export default function About() {
    return (
        <div id="about" className="w-full px-20 min-h-screen  lg:flex lg:gap-8 lg:items-center">
            <div className="flex gap-4 w-full lg:max-w-[280px]">
                <div>
                    <ul className="flex flex-col gap-5 mt-3">
                        <li>
                            <a
                                className="hover:text-red-300 cursor-pointer transition-all duration-300"
                                target="_blank"
                                href="https://www.instagram.com/thedriann/"
                                aria-label="Instagram"
                            >
                                <InstagramIcon className="w-5 h-5 transform transition-all duration-300 hover:scale-130" />
                            </a>
                        </li>
                        <li >
                            <a
                                className="hover:text-blue-300 cursor-pointer transition-all duration-300"
                                target="_blank"
                                href="https://www.linkedin.com/in/edgard-adriann-delgado-81a5a6259/"
                                aria-label="LinkedIn"
                            >
                                <LinkedinIcon className="w-5 h-5 transform transition-all duration-300 hover:scale-130" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-yellow-300 cursor-pointer transition-all duration-300"
                                target="_blank"
                                href="https://github.com/TheDrianN"
                                aria-label="GitHub"
                            >
                                <GithubIcon className="w-5 h-5 transform transition-all duration-300 hover:scale-130" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:max-w-[230px] flex justify-center items-center">
                    <TypeAnimation className="font-bold md:text-2xl lg:text-3xl text-xl"
                        sequence={[
                            "Hola soy Adriann",
                            1500,
                            "Soy un desarrollador web",
                            1500,
                            "Me encanta aprender nuevas tecnologías",
                            1500,
                        ]}
                        wrapper="h1"
                        cursor={true}
                        repeat={Infinity}
                    />
                </div>
            </div>


            <div className="w-full mt-10 lg:mt-0 lg:px-6 sm:px-20 py-4">
                <div className="w-full">
                    <div className="clearfix">
                        <Image
                            src="/foto-profile.jpg"
                            alt="Foto de perfil"
                            width={150}
                            height={150}
                            className="w-36 h-36 hidden md:block lg:block rounded-full border-3 border-gray-300 lg:float-right lg:mr-20 lg:hover:scale-110 transition"
                        />
                        <p className="text-[0.954rem]">
                            Me apasiona el desarrollo frontend y actualmente me especializo en
                            construir aplicaciones web usando React. He trabajado en proyectos
                            académicos y personales donde he aplicado buenas prácticas de
                            desarrollo, integración con APIs y diseño responsive. Me gusta aprender
                            tecnologías nuevas y crear experiencias digitales. Busco oportunidades
                            para seguir creciendo como desarrollador, aportar en equipos reales de
                            trabajo y enfrentar nuevos desafíos en el mundo del desarrollo web.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}