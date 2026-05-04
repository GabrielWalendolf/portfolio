import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    slug: "arqzuum",
    title: "Arqzuum",
    description: "Site institucional para estúdio de arquitetura com portfólio de projetos e formulário de contato.",
    longDescription:
      "Site institucional desenvolvido para um estúdio de arquitetura contemporânea. Apresenta os três pilares de serviço do escritório arquitetura residencial/comercial, urbanismo e design de interiores com galeria de projetos categorizados por disciplina e ano, além de formulário de contato integrado.",
    thumbnail: "/images/projects/arqzuum.png",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/GabrielWalendolf/arqzuum",
    liveUrl: "https://arqzuum.vercel.app/",
    featured: true,
    status: "concluido",
    year: 2025,
  },
  {
    slug: "app-financas",
    title: "App de Finanças Pessoais",
    description: "Controle de gastos pessoais com categorização automática via IA.",
    longDescription:
      "Aplicação fullstack para controle de gastos pessoais. Permite registrar transações, categorizar despesas e visualizar relatórios por período. Integração planejada com LLM para categorização automática.",
    thumbnail: "/images/projects/app-financas.png",
    techs: ["React", "Node.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/GabrielWalendolf/app-financas",
    liveUrl: "",
    featured: true,
    status: "em-andamento",
    year: 2026,
  },
]
