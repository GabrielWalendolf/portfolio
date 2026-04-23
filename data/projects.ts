import type { Project } from "@/types/project"

export const projects: Project[] = [
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
