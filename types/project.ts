export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  thumbnail: string
  techs: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  status: "concluido" | "em-andamento" | "arquivado"
  year: number
}
