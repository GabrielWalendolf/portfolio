import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Badge from "@/components/ui/Badge"
import { projects } from "@/data/projects"
import type { Project } from "@/types/project"

type Props = {
  params: Promise<{ slug: string }>
}

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

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Gabriel Walendolf`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {/* Back */}
      <Link
        href="/projetos"
        className="mb-10 flex w-fit items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} />
        Projetos
      </Link>

      {/* Thumbnail */}
      <div className="mb-10 h-52 overflow-hidden rounded-[10px] border-t border-border bg-elevated sm:h-64">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={896}
            height={256}
            className="h-full w-full object-cover"
            priority
          />
        ) : (
          <div className="h-full w-full bg-linear-to-br from-elevated via-surface to-background" />
        )}
      </div>

      {/* Title */}
      <h1 className="mb-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        {project.title}
      </h1>

      {/* Meta */}
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[project.status]}`} />
          <span className="font-mono text-xs text-muted">
            {STATUS_LABEL[project.status]}
          </span>
        </div>
        <span className="font-mono text-xs text-muted">{project.year}</span>
      </div>

      {/* Long description */}
      <p className="mb-10 text-base leading-relaxed text-muted">
        {project.longDescription}
      </p>

      <hr className="mb-10 border-border" />

      {/* Tecnologias */}
      <section className="mb-10">
        <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
          Tecnologias
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
      </section>

      {/* Links */}
      {(project.githubUrl || project.liveUrl) && (
        <section>
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
            Links
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-[10px] border-t border-border bg-elevated px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                GitHub
                <ArrowUpRight size={14} />
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-[10px] bg-accent px-4 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                Ver demo
                <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        </section>
      )}
    </article>
  )
}
