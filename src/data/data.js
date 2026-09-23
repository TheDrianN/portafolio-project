// ============================================================
//  data.js — Fuente central de datos del portafolio profesional
//  Edgard Adriann Delgado Vidarte — Full Stack Developer
// ============================================================

export const personalInfo = {
  name: "Edgard Adriann Delgado Vidarte",
  shortName: "Adriann Delgado",
  handle: "TheDrianN",
  title: "Desarrollador Full Stack",
  status: "Disponible para proyectos & retos de ingeniería",
  location: "Chiclayo, Perú",
  phone: "+51 985 258 144",
  email: "edelgadovidarte@gmail.com",
  photo: "/foto-profile.jpg",
  cvUrl: "/Edgard_Adriann_Delgado_Vidarte_CV.pdf",
  socials: {
    github: "https://github.com/TheDrianN",
    linkedin: "https://www.linkedin.com/in/adriann-dv",
  },
  hero: {
    badge: "Desarrollador Full Stack",
    heading: "Construyo software web escalable y servicios backend.",
    bio: "Soy Edgard Adriann Delgado Vidarte (TheDrianN). Desarrollador Full Stack especializado en soluciones backend, microservicios y aplicaciones web con Next.js, Node.js, NestJS, Redis y PostgreSQL.",
    stats: [
      { label: "Especialidad", value: "Backend & Full Stack" },
      { label: "Arquitectura", value: "Microservicios & Gateway" },
      { label: "Bases de datos", value: "SQL + NoSQL + S3" },
      { label: "Ubicación", value: "Chiclayo, Perú" },
    ],
  },
};

export const skillCategories = [
  {
    category: "Backend & Microservicios",
    description: "Servicios escalables, APIs REST, mensajería en tiempo real y seguridad.",
    skills: [
      { name: "Node.js", icon: "nodedotjs", color: "5fa04e", highlight: true },
      { name: "TypeScript", icon: "typescript", color: "3178c6", highlight: true },
      { name: "MoleculerJS", icon: "javascript", color: "f7df1e", highlight: true },
      { name: "NestJS", icon: "nestjs", color: "e0234e", highlight: true },
      { name: "Laravel", icon: "laravel", color: "ff2d20", highlight: true },
      { name: "REST APIs", icon: "postman", color: "ff6c37", highlight: true },
      { name: "WebSockets", icon: "socketdotio", color: "ffffff", highlight: true },
      { name: "Redis", icon: "redis", color: "dc382d", highlight: true },
      { name: "RBAC + JWT + MFA", icon: "jsonwebtokens", color: "ffffff", highlight: false },
    ],
  },
  {
    category: "Bases de Datos & Cloud",
    description: "Persistencia híbrida relacional y no relacional, almacenamiento en la nube y caché.",
    skills: [
      { name: "SQL (Postgres/MySQL)", icon: "postgresql", color: "4169e1", highlight: true },
      { name: "MongoDB", icon: "mongodb", color: "47a248", highlight: true },
      { name: "Redis", icon: "redis", color: "dc382d", highlight: true },
      { name: "AWS S3", icon: "amazonwebservices", color: "ff9900", highlight: true },
      { name: "Eloquent ORM", icon: "laravel", color: "ff2d20", highlight: false },
      { name: "Prisma ORM", icon: "prisma", color: "2d3748", highlight: false },
    ],
  },
  {
    category: "Frontend & Web",
    description: "Interfaces reactivas, modulares y de alto rendimiento orientadas a producto.",
    skills: [
      { name: "Next.js", icon: "nextdotjs", color: "ffffff", highlight: true },
      { name: "React", icon: "react", color: "61dafb", highlight: true },
      { name: "Vue.js", icon: "vuedotjs", color: "4fc08d", highlight: true },
      { name: "Vite", icon: "vite", color: "646cff", highlight: false },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "38bdf8", highlight: true },
      { name: "Axios", icon: "axios", color: "5a29e4", highlight: false },
    ],
  },
  {
    category: "Herramientas & Flujo de Trabajo",
    description: "Control de versiones, gestión de tareas ágiles y entornos de despliegue.",
    skills: [
      { name: "Git / Git Flow", icon: "git", color: "f05032", highlight: true },
      { name: "GitLab", icon: "gitlab", color: "fc6d26", highlight: false },
      { name: "Bitbucket", icon: "bitbucket", color: "0052cc", highlight: false },
      { name: "Jira / Scrum", icon: "jira", color: "0052cc", highlight: false },
      { name: "Docker", icon: "docker", color: "2496ed", highlight: true },
      { name: "Linux / Bash", icon: "gnubash", color: "4eaa25", highlight: false },
    ],
  },
];

export const projects = [
  {
    id: "megamarket-vitekey",
    slug: "megamarket-vitekey",
    title: "MegaMarket360",
    subtitle: "Marketplace de comercio online con microservicios y alta concurrencia",
    type: "Backend & Microservicios",
    year: "2025 - 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "Plataforma marketplace de comercio online multi-tienda. Construida sobre microservicios y API Gateway, con control de concurrencia para evitar duplicados en órdenes y pagos, geolocalización de productos y eventos en tiempo real.",
    problem:
      "En marketplaces de alto volumen con múltiples tiendas y usuarios concurrentes, existe alto riesgo de pagos y órdenes duplicadas por peticiones simultáneas, latencias elevadas en búsquedas de cercanía geográfica e inconsistencias en el manejo de sesiones y permisos de administración.",
    solution:
      "Diseño de una arquitectura desacoplada basada en API Gateway y microservicios con MoleculerJS. Se implementaron bloqueos distribuidos e idempotencia con Redis/Redlock, control de acceso RBAC por scopes, eventos en tiempo real con WebSockets y geolocalización espacial indexada con Uber H3.",
    architecture:
      "API Gateway con RBAC e idempotencia (Redlock) + microservicios en MoleculerJS + persistencia híbrida (SQL + MongoDB + AWS S3) + geolocalización H3 y WebSockets.",
    architectureFlow: [
      {
        layer: "Punto de Entrada & Seguridad",
        component: "API Gateway (Node.js)",
        detail: "Manejo centralizado de tokens JWT, autenticación con OTP, control de acceso RBAC por scopes (Marketplace vs Admin) y rate limiting.",
      },
      {
        layer: "Control de Concurrencia",
        component: "Redis & Redlock",
        detail: "Mecanismo de idempotencia estricta para garantizar que órdenes de compra y transacciones de pago no se procesen más de una vez en caso de reintentos simultáneos.",
      },
      {
        layer: "Capa de Negocio",
        component: "Microservicios (MoleculerJS)",
        detail: "Servicios independientes de catálogo, órdenes, pagos, usuarios y tiendas comunicados de manera asíncrona y escalable.",
      },
      {
        layer: "Persistencia Híbrida",
        component: "SQL + MongoDB + AWS S3",
        detail: "Bases relacionales para datos transaccionales críticos (cuentas, órdenes, pagos); MongoDB para catálogos dinámicos semiestructurados y AWS S3 para almacenamiento de activos multimedia.",
      },
      {
        layer: "Búsqueda Espacial & Tiempo Real",
        component: "Uber H3 & WebSockets",
        detail: "Indexación geoespacial hexagonal H3 combinada con búsqueda full-text para filtrar productos y tiendas cercanas en milisegundos, junto a WebSockets para actualizaciones de estado en vivo.",
      },
    ],
    highlights: [
      "Diseñé e implementé idempotencia y bloqueos distribuidos (Redis/Redlock) en API Gateway y microservicios para evitar duplicados en órdenes y pagos.",
      "Implementé RBAC basado en scopes (Marketplace / Admin) para el control de acceso a APIs en el API Gateway.",
      "Desarrollé un servicio de notificaciones con emails transaccionales y eventos en tiempo real mediante WebSockets para órdenes y cambios de estado.",
      "Diseñé una arquitectura híbrida de persistencia (SQL + NoSQL + S3), utilizando bases relacionales para datos transaccionales y MongoDB/S3 para datos semiestructurados y archivos.",
      "Diseñé un sistema de geolocalización basado en H3 con búsqueda full-text para optimizar consultas geoespaciales de productos.",
      "Implementé autenticación segura con OTP y gestión de sesiones basada en tokens para control de acceso y verificación de usuarios.",
    ],
    tools: [
      "MoleculerJS",
      "Next.js",
      "Redis",
      "MongoDB",
      "SQL",
      "AWS S3",
      "H3 Geo",
      "WebSockets",
      "Node.js",
    ],
    github: null,
    demo: "https://demo.megamarket360.com/",
  },
  {
    id: "sysrest-landing",
    slug: "sysrest-landing",
    title: "SysRest — Plataforma Web Gastronómica",
    subtitle: "Landing page y solución digital para restaurantes",
    type: "Frontend & Web Application",
    year: "2025",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    description:
      "Landing page y plataforma web para el ecosistema de gestión gastronómica SysRest. Desarrollada con Next.js y React, con interfaz moderna, animaciones dinámicas y optimización orientada a conversión comercial.",
    problem:
      "Necesidad de presentar una solución integral de software para restaurantes con alta velocidad de carga, diseño atractivo y responsivo que transmita profesionalismo a propietarios de negocios gastronómicos.",
    solution:
      "Desarrollo de landing page con Next.js App Router, componentes modulares en React, animaciones CSS fluidas para visualización de módulos de gestión y optimización de entrega de recursos.",
    architecture:
      "Arquitectura web en Next.js con renderizado eficiente, diseño responsivo adaptado a dispositivos móviles y optimización de carga de recursos.",
    architectureFlow: [
      {
        layer: "Framework & Core",
        component: "Next.js & React",
        detail: "Renderizado estático y del servidor optimizado para métricas de Core Web Vitals y tiempos de carga mínimos.",
      },
      {
        layer: "Estilizado & Diseño",
        component: "Tailwind CSS & CSS Modular",
        detail: "Paleta visual gastronómica, animaciones fluidas y diseño adaptativo pensado para captación de leads en móviles y escritorio.",
      },
      {
        layer: "Optimización de Entrega",
        component: "CDN & Assets Pipeline",
        detail: "Compresión y cacheado de imágenes, fuentes optimizadas y distribución eficiente de paquetes JavaScript.",
      },
    ],
    highlights: [
      "Landing page interactiva de alto impacto visual orientada al sector gastronómico.",
      "Optimizada para carga ultrarrápida y Core Web Vitals en Next.js.",
      "Diseño 100% responsivo con adaptabilidad fluida a móviles, tablets y desktop.",
      "Micro-animaciones CSS y componentes modulares en React.",
    ],
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "CSS Animations",
    ],
    github: null,
    demo: "https://sysrest.com/",
  },
  {
    id: "trainly-app",
    slug: "trainly-app",
    title: "Trainly — Workout & Fitness Tracker",
    subtitle: "Registro y seguimiento de entrenamientos de gimnasio",
    type: "Frontend & Web Application",
    year: "2026",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    description:
      "Aplicación web moderna y responsive para el registro y seguimiento de entrenamientos de gimnasio, series y progreso físico, desarrollada en el frontend con Next.js (App Router), React, TypeScript y Tailwind CSS.",
    problem:
      "Dificultad de los usuarios para registrar series, repeticiones, cargas y rutinas de gimnasio de forma rápida, estructurada y sin fricciones visuales directamente desde el smartphone durante el entrenamiento.",
    solution:
      "Diseño y desarrollo de una aplicación web mobile-first con soporte dark mode nativo, flujo de registro instantáneo de series, navegación fluida, notificaciones en tiempo real vía ToastProvider y arquitectura de componentes desacoplada.",
    architecture:
      "Next.js (App Router) + React + TypeScript + Tailwind CSS con proveedores de sesión y notificaciones, optimización estática y despliegue continuo en Vercel.",
    architectureFlow: [
      {
        layer: "Framework & UI",
        component: "Next.js (App Router) & React ",
        detail: "Renderizado reactivo con Server y Client Components, tipado estricto de datos con TypeScript y estructura modular.",
      },
      {
        layer: "Diseño & Experiencia",
        component: "Tailwind CSS & Mobile-First Dark UI",
        detail: "Diseño oscuro de alto contraste optimizado para pantallas móviles, animaciones fluidas y feedback visual interactivo.",
      },
      {
        layer: "Estado & Proveedores",
        component: "AuthProvider & ToastProvider",
        detail: "Manejo centralizado de estados de sesión de usuario y sistema de alertas contextuales inmediatas.",
      },
    ],
    highlights: [
      "Aplicación web moderna y responsive para el registro y seguimiento de entrenamientos de gimnasio.",
      "Desarrollada en el frontend con Next.js (App Router), React, TypeScript y Tailwind CSS.",
      "Diseño mobile-first y dark-mode nativo para una experiencia ergonómica en entrenamientos en vivo.",
      "Despliegue y optimización continua en producción a través de la plataforma Vercel.",
    ],
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    github: null,
    demo: "https://trainly-zeta.vercel.app/",
  },
];

export const experiences = [
  {
    role: "Desarrollador FullStack",
    organization: "Vitekey",
    period: "Julio 2025 – Agosto 2026",
    location: "Chiclayo, Perú",
    type: "Experiencia Profesional",
    summary:
      "Diseño y desarrollo de arquitectura distribuida para API Gateway y microservicios orientados a seguridad, rendimiento y alta disponibilidad en el ecosistema MegaMarket.",
    achievements: [
      "Diseñé e implementé idempotencia y bloqueos distribuidos (Redis/Redlock) en API Gateway y microservicios para evitar duplicados en órdenes y pagos.",
      "Implementé RBAC basado en scopes (Marketplace / Admin) para el control de acceso a APIs en el API Gateway.",
      "Desarrollé un servicio de notificaciones con emails transaccionales y eventos en tiempo real mediante WebSockets para órdenes y cambios de estado.",
      "Diseñé una arquitectura híbrida de persistencia (SQL + NoSQL + S3), utilizando bases relacionales para datos transaccionales y MongoDB/S3 para datos semiestructurados y archivos.",
      "Diseñé un sistema de geolocalización basado en H3 con búsqueda full-text para optimizar consultas geoespaciales de productos.",
      "Implementé autenticación segura con OTP y gestión de sesiones basada en tokens para control de acceso y verificación de usuarios.",
    ],
    tech: ["MoleculerJs", "Next.js", "Redis", "MongoDB", "SQL", "AWS S3", "H3", "WebSockets"],
  },
  {
    role: "Desarrollador FullStack (Practicante)",
    organization: "WIRA PERU S.A.C.",
    period: "Junio 2025 – Setiembre 2025",
    location: "Chiclayo, Perú",
    type: "Experiencia Profesional",
    summary:
      "Desarrollo e integración de módulos ERP empresariales para la administración de inventarios, almacenes y facturación.",
    achievements: [
      "Diseñé e implementé módulos ERP (CRUD) para la gestión de productos, insumos, almacenes y categorías utilizando Laravel, React y Vue.js.",
      "Implementé la lógica de negocio para el control de inventarios, recetas, unidades de medida, factores de conversión y cálculo automático de precios con IGV.",
      "Desarrollé APIs REST e integré frontend y backend para garantizar la sincronización de información entre los distintos módulos del ERP.",
      "Trabajé bajo metodología Scrum utilizando Jira para la gestión de tareas y GitLab/Bitbucket para el control de versiones y despliegues.",
    ],
    tech: ["Laravel", "Eloquent ORM", "Vue.js", "React", "Vite", "Axios", "REST APIs", "Jira", "GitLab", "Bitbucket"],
  },
];

export const education = [
  {
    degree: "Ingeniería de Sistemas y Computación",
    institution: "Universidad Católica Santo Toribio de Mogrovejo",
    period: "Junio 2025",
    location: "Chiclayo, Perú",
  },
];
