import type { Metadata } from "next"
import About from "@/components/sections/About"

export const metadata: Metadata = {
  title: "Sobre — Gabriel Walendolf",
  description: "Estudante de Engenharia de Software apaixonado por desenvolvimento web e código limpo.",
}

export default function SobrePage() {
  return <About />
}
