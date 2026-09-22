"use client";

import { useState } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, GraduationCap } from "lucide-react";
import { experiences, education } from "../data/data";

export default function Experience() {
  // El primer elemento (Vitekey, index 0) está abierto por defecto
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="experiencia" className="w-full py-16 md:py-24 border-t border-slate-800/80">
      {/* Encabezado de la sección */}
      <div className="flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 px-2 py-0.5 rounded">
            02. EXPERIENCIA LABORAL
          </span>
          <span className="h-[1px] w-12 bg-slate-800" aria-hidden="true" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          Trayectoria Profesional
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Experiencia técnica en producción. Haz clic en cada posición para ver los logros y responsabilidades.
        </p>
      </div>

      {/* Acordeón de Experiencia */}
      <div className="flex flex-col gap-4 mb-16">
        {experiences.map((exp, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-[#0a0e19] ${
                isOpen
                  ? "border-cyan-500/50 shadow-lg shadow-cyan-950/20"
                  : "border-slate-800 hover:border-slate-700/80"
              }`}
            >
              {/* Cabecera interactiva del Acordeón */}
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left transition hover:bg-slate-900/40 cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div
                    className={`p-2.5 rounded-xl border transition-colors ${
                      isOpen
                        ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-400"
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}
                  >
                    <Briefcase className="w-5 h-5 shrink-0" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-cyan-300 font-mono mt-0.5">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>

                  <div className="p-1 rounded-lg text-slate-400">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>
              </button>

              {/* Contenido desplegable del Acordeón */}
              {isOpen && (
                <div className="px-5 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-200">
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {exp.summary}
                  </p>

                  {/* Logros técnicos específicos */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-5">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                        Responsabilidades & Logros Técnicos:
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {exp.achievements.map((item, aIdx) => (
                          <li
                            key={aIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan-400/80 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Stack de tecnologías */}
                  {exp.tech && exp.tech.length > 0 && (
                    <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-slate-500 mr-1">
                        Tecnologías:
                      </span>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bloque Separado de Educación */}
      <div className="pt-8 border-t border-slate-800/60">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-5 h-5 text-cyan-400" />
          <h3 className="text-xl font-bold text-white tracking-tight">
            Educación
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-[#0a0e19] hover:border-slate-700/80 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  {edu.degree}
                </h4>
                <p className="text-sm text-cyan-300 font-mono mt-0.5">
                  {edu.institution}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {edu.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {edu.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
