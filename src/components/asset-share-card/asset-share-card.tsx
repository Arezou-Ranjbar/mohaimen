type AssetShareCardProps = {
  icon: string
  label: string
  value: string
  shareLabel: string
  color: string
}

export default function AssetShareCard({
  icon,
  label,
  value,
  shareLabel,
  color,
}: AssetShareCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3">
    
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
         
          <span className="shrink-0 text-sm font-medium text-foreground">
            {value}
          </span>
          <span className="truncate text-sm text-muted">{label}</span>
        </div>
        <div className="mt-1 flex justify-end items-center gap-2">
         
          <span className="truncate text-xs text-muted">{shareLabel}</span>
          <span
            className="h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
      <img src={icon} alt="" className="h-5 w-5 shrink-0" />
    </div>
  )
}
