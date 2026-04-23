import ProjectsGrid from "@/components/sections/ProjectsGrid"

export const metadata = {
  title: "Projetos — Gabriel Walendolf",
}

export default function ProjetosPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-semibold text-foreground">Projetos</h1>
      <p className="mb-10 text-sm text-muted">
        Tudo que estou construindo, estudando ou já construí.
      </p>

      <ProjectsGrid />
    </section>
  )
}
