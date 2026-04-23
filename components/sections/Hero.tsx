"use client"

import Link from "next/link"
import Image from "next/image"
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
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center px-6 py-24">
      <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center">

        {/* Left: text content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1"
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
            className="mb-4 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-8xl lg:text-8xl"
          >
            Hey, sou{" "}
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
              className="flex items-center gap-2 rounded-[10px] bg-accent px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Ver projetos
              <ArrowRight size={16} />
            </Link>

            <Link
              href="https://github.com/GabrielWalendolf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-[10px] border-t border-border bg-elevated px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/gabriel-walendolf/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-[10px] border-t border-border bg-elevated px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:shrink-0 lg:justify-end"
        >
          <div className="relative h-52 w-52 overflow-hidden rounded-full border border-border shadow-2xl shadow-accent/10 lg:h-72 lg:w-72">
            <Image
              src="/images/profile.webp"
              alt="Gabriel Walendolf"
              fill
              sizes="(max-width: 1024px) 208px, 288px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
