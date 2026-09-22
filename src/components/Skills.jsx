import { Layers, Database, Cloud, Layout, Check, Wrench } from "lucide-react";
import { skillCategories } from "../data/data";

const categoryIcons = {
  "Backend & Microservicios": Layers,
  "Bases de Datos & Cloud": Database,
  "Frontend & Web": Layout,
  "Herramientas & Flujo de Trabajo": Wrench,
};

function getIconUrl(icon, color) {
  return `https://cdn.simpleicons.org/${icon}/${color}`;
}

export default function Skills() {
  return (
    <section id="habilidades" className="w-full py-16 md:py-24 border-t border-slate-800/80">
      {/* Encabezado */}
      <div className="flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 px-2 py-0.5 rounded">
            03. HABILIDADES
          </span>
          <span className="h-[1px] w-12 bg-slate-800" aria-hidden="true" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          Stack Tecnológico & Herramientas
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Tecnologías y herramientas aplicadas en producción para el desarrollo backend, persistencia de datos, interfaces y flujos de trabajo.
        </p>
      </div>

      {/* Grid de categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => {
          const IconComponent = categoryIcons[cat.category] || Layers;

          return (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl border border-slate-800 bg-[#0a0e19] hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{cat.category}</h3>
                    <p className="text-xs text-slate-400">{cat.description}</p>
                  </div>
                </div>

                {/* Lista de tecnologías con chips */}
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors ${
                        skill.highlight
                          ? "bg-slate-900/90 border-slate-700/90 text-slate-100 hover:border-cyan-500/50"
                          : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <img
                        src={getIconUrl(skill.icon, skill.color)}
                        alt=""
                        aria-hidden="true"
                        className="w-3.5 h-3.5 object-contain"
                        loading="lazy"
                      />
                      <span>{skill.name}</span>
                      {skill.highlight && (
                        <Check className="w-3 h-3 text-cyan-400" aria-label="Especialidad principal" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}