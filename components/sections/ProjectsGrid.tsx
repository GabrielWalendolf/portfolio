"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Card3D from "@/components/ui/Card3D"
import Badge from "@/components/ui/Badge"
import { projects } from "@/data/projects"
import type { Project } from "@/types/project"

const STATUS_LABEL: Record<Project["status"], string> = {
  "em-andamento": "em andamento",
  concluido:      "concluído",
  arquivado:      "arquivado",
}

const STATUS_DOT: Record<Project["status"], string> = {
  "em-andamento": "bg-accent",
  concluido:      "bg-green-400",
  arquivado:      "bg-muted",
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

type Props = {
  featured?: boolean
}

export default function ProjectsGrid({ featured = false }: Props) {
  const list = featured ? projects.filter((p) => p.featured) : projects

  if (list.length === 0) {
    return (
      <p className="font-mono text-sm text-muted">
        Nenhum projeto encontrado.
      </p>
    )
  }

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 md:grid-cols-2"
      role="list"
    >
      {list.map((project) => (
        <motion.li key={project.slug} variants={item} className="flex">
          <Card3D className="w-full">
            <div className="flex h-full flex-col gap-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold leading-snug text-foreground">
                  {project.title}
                </h3>
                <span className="shrink-0 font-mono text-xs text-muted">
                  {project.year}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[project.status]}`}
                />
                <span className="font-mono text-xs text-muted">
                  {STATUS_LABEL[project.status]}
                </span>
              </div>

              {/* Description */}
              <p className="flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 border-t border-border pt-4">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-foreground"
                  >
                    GitHub
                    <ArrowUpRight size={12} />
                  </Link>
                )}

                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-foreground"
                  >
                    Demo
                    <ArrowUpRight size={12} />
                  </Link>
                )}

                <Link
                  href={`/projetos/${project.slug}`}
                  className="ml-auto flex items-center gap-1 font-mono text-xs text-accent transition-opacity hover:opacity-75"
                >
                  Ver mais
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </Card3D>
        </motion.li>
      ))}
    </motion.ul>
  )
}
