import { Link } from 'react-router-dom'
import { taxServices } from '../../config/tax-services'
import TaxServiceCard from '../tax-service-card/tax-service-card'

export default function TaxServices() {
  return (
    <section className="rounded-xl border border-border bg-surface-secondary p-4">
      <header className="mb-4 flex items-center justify-between gap-3">
        <Link
          to="/tax-services"
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary-500 transition-colors hover:text-primary-600"
        >
          <img src="/Arrow left.svg" alt="" className="h-4 w-4" />
          مشاهده همه خدمات
        </Link>
        <h2 className="text-base font-semibold text-foreground">
          خدمات مالیاتی
        </h2>
      </header>

      <div className="flex flex-row-reverse justify-between gap-3 overflow-x-auto pb-1 ">
        {taxServices.map((service) => (
          <TaxServiceCard
            key={service.to}
            to={service.to}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  )
}
