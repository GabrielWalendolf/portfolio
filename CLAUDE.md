@AGENTS.md

# Portfólio — Gabriel Walendolf

Site pessoal de portfólio de Gabriel Walendolf, estudante de Engenharia de Software. Disponível em `https://gabrielwalendolf.is-a.dev`. O objetivo é apresentar projetos, habilidades e um canal de contato direto.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16.2.4 (App Router) |
| UI | React 19.2.4 |
| Tipos | TypeScript 5 |
| Estilo | Tailwind CSS 4 |
| Animações | Framer Motion 12 |
| Ícones | Lucide React 1.x |
| E-mail | Resend (`resend` npm — requer `RESEND_API_KEY`) |
| Validação | Zod |

## Estrutura de pastas

```
app/
  layout.tsx              # Layout raiz: fontes, metadados, Header/Footer
  page.tsx                # Home: Hero + ProjectsGrid (featured)
  sobre/page.tsx          # Página Sobre
  projetos/
    page.tsx              # Lista completa de projetos
    [slug]/page.tsx       # Detalhe do projeto (params: Promise<{slug}>)
  contato/
    page.tsx              # Página de contato
    actions.ts            # Server Action: sendMessage — Zod + Resend
components/
  layout/
    Header.tsx            # Nav sticky com mobile menu; logo em /public/logo.svg
    Footer.tsx
  sections/
    Hero.tsx              # Two-column: texto + foto de perfil (Client Component)
    About.tsx
    Contact.tsx           # Formulário com useActionState (Client Component)
    ProjectsGrid.tsx      # Grid de cards com Card3D; aceita prop `featured`
  ui/
    Button.tsx            # Polimórfico: <button> ou <Link> via prop `href`
    Badge.tsx             # Tag de tecnologia com design tokens CSS
    Card3D.tsx            # Wrapper com efeito parallax (react-parallax-tilt)
data/
  projects.ts             # Array de projetos — EDITAR AQUI para adicionar projetos
types/
  project.ts              # Interface Project
public/
  logo.svg                # Logo SVG do header
  images/
    profile.webp          # Foto de perfil circular no Hero
    projects/             # Thumbnails dos projetos (referenciados em data/projects.ts)
```

## Design system

- **Cor accent**: `#00E5FF` (cyan) — `var(--color-accent)` / classe `text-accent`, `bg-accent`
- **Arredondamento padrão**: `rounded-[10px]` em cards, botões e inputs
- **Cards**: `border-t border-border bg-surface` — nunca full border nos quatro lados
- **Botão primário**: `bg-accent text-black hover:opacity-90`
- **Botão secundário/ghost**: `border-t border-border bg-elevated text-muted`
- **Fontes**:
  - `font-sans` → Geist Sans (corpo de texto)
  - `font-mono` → JetBrains Mono (labels, tags, metadados)
  - `font-heading` → Chathura (título principal do Hero)
  - `font-badge` → Nunito (componente Badge)
- **Tokens CSS** definidos em `globals.css` via Tailwind 4 (não há `tailwind.config.js`)

## Gotchas críticos

1. **Next.js 16: `params` é uma `Promise`** — sempre `await params` em Server Components e `generateMetadata`. Omitir o `await` causa `TypeError: Cannot read properties of undefined (reading 'slug')`.

2. **Lucide React 1.x não tem brand icons** — `Github`, `Linkedin`, `Twitter` e similares não existem nesta versão. Use SVGs inline como já feito em `Contact.tsx` e `Hero.tsx`.

3. **Tailwind CSS 4** — configuração via CSS (`globals.css`), não via `tailwind.config.js`. Plugins e tokens são CSS custom properties; não usar APIs do Tailwind 3.

## Variáveis de ambiente

Copiar `.env.example` → `.env.local` e preencher:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

Sem a chave, o formulário de contato retorna "Serviço temporariamente indisponível" (comportamento correto — não retorna falso sucesso).

## Adicionando projetos

Editar `data/projects.ts` — o TypeScript valida todos os campos da interface `Project`. Imagens vão em `public/images/projects/` e o caminho referenciado em `thumbnail`.

## Agentes disponíveis (`.claude/agents/`)

- `code-reviewer` — revisão focada em segurança, TypeScript e padrões do projeto
- `test-generator` — gera testes Vitest (ainda não configurado no projeto)
- `log-analyzer` — analisa logs de produção Node.js/Next.js
- `release-manager` — prepara releases com Semantic Versioning e CHANGELOG (disponível apenas em sessão interativa, não via subagent_type)

## O que ainda falta

- **Conteúdo real da página Sobre** (`app/sobre/`) — estrutura existe, conteúdo em rascunho
- **Thumbnails reais** dos projetos em `public/images/projects/`
- **Domínio de envio Resend** — configurar `portfolio@gabrielwalendolf.is-a.dev` no painel Resend antes de usar o formulário de contato em produção
- **Rate limiting** no formulário de contato — sem Redis no projeto; considerar middleware do Vercel ou `@upstash/ratelimit` antes de ir para produção
- **Testes** — Vitest não está configurado; o agente `test-generator` já produziu o plano completo para `Button.tsx`
