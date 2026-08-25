import type { ReactNode } from 'react'
import StatusCard from '../status-card/status-card'

type Card = {
  icon: string
  label: string
  value: ReactNode
  unit?: string
}

const cards: Card[] = [
  {
    icon: '/Business, Chart.svg',
    label: 'ارزش کل دارایی‌ها',
    value: '۶,۲۰۰,۰۰۰,۰۰۰',
    unit: 'ریال',
  },
  {
    icon: '/Bank.svg',
    label: 'مجموع تسهیلات بانکی',
    value: '۱۲۵,۰۰۰,۰۰۰',
    unit: 'ریال',
  },
  {
    icon: '/Wallet, Money.svg',
    label: 'حقوق دریافتی سالانه',
    value: '۲,۴۰۰,۰۰۰,۰۰۰',
    unit: 'ریال',
  },
  {
    icon: '/Chart, Bar, BarGraph.svg',
    label: 'دهک درآمدی',
    value: (
      <>
        <span className="text-primary-500 pl-1">دهک ۴</span>
        طبقه متوسط و به بالا
      </>
    ),
  },
]

export default function EconomicStatusSummary() {
  return (
    <section className="rounded-xl border border-border bg-surface p-4">
      <header className="mb-4 flex items-start justify-between gap-3">
      <img
          src="/info-information-circle.svg"
          alt=""
          className="h-5 w-5 shrink-0"
        />
        <div className="min-w-0">
          <h2 className="text-base text-right font-semibold text-foreground">
            خلاصه وضعیت اقتصادی
          </h2>
          <p className="mt-1 text-sm text-muted">
            نمای کلی از وضعیت مالی و دارایی شما
          </p>
        </div>
       
      </header>

      <div dir="rtl" className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <StatusCard
            key={card.label}
            icon={card.icon}
            label={card.label}
            value={card.value}
            unit={card.unit}
          />
        ))}
      </div>
    </section>
  )
}
