# gabrielwalendolf.is-a.dev

Personal portfolio and project showcase — built with Next.js 16, TypeScript and Tailwind CSS v4.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| 3D Cards | react-parallax-tilt |
| Typography | Geist (body) · JetBrains Mono (code) · Chathura (hero heading) · Nunito (badges) |
| Icons | Lucide React |
| Deploy | Vercel |

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero + featured projects |
| `/projetos` | Full projects grid |
| `/projetos/[slug]` | Individual project page |
| `/sobre` | About — bio, skills, education |
| `/contato` | Contact form |

## Project Structure

```
app/
├── layout.tsx              # Root layout — fonts, metadata, Header/Footer
├── page.tsx                # Home
├── sobre/page.tsx
├── projetos/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── contato/
│   ├── page.tsx
│   └── actions.ts          # Server Action for the contact form
components/
├── ui/
│   ├── Badge.tsx           # Technology tag
│   ├── Button.tsx          # Polymorphic button / link
│   └── Card3D.tsx          # react-parallax-tilt wrapper
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── ProjectsGrid.tsx
│   └── Contact.tsx
└── layout/
    ├── Header.tsx
    └── Footer.tsx
data/
└── projects.ts             # Project data — edit here to add/remove projects
types/
└── project.ts              # Project interface
```

## Static Assets

| File | Description |
|---|---|
| `public/logo.svg` | Header logo — replace with your own SVG. Adjust `width` / `height` in `Header.tsx` to match your file's proportions. |
| `public/images/profile.webp` | Profile photo shown in the Hero section. Recommended: square crop, min 576 × 576 px. |
| `public/images/projects/<slug>.png` | Project thumbnails referenced in `data/projects.ts`. |

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding a Project

Edit `data/projects.ts` and add a new entry following the `Project` type:

```ts
{
  slug: "my-project",           // used in the URL: /projetos/my-project
  title: "My Project",
  description: "Short description (max ~120 chars) shown on the card.",
  longDescription: "Full description shown on the individual project page.",
  thumbnail: "/images/projects/my-project.png",
  techs: ["React", "Node.js"],
  githubUrl: "https://github.com/GabrielWalendolf/my-project",
  liveUrl: "https://my-project.vercel.app",
  featured: true,               // true = also appears on the Home page
  status: "em-andamento",       // "concluido" | "em-andamento" | "arquivado"
  year: 2026,
}
```

Place the thumbnail at `public/images/projects/<filename>.png`.

## Contact Form

The form in `/contato` uses a Next.js Server Action (`app/contato/actions.ts`).
Email sending is stubbed — wire it up with [Resend](https://resend.com) or any other service:

```bash
npm install resend
```

```ts
// app/contato/actions.ts
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: "portfolio@gabrielwalendolf.is-a.dev",
  to:   "gabriel.g.walendolf@gmail.com",
  subject: `[Portfólio] Mensagem de ${name}`,
  text: `De: ${name} <${email}>\n\n${message}`,
})
```

Add the key to `.env.local`:

```
RESEND_API_KEY=re_...
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Add environment variables (e.g. `RESEND_API_KEY`) in the Vercel dashboard
4. Future domain: `gabrielwalendolf.is-a.dev`
