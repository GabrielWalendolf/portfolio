import Hero from "@/components/sections/Hero"
import ProjectsGrid from "@/components/sections/ProjectsGrid"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-xl font-semibold text-foreground">
            Projetos em destaque
          </h2>
          <Link
            href="/projetos"
            className="flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-foreground"
          >
            ver todos
            <ArrowRight size={12} />
          </Link>
        </div>

        <ProjectsGrid featured />
      </section>
    </>
  )
}
