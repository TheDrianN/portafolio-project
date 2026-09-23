import Link from "next/link";
import { ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects } from "../data/data";

export default function Projects() {
  return (
    <section id="proyectos" className="w-full py-16 md:py-24 border-t border-slate-800/80">
      {/* Encabezado de la sección */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 px-2 py-0.5 rounded">
            01. PROYECTOS DESTACADOS
          </span>
          <span className="h-[1px] w-12 bg-slate-800" aria-hidden="true" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          Proyectos & Soluciones en Producción
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Aplicaciones y plataformas reales con arquitectura moderna, alto rendimiento y soluciones orientadas a negocio.
        </p>
      </div>

      {/* Grid en 3 columnas limpias con botón "Ver detalles" hacia la subruta */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl border border-slate-800 bg-[#0a0e19] overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-cyan-950/30"
          >
            <div>
              {/* Imagen con badges */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-950 border-b border-slate-800/80">
                <img
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e19] via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-cyan-300">
                    {project.type}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-slate-400">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Información del proyecto */}
              <div className="p-5 sm:p-6 flex flex-col gap-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Enlace a demo en vivo */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitar sitio en vivo de ${project.title}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/40 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 text-xs font-mono font-medium transition shrink-0"
                    >
                      <span>Ver Sitio</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Breve descripción visible */}
                <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Herramientas utilizadas (Stack) */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tools.slice(0, 6).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 6 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/60 border border-slate-800/60 text-slate-500">
                      +{project.tools.length - 6} más
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Botón inferior "Ver detalles" hacia la subruta dedicada */}
            <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-slate-800/60 flex items-center justify-between">
              <Link
                href={`/proyectos/${project.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 border border-slate-700/80 hover:border-cyan-400 text-xs font-mono text-cyan-300 font-semibold transition-all duration-200"
              >
                <span>Ver detalles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {project.demo && (
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  En producción
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}