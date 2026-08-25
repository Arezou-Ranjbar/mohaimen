import type { ReactNode } from 'react'

type ServicePageProps = {
  title: string
  description: string
  children?: ReactNode
}

export default function ServicePage({
  title,
  description,
  children,
}: ServicePageProps) {
  return (
    <section className="rounded-xl border border-border bg-surface-secondary p-4">
      <h1 className="text-right text-lg font-semibold text-foreground">
        {title}
      </h1>
      <p className="mt-2 text-right text-sm text-muted">{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  )
}
