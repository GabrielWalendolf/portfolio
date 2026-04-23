"use client"

import { useActionState } from "react"
import { motion, type Variants } from "framer-motion"
import { Mail, CircleCheck, ArrowRight } from "lucide-react"
import { sendMessage } from "@/app/contato/actions"

function GithubIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 6.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const inputClass =
  "w-full rounded-lg border border-border bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted/40 outline-none transition-all focus:border-accent/60 focus:ring-2 focus:ring-accent/10 disabled:opacity-50"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Contact() {
  const [state, action, pending] = useActionState(sendMessage, null)

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <div className="grid gap-16 lg:grid-cols-5">
        {/* ── Left: info ── */}
        <motion.aside variants={fadeUp} className="lg:col-span-2">
          <h1 className="mb-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Contato
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-muted">
            Tem um projeto em mente, uma oportunidade ou só quer trocar uma
            ideia? Manda uma mensagem — costumo responder em até 48 horas.
          </p>

          <ul className="space-y-4">
            <li>
              <a
                href="mailto:gabriel.g.walendolf@gmail.com"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Mail size={16} className="shrink-0" />
                gabriel.g.walendolf@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GabrielWalendolf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
              >
                <GithubIcon />
                GabrielWalendolf
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/gabriel-walendolf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
              >
                <LinkedinIcon />
                gabriel-walendolf
              </a>
            </li>
          </ul>
        </motion.aside>

        {/* ── Right: form ── */}
        <motion.div variants={fadeUp} className="lg:col-span-3">
          {state?.success ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-[10px] border-t border-border bg-surface py-16 text-center">
              <CircleCheck size={40} className="text-accent" />
              <p className="text-base font-medium text-foreground">
                Mensagem enviada!
              </p>
              <p className="max-w-xs text-sm text-muted">
                Obrigado pelo contato. Responderei em breve.
              </p>
            </div>
          ) : (
            <form action={action} className="flex flex-col gap-5">
              {state?.error && (
                <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {state.error}
                </p>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-xs text-muted">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    required
                    disabled={pending}
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-xs text-muted">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    disabled={pending}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs text-muted">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Olá Gabriel, gostaria de..."
                  required
                  disabled={pending}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={pending}
                className="flex w-fit items-center gap-2 rounded-[10px] bg-accent px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {pending ? "Enviando…" : "Enviar mensagem"}
                {!pending && <ArrowRight size={16} />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}
