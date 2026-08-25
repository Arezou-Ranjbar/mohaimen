import { Link } from 'react-router-dom'

type TaxServiceCardProps = {
  to: string
  title: string
  description: string
  icon: string
}

export default function TaxServiceCard({
  to,
  title,
  description,
  icon,
}: TaxServiceCardProps) {
  return (
    <Link
      to={to}
      className="flex w-[9.5rem] shrink-0 flex-col items-center gap-2 rounded-xl border border-border bg-surface px-3 py-4 text-center shadow-sm transition-colors hover:border-primary-500/40 hover:bg-primary-500/5"
    >
      <img src={icon} alt="" className="h-8 w-8" />
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <p className="text-xs text-muted">{description}</p>
    </Link>
  )
}
