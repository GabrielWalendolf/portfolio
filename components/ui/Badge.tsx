type BadgeProps = {
  label: string
  className?: string
}

export default function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full border border-border bg-elevated px-2.5 py-0.5 font-mono text-xs text-muted ${className}`}
    >
      {label}
    </span>
  )
}
