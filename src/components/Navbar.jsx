'use client'
import { UserIcon, FolderOpenDotIcon, CodeIcon, MailOpenIcon, MenuIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";


export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <ul className="flex gap-5 items-center text-sm lg:text-md font-mono">
        <li>
          <a className="items-center lg:flex hidden gap-1 hover:scale-110 transition" href="#about">
            <UserIcon className="w-4 h-4" />Sobre mí
          </a>
        
        </li>
        <li>
          <a className="items-center lg:flex hidden gap-1 hover:scale-110 transition" href="#projects">
            <FolderOpenDotIcon className="w-4 h-4" />Proyectos
          </a>
        </li>
        <li>
          <a className="items-center lg:flex hidden gap-1 hover:scale-110 transition" href="#skills">
            <CodeIcon className="w-4 h-4" />Habilidades
          </a>
        </li>
        <li>
          <a className="items-center lg:flex hidden gap-1 hover:scale-110 transition" href="#contact">
            <MailOpenIcon className="w-4 h-4" />Contacto
          </a>
        </li>
        <li>
          <MenuIcon
            onClick={() => setOpen(!open)}
            className="w-4 h-4 lg:hidden hover:text-blue-300 transition cursor-pointer"
          />
        </li>
      </ul>

      {/* Menú desplegable con animación */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className={`absolute lg:hidden top-15 left-0  p-3  w-full bg-[#0c0c0c] gap-2 flex flex-col `}
        >
          <li className="block hover:bg-gray-500">
            <a className="items-center flex gap-1 hover:text-blue-300 transition" href="#about">
              <UserIcon className="w-4 h-4" /> Sobre mí
            </a>
          </li>
          <li className="block hover:bg-gray-500">
            <a className="items-center flex gap-1 hover:text-blue-300 transition" href="#projects">
              <FolderOpenDotIcon className="w-4 h-4" /> Proyectos
            </a>
          </li>
          <li className="block hover:bg-gray-500">
            <a className="items-center flex gap-1 hover:text-blue-300 transition" href="#skills">
              <CodeIcon className="w-4 h-4" /> Habilidades
            </a>
          </li>
          <li className="block hover:bg-gray-500">
            <a className="items-center flex gap-1 hover:text-blue-300 transition" href="#contact">
              <MailOpenIcon className="w-4 h-4" /> Contacto
            </a>
          </li>
        </motion.ul>
      )}
    </nav>
  );
}
