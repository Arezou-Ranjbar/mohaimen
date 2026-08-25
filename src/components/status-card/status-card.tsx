import type { ReactNode } from 'react'

type StatusCardProps = {
  icon: string
  label: string
  value: ReactNode
  unit?: string
}

export default function StatusCard({
  icon,
  label,
  value,
  unit,
}: StatusCardProps) {
  return (
    <div className="flex h-24 w-full flex-col justify-center gap-3 rounded-lg bg-surface p-3 shadow-sm">
      <div className="flex items-center gap-2">
        <img src={icon} alt="" className="h-5 w-5 shrink-0" />
        <span className="truncate text-sm text-muted">{label}</span>
      </div>
      <p className="flex items-baseline gap-1 text-base font-medium text-foreground">
        <span>{value}</span>
        {unit ? <span className="text-sm text-muted">{unit}</span> : null}
      </p>
    </div>
  )
}
