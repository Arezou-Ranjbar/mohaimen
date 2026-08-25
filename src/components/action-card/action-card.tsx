type ActionCardProps = {
  icon: string
  title: string
  description: string
  buttonLabel: string
  buttonVariant?: 'solid' | 'soft'
  onAction: () => void
}

export default function ActionCard({
  icon,
  title,
  description,
  buttonLabel,
  buttonVariant = 'solid',
  onAction,
}: ActionCardProps) {
  const buttonClass =
    buttonVariant === 'solid'
      ? 'bg-primary-500 text-white hover:bg-primary-600'
      : 'bg-primary-500/10 text-primary-500 hover:bg-primary-500/15'

  return (
    <article className="flex min-w-0 flex-col items-center rounded-xl border border-border bg-surface-secondary p-4 shadow-sm">
        <img src={icon} alt="" className="h-8 w-8 shrink-0" />
        <h3 className="min-w-0 flex-1 text-right text-base font-semibold text-foreground">
          {title}
        </h3>
     
    

      <p className="mt-3 flex items-start justify-end gap-2 text-right text-sm text-muted">
        <span>{description}</span>
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
      </p>

      <button
        type="button"
        onClick={onAction}
        className={`mt-6 flex h-10 w-full items-center justify-center rounded-lg text-sm font-medium transition-colors ${buttonClass}`}
      >
        {buttonLabel}
      </button>
    </article>
  )
}
