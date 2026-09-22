import { Code2, GitFork, Cpu, ShieldAlert, Sparkles } from "lucide-react";
import { personalInfo } from "../data/data";

export default function AboutPhilosophy() {
  const { philosophy } = personalInfo;

  return (
    <section id="filosofia" className="w-full py-16 md:py-24 border-t border-slate-800/80">
      {/* Encabezado */}
      <div className="flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 px-2 py-0.5 rounded">
            04. FILOSOFÍA DE TRABAJO
          </span>
          <span className="h-[1px] w-12 bg-slate-800" aria-hidden="true" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          {philosophy.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          El software de calidad se logra con claridad arquitectónica, validaciones en los límites del sistema y
          decisiones fundamentadas en métricas y mantenibilidad.
        </p>
      </div>

      {/* Contenido en 2 columnas: Párrafos de enfoque + Tarjetas de principios */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Columna Izquierda: Visión y enfoque */}
        <div className="lg:col-span-6 flex flex-col gap-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          {philosophy.paragraphs.map((p, pIdx) => (
            <p key={pIdx} className="bg-[#0a0e19] p-5 rounded-xl border border-slate-800/80">
              {p}
            </p>
          ))}

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/40 text-xs font-mono text-cyan-300 flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              En constante evolución hacia sistemas distribuidos, mensajería asíncrona y orquestación cloud.
            </span>
          </div>
        </div>

        {/* Columna Derecha: Principios de ingeniería */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {philosophy.principles.map((principle, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-800 bg-[#0a0e19] flex flex-col gap-2 hover:border-slate-700 transition"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {principle.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
