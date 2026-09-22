"use client";

import { useState } from "react";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/data";

const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className="relative flex items-center">
      {/* Enlaces de escritorio */}
      <div className="hidden lg:flex items-center gap-7">
        <ul className="flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-cyan-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-cyan-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Separador sutil */}
        <div className="w-[1px] h-4 bg-slate-800" aria-hidden="true" />

        {/* Status indicator */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-xs font-mono text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium">Disponible</span>
        </div>

        {/* Botón CV */}
        <a
          href={personalInfo.cvUrl}
          download
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-700 bg-slate-900/60 hover:bg-slate-800 hover:border-cyan-500/50 text-xs font-mono text-slate-200 hover:text-white transition-all duration-200"
        >
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
          <span>CV</span>
          <ArrowUpRight className="w-3 h-3 text-slate-400" />
        </a>
      </div>

      {/* Botón Mobile Menu */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white hover:border-slate-700 transition"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Menú desplegable Mobile */}
      {open && (
        <div
          id="mobile-navigation"
          className="lg:hidden fixed top-[60px] left-0 right-0 bg-[#080c14]/98 border-b border-slate-800 p-6 shadow-2xl backdrop-blur-xl flex flex-col gap-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <span className="text-xs font-mono text-slate-400">Navegación</span>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-800/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Disponible
            </div>
          </div>

          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 text-base font-medium transition"
                >
                  {link.label}
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-slate-800 flex gap-3">
            <a
              href={personalInfo.cvUrl}
              download
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-cyan-500 text-slate-950 font-medium text-sm hover:bg-cyan-400 transition"
            >
              <FileText className="w-4 h-4" />
              Descargar CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
