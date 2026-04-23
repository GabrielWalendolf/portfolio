"use client"

import { motion, type Variants } from "framer-motion"
import Badge from "@/components/ui/Badge"

const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Docker", "REST API"],
  },
  {
    category: "Outros",
    items: ["Git", "Linux", "Jest", "Figma"],
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function About() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-3xl px-6 py-16"
    >
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="mb-10 text-3xl font-semibold text-foreground sm:text-4xl"
      >
        Sobre mim
      </motion.h1>

      {/* Bio */}
      <motion.section variants={fadeUp} className="mb-14 space-y-4">
        <p className="text-base leading-relaxed text-muted">
          Olá! Sou <span className="text-foreground font-medium">Gabriel Walendolf</span>,
          estudante de Engenharia de Software apaixonado por construir produtos
          que resolvam problemas reais. Acredito que bom código vai além de
          funcionar — ele precisa ser legível, manutenível e eficiente.
        </p>
        <p className="text-base leading-relaxed text-muted">
          Tenho focado no desenvolvimento web fullstack, explorando desde
          interfaces com React e Next.js até APIs e bancos de dados relacionais.
          Estou sempre aprendendo, seja através de projetos pessoais, cursos ou
          leitura de código aberto.
        </p>
      </motion.section>

      <motion.hr variants={fadeUp} className="mb-14 border-border" />

      {/* Skills */}
      <motion.section variants={fadeUp} className="mb-14">
        <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
          Habilidades
        </h2>

        <div className="space-y-6">
          {skillGroups.map(({ category, items }) => (
            <div key={category} className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <span className="w-24 shrink-0 font-mono text-xs text-muted/60 sm:pt-0.5">
                {category}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.hr variants={fadeUp} className="mb-14 border-border" />

      {/* Education */}
      <motion.section variants={fadeUp}>
        <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
          Formação
        </h2>

        <div className="flex flex-col gap-1">
          <span className="text-base font-medium text-foreground">
            Engenharia de Software
          </span>
          <span className="text-sm text-muted">
            Universidade — 2024 – presente
          </span>
        </div>
      </motion.section>
    </motion.div>
  )
}
