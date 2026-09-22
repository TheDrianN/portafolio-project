import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Edgard Adriann Delgado Vidarte | Full-Stack & Backend Developer",
  description:
    "Portafolio de ingeniería de software de Adriann Delgado (TheDrianN). Especializado en arquitecturas backend, APIs REST modulares, Node.js, NestJS, PostgreSQL, Docker y aplicaciones web modernas con Next.js y TypeScript.",
  keywords: [
    "Backend Developer",
    "Full-Stack Developer",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "TypeScript",
    "Prisma ORM",
    "Docker",
    "Redis",
    "Next.js",
    "React",
    "APIs REST",
    "Microservicios",
    "Arquitectura de Software",
    "Edgard Adriann Delgado Vidarte",
    "TheDrianN",
  ],
  authors: [{ name: "Edgard Adriann Delgado Vidarte" }],
  creator: "Edgard Adriann Delgado Vidarte",
  metadataBase: new URL("https://thedriann.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://thedriann.dev",
    title: "Edgard Adriann Delgado Vidarte | Full-Stack & Backend Developer",
    description:
      "Desarrollador Full-Stack & Backend especializado en arquitecturas desacopladas, microservicios, APIs con Node.js/NestJS, PostgreSQL y aplicaciones web con Next.js.",
    siteName: "TheDrianN Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edgard Adriann Delgado Vidarte | Full-Stack & Backend Developer",
    description:
      "Desarrollador Full-Stack & Backend especializado en arquitecturas desacopladas, APIs con Node.js/NestJS y aplicaciones web con Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sansFont.variable} ${monoFont.variable}`}>
      <body className="antialiased bg-[#080c14] text-slate-100 min-h-screen flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#080c14]/85 border-b border-slate-800/80 transition-colors">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
            <a
              href="#hero"
              className="flex items-center gap-2.5 group cursor-pointer"
              aria-label="Ir al inicio"
            >
              <span className="font-mono text-xs text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-2 py-0.5 rounded tracking-wide font-medium">
                dev://
              </span>
              <span className="font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors font-mono">
                TheDrianN
              </span>
            </a>
            <NavBar />
          </div>
        </header>

        <main className="flex-1 w-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
