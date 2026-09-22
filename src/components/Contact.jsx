"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/data";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contacto" className="w-full py-16 md:py-24 border-t border-slate-800/80">
      {/* Encabezado */}
      <div className="flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 px-2 py-0.5 rounded">
            04. CONTACTO
          </span>
          <span className="h-[1px] w-12 bg-slate-800" aria-hidden="true" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          Iniciemos una Conversación
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          ¿Tienes una oportunidad laboral, un desafío backend o un proyecto de software en mente? Mi bandeja de
          entrada siempre está abierta.
        </p>
      </div>

      {/* Tarjeta principal de contacto */}
      <div className="rounded-2xl border border-slate-800 bg-[#0a0e19] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              Actualmente disponible &bull; {personalInfo.location}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            ¿Listo para construir software confiable?
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Puedes escribirme directamente por correo electrónico, llamarme o conectar a través de LinkedIn.
          </p>

          {/* Caja interactiva de Email con Copiar en 1 clic */}
          <div className="mt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-slate-200">
              <span className="select-all">{personalInfo.email}</span>
              <button
                type="button"
                onClick={copyEmail}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition"
                aria-label={copiedEmail ? "Correo copiado" : "Copiar correo electrónico al portapapeles"}
                title="Copiar correo"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {copiedEmail && (
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> ¡Copiado!
              </span>
            )}
          </div>

        </div>

        {/* Acciones directas */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition shadow-lg shadow-cyan-950/40"
          >
            <Mail className="w-4 h-4" />
            <span>Enviar Email Directo</span>
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-slate-600 hover:bg-slate-800 text-slate-200 font-medium text-sm transition"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            <span>Conectar en LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-slate-600 hover:bg-slate-800 text-slate-200 font-medium text-sm transition"
          >
            <GithubIcon className="w-4 h-4 text-slate-300" />
            <span>Explorar GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
