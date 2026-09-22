import Image from "next/image";
import { ArrowDown, Mail, Terminal, Layers, Database, ShieldCheck, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/data";

export default function Hero() {
  const { hero } = personalInfo;

  return (
    <section id="hero" className="w-full pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Contenedor principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Columna Izquierda: Información técnica y presentación */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Badge superior de especialidad */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-md bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-cyan-300">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>{hero.badge}</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">{personalInfo.location}</span>
          </div>

          {/* Heading principal directo y corto */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            {hero.heading}
          </h1>

          {/* Biografía resumida, directa y sin relleno */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            {hero.bio}
          </p>

          {/* Pilares técnicos destacados */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 flex flex-col gap-1">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Arquitectura</span>
              <span className="text-sm font-semibold text-slate-200">Microservicios & API</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 flex flex-col gap-1">
              <Database className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Persistencia</span>
              <span className="text-sm font-semibold text-slate-200">SQL + NoSQL + S3</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 flex flex-col gap-1">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Concurrencia</span>
              <span className="text-sm font-semibold text-slate-200">Redis</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 flex flex-col gap-1">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Seguridad</span>
              <span className="text-sm font-semibold text-slate-200">RBAC + JWT + MFA</span>
            </div>
          </div>

          {/* Acciones principales y redes */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/20"
            >
              <span>Ver Proyecto Destacado</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-slate-600 hover:bg-slate-800 text-slate-200 font-medium text-sm transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Contactarme</span>
            </a>

            {/* Separador vertical */}
            <div className="hidden sm:block w-[1px] h-6 bg-slate-800" aria-hidden="true" />

            {/* Enlaces sociales accesibles */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub de Adriann Delgado"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn de Edgard Adriann Delgado Vidarte"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Enviar correo electrónico a Adriann Delgado"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Foto de perfil */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Marco técnico */}
            <div className="relative p-2.5 rounded-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-xl overflow-hidden bg-slate-950">
                <Image
                  src={personalInfo.photo}
                  alt={`Fotografía profesional de ${personalInfo.name}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 256px"
                  className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Tag de estado inferior */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#080c14] border border-slate-700/80 shadow-md flex items-center gap-2 whitespace-nowrap text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
