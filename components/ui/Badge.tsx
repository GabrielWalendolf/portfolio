type BadgeProps = {
  label: string
  className?: string
}

export default function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[10px] border-t px-4 py-2 font-badge text-sm font-semibold text-accent ${className}`}
      style={{
        backgroundColor: "var(--badge-bg)",
        borderTopColor:  "var(--badge-border)",
      }}
    >
      {label}
    </span>
  )
}
