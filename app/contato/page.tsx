import type { Metadata } from "next"
import Contact from "@/components/sections/Contact"

export const metadata: Metadata = {
  title: "Contato — Gabriel Walendolf",
  description: "Entre em contato para projetos, oportunidades ou só para conversar.",
}

export default function ContatoPage() {
  return <Contact />
}
