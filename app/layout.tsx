import type { Metadata } from "next"
import { Geist, JetBrains_Mono, Nunito, Chathura } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
})

const chathura = Chathura({
  variable: "--font-chathura",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
})

export const metadata: Metadata = {
  title: "Gabriel Walendolf — Desenvolvedor de Software",
  description: "Portfólio de projetos e estudos em Engenharia de Software.",
  openGraph: {
    url: "https://gabrielwalendolf.is-a.dev",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${jetbrainsMono.variable} ${nunito.variable} ${chathura.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
