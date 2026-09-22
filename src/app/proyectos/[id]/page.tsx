import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Layers, CheckCircle2, Server, Database, ShieldCheck, Cpu } from "lucide-react";
import { GithubIcon } from "../../../components/Icons";
import { projects } from "../../../data/data";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id || p.slug === id);

  if (!project) return { title: "Proyecto no encontrado" };

  return {
    title: `${project.title} | Adriann Delgado`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id || p.slug === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Botón de regreso */}
      <div className="mb-8">
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition py-1 px-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver a Proyectos</span>
        </Link>
      </div>

      {/* Encabezado del Proyecto */}
      <header className="flex flex-col gap-4 pb-8 border-b border-slate-800">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/70 text-xs font-mono text-cyan-300 font-medium">
            {project.type}
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
            {project.year}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-cyan-300 font-mono">
          {project.subtitle}
        </p>

        {/* Acciones principales */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition shadow-lg shadow-cyan-950/40"
            >
              <span>Visitar Sitio en Producción</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 text-sm transition"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>Ver Código en GitHub</span>
            </a>
          )}
        </div>
      </header>

      {/* Imagen Destacada del Proyecto */}
      <div className="my-8 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative w-full h-64 sm:h-80 md:h-96 shadow-2xl">
        <img
          src={project.image}
          alt={`Vista previa de ${project.title}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-80" />
      </div>

      {/* Stack de herramientas */}
      <div className="p-6 rounded-2xl bg-[#0a0e19] border border-slate-800 mb-10">
        <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
          Herramientas & Tecnologías del Proyecto:
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Detalles en profundidad: Problema vs Solución */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0e19] border border-slate-800 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <h3 className="text-sm font-mono uppercase tracking-wider font-semibold">
              El Problema / Desafío
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.problem || project.description}
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0e19] border border-slate-800 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <h3 className="text-sm font-mono uppercase tracking-wider font-semibold">
              La Solución de Ingeniería
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.solution || project.description}
          </p>
        </div>
      </div>

      {/* Arquitectura del Sistema */}
      {project.architecture && (
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-cyan-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Arquitectura del Sistema
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0e19] border border-slate-800 mb-6">
            <p className="text-sm text-slate-300 font-mono leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Desglose de capas de arquitectura si existe */}
          {project.architectureFlow && project.architectureFlow.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.architectureFlow.map((flow, fIdx) => (
                <div
                  key={fIdx}
                  className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold">
                      {flow.layer}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{flow.component}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{flow.detail}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Highlights / Aspectos Técnicos */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Aspectos Técnicos Implementados
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0e19] border border-slate-800">
            <ul className="grid grid-cols-1 gap-3.5">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Pie de página del proyecto */}
      <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a todos los proyectos</span>
        </Link>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-white transition"
          >
            <span>Abrir {project.title}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
