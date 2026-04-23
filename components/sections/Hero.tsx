"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center px-6 py-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-2xl"
      >
        {/* Badge */}
        <motion.span
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 inline-block rounded-full border border-border bg-elevated px-3 py-1 font-mono text-xs text-muted"
        >
          estudante de engenharia de software
        </motion.span>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Olá, sou{" "}
          <span className="text-accent">Gabriel Walendolf</span>.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
        >
          Construo aplicações web com foco em performance e experiência do
          usuário. Apaixonado por código limpo e soluções elegantes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/projetos"
            className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Ver projetos
            <ArrowRight size={16} />
          </Link>

          <Link
            href="https://github.com/GabrielWalendolf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border bg-elevated px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-foreground"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/gabriel-walendolf/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border bg-elevated px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-foreground"
          >
            LinkedIn
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
