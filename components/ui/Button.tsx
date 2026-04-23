import Link from "next/link"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

type Variant = "primary" | "secondary" | "ghost"
type Size = "sm" | "md" | "lg"

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:opacity-90",
  secondary:
    "border border-border bg-elevated text-muted hover:border-accent/50 hover:text-foreground",
  ghost:
    "text-muted hover:text-foreground",
}

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
}

type SharedProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type AsButton = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof SharedProps> & {
    href?: never
  }

type AsLink = SharedProps & {
  href: string
  target?: string
  rel?: string
}

type ButtonProps = AsButton | AsLink

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if ("href" in rest && rest.href !== undefined) {
    const { href, target, rel } = rest
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    )
  }

  const { href: _href, ...buttonRest } = rest as AsButton & { href?: never }
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
