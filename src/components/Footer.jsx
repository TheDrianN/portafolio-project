import { FileText, ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800 bg-[#050811] text-slate-400 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        {/* Fila Principal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          {/* Identidad */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-2 py-0.5 rounded font-medium">
                dev://
              </span>
              <span className="font-bold text-base text-white font-mono tracking-tight">
                {personalInfo.handle}
              </span>
            </div>
            <p className="text-sm text-slate-300 font-medium">
              {personalInfo.name} &bull; <span className="text-cyan-400">{personalInfo.title}</span>
            </p>
            <p className="text-xs text-slate-500 font-mono">
              {personalInfo.location} &bull; {personalInfo.email}
            </p>
          </div>

          {/* Botones de acción / redes */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Adriann"
              className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 hover:bg-slate-800 hover:text-white text-slate-400 transition"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Adriann"
              className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 hover:bg-slate-800 hover:text-white text-slate-400 transition"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Enviar email"
              className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 hover:bg-slate-800 hover:text-white text-slate-400 transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.cvUrl}
              download
              aria-label="Descargar CV"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 text-xs font-mono font-medium transition"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>

        {/* Fila Inferior: Copyright y botón para volver arriba */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500">
          <p>
            &copy; {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </p>

          <a
            href="#hero"
            aria-label="Volver arriba"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-400 transition text-xs"
          >
            <span>Arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
